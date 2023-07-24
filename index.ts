import * as rpc from "./api/rpc";
import * as kv from "./api/kv";
import { credentials } from "@grpc/grpc-js";
import { generateSlug } from "random-word-slugs";
import { Range } from "etcd3";

const kvc = new rpc.KVClient("localhost:2379", credentials.createInsecure());
const whc = new rpc.WatchClient("localhost:2379", credentials.createInsecure());
const td = new TextDecoder();


async function get(key: string) {
    const range = Range.from(key);
    const result = await kvc.Range(new rpc.RangeRequest({ key: range.start, range_end: range.end, limit: 1 }));
    if (result.count == 0) {
        return undefined;
    }
    return td.decode(result.kvs[0].value);
}

async function put(key: string, value: string) {
    return kvc.Put(new rpc.PutRequest({ key: Buffer.from(key), value: Buffer.from(value) }));
}

async function getAll() {
    const range = Range.prefix("");
    return kvc.Range(new rpc.RangeRequest({ key: range.start, range_end: range.end }));
}

async function deleteAll() {
    const range = Range.prefix("");
    return kvc.DeleteRange(new rpc.DeleteRangeRequest({ key: range.start, range_end: range.end }));
}



// DEMO
(async function () {
    // watch
    const w = whc.Watch({});
    const range = Range.prefix("");
    w.write(new rpc.WatchRequest({
        create_request: new rpc.WatchCreateRequest({
            key: range.start,
            range_end: range.end
        })
    }));
    w.on("status", console.log);
    w.on("data", (r: rpc.WatchResponse) => {
        for (const event of r.events) {

            if (event.type == kv.EventEventType.Put) {
                console.log(`PUT; key=${td.decode(event.kv.key)}, value=${td.decode(event.kv.value)}`)
            } else if (event.type == kv.EventEventType.Delete) {
                console.log(`DELETE; key=${td.decode(event.kv.key)}`)
            } else {
                console.log(`Unknown event; type=${event.type} typename=${kv.EventEventType[event.type]}`)
            }
        }
    });

    // delete all 
    await deleteAll();

    // put
    await put("date", new Date(Date.now()).toISOString());
    await put("secret", "topsecretpassword");
    for (let i = 0; i < 10; i++) {
        await put(generateSlug(), generateSlug(10));
    }

    // get single key
    const secret = await get("secret");
    console.log(`\nsecret is ${secret}`);

    // get all keys
    const all = await getAll();
    console.log(`${all.count} keys found.`)
    for (const key of all.kvs) {
        console.log(`Secret found: key = ${td.decode(key.key)}, value = ${td.decode(key.value)}, revision = ${key.mod_revision}`);
    }
    
})();


