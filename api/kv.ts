/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.23.4
 * source: kv.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class KeyValue extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        key?: Uint8Array;
        create_revision?: number;
        mod_revision?: number;
        version?: number;
        value?: Uint8Array;
        lease?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("create_revision" in data && data.create_revision != undefined) {
                this.create_revision = data.create_revision;
            }
            if ("mod_revision" in data && data.mod_revision != undefined) {
                this.mod_revision = data.mod_revision;
            }
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
            if ("lease" in data && data.lease != undefined) {
                this.lease = data.lease;
            }
        }
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
    }
    set key(value: Uint8Array) {
        pb_1.Message.setField(this, 1, value);
    }
    get create_revision() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set create_revision(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get mod_revision() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set mod_revision(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set version(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 5, new Uint8Array(0)) as Uint8Array;
    }
    set value(value: Uint8Array) {
        pb_1.Message.setField(this, 5, value);
    }
    get lease() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set lease(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        key?: Uint8Array;
        create_revision?: number;
        mod_revision?: number;
        version?: number;
        value?: Uint8Array;
        lease?: number;
    }): KeyValue {
        const message = new KeyValue({});
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.create_revision != null) {
            message.create_revision = data.create_revision;
        }
        if (data.mod_revision != null) {
            message.mod_revision = data.mod_revision;
        }
        if (data.version != null) {
            message.version = data.version;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        if (data.lease != null) {
            message.lease = data.lease;
        }
        return message;
    }
    toObject() {
        const data: {
            key?: Uint8Array;
            create_revision?: number;
            mod_revision?: number;
            version?: number;
            value?: Uint8Array;
            lease?: number;
        } = {};
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.create_revision != null) {
            data.create_revision = this.create_revision;
        }
        if (this.mod_revision != null) {
            data.mod_revision = this.mod_revision;
        }
        if (this.version != null) {
            data.version = this.version;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        if (this.lease != null) {
            data.lease = this.lease;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key.length)
            writer.writeBytes(1, this.key);
        if (this.create_revision != 0)
            writer.writeInt64(2, this.create_revision);
        if (this.mod_revision != 0)
            writer.writeInt64(3, this.mod_revision);
        if (this.version != 0)
            writer.writeInt64(4, this.version);
        if (this.value.length)
            writer.writeBytes(5, this.value);
        if (this.lease != 0)
            writer.writeInt64(6, this.lease);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): KeyValue {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new KeyValue();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.key = reader.readBytes();
                    break;
                case 2:
                    message.create_revision = reader.readInt64();
                    break;
                case 3:
                    message.mod_revision = reader.readInt64();
                    break;
                case 4:
                    message.version = reader.readInt64();
                    break;
                case 5:
                    message.value = reader.readBytes();
                    break;
                case 6:
                    message.lease = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static override deserializeBinary(bytes: Uint8Array): KeyValue {
        return KeyValue.deserialize(bytes);
    }
}
export class Event extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        type?: EventEventType;
        kv?: KeyValue;
        prev_kv?: KeyValue;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("type" in data && data.type != undefined) {
                this.type = data.type;
            }
            if ("kv" in data && data.kv != undefined) {
                this.kv = data.kv;
            }
            if ("prev_kv" in data && data.prev_kv != undefined) {
                this.prev_kv = data.prev_kv;
            }
        }
    }
    get type() {
        return pb_1.Message.getFieldWithDefault(this, 1, EventEventType.Put) as EventEventType;
    }
    set type(value: EventEventType) {
        pb_1.Message.setField(this, 1, value);
    }
    get kv() {
        return pb_1.Message.getWrapperField(this, KeyValue, 2) as KeyValue;
    }
    set kv(value: KeyValue) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_kv() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get prev_kv() {
        return pb_1.Message.getWrapperField(this, KeyValue, 3) as KeyValue;
    }
    set prev_kv(value: KeyValue) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_prev_kv() {
        return pb_1.Message.getField(this, 3) != null;
    }
    static fromObject(data: {
        type?: EventEventType;
        kv?: ReturnType<typeof KeyValue.prototype.toObject>;
        prev_kv?: ReturnType<typeof KeyValue.prototype.toObject>;
    }): Event {
        const message = new Event({});
        if (data.type != null) {
            message.type = data.type;
        }
        if (data.kv != null) {
            message.kv = KeyValue.fromObject(data.kv);
        }
        if (data.prev_kv != null) {
            message.prev_kv = KeyValue.fromObject(data.prev_kv);
        }
        return message;
    }
    toObject() {
        const data: {
            type?: EventEventType;
            kv?: ReturnType<typeof KeyValue.prototype.toObject>;
            prev_kv?: ReturnType<typeof KeyValue.prototype.toObject>;
        } = {};
        if (this.type != null) {
            data.type = this.type;
        }
        if (this.kv != null) {
            data.kv = this.kv.toObject();
        }
        if (this.prev_kv != null) {
            data.prev_kv = this.prev_kv.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.type != EventEventType.Put)
            writer.writeEnum(1, this.type);
        if (this.has_kv)
            writer.writeMessage(2, this.kv, () => this.kv.serialize(writer));
        if (this.has_prev_kv)
            writer.writeMessage(3, this.prev_kv, () => this.prev_kv.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Event {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Event();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.type = reader.readEnum();
                    break;
                case 2:
                    reader.readMessage(message.kv, () => message.kv = KeyValue.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.prev_kv, () => message.prev_kv = KeyValue.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static override deserializeBinary(bytes: Uint8Array): Event {
        return Event.deserialize(bytes);
    }
}
export enum EventEventType {
    Put = 0,
    Delete = 1
}
