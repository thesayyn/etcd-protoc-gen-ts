"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRemoveResponse = exports.MemberRemoveRequest = exports.MemberAddResponse = exports.MemberAddRequest = exports.Member = exports.LeaseLeasesResponse = exports.LeaseStatus = exports.LeaseLeasesRequest = exports.LeaseTimeToLiveResponse = exports.LeaseTimeToLiveRequest = exports.LeaseKeepAliveResponse = exports.LeaseKeepAliveRequest = exports.LeaseCheckpointResponse = exports.LeaseCheckpointRequest = exports.LeaseCheckpoint = exports.LeaseRevokeResponse = exports.LeaseRevokeRequest = exports.LeaseGrantResponse = exports.LeaseGrantRequest = exports.WatchResponse = exports.WatchProgressRequest = exports.WatchCancelRequest = exports.WatchCreateRequestFilterType = exports.WatchCreateRequest = exports.WatchRequest = exports.SnapshotResponse = exports.SnapshotRequest = exports.HashResponse = exports.HashKVResponse = exports.HashKVRequest = exports.HashRequest = exports.CompactionResponse = exports.CompactionRequest = exports.TxnResponse = exports.TxnRequest = exports.CompareCompareTarget = exports.CompareCompareResult = exports.Compare = exports.ResponseOp = exports.RequestOp = exports.DeleteRangeResponse = exports.DeleteRangeRequest = exports.PutResponse = exports.PutRequest = exports.RangeResponse = exports.RangeRequestSortTarget = exports.RangeRequestSortOrder = exports.RangeRequest = exports.ResponseHeader = exports.AlarmType = void 0;
exports.AuthUserListResponse = exports.AuthRoleListResponse = exports.AuthRoleGetResponse = exports.AuthRoleAddResponse = exports.AuthUserRevokeRoleResponse = exports.AuthUserGrantRoleResponse = exports.AuthUserChangePasswordResponse = exports.AuthUserDeleteResponse = exports.AuthUserGetResponse = exports.AuthUserAddResponse = exports.AuthenticateResponse = exports.AuthStatusResponse = exports.AuthDisableResponse = exports.AuthEnableResponse = exports.AuthRoleRevokePermissionRequest = exports.AuthRoleGrantPermissionRequest = exports.AuthRoleDeleteRequest = exports.AuthRoleListRequest = exports.AuthUserListRequest = exports.AuthRoleGetRequest = exports.AuthRoleAddRequest = exports.AuthUserRevokeRoleRequest = exports.AuthUserGrantRoleRequest = exports.AuthUserChangePasswordRequest = exports.AuthUserDeleteRequest = exports.AuthUserGetRequest = exports.AuthUserAddRequest = exports.AuthenticateRequest = exports.AuthStatusRequest = exports.AuthDisableRequest = exports.AuthEnableRequest = exports.StatusResponse = exports.StatusRequest = exports.DowngradeResponse = exports.DowngradeRequestDowngradeAction = exports.DowngradeRequest = exports.AlarmResponse = exports.AlarmMember = exports.AlarmRequestAlarmAction = exports.AlarmRequest = exports.MoveLeaderResponse = exports.MoveLeaderRequest = exports.DefragmentResponse = exports.DefragmentRequest = exports.MemberPromoteResponse = exports.MemberPromoteRequest = exports.MemberListResponse = exports.MemberListRequest = exports.MemberUpdateResponse = exports.MemberUpdateRequest = void 0;
exports.AuthClient = exports.UnimplementedAuthService = exports.MaintenanceClient = exports.UnimplementedMaintenanceService = exports.ClusterClient = exports.UnimplementedClusterService = exports.LeaseClient = exports.UnimplementedLeaseService = exports.WatchClient = exports.UnimplementedWatchService = exports.KVClient = exports.UnimplementedKVService = exports.AuthRoleRevokePermissionResponse = exports.AuthRoleGrantPermissionResponse = exports.AuthRoleDeleteResponse = void 0;
const dependency_2 = require("./kv");
const dependency_3 = require("./auth");
const pb_1 = require("google-protobuf");
const grpc_1 = require("@grpc/grpc-js");
var AlarmType;
(function (AlarmType) {
    AlarmType[AlarmType["None"] = 0] = "None";
    AlarmType[AlarmType["Nospace"] = 1] = "Nospace";
    AlarmType[AlarmType["Corrupt"] = 2] = "Corrupt";
})(AlarmType || (exports.AlarmType = AlarmType = {}));
class ResponseHeader extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cluster_id" in data && data.cluster_id != undefined) {
                this.cluster_id = data.cluster_id;
            }
            if ("member_id" in data && data.member_id != undefined) {
                this.member_id = data.member_id;
            }
            if ("revision" in data && data.revision != undefined) {
                this.revision = data.revision;
            }
            if ("raft_term" in data && data.raft_term != undefined) {
                this.raft_term = data.raft_term;
            }
        }
    }
    get cluster_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set cluster_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get member_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set member_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get revision() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set revision(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get raft_term() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set raft_term(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new ResponseHeader({});
        if (data.cluster_id != null) {
            message.cluster_id = data.cluster_id;
        }
        if (data.member_id != null) {
            message.member_id = data.member_id;
        }
        if (data.revision != null) {
            message.revision = data.revision;
        }
        if (data.raft_term != null) {
            message.raft_term = data.raft_term;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cluster_id != null) {
            data.cluster_id = this.cluster_id;
        }
        if (this.member_id != null) {
            data.member_id = this.member_id;
        }
        if (this.revision != null) {
            data.revision = this.revision;
        }
        if (this.raft_term != null) {
            data.raft_term = this.raft_term;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cluster_id != 0)
            writer.writeUint64(1, this.cluster_id);
        if (this.member_id != 0)
            writer.writeUint64(2, this.member_id);
        if (this.revision != 0)
            writer.writeInt64(3, this.revision);
        if (this.raft_term != 0)
            writer.writeUint64(4, this.raft_term);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ResponseHeader();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.cluster_id = reader.readUint64();
                    break;
                case 2:
                    message.member_id = reader.readUint64();
                    break;
                case 3:
                    message.revision = reader.readInt64();
                    break;
                case 4:
                    message.raft_term = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return ResponseHeader.deserialize(bytes);
    }
}
exports.ResponseHeader = ResponseHeader;
class RangeRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("range_end" in data && data.range_end != undefined) {
                this.range_end = data.range_end;
            }
            if ("limit" in data && data.limit != undefined) {
                this.limit = data.limit;
            }
            if ("revision" in data && data.revision != undefined) {
                this.revision = data.revision;
            }
            if ("sort_order" in data && data.sort_order != undefined) {
                this.sort_order = data.sort_order;
            }
            if ("sort_target" in data && data.sort_target != undefined) {
                this.sort_target = data.sort_target;
            }
            if ("serializable" in data && data.serializable != undefined) {
                this.serializable = data.serializable;
            }
            if ("keys_only" in data && data.keys_only != undefined) {
                this.keys_only = data.keys_only;
            }
            if ("count_only" in data && data.count_only != undefined) {
                this.count_only = data.count_only;
            }
            if ("min_mod_revision" in data && data.min_mod_revision != undefined) {
                this.min_mod_revision = data.min_mod_revision;
            }
            if ("max_mod_revision" in data && data.max_mod_revision != undefined) {
                this.max_mod_revision = data.max_mod_revision;
            }
            if ("min_create_revision" in data && data.min_create_revision != undefined) {
                this.min_create_revision = data.min_create_revision;
            }
            if ("max_create_revision" in data && data.max_create_revision != undefined) {
                this.max_create_revision = data.max_create_revision;
            }
        }
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
    }
    set key(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get range_end() {
        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
    }
    set range_end(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get limit() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set limit(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get revision() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set revision(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get sort_order() {
        return pb_1.Message.getFieldWithDefault(this, 5, RangeRequestSortOrder.None);
    }
    set sort_order(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get sort_target() {
        return pb_1.Message.getFieldWithDefault(this, 6, RangeRequestSortTarget.Key);
    }
    set sort_target(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get serializable() {
        return pb_1.Message.getFieldWithDefault(this, 7, false);
    }
    set serializable(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get keys_only() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set keys_only(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get count_only() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set count_only(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get min_mod_revision() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set min_mod_revision(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get max_mod_revision() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set max_mod_revision(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get min_create_revision() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set min_create_revision(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get max_create_revision() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set max_create_revision(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new RangeRequest({});
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.range_end != null) {
            message.range_end = data.range_end;
        }
        if (data.limit != null) {
            message.limit = data.limit;
        }
        if (data.revision != null) {
            message.revision = data.revision;
        }
        if (data.sort_order != null) {
            message.sort_order = data.sort_order;
        }
        if (data.sort_target != null) {
            message.sort_target = data.sort_target;
        }
        if (data.serializable != null) {
            message.serializable = data.serializable;
        }
        if (data.keys_only != null) {
            message.keys_only = data.keys_only;
        }
        if (data.count_only != null) {
            message.count_only = data.count_only;
        }
        if (data.min_mod_revision != null) {
            message.min_mod_revision = data.min_mod_revision;
        }
        if (data.max_mod_revision != null) {
            message.max_mod_revision = data.max_mod_revision;
        }
        if (data.min_create_revision != null) {
            message.min_create_revision = data.min_create_revision;
        }
        if (data.max_create_revision != null) {
            message.max_create_revision = data.max_create_revision;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.range_end != null) {
            data.range_end = this.range_end;
        }
        if (this.limit != null) {
            data.limit = this.limit;
        }
        if (this.revision != null) {
            data.revision = this.revision;
        }
        if (this.sort_order != null) {
            data.sort_order = this.sort_order;
        }
        if (this.sort_target != null) {
            data.sort_target = this.sort_target;
        }
        if (this.serializable != null) {
            data.serializable = this.serializable;
        }
        if (this.keys_only != null) {
            data.keys_only = this.keys_only;
        }
        if (this.count_only != null) {
            data.count_only = this.count_only;
        }
        if (this.min_mod_revision != null) {
            data.min_mod_revision = this.min_mod_revision;
        }
        if (this.max_mod_revision != null) {
            data.max_mod_revision = this.max_mod_revision;
        }
        if (this.min_create_revision != null) {
            data.min_create_revision = this.min_create_revision;
        }
        if (this.max_create_revision != null) {
            data.max_create_revision = this.max_create_revision;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key.length)
            writer.writeBytes(1, this.key);
        if (this.range_end.length)
            writer.writeBytes(2, this.range_end);
        if (this.limit != 0)
            writer.writeInt64(3, this.limit);
        if (this.revision != 0)
            writer.writeInt64(4, this.revision);
        if (this.sort_order != RangeRequestSortOrder.None)
            writer.writeEnum(5, this.sort_order);
        if (this.sort_target != RangeRequestSortTarget.Key)
            writer.writeEnum(6, this.sort_target);
        if (this.serializable != false)
            writer.writeBool(7, this.serializable);
        if (this.keys_only != false)
            writer.writeBool(8, this.keys_only);
        if (this.count_only != false)
            writer.writeBool(9, this.count_only);
        if (this.min_mod_revision != 0)
            writer.writeInt64(10, this.min_mod_revision);
        if (this.max_mod_revision != 0)
            writer.writeInt64(11, this.max_mod_revision);
        if (this.min_create_revision != 0)
            writer.writeInt64(12, this.min_create_revision);
        if (this.max_create_revision != 0)
            writer.writeInt64(13, this.max_create_revision);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RangeRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.key = reader.readBytes();
                    break;
                case 2:
                    message.range_end = reader.readBytes();
                    break;
                case 3:
                    message.limit = reader.readInt64();
                    break;
                case 4:
                    message.revision = reader.readInt64();
                    break;
                case 5:
                    message.sort_order = reader.readEnum();
                    break;
                case 6:
                    message.sort_target = reader.readEnum();
                    break;
                case 7:
                    message.serializable = reader.readBool();
                    break;
                case 8:
                    message.keys_only = reader.readBool();
                    break;
                case 9:
                    message.count_only = reader.readBool();
                    break;
                case 10:
                    message.min_mod_revision = reader.readInt64();
                    break;
                case 11:
                    message.max_mod_revision = reader.readInt64();
                    break;
                case 12:
                    message.min_create_revision = reader.readInt64();
                    break;
                case 13:
                    message.max_create_revision = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return RangeRequest.deserialize(bytes);
    }
}
exports.RangeRequest = RangeRequest;
var RangeRequestSortOrder;
(function (RangeRequestSortOrder) {
    RangeRequestSortOrder[RangeRequestSortOrder["None"] = 0] = "None";
    RangeRequestSortOrder[RangeRequestSortOrder["Ascend"] = 1] = "Ascend";
    RangeRequestSortOrder[RangeRequestSortOrder["Descend"] = 2] = "Descend";
})(RangeRequestSortOrder || (exports.RangeRequestSortOrder = RangeRequestSortOrder = {}));
var RangeRequestSortTarget;
(function (RangeRequestSortTarget) {
    RangeRequestSortTarget[RangeRequestSortTarget["Key"] = 0] = "Key";
    RangeRequestSortTarget[RangeRequestSortTarget["Version"] = 1] = "Version";
    RangeRequestSortTarget[RangeRequestSortTarget["Create"] = 2] = "Create";
    RangeRequestSortTarget[RangeRequestSortTarget["Mod"] = 3] = "Mod";
    RangeRequestSortTarget[RangeRequestSortTarget["Value"] = 4] = "Value";
})(RangeRequestSortTarget || (exports.RangeRequestSortTarget = RangeRequestSortTarget = {}));
class RangeResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("kvs" in data && data.kvs != undefined) {
                this.kvs = data.kvs;
            }
            if ("more" in data && data.more != undefined) {
                this.more = data.more;
            }
            if ("count" in data && data.count != undefined) {
                this.count = data.count;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get kvs() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.KeyValue, 2);
    }
    set kvs(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get more() {
        return pb_1.Message.getFieldWithDefault(this, 3, false);
    }
    set more(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get count() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set count(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new RangeResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.kvs != null) {
            message.kvs = data.kvs.map(item => dependency_2.KeyValue.fromObject(item));
        }
        if (data.more != null) {
            message.more = data.more;
        }
        if (data.count != null) {
            message.count = data.count;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.kvs != null) {
            data.kvs = this.kvs.map((item) => item.toObject());
        }
        if (this.more != null) {
            data.more = this.more;
        }
        if (this.count != null) {
            data.count = this.count;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.kvs.length)
            writer.writeRepeatedMessage(2, this.kvs, (item) => item.serialize(writer));
        if (this.more != false)
            writer.writeBool(3, this.more);
        if (this.count != 0)
            writer.writeInt64(4, this.count);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RangeResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.kvs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.KeyValue.deserialize(reader), dependency_2.KeyValue));
                    break;
                case 3:
                    message.more = reader.readBool();
                    break;
                case 4:
                    message.count = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return RangeResponse.deserialize(bytes);
    }
}
exports.RangeResponse = RangeResponse;
class PutRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
            if ("lease" in data && data.lease != undefined) {
                this.lease = data.lease;
            }
            if ("prev_kv" in data && data.prev_kv != undefined) {
                this.prev_kv = data.prev_kv;
            }
            if ("ignore_value" in data && data.ignore_value != undefined) {
                this.ignore_value = data.ignore_value;
            }
            if ("ignore_lease" in data && data.ignore_lease != undefined) {
                this.ignore_lease = data.ignore_lease;
            }
        }
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
    }
    set key(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
    }
    set value(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get lease() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set lease(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get prev_kv() {
        return pb_1.Message.getFieldWithDefault(this, 4, false);
    }
    set prev_kv(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get ignore_value() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set ignore_value(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get ignore_lease() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set ignore_lease(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new PutRequest({});
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        if (data.lease != null) {
            message.lease = data.lease;
        }
        if (data.prev_kv != null) {
            message.prev_kv = data.prev_kv;
        }
        if (data.ignore_value != null) {
            message.ignore_value = data.ignore_value;
        }
        if (data.ignore_lease != null) {
            message.ignore_lease = data.ignore_lease;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        if (this.lease != null) {
            data.lease = this.lease;
        }
        if (this.prev_kv != null) {
            data.prev_kv = this.prev_kv;
        }
        if (this.ignore_value != null) {
            data.ignore_value = this.ignore_value;
        }
        if (this.ignore_lease != null) {
            data.ignore_lease = this.ignore_lease;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key.length)
            writer.writeBytes(1, this.key);
        if (this.value.length)
            writer.writeBytes(2, this.value);
        if (this.lease != 0)
            writer.writeInt64(3, this.lease);
        if (this.prev_kv != false)
            writer.writeBool(4, this.prev_kv);
        if (this.ignore_value != false)
            writer.writeBool(5, this.ignore_value);
        if (this.ignore_lease != false)
            writer.writeBool(6, this.ignore_lease);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PutRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.key = reader.readBytes();
                    break;
                case 2:
                    message.value = reader.readBytes();
                    break;
                case 3:
                    message.lease = reader.readInt64();
                    break;
                case 4:
                    message.prev_kv = reader.readBool();
                    break;
                case 5:
                    message.ignore_value = reader.readBool();
                    break;
                case 6:
                    message.ignore_lease = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return PutRequest.deserialize(bytes);
    }
}
exports.PutRequest = PutRequest;
class PutResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("prev_kv" in data && data.prev_kv != undefined) {
                this.prev_kv = data.prev_kv;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get prev_kv() {
        return pb_1.Message.getWrapperField(this, dependency_2.KeyValue, 2);
    }
    set prev_kv(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_prev_kv() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new PutResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.prev_kv != null) {
            message.prev_kv = dependency_2.KeyValue.fromObject(data.prev_kv);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.prev_kv != null) {
            data.prev_kv = this.prev_kv.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.has_prev_kv)
            writer.writeMessage(2, this.prev_kv, () => this.prev_kv.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PutResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.prev_kv, () => message.prev_kv = dependency_2.KeyValue.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return PutResponse.deserialize(bytes);
    }
}
exports.PutResponse = PutResponse;
class DeleteRangeRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("range_end" in data && data.range_end != undefined) {
                this.range_end = data.range_end;
            }
            if ("prev_kv" in data && data.prev_kv != undefined) {
                this.prev_kv = data.prev_kv;
            }
        }
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
    }
    set key(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get range_end() {
        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
    }
    set range_end(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get prev_kv() {
        return pb_1.Message.getFieldWithDefault(this, 3, false);
    }
    set prev_kv(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new DeleteRangeRequest({});
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.range_end != null) {
            message.range_end = data.range_end;
        }
        if (data.prev_kv != null) {
            message.prev_kv = data.prev_kv;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.range_end != null) {
            data.range_end = this.range_end;
        }
        if (this.prev_kv != null) {
            data.prev_kv = this.prev_kv;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key.length)
            writer.writeBytes(1, this.key);
        if (this.range_end.length)
            writer.writeBytes(2, this.range_end);
        if (this.prev_kv != false)
            writer.writeBool(3, this.prev_kv);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeleteRangeRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.key = reader.readBytes();
                    break;
                case 2:
                    message.range_end = reader.readBytes();
                    break;
                case 3:
                    message.prev_kv = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return DeleteRangeRequest.deserialize(bytes);
    }
}
exports.DeleteRangeRequest = DeleteRangeRequest;
class DeleteRangeResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("deleted" in data && data.deleted != undefined) {
                this.deleted = data.deleted;
            }
            if ("prev_kvs" in data && data.prev_kvs != undefined) {
                this.prev_kvs = data.prev_kvs;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get deleted() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set deleted(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get prev_kvs() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.KeyValue, 3);
    }
    set prev_kvs(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data) {
        const message = new DeleteRangeResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.deleted != null) {
            message.deleted = data.deleted;
        }
        if (data.prev_kvs != null) {
            message.prev_kvs = data.prev_kvs.map(item => dependency_2.KeyValue.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.deleted != null) {
            data.deleted = this.deleted;
        }
        if (this.prev_kvs != null) {
            data.prev_kvs = this.prev_kvs.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.deleted != 0)
            writer.writeInt64(2, this.deleted);
        if (this.prev_kvs.length)
            writer.writeRepeatedMessage(3, this.prev_kvs, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeleteRangeResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.deleted = reader.readInt64();
                    break;
                case 3:
                    reader.readMessage(message.prev_kvs, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.KeyValue.deserialize(reader), dependency_2.KeyValue));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return DeleteRangeResponse.deserialize(bytes);
    }
}
exports.DeleteRangeResponse = DeleteRangeResponse;
class RequestOp extends pb_1.Message {
    #one_of_decls = [[1, 2, 3, 4]];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("request_range" in data && data.request_range != undefined) {
                this.request_range = data.request_range;
            }
            if ("request_put" in data && data.request_put != undefined) {
                this.request_put = data.request_put;
            }
            if ("request_delete_range" in data && data.request_delete_range != undefined) {
                this.request_delete_range = data.request_delete_range;
            }
            if ("request_txn" in data && data.request_txn != undefined) {
                this.request_txn = data.request_txn;
            }
        }
    }
    get request_range() {
        return pb_1.Message.getWrapperField(this, RangeRequest, 1);
    }
    set request_range(value) {
        pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
    }
    get has_request_range() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get request_put() {
        return pb_1.Message.getWrapperField(this, PutRequest, 2);
    }
    set request_put(value) {
        pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
    }
    get has_request_put() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get request_delete_range() {
        return pb_1.Message.getWrapperField(this, DeleteRangeRequest, 3);
    }
    set request_delete_range(value) {
        pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
    }
    get has_request_delete_range() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get request_txn() {
        return pb_1.Message.getWrapperField(this, TxnRequest, 4);
    }
    set request_txn(value) {
        pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
    }
    get has_request_txn() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get request() {
        const cases = {
            0: "none",
            1: "request_range",
            2: "request_put",
            3: "request_delete_range",
            4: "request_txn"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
    }
    static fromObject(data) {
        const message = new RequestOp({});
        if (data.request_range != null) {
            message.request_range = RangeRequest.fromObject(data.request_range);
        }
        if (data.request_put != null) {
            message.request_put = PutRequest.fromObject(data.request_put);
        }
        if (data.request_delete_range != null) {
            message.request_delete_range = DeleteRangeRequest.fromObject(data.request_delete_range);
        }
        if (data.request_txn != null) {
            message.request_txn = TxnRequest.fromObject(data.request_txn);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.request_range != null) {
            data.request_range = this.request_range.toObject();
        }
        if (this.request_put != null) {
            data.request_put = this.request_put.toObject();
        }
        if (this.request_delete_range != null) {
            data.request_delete_range = this.request_delete_range.toObject();
        }
        if (this.request_txn != null) {
            data.request_txn = this.request_txn.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_request_range)
            writer.writeMessage(1, this.request_range, () => this.request_range.serialize(writer));
        if (this.has_request_put)
            writer.writeMessage(2, this.request_put, () => this.request_put.serialize(writer));
        if (this.has_request_delete_range)
            writer.writeMessage(3, this.request_delete_range, () => this.request_delete_range.serialize(writer));
        if (this.has_request_txn)
            writer.writeMessage(4, this.request_txn, () => this.request_txn.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RequestOp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.request_range, () => message.request_range = RangeRequest.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.request_put, () => message.request_put = PutRequest.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.request_delete_range, () => message.request_delete_range = DeleteRangeRequest.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.request_txn, () => message.request_txn = TxnRequest.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return RequestOp.deserialize(bytes);
    }
}
exports.RequestOp = RequestOp;
class ResponseOp extends pb_1.Message {
    #one_of_decls = [[1, 2, 3, 4]];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("response_range" in data && data.response_range != undefined) {
                this.response_range = data.response_range;
            }
            if ("response_put" in data && data.response_put != undefined) {
                this.response_put = data.response_put;
            }
            if ("response_delete_range" in data && data.response_delete_range != undefined) {
                this.response_delete_range = data.response_delete_range;
            }
            if ("response_txn" in data && data.response_txn != undefined) {
                this.response_txn = data.response_txn;
            }
        }
    }
    get response_range() {
        return pb_1.Message.getWrapperField(this, RangeResponse, 1);
    }
    set response_range(value) {
        pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
    }
    get has_response_range() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get response_put() {
        return pb_1.Message.getWrapperField(this, PutResponse, 2);
    }
    set response_put(value) {
        pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
    }
    get has_response_put() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get response_delete_range() {
        return pb_1.Message.getWrapperField(this, DeleteRangeResponse, 3);
    }
    set response_delete_range(value) {
        pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
    }
    get has_response_delete_range() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get response_txn() {
        return pb_1.Message.getWrapperField(this, TxnResponse, 4);
    }
    set response_txn(value) {
        pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
    }
    get has_response_txn() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get response() {
        const cases = {
            0: "none",
            1: "response_range",
            2: "response_put",
            3: "response_delete_range",
            4: "response_txn"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
    }
    static fromObject(data) {
        const message = new ResponseOp({});
        if (data.response_range != null) {
            message.response_range = RangeResponse.fromObject(data.response_range);
        }
        if (data.response_put != null) {
            message.response_put = PutResponse.fromObject(data.response_put);
        }
        if (data.response_delete_range != null) {
            message.response_delete_range = DeleteRangeResponse.fromObject(data.response_delete_range);
        }
        if (data.response_txn != null) {
            message.response_txn = TxnResponse.fromObject(data.response_txn);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.response_range != null) {
            data.response_range = this.response_range.toObject();
        }
        if (this.response_put != null) {
            data.response_put = this.response_put.toObject();
        }
        if (this.response_delete_range != null) {
            data.response_delete_range = this.response_delete_range.toObject();
        }
        if (this.response_txn != null) {
            data.response_txn = this.response_txn.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_response_range)
            writer.writeMessage(1, this.response_range, () => this.response_range.serialize(writer));
        if (this.has_response_put)
            writer.writeMessage(2, this.response_put, () => this.response_put.serialize(writer));
        if (this.has_response_delete_range)
            writer.writeMessage(3, this.response_delete_range, () => this.response_delete_range.serialize(writer));
        if (this.has_response_txn)
            writer.writeMessage(4, this.response_txn, () => this.response_txn.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ResponseOp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.response_range, () => message.response_range = RangeResponse.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.response_put, () => message.response_put = PutResponse.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.response_delete_range, () => message.response_delete_range = DeleteRangeResponse.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.response_txn, () => message.response_txn = TxnResponse.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return ResponseOp.deserialize(bytes);
    }
}
exports.ResponseOp = ResponseOp;
class Compare extends pb_1.Message {
    #one_of_decls = [[4, 5, 6, 7, 8]];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("result" in data && data.result != undefined) {
                this.result = data.result;
            }
            if ("target" in data && data.target != undefined) {
                this.target = data.target;
            }
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
            if ("create_revision" in data && data.create_revision != undefined) {
                this.create_revision = data.create_revision;
            }
            if ("mod_revision" in data && data.mod_revision != undefined) {
                this.mod_revision = data.mod_revision;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
            if ("lease" in data && data.lease != undefined) {
                this.lease = data.lease;
            }
            if ("range_end" in data && data.range_end != undefined) {
                this.range_end = data.range_end;
            }
        }
    }
    get result() {
        return pb_1.Message.getFieldWithDefault(this, 1, CompareCompareResult.Equal);
    }
    set result(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get target() {
        return pb_1.Message.getFieldWithDefault(this, 2, CompareCompareTarget.Version);
    }
    set target(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
    }
    set key(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set version(value) {
        pb_1.Message.setOneofField(this, 4, this.#one_of_decls[0], value);
    }
    get has_version() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get create_revision() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set create_revision(value) {
        pb_1.Message.setOneofField(this, 5, this.#one_of_decls[0], value);
    }
    get has_create_revision() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get mod_revision() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set mod_revision(value) {
        pb_1.Message.setOneofField(this, 6, this.#one_of_decls[0], value);
    }
    get has_mod_revision() {
        return pb_1.Message.getField(this, 6) != null;
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 7, new Uint8Array(0));
    }
    set value(value) {
        pb_1.Message.setOneofField(this, 7, this.#one_of_decls[0], value);
    }
    get has_value() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get lease() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set lease(value) {
        pb_1.Message.setOneofField(this, 8, this.#one_of_decls[0], value);
    }
    get has_lease() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get range_end() {
        return pb_1.Message.getFieldWithDefault(this, 64, new Uint8Array(0));
    }
    set range_end(value) {
        pb_1.Message.setField(this, 64, value);
    }
    get target_union() {
        const cases = {
            0: "none",
            4: "version",
            5: "create_revision",
            6: "mod_revision",
            7: "value",
            8: "lease"
        };
        return cases[pb_1.Message.computeOneofCase(this, [4, 5, 6, 7, 8])];
    }
    static fromObject(data) {
        const message = new Compare({});
        if (data.result != null) {
            message.result = data.result;
        }
        if (data.target != null) {
            message.target = data.target;
        }
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.version != null) {
            message.version = data.version;
        }
        if (data.create_revision != null) {
            message.create_revision = data.create_revision;
        }
        if (data.mod_revision != null) {
            message.mod_revision = data.mod_revision;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        if (data.lease != null) {
            message.lease = data.lease;
        }
        if (data.range_end != null) {
            message.range_end = data.range_end;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.result != null) {
            data.result = this.result;
        }
        if (this.target != null) {
            data.target = this.target;
        }
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.version != null) {
            data.version = this.version;
        }
        if (this.create_revision != null) {
            data.create_revision = this.create_revision;
        }
        if (this.mod_revision != null) {
            data.mod_revision = this.mod_revision;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        if (this.lease != null) {
            data.lease = this.lease;
        }
        if (this.range_end != null) {
            data.range_end = this.range_end;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.result != CompareCompareResult.Equal)
            writer.writeEnum(1, this.result);
        if (this.target != CompareCompareTarget.Version)
            writer.writeEnum(2, this.target);
        if (this.key.length)
            writer.writeBytes(3, this.key);
        if (this.has_version)
            writer.writeInt64(4, this.version);
        if (this.has_create_revision)
            writer.writeInt64(5, this.create_revision);
        if (this.has_mod_revision)
            writer.writeInt64(6, this.mod_revision);
        if (this.has_value)
            writer.writeBytes(7, this.value);
        if (this.has_lease)
            writer.writeInt64(8, this.lease);
        if (this.range_end.length)
            writer.writeBytes(64, this.range_end);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Compare();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.result = reader.readEnum();
                    break;
                case 2:
                    message.target = reader.readEnum();
                    break;
                case 3:
                    message.key = reader.readBytes();
                    break;
                case 4:
                    message.version = reader.readInt64();
                    break;
                case 5:
                    message.create_revision = reader.readInt64();
                    break;
                case 6:
                    message.mod_revision = reader.readInt64();
                    break;
                case 7:
                    message.value = reader.readBytes();
                    break;
                case 8:
                    message.lease = reader.readInt64();
                    break;
                case 64:
                    message.range_end = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Compare.deserialize(bytes);
    }
}
exports.Compare = Compare;
var CompareCompareResult;
(function (CompareCompareResult) {
    CompareCompareResult[CompareCompareResult["Equal"] = 0] = "Equal";
    CompareCompareResult[CompareCompareResult["Greater"] = 1] = "Greater";
    CompareCompareResult[CompareCompareResult["Less"] = 2] = "Less";
    CompareCompareResult[CompareCompareResult["NotEqual"] = 3] = "NotEqual";
})(CompareCompareResult || (exports.CompareCompareResult = CompareCompareResult = {}));
var CompareCompareTarget;
(function (CompareCompareTarget) {
    CompareCompareTarget[CompareCompareTarget["Version"] = 0] = "Version";
    CompareCompareTarget[CompareCompareTarget["Create"] = 1] = "Create";
    CompareCompareTarget[CompareCompareTarget["Mod"] = 2] = "Mod";
    CompareCompareTarget[CompareCompareTarget["Value"] = 3] = "Value";
    CompareCompareTarget[CompareCompareTarget["Lease"] = 4] = "Lease";
})(CompareCompareTarget || (exports.CompareCompareTarget = CompareCompareTarget = {}));
class TxnRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("compare" in data && data.compare != undefined) {
                this.compare = data.compare;
            }
            if ("success" in data && data.success != undefined) {
                this.success = data.success;
            }
            if ("failure" in data && data.failure != undefined) {
                this.failure = data.failure;
            }
        }
    }
    get compare() {
        return pb_1.Message.getRepeatedWrapperField(this, Compare, 1);
    }
    set compare(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    get success() {
        return pb_1.Message.getRepeatedWrapperField(this, RequestOp, 2);
    }
    set success(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get failure() {
        return pb_1.Message.getRepeatedWrapperField(this, RequestOp, 3);
    }
    set failure(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data) {
        const message = new TxnRequest({});
        if (data.compare != null) {
            message.compare = data.compare.map(item => Compare.fromObject(item));
        }
        if (data.success != null) {
            message.success = data.success.map(item => RequestOp.fromObject(item));
        }
        if (data.failure != null) {
            message.failure = data.failure.map(item => RequestOp.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.compare != null) {
            data.compare = this.compare.map((item) => item.toObject());
        }
        if (this.success != null) {
            data.success = this.success.map((item) => item.toObject());
        }
        if (this.failure != null) {
            data.failure = this.failure.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.compare.length)
            writer.writeRepeatedMessage(1, this.compare, (item) => item.serialize(writer));
        if (this.success.length)
            writer.writeRepeatedMessage(2, this.success, (item) => item.serialize(writer));
        if (this.failure.length)
            writer.writeRepeatedMessage(3, this.failure, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TxnRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.compare, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Compare.deserialize(reader), Compare));
                    break;
                case 2:
                    reader.readMessage(message.success, () => pb_1.Message.addToRepeatedWrapperField(message, 2, RequestOp.deserialize(reader), RequestOp));
                    break;
                case 3:
                    reader.readMessage(message.failure, () => pb_1.Message.addToRepeatedWrapperField(message, 3, RequestOp.deserialize(reader), RequestOp));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return TxnRequest.deserialize(bytes);
    }
}
exports.TxnRequest = TxnRequest;
class TxnResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("succeeded" in data && data.succeeded != undefined) {
                this.succeeded = data.succeeded;
            }
            if ("responses" in data && data.responses != undefined) {
                this.responses = data.responses;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get succeeded() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set succeeded(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get responses() {
        return pb_1.Message.getRepeatedWrapperField(this, ResponseOp, 3);
    }
    set responses(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data) {
        const message = new TxnResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.succeeded != null) {
            message.succeeded = data.succeeded;
        }
        if (data.responses != null) {
            message.responses = data.responses.map(item => ResponseOp.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.succeeded != null) {
            data.succeeded = this.succeeded;
        }
        if (this.responses != null) {
            data.responses = this.responses.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.succeeded != false)
            writer.writeBool(2, this.succeeded);
        if (this.responses.length)
            writer.writeRepeatedMessage(3, this.responses, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TxnResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.succeeded = reader.readBool();
                    break;
                case 3:
                    reader.readMessage(message.responses, () => pb_1.Message.addToRepeatedWrapperField(message, 3, ResponseOp.deserialize(reader), ResponseOp));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return TxnResponse.deserialize(bytes);
    }
}
exports.TxnResponse = TxnResponse;
class CompactionRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("revision" in data && data.revision != undefined) {
                this.revision = data.revision;
            }
            if ("physical" in data && data.physical != undefined) {
                this.physical = data.physical;
            }
        }
    }
    get revision() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set revision(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get physical() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set physical(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new CompactionRequest({});
        if (data.revision != null) {
            message.revision = data.revision;
        }
        if (data.physical != null) {
            message.physical = data.physical;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.revision != null) {
            data.revision = this.revision;
        }
        if (this.physical != null) {
            data.physical = this.physical;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.revision != 0)
            writer.writeInt64(1, this.revision);
        if (this.physical != false)
            writer.writeBool(2, this.physical);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CompactionRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.revision = reader.readInt64();
                    break;
                case 2:
                    message.physical = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return CompactionRequest.deserialize(bytes);
    }
}
exports.CompactionRequest = CompactionRequest;
class CompactionResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new CompactionResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CompactionResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return CompactionResponse.deserialize(bytes);
    }
}
exports.CompactionResponse = CompactionResponse;
class HashRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new HashRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HashRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return HashRequest.deserialize(bytes);
    }
}
exports.HashRequest = HashRequest;
class HashKVRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("revision" in data && data.revision != undefined) {
                this.revision = data.revision;
            }
        }
    }
    get revision() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set revision(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new HashKVRequest({});
        if (data.revision != null) {
            message.revision = data.revision;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.revision != null) {
            data.revision = this.revision;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.revision != 0)
            writer.writeInt64(1, this.revision);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HashKVRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.revision = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return HashKVRequest.deserialize(bytes);
    }
}
exports.HashKVRequest = HashKVRequest;
class HashKVResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("hash" in data && data.hash != undefined) {
                this.hash = data.hash;
            }
            if ("compact_revision" in data && data.compact_revision != undefined) {
                this.compact_revision = data.compact_revision;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get hash() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set hash(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get compact_revision() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set compact_revision(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new HashKVResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.hash != null) {
            message.hash = data.hash;
        }
        if (data.compact_revision != null) {
            message.compact_revision = data.compact_revision;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.hash != null) {
            data.hash = this.hash;
        }
        if (this.compact_revision != null) {
            data.compact_revision = this.compact_revision;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.hash != 0)
            writer.writeUint32(2, this.hash);
        if (this.compact_revision != 0)
            writer.writeInt64(3, this.compact_revision);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HashKVResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.hash = reader.readUint32();
                    break;
                case 3:
                    message.compact_revision = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return HashKVResponse.deserialize(bytes);
    }
}
exports.HashKVResponse = HashKVResponse;
class HashResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("hash" in data && data.hash != undefined) {
                this.hash = data.hash;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get hash() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set hash(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new HashResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.hash != null) {
            message.hash = data.hash;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.hash != null) {
            data.hash = this.hash;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.hash != 0)
            writer.writeUint32(2, this.hash);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HashResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.hash = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return HashResponse.deserialize(bytes);
    }
}
exports.HashResponse = HashResponse;
class SnapshotRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new SnapshotRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return SnapshotRequest.deserialize(bytes);
    }
}
exports.SnapshotRequest = SnapshotRequest;
class SnapshotResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("remaining_bytes" in data && data.remaining_bytes != undefined) {
                this.remaining_bytes = data.remaining_bytes;
            }
            if ("blob" in data && data.blob != undefined) {
                this.blob = data.blob;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get remaining_bytes() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set remaining_bytes(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get blob() {
        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
    }
    set blob(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new SnapshotResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.remaining_bytes != null) {
            message.remaining_bytes = data.remaining_bytes;
        }
        if (data.blob != null) {
            message.blob = data.blob;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.remaining_bytes != null) {
            data.remaining_bytes = this.remaining_bytes;
        }
        if (this.blob != null) {
            data.blob = this.blob;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.remaining_bytes != 0)
            writer.writeUint64(2, this.remaining_bytes);
        if (this.blob.length)
            writer.writeBytes(3, this.blob);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.remaining_bytes = reader.readUint64();
                    break;
                case 3:
                    message.blob = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return SnapshotResponse.deserialize(bytes);
    }
}
exports.SnapshotResponse = SnapshotResponse;
class WatchRequest extends pb_1.Message {
    #one_of_decls = [[1, 2, 3]];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("create_request" in data && data.create_request != undefined) {
                this.create_request = data.create_request;
            }
            if ("cancel_request" in data && data.cancel_request != undefined) {
                this.cancel_request = data.cancel_request;
            }
            if ("progress_request" in data && data.progress_request != undefined) {
                this.progress_request = data.progress_request;
            }
        }
    }
    get create_request() {
        return pb_1.Message.getWrapperField(this, WatchCreateRequest, 1);
    }
    set create_request(value) {
        pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
    }
    get has_create_request() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get cancel_request() {
        return pb_1.Message.getWrapperField(this, WatchCancelRequest, 2);
    }
    set cancel_request(value) {
        pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
    }
    get has_cancel_request() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get progress_request() {
        return pb_1.Message.getWrapperField(this, WatchProgressRequest, 3);
    }
    set progress_request(value) {
        pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
    }
    get has_progress_request() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get request_union() {
        const cases = {
            0: "none",
            1: "create_request",
            2: "cancel_request",
            3: "progress_request"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3])];
    }
    static fromObject(data) {
        const message = new WatchRequest({});
        if (data.create_request != null) {
            message.create_request = WatchCreateRequest.fromObject(data.create_request);
        }
        if (data.cancel_request != null) {
            message.cancel_request = WatchCancelRequest.fromObject(data.cancel_request);
        }
        if (data.progress_request != null) {
            message.progress_request = WatchProgressRequest.fromObject(data.progress_request);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.create_request != null) {
            data.create_request = this.create_request.toObject();
        }
        if (this.cancel_request != null) {
            data.cancel_request = this.cancel_request.toObject();
        }
        if (this.progress_request != null) {
            data.progress_request = this.progress_request.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_create_request)
            writer.writeMessage(1, this.create_request, () => this.create_request.serialize(writer));
        if (this.has_cancel_request)
            writer.writeMessage(2, this.cancel_request, () => this.cancel_request.serialize(writer));
        if (this.has_progress_request)
            writer.writeMessage(3, this.progress_request, () => this.progress_request.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WatchRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.create_request, () => message.create_request = WatchCreateRequest.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.cancel_request, () => message.cancel_request = WatchCancelRequest.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.progress_request, () => message.progress_request = WatchProgressRequest.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return WatchRequest.deserialize(bytes);
    }
}
exports.WatchRequest = WatchRequest;
class WatchCreateRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("range_end" in data && data.range_end != undefined) {
                this.range_end = data.range_end;
            }
            if ("start_revision" in data && data.start_revision != undefined) {
                this.start_revision = data.start_revision;
            }
            if ("progress_notify" in data && data.progress_notify != undefined) {
                this.progress_notify = data.progress_notify;
            }
            if ("filters" in data && data.filters != undefined) {
                this.filters = data.filters;
            }
            if ("prev_kv" in data && data.prev_kv != undefined) {
                this.prev_kv = data.prev_kv;
            }
            if ("watch_id" in data && data.watch_id != undefined) {
                this.watch_id = data.watch_id;
            }
            if ("fragment" in data && data.fragment != undefined) {
                this.fragment = data.fragment;
            }
        }
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0));
    }
    set key(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get range_end() {
        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
    }
    set range_end(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get start_revision() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set start_revision(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get progress_notify() {
        return pb_1.Message.getFieldWithDefault(this, 4, false);
    }
    set progress_notify(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get filters() {
        return pb_1.Message.getFieldWithDefault(this, 5, []);
    }
    set filters(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get prev_kv() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set prev_kv(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get watch_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set watch_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get fragment() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set fragment(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new WatchCreateRequest({});
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.range_end != null) {
            message.range_end = data.range_end;
        }
        if (data.start_revision != null) {
            message.start_revision = data.start_revision;
        }
        if (data.progress_notify != null) {
            message.progress_notify = data.progress_notify;
        }
        if (data.filters != null) {
            message.filters = data.filters;
        }
        if (data.prev_kv != null) {
            message.prev_kv = data.prev_kv;
        }
        if (data.watch_id != null) {
            message.watch_id = data.watch_id;
        }
        if (data.fragment != null) {
            message.fragment = data.fragment;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.range_end != null) {
            data.range_end = this.range_end;
        }
        if (this.start_revision != null) {
            data.start_revision = this.start_revision;
        }
        if (this.progress_notify != null) {
            data.progress_notify = this.progress_notify;
        }
        if (this.filters != null) {
            data.filters = this.filters;
        }
        if (this.prev_kv != null) {
            data.prev_kv = this.prev_kv;
        }
        if (this.watch_id != null) {
            data.watch_id = this.watch_id;
        }
        if (this.fragment != null) {
            data.fragment = this.fragment;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.key.length)
            writer.writeBytes(1, this.key);
        if (this.range_end.length)
            writer.writeBytes(2, this.range_end);
        if (this.start_revision != 0)
            writer.writeInt64(3, this.start_revision);
        if (this.progress_notify != false)
            writer.writeBool(4, this.progress_notify);
        if (this.filters.length)
            writer.writePackedEnum(5, this.filters);
        if (this.prev_kv != false)
            writer.writeBool(6, this.prev_kv);
        if (this.watch_id != 0)
            writer.writeInt64(7, this.watch_id);
        if (this.fragment != false)
            writer.writeBool(8, this.fragment);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WatchCreateRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.key = reader.readBytes();
                    break;
                case 2:
                    message.range_end = reader.readBytes();
                    break;
                case 3:
                    message.start_revision = reader.readInt64();
                    break;
                case 4:
                    message.progress_notify = reader.readBool();
                    break;
                case 5:
                    message.filters = reader.readPackedEnum();
                    break;
                case 6:
                    message.prev_kv = reader.readBool();
                    break;
                case 7:
                    message.watch_id = reader.readInt64();
                    break;
                case 8:
                    message.fragment = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return WatchCreateRequest.deserialize(bytes);
    }
}
exports.WatchCreateRequest = WatchCreateRequest;
var WatchCreateRequestFilterType;
(function (WatchCreateRequestFilterType) {
    WatchCreateRequestFilterType[WatchCreateRequestFilterType["Noput"] = 0] = "Noput";
    WatchCreateRequestFilterType[WatchCreateRequestFilterType["Nodelete"] = 1] = "Nodelete";
})(WatchCreateRequestFilterType || (exports.WatchCreateRequestFilterType = WatchCreateRequestFilterType = {}));
class WatchCancelRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("watch_id" in data && data.watch_id != undefined) {
                this.watch_id = data.watch_id;
            }
        }
    }
    get watch_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set watch_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new WatchCancelRequest({});
        if (data.watch_id != null) {
            message.watch_id = data.watch_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.watch_id != null) {
            data.watch_id = this.watch_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.watch_id != 0)
            writer.writeInt64(1, this.watch_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WatchCancelRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.watch_id = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return WatchCancelRequest.deserialize(bytes);
    }
}
exports.WatchCancelRequest = WatchCancelRequest;
class WatchProgressRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new WatchProgressRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WatchProgressRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return WatchProgressRequest.deserialize(bytes);
    }
}
exports.WatchProgressRequest = WatchProgressRequest;
class WatchResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("watch_id" in data && data.watch_id != undefined) {
                this.watch_id = data.watch_id;
            }
            if ("created" in data && data.created != undefined) {
                this.created = data.created;
            }
            if ("canceled" in data && data.canceled != undefined) {
                this.canceled = data.canceled;
            }
            if ("compact_revision" in data && data.compact_revision != undefined) {
                this.compact_revision = data.compact_revision;
            }
            if ("cancel_reason" in data && data.cancel_reason != undefined) {
                this.cancel_reason = data.cancel_reason;
            }
            if ("fragment" in data && data.fragment != undefined) {
                this.fragment = data.fragment;
            }
            if ("events" in data && data.events != undefined) {
                this.events = data.events;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get watch_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set watch_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get created() {
        return pb_1.Message.getFieldWithDefault(this, 3, false);
    }
    set created(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get canceled() {
        return pb_1.Message.getFieldWithDefault(this, 4, false);
    }
    set canceled(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get compact_revision() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set compact_revision(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get cancel_reason() {
        return pb_1.Message.getFieldWithDefault(this, 6, "");
    }
    set cancel_reason(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get fragment() {
        return pb_1.Message.getFieldWithDefault(this, 7, false);
    }
    set fragment(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get events() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.Event, 11);
    }
    set events(value) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    static fromObject(data) {
        const message = new WatchResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.watch_id != null) {
            message.watch_id = data.watch_id;
        }
        if (data.created != null) {
            message.created = data.created;
        }
        if (data.canceled != null) {
            message.canceled = data.canceled;
        }
        if (data.compact_revision != null) {
            message.compact_revision = data.compact_revision;
        }
        if (data.cancel_reason != null) {
            message.cancel_reason = data.cancel_reason;
        }
        if (data.fragment != null) {
            message.fragment = data.fragment;
        }
        if (data.events != null) {
            message.events = data.events.map(item => dependency_2.Event.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.watch_id != null) {
            data.watch_id = this.watch_id;
        }
        if (this.created != null) {
            data.created = this.created;
        }
        if (this.canceled != null) {
            data.canceled = this.canceled;
        }
        if (this.compact_revision != null) {
            data.compact_revision = this.compact_revision;
        }
        if (this.cancel_reason != null) {
            data.cancel_reason = this.cancel_reason;
        }
        if (this.fragment != null) {
            data.fragment = this.fragment;
        }
        if (this.events != null) {
            data.events = this.events.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.watch_id != 0)
            writer.writeInt64(2, this.watch_id);
        if (this.created != false)
            writer.writeBool(3, this.created);
        if (this.canceled != false)
            writer.writeBool(4, this.canceled);
        if (this.compact_revision != 0)
            writer.writeInt64(5, this.compact_revision);
        if (this.cancel_reason.length)
            writer.writeString(6, this.cancel_reason);
        if (this.fragment != false)
            writer.writeBool(7, this.fragment);
        if (this.events.length)
            writer.writeRepeatedMessage(11, this.events, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WatchResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.watch_id = reader.readInt64();
                    break;
                case 3:
                    message.created = reader.readBool();
                    break;
                case 4:
                    message.canceled = reader.readBool();
                    break;
                case 5:
                    message.compact_revision = reader.readInt64();
                    break;
                case 6:
                    message.cancel_reason = reader.readString();
                    break;
                case 7:
                    message.fragment = reader.readBool();
                    break;
                case 11:
                    reader.readMessage(message.events, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_2.Event.deserialize(reader), dependency_2.Event));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return WatchResponse.deserialize(bytes);
    }
}
exports.WatchResponse = WatchResponse;
class LeaseGrantRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("TTL" in data && data.TTL != undefined) {
                this.TTL = data.TTL;
            }
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
        }
    }
    get TTL() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set TTL(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new LeaseGrantRequest({});
        if (data.TTL != null) {
            message.TTL = data.TTL;
        }
        if (data.ID != null) {
            message.ID = data.ID;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.TTL != null) {
            data.TTL = this.TTL;
        }
        if (this.ID != null) {
            data.ID = this.ID;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.TTL != 0)
            writer.writeInt64(1, this.TTL);
        if (this.ID != 0)
            writer.writeInt64(2, this.ID);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseGrantRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.TTL = reader.readInt64();
                    break;
                case 2:
                    message.ID = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseGrantRequest.deserialize(bytes);
    }
}
exports.LeaseGrantRequest = LeaseGrantRequest;
class LeaseGrantResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
            if ("TTL" in data && data.TTL != undefined) {
                this.TTL = data.TTL;
            }
            if ("error" in data && data.error != undefined) {
                this.error = data.error;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get TTL() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set TTL(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get error() {
        return pb_1.Message.getFieldWithDefault(this, 4, "");
    }
    set error(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new LeaseGrantResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.ID != null) {
            message.ID = data.ID;
        }
        if (data.TTL != null) {
            message.TTL = data.TTL;
        }
        if (data.error != null) {
            message.error = data.error;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.ID != null) {
            data.ID = this.ID;
        }
        if (this.TTL != null) {
            data.TTL = this.TTL;
        }
        if (this.error != null) {
            data.error = this.error;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.ID != 0)
            writer.writeInt64(2, this.ID);
        if (this.TTL != 0)
            writer.writeInt64(3, this.TTL);
        if (this.error.length)
            writer.writeString(4, this.error);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseGrantResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.ID = reader.readInt64();
                    break;
                case 3:
                    message.TTL = reader.readInt64();
                    break;
                case 4:
                    message.error = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseGrantResponse.deserialize(bytes);
    }
}
exports.LeaseGrantResponse = LeaseGrantResponse;
class LeaseRevokeRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new LeaseRevokeRequest({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeInt64(1, this.ID);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseRevokeRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseRevokeRequest.deserialize(bytes);
    }
}
exports.LeaseRevokeRequest = LeaseRevokeRequest;
class LeaseRevokeResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new LeaseRevokeResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseRevokeResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseRevokeResponse.deserialize(bytes);
    }
}
exports.LeaseRevokeResponse = LeaseRevokeResponse;
class LeaseCheckpoint extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
            if ("remaining_TTL" in data && data.remaining_TTL != undefined) {
                this.remaining_TTL = data.remaining_TTL;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get remaining_TTL() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set remaining_TTL(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new LeaseCheckpoint({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        if (data.remaining_TTL != null) {
            message.remaining_TTL = data.remaining_TTL;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        if (this.remaining_TTL != null) {
            data.remaining_TTL = this.remaining_TTL;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeInt64(1, this.ID);
        if (this.remaining_TTL != 0)
            writer.writeInt64(2, this.remaining_TTL);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseCheckpoint();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readInt64();
                    break;
                case 2:
                    message.remaining_TTL = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseCheckpoint.deserialize(bytes);
    }
}
exports.LeaseCheckpoint = LeaseCheckpoint;
class LeaseCheckpointRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("checkpoints" in data && data.checkpoints != undefined) {
                this.checkpoints = data.checkpoints;
            }
        }
    }
    get checkpoints() {
        return pb_1.Message.getRepeatedWrapperField(this, LeaseCheckpoint, 1);
    }
    set checkpoints(value) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data) {
        const message = new LeaseCheckpointRequest({});
        if (data.checkpoints != null) {
            message.checkpoints = data.checkpoints.map(item => LeaseCheckpoint.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.checkpoints != null) {
            data.checkpoints = this.checkpoints.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.checkpoints.length)
            writer.writeRepeatedMessage(1, this.checkpoints, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseCheckpointRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.checkpoints, () => pb_1.Message.addToRepeatedWrapperField(message, 1, LeaseCheckpoint.deserialize(reader), LeaseCheckpoint));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseCheckpointRequest.deserialize(bytes);
    }
}
exports.LeaseCheckpointRequest = LeaseCheckpointRequest;
class LeaseCheckpointResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new LeaseCheckpointResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseCheckpointResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseCheckpointResponse.deserialize(bytes);
    }
}
exports.LeaseCheckpointResponse = LeaseCheckpointResponse;
class LeaseKeepAliveRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new LeaseKeepAliveRequest({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeInt64(1, this.ID);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseKeepAliveRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseKeepAliveRequest.deserialize(bytes);
    }
}
exports.LeaseKeepAliveRequest = LeaseKeepAliveRequest;
class LeaseKeepAliveResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
            if ("TTL" in data && data.TTL != undefined) {
                this.TTL = data.TTL;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get TTL() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set TTL(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new LeaseKeepAliveResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.ID != null) {
            message.ID = data.ID;
        }
        if (data.TTL != null) {
            message.TTL = data.TTL;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.ID != null) {
            data.ID = this.ID;
        }
        if (this.TTL != null) {
            data.TTL = this.TTL;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.ID != 0)
            writer.writeInt64(2, this.ID);
        if (this.TTL != 0)
            writer.writeInt64(3, this.TTL);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseKeepAliveResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.ID = reader.readInt64();
                    break;
                case 3:
                    message.TTL = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseKeepAliveResponse.deserialize(bytes);
    }
}
exports.LeaseKeepAliveResponse = LeaseKeepAliveResponse;
class LeaseTimeToLiveRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
            if ("keys" in data && data.keys != undefined) {
                this.keys = data.keys;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get keys() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set keys(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new LeaseTimeToLiveRequest({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        if (data.keys != null) {
            message.keys = data.keys;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        if (this.keys != null) {
            data.keys = this.keys;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeInt64(1, this.ID);
        if (this.keys != false)
            writer.writeBool(2, this.keys);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseTimeToLiveRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readInt64();
                    break;
                case 2:
                    message.keys = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseTimeToLiveRequest.deserialize(bytes);
    }
}
exports.LeaseTimeToLiveRequest = LeaseTimeToLiveRequest;
class LeaseTimeToLiveResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
            if ("TTL" in data && data.TTL != undefined) {
                this.TTL = data.TTL;
            }
            if ("grantedTTL" in data && data.grantedTTL != undefined) {
                this.grantedTTL = data.grantedTTL;
            }
            if ("keys" in data && data.keys != undefined) {
                this.keys = data.keys;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get TTL() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set TTL(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get grantedTTL() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set grantedTTL(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get keys() {
        return pb_1.Message.getFieldWithDefault(this, 5, []);
    }
    set keys(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new LeaseTimeToLiveResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.ID != null) {
            message.ID = data.ID;
        }
        if (data.TTL != null) {
            message.TTL = data.TTL;
        }
        if (data.grantedTTL != null) {
            message.grantedTTL = data.grantedTTL;
        }
        if (data.keys != null) {
            message.keys = data.keys;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.ID != null) {
            data.ID = this.ID;
        }
        if (this.TTL != null) {
            data.TTL = this.TTL;
        }
        if (this.grantedTTL != null) {
            data.grantedTTL = this.grantedTTL;
        }
        if (this.keys != null) {
            data.keys = this.keys;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.ID != 0)
            writer.writeInt64(2, this.ID);
        if (this.TTL != 0)
            writer.writeInt64(3, this.TTL);
        if (this.grantedTTL != 0)
            writer.writeInt64(4, this.grantedTTL);
        if (this.keys.length)
            writer.writeRepeatedBytes(5, this.keys);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseTimeToLiveResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.ID = reader.readInt64();
                    break;
                case 3:
                    message.TTL = reader.readInt64();
                    break;
                case 4:
                    message.grantedTTL = reader.readInt64();
                    break;
                case 5:
                    pb_1.Message.addToRepeatedField(message, 5, reader.readBytes());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseTimeToLiveResponse.deserialize(bytes);
    }
}
exports.LeaseTimeToLiveResponse = LeaseTimeToLiveResponse;
class LeaseLeasesRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new LeaseLeasesRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseLeasesRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseLeasesRequest.deserialize(bytes);
    }
}
exports.LeaseLeasesRequest = LeaseLeasesRequest;
class LeaseStatus extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new LeaseStatus({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeInt64(1, this.ID);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseStatus();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseStatus.deserialize(bytes);
    }
}
exports.LeaseStatus = LeaseStatus;
class LeaseLeasesResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("leases" in data && data.leases != undefined) {
                this.leases = data.leases;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get leases() {
        return pb_1.Message.getRepeatedWrapperField(this, LeaseStatus, 2);
    }
    set leases(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new LeaseLeasesResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.leases != null) {
            message.leases = data.leases.map(item => LeaseStatus.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.leases != null) {
            data.leases = this.leases.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.leases.length)
            writer.writeRepeatedMessage(2, this.leases, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LeaseLeasesResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.leases, () => pb_1.Message.addToRepeatedWrapperField(message, 2, LeaseStatus.deserialize(reader), LeaseStatus));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return LeaseLeasesResponse.deserialize(bytes);
    }
}
exports.LeaseLeasesResponse = LeaseLeasesResponse;
class Member extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 4], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("peerURLs" in data && data.peerURLs != undefined) {
                this.peerURLs = data.peerURLs;
            }
            if ("clientURLs" in data && data.clientURLs != undefined) {
                this.clientURLs = data.clientURLs;
            }
            if ("isLearner" in data && data.isLearner != undefined) {
                this.isLearner = data.isLearner;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get peerURLs() {
        return pb_1.Message.getFieldWithDefault(this, 3, []);
    }
    set peerURLs(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get clientURLs() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set clientURLs(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get isLearner() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set isLearner(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new Member({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        if (data.name != null) {
            message.name = data.name;
        }
        if (data.peerURLs != null) {
            message.peerURLs = data.peerURLs;
        }
        if (data.clientURLs != null) {
            message.clientURLs = data.clientURLs;
        }
        if (data.isLearner != null) {
            message.isLearner = data.isLearner;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.peerURLs != null) {
            data.peerURLs = this.peerURLs;
        }
        if (this.clientURLs != null) {
            data.clientURLs = this.clientURLs;
        }
        if (this.isLearner != null) {
            data.isLearner = this.isLearner;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeUint64(1, this.ID);
        if (this.name.length)
            writer.writeString(2, this.name);
        if (this.peerURLs.length)
            writer.writeRepeatedString(3, this.peerURLs);
        if (this.clientURLs.length)
            writer.writeRepeatedString(4, this.clientURLs);
        if (this.isLearner != false)
            writer.writeBool(5, this.isLearner);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Member();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readUint64();
                    break;
                case 2:
                    message.name = reader.readString();
                    break;
                case 3:
                    pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                    break;
                case 4:
                    pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                    break;
                case 5:
                    message.isLearner = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Member.deserialize(bytes);
    }
}
exports.Member = Member;
class MemberAddRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("peerURLs" in data && data.peerURLs != undefined) {
                this.peerURLs = data.peerURLs;
            }
            if ("isLearner" in data && data.isLearner != undefined) {
                this.isLearner = data.isLearner;
            }
        }
    }
    get peerURLs() {
        return pb_1.Message.getFieldWithDefault(this, 1, []);
    }
    set peerURLs(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get isLearner() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set isLearner(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new MemberAddRequest({});
        if (data.peerURLs != null) {
            message.peerURLs = data.peerURLs;
        }
        if (data.isLearner != null) {
            message.isLearner = data.isLearner;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.peerURLs != null) {
            data.peerURLs = this.peerURLs;
        }
        if (this.isLearner != null) {
            data.isLearner = this.isLearner;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.peerURLs.length)
            writer.writeRepeatedString(1, this.peerURLs);
        if (this.isLearner != false)
            writer.writeBool(2, this.isLearner);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberAddRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                    break;
                case 2:
                    message.isLearner = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberAddRequest.deserialize(bytes);
    }
}
exports.MemberAddRequest = MemberAddRequest;
class MemberAddResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("member" in data && data.member != undefined) {
                this.member = data.member;
            }
            if ("members" in data && data.members != undefined) {
                this.members = data.members;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get member() {
        return pb_1.Message.getWrapperField(this, Member, 2);
    }
    set member(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_member() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get members() {
        return pb_1.Message.getRepeatedWrapperField(this, Member, 3);
    }
    set members(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data) {
        const message = new MemberAddResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.member != null) {
            message.member = Member.fromObject(data.member);
        }
        if (data.members != null) {
            message.members = data.members.map(item => Member.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.member != null) {
            data.member = this.member.toObject();
        }
        if (this.members != null) {
            data.members = this.members.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.has_member)
            writer.writeMessage(2, this.member, () => this.member.serialize(writer));
        if (this.members.length)
            writer.writeRepeatedMessage(3, this.members, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberAddResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.member, () => message.member = Member.deserialize(reader));
                    break;
                case 3:
                    reader.readMessage(message.members, () => pb_1.Message.addToRepeatedWrapperField(message, 3, Member.deserialize(reader), Member));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberAddResponse.deserialize(bytes);
    }
}
exports.MemberAddResponse = MemberAddResponse;
class MemberRemoveRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new MemberRemoveRequest({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeUint64(1, this.ID);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberRemoveRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberRemoveRequest.deserialize(bytes);
    }
}
exports.MemberRemoveRequest = MemberRemoveRequest;
class MemberRemoveResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("members" in data && data.members != undefined) {
                this.members = data.members;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get members() {
        return pb_1.Message.getRepeatedWrapperField(this, Member, 2);
    }
    set members(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new MemberRemoveResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.members != null) {
            message.members = data.members.map(item => Member.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.members != null) {
            data.members = this.members.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.members.length)
            writer.writeRepeatedMessage(2, this.members, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberRemoveResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.members, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Member.deserialize(reader), Member));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberRemoveResponse.deserialize(bytes);
    }
}
exports.MemberRemoveResponse = MemberRemoveResponse;
class MemberUpdateRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
            if ("peerURLs" in data && data.peerURLs != undefined) {
                this.peerURLs = data.peerURLs;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get peerURLs() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set peerURLs(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new MemberUpdateRequest({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        if (data.peerURLs != null) {
            message.peerURLs = data.peerURLs;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        if (this.peerURLs != null) {
            data.peerURLs = this.peerURLs;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeUint64(1, this.ID);
        if (this.peerURLs.length)
            writer.writeRepeatedString(2, this.peerURLs);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberUpdateRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readUint64();
                    break;
                case 2:
                    pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberUpdateRequest.deserialize(bytes);
    }
}
exports.MemberUpdateRequest = MemberUpdateRequest;
class MemberUpdateResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("members" in data && data.members != undefined) {
                this.members = data.members;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get members() {
        return pb_1.Message.getRepeatedWrapperField(this, Member, 2);
    }
    set members(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new MemberUpdateResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.members != null) {
            message.members = data.members.map(item => Member.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.members != null) {
            data.members = this.members.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.members.length)
            writer.writeRepeatedMessage(2, this.members, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberUpdateResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.members, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Member.deserialize(reader), Member));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberUpdateResponse.deserialize(bytes);
    }
}
exports.MemberUpdateResponse = MemberUpdateResponse;
class MemberListRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("linearizable" in data && data.linearizable != undefined) {
                this.linearizable = data.linearizable;
            }
        }
    }
    get linearizable() {
        return pb_1.Message.getFieldWithDefault(this, 1, false);
    }
    set linearizable(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new MemberListRequest({});
        if (data.linearizable != null) {
            message.linearizable = data.linearizable;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.linearizable != null) {
            data.linearizable = this.linearizable;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.linearizable != false)
            writer.writeBool(1, this.linearizable);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberListRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.linearizable = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberListRequest.deserialize(bytes);
    }
}
exports.MemberListRequest = MemberListRequest;
class MemberListResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("members" in data && data.members != undefined) {
                this.members = data.members;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get members() {
        return pb_1.Message.getRepeatedWrapperField(this, Member, 2);
    }
    set members(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new MemberListResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.members != null) {
            message.members = data.members.map(item => Member.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.members != null) {
            data.members = this.members.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.members.length)
            writer.writeRepeatedMessage(2, this.members, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberListResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.members, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Member.deserialize(reader), Member));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberListResponse.deserialize(bytes);
    }
}
exports.MemberListResponse = MemberListResponse;
class MemberPromoteRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ID" in data && data.ID != undefined) {
                this.ID = data.ID;
            }
        }
    }
    get ID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set ID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new MemberPromoteRequest({});
        if (data.ID != null) {
            message.ID = data.ID;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.ID != null) {
            data.ID = this.ID;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ID != 0)
            writer.writeUint64(1, this.ID);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberPromoteRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ID = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberPromoteRequest.deserialize(bytes);
    }
}
exports.MemberPromoteRequest = MemberPromoteRequest;
class MemberPromoteResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("members" in data && data.members != undefined) {
                this.members = data.members;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get members() {
        return pb_1.Message.getRepeatedWrapperField(this, Member, 2);
    }
    set members(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new MemberPromoteResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.members != null) {
            message.members = data.members.map(item => Member.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.members != null) {
            data.members = this.members.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.members.length)
            writer.writeRepeatedMessage(2, this.members, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MemberPromoteResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.members, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Member.deserialize(reader), Member));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MemberPromoteResponse.deserialize(bytes);
    }
}
exports.MemberPromoteResponse = MemberPromoteResponse;
class DefragmentRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new DefragmentRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DefragmentRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return DefragmentRequest.deserialize(bytes);
    }
}
exports.DefragmentRequest = DefragmentRequest;
class DefragmentResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new DefragmentResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DefragmentResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return DefragmentResponse.deserialize(bytes);
    }
}
exports.DefragmentResponse = DefragmentResponse;
class MoveLeaderRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("targetID" in data && data.targetID != undefined) {
                this.targetID = data.targetID;
            }
        }
    }
    get targetID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set targetID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new MoveLeaderRequest({});
        if (data.targetID != null) {
            message.targetID = data.targetID;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.targetID != null) {
            data.targetID = this.targetID;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.targetID != 0)
            writer.writeUint64(1, this.targetID);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MoveLeaderRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.targetID = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MoveLeaderRequest.deserialize(bytes);
    }
}
exports.MoveLeaderRequest = MoveLeaderRequest;
class MoveLeaderResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new MoveLeaderResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MoveLeaderResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return MoveLeaderResponse.deserialize(bytes);
    }
}
exports.MoveLeaderResponse = MoveLeaderResponse;
class AlarmRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("action" in data && data.action != undefined) {
                this.action = data.action;
            }
            if ("memberID" in data && data.memberID != undefined) {
                this.memberID = data.memberID;
            }
            if ("alarm" in data && data.alarm != undefined) {
                this.alarm = data.alarm;
            }
        }
    }
    get action() {
        return pb_1.Message.getFieldWithDefault(this, 1, AlarmRequestAlarmAction.Get);
    }
    set action(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get memberID() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set memberID(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get alarm() {
        return pb_1.Message.getFieldWithDefault(this, 3, AlarmType.None);
    }
    set alarm(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new AlarmRequest({});
        if (data.action != null) {
            message.action = data.action;
        }
        if (data.memberID != null) {
            message.memberID = data.memberID;
        }
        if (data.alarm != null) {
            message.alarm = data.alarm;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.action != null) {
            data.action = this.action;
        }
        if (this.memberID != null) {
            data.memberID = this.memberID;
        }
        if (this.alarm != null) {
            data.alarm = this.alarm;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.action != AlarmRequestAlarmAction.Get)
            writer.writeEnum(1, this.action);
        if (this.memberID != 0)
            writer.writeUint64(2, this.memberID);
        if (this.alarm != AlarmType.None)
            writer.writeEnum(3, this.alarm);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AlarmRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.action = reader.readEnum();
                    break;
                case 2:
                    message.memberID = reader.readUint64();
                    break;
                case 3:
                    message.alarm = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AlarmRequest.deserialize(bytes);
    }
}
exports.AlarmRequest = AlarmRequest;
var AlarmRequestAlarmAction;
(function (AlarmRequestAlarmAction) {
    AlarmRequestAlarmAction[AlarmRequestAlarmAction["Get"] = 0] = "Get";
    AlarmRequestAlarmAction[AlarmRequestAlarmAction["Activate"] = 1] = "Activate";
    AlarmRequestAlarmAction[AlarmRequestAlarmAction["Deactivate"] = 2] = "Deactivate";
})(AlarmRequestAlarmAction || (exports.AlarmRequestAlarmAction = AlarmRequestAlarmAction = {}));
class AlarmMember extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("memberID" in data && data.memberID != undefined) {
                this.memberID = data.memberID;
            }
            if ("alarm" in data && data.alarm != undefined) {
                this.alarm = data.alarm;
            }
        }
    }
    get memberID() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set memberID(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get alarm() {
        return pb_1.Message.getFieldWithDefault(this, 2, AlarmType.None);
    }
    set alarm(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AlarmMember({});
        if (data.memberID != null) {
            message.memberID = data.memberID;
        }
        if (data.alarm != null) {
            message.alarm = data.alarm;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.memberID != null) {
            data.memberID = this.memberID;
        }
        if (this.alarm != null) {
            data.alarm = this.alarm;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.memberID != 0)
            writer.writeUint64(1, this.memberID);
        if (this.alarm != AlarmType.None)
            writer.writeEnum(2, this.alarm);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AlarmMember();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.memberID = reader.readUint64();
                    break;
                case 2:
                    message.alarm = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AlarmMember.deserialize(bytes);
    }
}
exports.AlarmMember = AlarmMember;
class AlarmResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("alarms" in data && data.alarms != undefined) {
                this.alarms = data.alarms;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get alarms() {
        return pb_1.Message.getRepeatedWrapperField(this, AlarmMember, 2);
    }
    set alarms(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AlarmResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.alarms != null) {
            message.alarms = data.alarms.map(item => AlarmMember.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.alarms != null) {
            data.alarms = this.alarms.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.alarms.length)
            writer.writeRepeatedMessage(2, this.alarms, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AlarmResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.alarms, () => pb_1.Message.addToRepeatedWrapperField(message, 2, AlarmMember.deserialize(reader), AlarmMember));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AlarmResponse.deserialize(bytes);
    }
}
exports.AlarmResponse = AlarmResponse;
class DowngradeRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("action" in data && data.action != undefined) {
                this.action = data.action;
            }
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
        }
    }
    get action() {
        return pb_1.Message.getFieldWithDefault(this, 1, DowngradeRequestDowngradeAction.Validate);
    }
    set action(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set version(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new DowngradeRequest({});
        if (data.action != null) {
            message.action = data.action;
        }
        if (data.version != null) {
            message.version = data.version;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.action != null) {
            data.action = this.action;
        }
        if (this.version != null) {
            data.version = this.version;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.action != DowngradeRequestDowngradeAction.Validate)
            writer.writeEnum(1, this.action);
        if (this.version.length)
            writer.writeString(2, this.version);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DowngradeRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.action = reader.readEnum();
                    break;
                case 2:
                    message.version = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return DowngradeRequest.deserialize(bytes);
    }
}
exports.DowngradeRequest = DowngradeRequest;
var DowngradeRequestDowngradeAction;
(function (DowngradeRequestDowngradeAction) {
    DowngradeRequestDowngradeAction[DowngradeRequestDowngradeAction["Validate"] = 0] = "Validate";
    DowngradeRequestDowngradeAction[DowngradeRequestDowngradeAction["Enable"] = 1] = "Enable";
    DowngradeRequestDowngradeAction[DowngradeRequestDowngradeAction["Cancel"] = 2] = "Cancel";
})(DowngradeRequestDowngradeAction || (exports.DowngradeRequestDowngradeAction = DowngradeRequestDowngradeAction = {}));
class DowngradeResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set version(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new DowngradeResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.version != null) {
            message.version = data.version;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.version != null) {
            data.version = this.version;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.version.length)
            writer.writeString(2, this.version);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DowngradeResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.version = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return DowngradeResponse.deserialize(bytes);
    }
}
exports.DowngradeResponse = DowngradeResponse;
class StatusRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new StatusRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StatusRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return StatusRequest.deserialize(bytes);
    }
}
exports.StatusRequest = StatusRequest;
class StatusResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("version" in data && data.version != undefined) {
                this.version = data.version;
            }
            if ("dbSize" in data && data.dbSize != undefined) {
                this.dbSize = data.dbSize;
            }
            if ("leader" in data && data.leader != undefined) {
                this.leader = data.leader;
            }
            if ("raftIndex" in data && data.raftIndex != undefined) {
                this.raftIndex = data.raftIndex;
            }
            if ("raftTerm" in data && data.raftTerm != undefined) {
                this.raftTerm = data.raftTerm;
            }
            if ("raftAppliedIndex" in data && data.raftAppliedIndex != undefined) {
                this.raftAppliedIndex = data.raftAppliedIndex;
            }
            if ("errors" in data && data.errors != undefined) {
                this.errors = data.errors;
            }
            if ("dbSizeInUse" in data && data.dbSizeInUse != undefined) {
                this.dbSizeInUse = data.dbSizeInUse;
            }
            if ("isLearner" in data && data.isLearner != undefined) {
                this.isLearner = data.isLearner;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get version() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set version(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get dbSize() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set dbSize(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get leader() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set leader(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get raftIndex() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set raftIndex(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get raftTerm() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set raftTerm(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get raftAppliedIndex() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set raftAppliedIndex(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get errors() {
        return pb_1.Message.getFieldWithDefault(this, 8, []);
    }
    set errors(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get dbSizeInUse() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set dbSizeInUse(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get isLearner() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set isLearner(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new StatusResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.version != null) {
            message.version = data.version;
        }
        if (data.dbSize != null) {
            message.dbSize = data.dbSize;
        }
        if (data.leader != null) {
            message.leader = data.leader;
        }
        if (data.raftIndex != null) {
            message.raftIndex = data.raftIndex;
        }
        if (data.raftTerm != null) {
            message.raftTerm = data.raftTerm;
        }
        if (data.raftAppliedIndex != null) {
            message.raftAppliedIndex = data.raftAppliedIndex;
        }
        if (data.errors != null) {
            message.errors = data.errors;
        }
        if (data.dbSizeInUse != null) {
            message.dbSizeInUse = data.dbSizeInUse;
        }
        if (data.isLearner != null) {
            message.isLearner = data.isLearner;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.version != null) {
            data.version = this.version;
        }
        if (this.dbSize != null) {
            data.dbSize = this.dbSize;
        }
        if (this.leader != null) {
            data.leader = this.leader;
        }
        if (this.raftIndex != null) {
            data.raftIndex = this.raftIndex;
        }
        if (this.raftTerm != null) {
            data.raftTerm = this.raftTerm;
        }
        if (this.raftAppliedIndex != null) {
            data.raftAppliedIndex = this.raftAppliedIndex;
        }
        if (this.errors != null) {
            data.errors = this.errors;
        }
        if (this.dbSizeInUse != null) {
            data.dbSizeInUse = this.dbSizeInUse;
        }
        if (this.isLearner != null) {
            data.isLearner = this.isLearner;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.version.length)
            writer.writeString(2, this.version);
        if (this.dbSize != 0)
            writer.writeInt64(3, this.dbSize);
        if (this.leader != 0)
            writer.writeUint64(4, this.leader);
        if (this.raftIndex != 0)
            writer.writeUint64(5, this.raftIndex);
        if (this.raftTerm != 0)
            writer.writeUint64(6, this.raftTerm);
        if (this.raftAppliedIndex != 0)
            writer.writeUint64(7, this.raftAppliedIndex);
        if (this.errors.length)
            writer.writeRepeatedString(8, this.errors);
        if (this.dbSizeInUse != 0)
            writer.writeInt64(9, this.dbSizeInUse);
        if (this.isLearner != false)
            writer.writeBool(10, this.isLearner);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StatusResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.version = reader.readString();
                    break;
                case 3:
                    message.dbSize = reader.readInt64();
                    break;
                case 4:
                    message.leader = reader.readUint64();
                    break;
                case 5:
                    message.raftIndex = reader.readUint64();
                    break;
                case 6:
                    message.raftTerm = reader.readUint64();
                    break;
                case 7:
                    message.raftAppliedIndex = reader.readUint64();
                    break;
                case 8:
                    pb_1.Message.addToRepeatedField(message, 8, reader.readString());
                    break;
                case 9:
                    message.dbSizeInUse = reader.readInt64();
                    break;
                case 10:
                    message.isLearner = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return StatusResponse.deserialize(bytes);
    }
}
exports.StatusResponse = StatusResponse;
class AuthEnableRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new AuthEnableRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthEnableRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthEnableRequest.deserialize(bytes);
    }
}
exports.AuthEnableRequest = AuthEnableRequest;
class AuthDisableRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new AuthDisableRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthDisableRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthDisableRequest.deserialize(bytes);
    }
}
exports.AuthDisableRequest = AuthDisableRequest;
class AuthStatusRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new AuthStatusRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthStatusRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthStatusRequest.deserialize(bytes);
    }
}
exports.AuthStatusRequest = AuthStatusRequest;
class AuthenticateRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("password" in data && data.password != undefined) {
                this.password = data.password;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get password() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set password(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthenticateRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        if (data.password != null) {
            message.password = data.password;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.password != null) {
            data.password = this.password;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (this.password.length)
            writer.writeString(2, this.password);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthenticateRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    message.password = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthenticateRequest.deserialize(bytes);
    }
}
exports.AuthenticateRequest = AuthenticateRequest;
class AuthUserAddRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("password" in data && data.password != undefined) {
                this.password = data.password;
            }
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get password() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set password(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, dependency_3.UserAddOptions, 3);
    }
    set options(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_options() {
        return pb_1.Message.getField(this, 3) != null;
    }
    static fromObject(data) {
        const message = new AuthUserAddRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        if (data.password != null) {
            message.password = data.password;
        }
        if (data.options != null) {
            message.options = dependency_3.UserAddOptions.fromObject(data.options);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.password != null) {
            data.password = this.password;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (this.password.length)
            writer.writeString(2, this.password);
        if (this.has_options)
            writer.writeMessage(3, this.options, () => this.options.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserAddRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    message.password = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.options, () => message.options = dependency_3.UserAddOptions.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserAddRequest.deserialize(bytes);
    }
}
exports.AuthUserAddRequest = AuthUserAddRequest;
class AuthUserGetRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new AuthUserGetRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserGetRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserGetRequest.deserialize(bytes);
    }
}
exports.AuthUserGetRequest = AuthUserGetRequest;
class AuthUserDeleteRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new AuthUserDeleteRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserDeleteRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserDeleteRequest.deserialize(bytes);
    }
}
exports.AuthUserDeleteRequest = AuthUserDeleteRequest;
class AuthUserChangePasswordRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("password" in data && data.password != undefined) {
                this.password = data.password;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get password() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set password(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthUserChangePasswordRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        if (data.password != null) {
            message.password = data.password;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.password != null) {
            data.password = this.password;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (this.password.length)
            writer.writeString(2, this.password);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserChangePasswordRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    message.password = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserChangePasswordRequest.deserialize(bytes);
    }
}
exports.AuthUserChangePasswordRequest = AuthUserChangePasswordRequest;
class AuthUserGrantRoleRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("user" in data && data.user != undefined) {
                this.user = data.user;
            }
            if ("role" in data && data.role != undefined) {
                this.role = data.role;
            }
        }
    }
    get user() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set user(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get role() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set role(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthUserGrantRoleRequest({});
        if (data.user != null) {
            message.user = data.user;
        }
        if (data.role != null) {
            message.role = data.role;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.user != null) {
            data.user = this.user;
        }
        if (this.role != null) {
            data.role = this.role;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.user.length)
            writer.writeString(1, this.user);
        if (this.role.length)
            writer.writeString(2, this.role);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserGrantRoleRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.user = reader.readString();
                    break;
                case 2:
                    message.role = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserGrantRoleRequest.deserialize(bytes);
    }
}
exports.AuthUserGrantRoleRequest = AuthUserGrantRoleRequest;
class AuthUserRevokeRoleRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("role" in data && data.role != undefined) {
                this.role = data.role;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get role() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set role(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthUserRevokeRoleRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        if (data.role != null) {
            message.role = data.role;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.role != null) {
            data.role = this.role;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (this.role.length)
            writer.writeString(2, this.role);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserRevokeRoleRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    message.role = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserRevokeRoleRequest.deserialize(bytes);
    }
}
exports.AuthUserRevokeRoleRequest = AuthUserRevokeRoleRequest;
class AuthRoleAddRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new AuthRoleAddRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleAddRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleAddRequest.deserialize(bytes);
    }
}
exports.AuthRoleAddRequest = AuthRoleAddRequest;
class AuthRoleGetRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("role" in data && data.role != undefined) {
                this.role = data.role;
            }
        }
    }
    get role() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set role(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new AuthRoleGetRequest({});
        if (data.role != null) {
            message.role = data.role;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.role != null) {
            data.role = this.role;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.role.length)
            writer.writeString(1, this.role);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleGetRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.role = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleGetRequest.deserialize(bytes);
    }
}
exports.AuthRoleGetRequest = AuthRoleGetRequest;
class AuthUserListRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new AuthUserListRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserListRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserListRequest.deserialize(bytes);
    }
}
exports.AuthUserListRequest = AuthUserListRequest;
class AuthRoleListRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") { }
    }
    static fromObject(data) {
        const message = new AuthRoleListRequest({});
        return message;
    }
    toObject() {
        const data = {};
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleListRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleListRequest.deserialize(bytes);
    }
}
exports.AuthRoleListRequest = AuthRoleListRequest;
class AuthRoleDeleteRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("role" in data && data.role != undefined) {
                this.role = data.role;
            }
        }
    }
    get role() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set role(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new AuthRoleDeleteRequest({});
        if (data.role != null) {
            message.role = data.role;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.role != null) {
            data.role = this.role;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.role.length)
            writer.writeString(1, this.role);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleDeleteRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.role = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleDeleteRequest.deserialize(bytes);
    }
}
exports.AuthRoleDeleteRequest = AuthRoleDeleteRequest;
class AuthRoleGrantPermissionRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("perm" in data && data.perm != undefined) {
                this.perm = data.perm;
            }
        }
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get perm() {
        return pb_1.Message.getWrapperField(this, dependency_3.Permission, 2);
    }
    set perm(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_perm() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new AuthRoleGrantPermissionRequest({});
        if (data.name != null) {
            message.name = data.name;
        }
        if (data.perm != null) {
            message.perm = dependency_3.Permission.fromObject(data.perm);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.perm != null) {
            data.perm = this.perm.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name.length)
            writer.writeString(1, this.name);
        if (this.has_perm)
            writer.writeMessage(2, this.perm, () => this.perm.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleGrantPermissionRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.perm, () => message.perm = dependency_3.Permission.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleGrantPermissionRequest.deserialize(bytes);
    }
}
exports.AuthRoleGrantPermissionRequest = AuthRoleGrantPermissionRequest;
class AuthRoleRevokePermissionRequest extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("role" in data && data.role != undefined) {
                this.role = data.role;
            }
            if ("key" in data && data.key != undefined) {
                this.key = data.key;
            }
            if ("range_end" in data && data.range_end != undefined) {
                this.range_end = data.range_end;
            }
        }
    }
    get role() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set role(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get key() {
        return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0));
    }
    set key(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get range_end() {
        return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
    }
    set range_end(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new AuthRoleRevokePermissionRequest({});
        if (data.role != null) {
            message.role = data.role;
        }
        if (data.key != null) {
            message.key = data.key;
        }
        if (data.range_end != null) {
            message.range_end = data.range_end;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.role != null) {
            data.role = this.role;
        }
        if (this.key != null) {
            data.key = this.key;
        }
        if (this.range_end != null) {
            data.range_end = this.range_end;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.role.length)
            writer.writeString(1, this.role);
        if (this.key.length)
            writer.writeBytes(2, this.key);
        if (this.range_end.length)
            writer.writeBytes(3, this.range_end);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleRevokePermissionRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.role = reader.readString();
                    break;
                case 2:
                    message.key = reader.readBytes();
                    break;
                case 3:
                    message.range_end = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleRevokePermissionRequest.deserialize(bytes);
    }
}
exports.AuthRoleRevokePermissionRequest = AuthRoleRevokePermissionRequest;
class AuthEnableResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthEnableResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthEnableResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthEnableResponse.deserialize(bytes);
    }
}
exports.AuthEnableResponse = AuthEnableResponse;
class AuthDisableResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthDisableResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthDisableResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthDisableResponse.deserialize(bytes);
    }
}
exports.AuthDisableResponse = AuthDisableResponse;
class AuthStatusResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("enabled" in data && data.enabled != undefined) {
                this.enabled = data.enabled;
            }
            if ("authRevision" in data && data.authRevision != undefined) {
                this.authRevision = data.authRevision;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get enabled() {
        return pb_1.Message.getFieldWithDefault(this, 2, false);
    }
    set enabled(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get authRevision() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set authRevision(value) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data) {
        const message = new AuthStatusResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.enabled != null) {
            message.enabled = data.enabled;
        }
        if (data.authRevision != null) {
            message.authRevision = data.authRevision;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.enabled != null) {
            data.enabled = this.enabled;
        }
        if (this.authRevision != null) {
            data.authRevision = this.authRevision;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.enabled != false)
            writer.writeBool(2, this.enabled);
        if (this.authRevision != 0)
            writer.writeUint64(3, this.authRevision);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthStatusResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.enabled = reader.readBool();
                    break;
                case 3:
                    message.authRevision = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthStatusResponse.deserialize(bytes);
    }
}
exports.AuthStatusResponse = AuthStatusResponse;
class AuthenticateResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("token" in data && data.token != undefined) {
                this.token = data.token;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get token() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set token(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthenticateResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.token != null) {
            message.token = data.token;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.token != null) {
            data.token = this.token;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.token.length)
            writer.writeString(2, this.token);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthenticateResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    message.token = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthenticateResponse.deserialize(bytes);
    }
}
exports.AuthenticateResponse = AuthenticateResponse;
class AuthUserAddResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthUserAddResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserAddResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserAddResponse.deserialize(bytes);
    }
}
exports.AuthUserAddResponse = AuthUserAddResponse;
class AuthUserGetResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("roles" in data && data.roles != undefined) {
                this.roles = data.roles;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get roles() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set roles(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthUserGetResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.roles != null) {
            message.roles = data.roles;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.roles != null) {
            data.roles = this.roles;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.roles.length)
            writer.writeRepeatedString(2, this.roles);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserGetResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserGetResponse.deserialize(bytes);
    }
}
exports.AuthUserGetResponse = AuthUserGetResponse;
class AuthUserDeleteResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthUserDeleteResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserDeleteResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserDeleteResponse.deserialize(bytes);
    }
}
exports.AuthUserDeleteResponse = AuthUserDeleteResponse;
class AuthUserChangePasswordResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthUserChangePasswordResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserChangePasswordResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserChangePasswordResponse.deserialize(bytes);
    }
}
exports.AuthUserChangePasswordResponse = AuthUserChangePasswordResponse;
class AuthUserGrantRoleResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthUserGrantRoleResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserGrantRoleResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserGrantRoleResponse.deserialize(bytes);
    }
}
exports.AuthUserGrantRoleResponse = AuthUserGrantRoleResponse;
class AuthUserRevokeRoleResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthUserRevokeRoleResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserRevokeRoleResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserRevokeRoleResponse.deserialize(bytes);
    }
}
exports.AuthUserRevokeRoleResponse = AuthUserRevokeRoleResponse;
class AuthRoleAddResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthRoleAddResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleAddResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleAddResponse.deserialize(bytes);
    }
}
exports.AuthRoleAddResponse = AuthRoleAddResponse;
class AuthRoleGetResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("perm" in data && data.perm != undefined) {
                this.perm = data.perm;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get perm() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.Permission, 2);
    }
    set perm(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthRoleGetResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.perm != null) {
            message.perm = data.perm.map(item => dependency_3.Permission.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.perm != null) {
            data.perm = this.perm.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.perm.length)
            writer.writeRepeatedMessage(2, this.perm, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleGetResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.perm, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.Permission.deserialize(reader), dependency_3.Permission));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleGetResponse.deserialize(bytes);
    }
}
exports.AuthRoleGetResponse = AuthRoleGetResponse;
class AuthRoleListResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("roles" in data && data.roles != undefined) {
                this.roles = data.roles;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get roles() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set roles(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthRoleListResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.roles != null) {
            message.roles = data.roles;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.roles != null) {
            data.roles = this.roles;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.roles.length)
            writer.writeRepeatedString(2, this.roles);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleListResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleListResponse.deserialize(bytes);
    }
}
exports.AuthRoleListResponse = AuthRoleListResponse;
class AuthUserListResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
            if ("users" in data && data.users != undefined) {
                this.users = data.users;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get users() {
        return pb_1.Message.getFieldWithDefault(this, 2, []);
    }
    set users(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new AuthUserListResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        if (data.users != null) {
            message.users = data.users;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        if (this.users != null) {
            data.users = this.users;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (this.users.length)
            writer.writeRepeatedString(2, this.users);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthUserListResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                case 2:
                    pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthUserListResponse.deserialize(bytes);
    }
}
exports.AuthUserListResponse = AuthUserListResponse;
class AuthRoleDeleteResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthRoleDeleteResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleDeleteResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleDeleteResponse.deserialize(bytes);
    }
}
exports.AuthRoleDeleteResponse = AuthRoleDeleteResponse;
class AuthRoleGrantPermissionResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthRoleGrantPermissionResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleGrantPermissionResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleGrantPermissionResponse.deserialize(bytes);
    }
}
exports.AuthRoleGrantPermissionResponse = AuthRoleGrantPermissionResponse;
class AuthRoleRevokePermissionResponse extends pb_1.Message {
    #one_of_decls = [];
    constructor(data) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("header" in data && data.header != undefined) {
                this.header = data.header;
            }
        }
    }
    get header() {
        return pb_1.Message.getWrapperField(this, ResponseHeader, 1);
    }
    set header(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_header() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new AuthRoleRevokePermissionResponse({});
        if (data.header != null) {
            message.header = ResponseHeader.fromObject(data.header);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.header != null) {
            data.header = this.header.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_header)
            writer.writeMessage(1, this.header, () => this.header.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AuthRoleRevokePermissionResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.header, () => message.header = ResponseHeader.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return AuthRoleRevokePermissionResponse.deserialize(bytes);
    }
}
exports.AuthRoleRevokePermissionResponse = AuthRoleRevokePermissionResponse;
class UnimplementedKVService {
    static definition = {
        Range: {
            path: "/etcdserverpb.KV/Range",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => RangeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => RangeResponse.deserialize(new Uint8Array(bytes))
        },
        Put: {
            path: "/etcdserverpb.KV/Put",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => PutRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => PutResponse.deserialize(new Uint8Array(bytes))
        },
        DeleteRange: {
            path: "/etcdserverpb.KV/DeleteRange",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => DeleteRangeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => DeleteRangeResponse.deserialize(new Uint8Array(bytes))
        },
        Txn: {
            path: "/etcdserverpb.KV/Txn",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => TxnRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => TxnResponse.deserialize(new Uint8Array(bytes))
        },
        Compact: {
            path: "/etcdserverpb.KV/Compact",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => CompactionRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => CompactionResponse.deserialize(new Uint8Array(bytes))
        }
    };
}
exports.UnimplementedKVService = UnimplementedKVService;
class KVClient extends grpc_1.makeGenericClientConstructor(UnimplementedKVService.definition, "KV", {}) {
    constructor(address, credentials, options) {
        super(address, credentials, options);
    }
    Range = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Range(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Put = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Put(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    DeleteRange = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.DeleteRange(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Txn = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Txn(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Compact = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Compact(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
}
exports.KVClient = KVClient;
class UnimplementedWatchService {
    static definition = {
        Watch: {
            path: "/etcdserverpb.Watch/Watch",
            requestStream: true,
            responseStream: true,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => WatchRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => WatchResponse.deserialize(new Uint8Array(bytes))
        }
    };
}
exports.UnimplementedWatchService = UnimplementedWatchService;
class WatchClient extends grpc_1.makeGenericClientConstructor(UnimplementedWatchService.definition, "Watch", {}) {
    constructor(address, credentials, options) {
        super(address, credentials, options);
    }
    Watch = (metadata, options) => {
        return super.Watch(metadata, options);
    };
}
exports.WatchClient = WatchClient;
class UnimplementedLeaseService {
    static definition = {
        LeaseGrant: {
            path: "/etcdserverpb.Lease/LeaseGrant",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => LeaseGrantRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => LeaseGrantResponse.deserialize(new Uint8Array(bytes))
        },
        LeaseRevoke: {
            path: "/etcdserverpb.Lease/LeaseRevoke",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => LeaseRevokeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => LeaseRevokeResponse.deserialize(new Uint8Array(bytes))
        },
        LeaseKeepAlive: {
            path: "/etcdserverpb.Lease/LeaseKeepAlive",
            requestStream: true,
            responseStream: true,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => LeaseKeepAliveRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => LeaseKeepAliveResponse.deserialize(new Uint8Array(bytes))
        },
        LeaseTimeToLive: {
            path: "/etcdserverpb.Lease/LeaseTimeToLive",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => LeaseTimeToLiveRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => LeaseTimeToLiveResponse.deserialize(new Uint8Array(bytes))
        },
        LeaseLeases: {
            path: "/etcdserverpb.Lease/LeaseLeases",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => LeaseLeasesRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => LeaseLeasesResponse.deserialize(new Uint8Array(bytes))
        }
    };
}
exports.UnimplementedLeaseService = UnimplementedLeaseService;
class LeaseClient extends grpc_1.makeGenericClientConstructor(UnimplementedLeaseService.definition, "Lease", {}) {
    constructor(address, credentials, options) {
        super(address, credentials, options);
    }
    LeaseGrant = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.LeaseGrant(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    LeaseRevoke = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.LeaseRevoke(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    LeaseKeepAlive = (metadata, options) => {
        return super.LeaseKeepAlive(metadata, options);
    };
    LeaseTimeToLive = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.LeaseTimeToLive(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    LeaseLeases = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.LeaseLeases(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
}
exports.LeaseClient = LeaseClient;
class UnimplementedClusterService {
    static definition = {
        MemberAdd: {
            path: "/etcdserverpb.Cluster/MemberAdd",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => MemberAddRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => MemberAddResponse.deserialize(new Uint8Array(bytes))
        },
        MemberRemove: {
            path: "/etcdserverpb.Cluster/MemberRemove",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => MemberRemoveRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => MemberRemoveResponse.deserialize(new Uint8Array(bytes))
        },
        MemberUpdate: {
            path: "/etcdserverpb.Cluster/MemberUpdate",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => MemberUpdateRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => MemberUpdateResponse.deserialize(new Uint8Array(bytes))
        },
        MemberList: {
            path: "/etcdserverpb.Cluster/MemberList",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => MemberListRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => MemberListResponse.deserialize(new Uint8Array(bytes))
        },
        MemberPromote: {
            path: "/etcdserverpb.Cluster/MemberPromote",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => MemberPromoteRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => MemberPromoteResponse.deserialize(new Uint8Array(bytes))
        }
    };
}
exports.UnimplementedClusterService = UnimplementedClusterService;
class ClusterClient extends grpc_1.makeGenericClientConstructor(UnimplementedClusterService.definition, "Cluster", {}) {
    constructor(address, credentials, options) {
        super(address, credentials, options);
    }
    MemberAdd = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.MemberAdd(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    MemberRemove = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.MemberRemove(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    MemberUpdate = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.MemberUpdate(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    MemberList = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.MemberList(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    MemberPromote = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.MemberPromote(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
}
exports.ClusterClient = ClusterClient;
class UnimplementedMaintenanceService {
    static definition = {
        Alarm: {
            path: "/etcdserverpb.Maintenance/Alarm",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AlarmRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AlarmResponse.deserialize(new Uint8Array(bytes))
        },
        Status: {
            path: "/etcdserverpb.Maintenance/Status",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => StatusRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => StatusResponse.deserialize(new Uint8Array(bytes))
        },
        Defragment: {
            path: "/etcdserverpb.Maintenance/Defragment",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => DefragmentRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => DefragmentResponse.deserialize(new Uint8Array(bytes))
        },
        Hash: {
            path: "/etcdserverpb.Maintenance/Hash",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => HashRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => HashResponse.deserialize(new Uint8Array(bytes))
        },
        HashKV: {
            path: "/etcdserverpb.Maintenance/HashKV",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => HashKVRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => HashKVResponse.deserialize(new Uint8Array(bytes))
        },
        Snapshot: {
            path: "/etcdserverpb.Maintenance/Snapshot",
            requestStream: false,
            responseStream: true,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => SnapshotRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => SnapshotResponse.deserialize(new Uint8Array(bytes))
        },
        MoveLeader: {
            path: "/etcdserverpb.Maintenance/MoveLeader",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => MoveLeaderRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => MoveLeaderResponse.deserialize(new Uint8Array(bytes))
        },
        Downgrade: {
            path: "/etcdserverpb.Maintenance/Downgrade",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => DowngradeRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => DowngradeResponse.deserialize(new Uint8Array(bytes))
        }
    };
}
exports.UnimplementedMaintenanceService = UnimplementedMaintenanceService;
class MaintenanceClient extends grpc_1.makeGenericClientConstructor(UnimplementedMaintenanceService.definition, "Maintenance", {}) {
    constructor(address, credentials, options) {
        super(address, credentials, options);
    }
    Alarm = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Alarm(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Status = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Status(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Defragment = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Defragment(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Hash = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Hash(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    HashKV = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.HashKV(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Snapshot = (message, metadata, options) => {
        return super.Snapshot(message, metadata, options);
    };
    MoveLeader = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.MoveLeader(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Downgrade = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Downgrade(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
}
exports.MaintenanceClient = MaintenanceClient;
class UnimplementedAuthService {
    static definition = {
        AuthEnable: {
            path: "/etcdserverpb.Auth/AuthEnable",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthEnableRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthEnableResponse.deserialize(new Uint8Array(bytes))
        },
        AuthDisable: {
            path: "/etcdserverpb.Auth/AuthDisable",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthDisableRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthDisableResponse.deserialize(new Uint8Array(bytes))
        },
        AuthStatus: {
            path: "/etcdserverpb.Auth/AuthStatus",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthStatusRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthStatusResponse.deserialize(new Uint8Array(bytes))
        },
        Authenticate: {
            path: "/etcdserverpb.Auth/Authenticate",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthenticateRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthenticateResponse.deserialize(new Uint8Array(bytes))
        },
        UserAdd: {
            path: "/etcdserverpb.Auth/UserAdd",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthUserAddRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthUserAddResponse.deserialize(new Uint8Array(bytes))
        },
        UserGet: {
            path: "/etcdserverpb.Auth/UserGet",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthUserGetRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthUserGetResponse.deserialize(new Uint8Array(bytes))
        },
        UserList: {
            path: "/etcdserverpb.Auth/UserList",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthUserListRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthUserListResponse.deserialize(new Uint8Array(bytes))
        },
        UserDelete: {
            path: "/etcdserverpb.Auth/UserDelete",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthUserDeleteRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthUserDeleteResponse.deserialize(new Uint8Array(bytes))
        },
        UserChangePassword: {
            path: "/etcdserverpb.Auth/UserChangePassword",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthUserChangePasswordRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthUserChangePasswordResponse.deserialize(new Uint8Array(bytes))
        },
        UserGrantRole: {
            path: "/etcdserverpb.Auth/UserGrantRole",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthUserGrantRoleRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthUserGrantRoleResponse.deserialize(new Uint8Array(bytes))
        },
        UserRevokeRole: {
            path: "/etcdserverpb.Auth/UserRevokeRole",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthUserRevokeRoleRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthUserRevokeRoleResponse.deserialize(new Uint8Array(bytes))
        },
        RoleAdd: {
            path: "/etcdserverpb.Auth/RoleAdd",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthRoleAddRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthRoleAddResponse.deserialize(new Uint8Array(bytes))
        },
        RoleGet: {
            path: "/etcdserverpb.Auth/RoleGet",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthRoleGetRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthRoleGetResponse.deserialize(new Uint8Array(bytes))
        },
        RoleList: {
            path: "/etcdserverpb.Auth/RoleList",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthRoleListRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthRoleListResponse.deserialize(new Uint8Array(bytes))
        },
        RoleDelete: {
            path: "/etcdserverpb.Auth/RoleDelete",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthRoleDeleteRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthRoleDeleteResponse.deserialize(new Uint8Array(bytes))
        },
        RoleGrantPermission: {
            path: "/etcdserverpb.Auth/RoleGrantPermission",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthRoleGrantPermissionRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthRoleGrantPermissionResponse.deserialize(new Uint8Array(bytes))
        },
        RoleRevokePermission: {
            path: "/etcdserverpb.Auth/RoleRevokePermission",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes) => AuthRoleRevokePermissionRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes) => AuthRoleRevokePermissionResponse.deserialize(new Uint8Array(bytes))
        }
    };
}
exports.UnimplementedAuthService = UnimplementedAuthService;
class AuthClient extends grpc_1.makeGenericClientConstructor(UnimplementedAuthService.definition, "Auth", {}) {
    constructor(address, credentials, options) {
        super(address, credentials, options);
    }
    AuthEnable = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.AuthEnable(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    AuthDisable = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.AuthDisable(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    AuthStatus = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.AuthStatus(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    Authenticate = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.Authenticate(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    UserAdd = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.UserAdd(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    UserGet = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.UserGet(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    UserList = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.UserList(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    UserDelete = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.UserDelete(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    UserChangePassword = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.UserChangePassword(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    UserGrantRole = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.UserGrantRole(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    UserRevokeRole = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.UserRevokeRole(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    RoleAdd = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.RoleAdd(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    RoleGet = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.RoleGet(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    RoleList = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.RoleList(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    RoleDelete = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.RoleDelete(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    RoleGrantPermission = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.RoleGrantPermission(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
    RoleRevokePermission = (message, metadata, options) => {
        if (!metadata) {
            metadata = new grpc_1.Metadata;
        }
        if (!options) {
            options = {};
        }
        return new Promise((resolve, reject) => super.RoleRevokePermission(message, metadata, options, (error, response) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        }));
    };
}
exports.AuthClient = AuthClient;
