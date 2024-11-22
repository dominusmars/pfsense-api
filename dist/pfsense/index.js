"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PfsenseAPI = void 0;
const client_1 = require("../client");
class Auth {
    constructor(client) {
        this.client = client;
    }
    postKey(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.auth.post.key, body, "basic");
        });
    }
    deleteKey(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.auth.del.key, { id }, "basic");
        });
    }
    keys(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.auth.get.keys, query);
        });
    }
    deleteKeys(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.auth.del.keys, query);
        });
    }
}
class Diagnostics {
    constructor(client) {
        this.client = client;
    }
    arpTable(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.diagnostics.Arp.get.arpTable, query);
        });
    }
    deleteArpTable(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.diagnostics.Arp.del.arpTable, query);
        });
    }
    getArpEntry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.diagnostics.Arp.get.arpEntry, { id });
        });
    }
    deleteArpEntry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.diagnostics.Arp.del.arpEntry, { id });
        });
    }
    runCommand(command) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.diagnostics.post.command, { command });
        });
    }
    getConfigRevision(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.diagnostics.config.get.revision, { id });
        });
    }
    deleteConfigRevision(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.diagnostics.config.del.revision, { id });
        });
    }
    getConfigRevisions(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.diagnostics.config.get.revisions, query);
        });
    }
    deleteConfigRevisions(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.diagnostics.config.del.revisions, query);
        });
    }
    HaltSystem(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.diagnostics.post.halt, body);
        });
    }
    RebootSystem(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.diagnostics.post.reboot, body);
        });
    }
}
class OneToOne {
    constructor(client) {
        this.client = client;
    }
    getMapping(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.nat.onetoone.get.mapping, { id });
        });
    }
    postMapping(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.nat.onetoone.post.mapping, body);
        });
    }
    patchMapping(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.nat.onetoone.patch.mapping, body);
        });
    }
    deleteMapping(id, apply) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.nat.onetoone.del.mapping, {
                id,
                apply,
            });
        });
    }
    getMappings(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.nat.onetoone.get.mappings, query);
        });
    }
    putMappings(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.nat.onetoone.put.mappings, body);
        });
    }
    deleteMappings(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.nat.onetoone.del.mappings, query);
        });
    }
}
class Outbound {
    constructor(client) {
        this.client = client;
    }
    getMapping(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.nat.outbound.get.mapping, { id });
        });
    }
    postMapping(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.nat.outbound.post.mapping, body);
        });
    }
    patchMapping(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.nat.outbound.patch.mapping, body);
        });
    }
    deleteMapping(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.nat.outbound.del.mapping, {
                id,
                apply,
            });
        });
    }
    getMappings(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.nat.outbound.get.mappings, query);
        });
    }
    putMappings(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.nat.outbound.put.mappings, body);
        });
    }
    deleteMappings(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.nat.outbound.del.mappings, query);
        });
    }
    getMode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.nat.outbound.get.mode);
        });
    }
    patchMode(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.nat.outbound.patch.mode, body);
        });
    }
}
class PortForward {
    constructor(client) {
        this.client = client;
    }
    getPortForward(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.nat.get.portForward, { id });
        });
    }
    postPortForward(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.nat.post.portForward, body);
        });
    }
    patchPortForward(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.nat.patch.portForward, body);
        });
    }
    deletePortForward(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.nat.del.portForward, { id, apply });
        });
    }
    getPortForwards(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.nat.get.portForwards, query);
        });
    }
    putPortForwards(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.nat.put.portForwards, body);
        });
    }
    deletePortForwards(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.nat.del.portForwards, query);
        });
    }
}
class Nat {
    constructor(client) {
        this.client = client;
        this.one_to_one = new OneToOne(client);
        this.outbound = new Outbound(client);
        this.portForward = new PortForward(client);
    }
}
class Limiter {
    constructor(client) {
        this.client = client;
    }
    getBandwidth(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.trafficShaper.limiter.get.bandwidth, { parent_id, id });
        });
    }
    postBandwidth(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.trafficShaper.limiter.post.bandwidth, body);
        });
    }
    patchBandwidth(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.trafficShaper.limiter.post.bandwidth, body);
        });
    }
    deleteBandwidth(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.trafficShaper.limiter.get.bandwidth, { parent_id, id });
        });
    }
    getLimiter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.trafficShaper.limiter.get.default, { id });
        });
    }
    postLimiter(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.trafficShaper.limiter.post.default, body);
        });
    }
    // Need to change Id to just id required because the rest can be optional
    patchLimiter(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.trafficShaper.limiter.patch.default, body);
        });
    }
    deleteLimiter(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.trafficShaper.limiter.del.default, { id, apply });
        });
    }
    getQueue(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.trafficShaper.limiter.get.queue, { parent_id, id });
        });
    }
    postQueue(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.trafficShaper.limiter.post.queue, body);
        });
    }
    patchQueue(Queue) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.trafficShaper.limiter.patch.queue, Queue);
        });
    }
    deleteQueue(parent_id_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (parent_id, id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.trafficShaper.limiter.del.queue, { parent_id, id, apply });
        });
    }
    getLimiters(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.trafficShaper.limiter.get.limiters, query);
        });
    }
    putLimiters(Limiters) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.trafficShaper.limiter.put.limiters, Limiters);
        });
    }
}
class TrafficShaper {
    constructor(client) {
        this.client = client;
        this.limiter = new Limiter(client);
    }
    getTrafficShaper(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.trafficShaper.get.default, { id });
        });
    }
    postTrafficShaper(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.trafficShaper.post.default, body);
        });
    }
    patchTrafficShaper(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.trafficShaper.patch.default, body);
        });
    }
    deleteTrafficShaper(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.trafficShaper.del.default, { id, apply });
        });
    }
    getQueue(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.trafficShaper.get.queue, {
                parent_id,
                id,
            });
        });
    }
    postQueue(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.trafficShaper.post.queue, body);
        });
    }
    patchQueue(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.trafficShaper.patch.queue, body);
        });
    }
    deleteQueue(parent_id_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (parent_id, id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.trafficShaper.del.queue, {
                parent_id,
                id,
                apply,
            });
        });
    }
    getTrafficShapers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.trafficShaper.get.trafficShapers, query);
        });
    }
    putTrafficShapers(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.trafficShaper.put.trafficShapers, body);
        });
    }
    deleteTrafficShapers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.trafficShaper.del.trafficShapers, query);
        });
    }
}
class VirtualIP {
    constructor(client) {
        this.client = client;
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.post.apply, {});
        });
    }
    getVirtualIp(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.virtualIp.get.default, { id });
        });
    }
    postVirtualIp(VirtualIp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.virtualIp.post.default, VirtualIp);
        });
    }
    patchVirtualIp(VirtualIp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.virtualIp.patch.default, VirtualIp);
        });
    }
    deleteVirtualIp(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.virtualIp.del.default, { id, apply });
        });
    }
    getVirtualIps(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.virtualIp.get.virtualIps, query);
        });
    }
    deleteVirtualIps(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.virtualIp.del.virtualIps, query);
        });
    }
}
class Firewall {
    constructor(client) {
        this.client = client;
        this.nat = new Nat(client);
        this.trafficShaper = new TrafficShaper(client);
        this.virtualIp = new VirtualIP(client);
    }
    getAdvancedSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.get.advancedSettings);
        });
    }
    patchAdvancedSettings(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.patch.advancedSettings, body);
        });
    }
    getAlias(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.get.alias, { id });
        });
    }
    postAlias(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.post.alias, body);
        });
    }
    patchAlias(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.patch.alias, body);
        });
    }
    deleteAlias(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.firewall.del.alias, { id, apply });
        });
    }
    getAliases(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.get.aliases, query);
        });
    }
    putAliases(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.put.aliases, body);
        });
    }
    deleteAliases(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.del.aliases, query);
        });
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.post.apply, {});
        });
    }
    getRule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.get.rule, { id });
        });
    }
    postRule(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.post.rule, body);
        });
    }
    patchRule(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.patch.rule, body);
        });
    }
    deleteRule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.del.rule, { id });
        });
    }
    getRules(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.get.rules, query);
        });
    }
    putRules(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.put.rules, body);
        });
    }
    deleteRules(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.del.rules, query);
        });
    }
    getSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.schedule.get.default, { id });
        });
    }
    postSchedule(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.schedule.post.default, body);
        });
    }
    patchSchedule(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.schedule.patch.default, body);
        });
    }
    deleteSchedule(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.schedule.del.default, { id });
        });
    }
    getScheduleTimeRange(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.schedule.get.time_range, { parent_id, id });
        });
    }
    postScheduleTimeRange(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.firewall.schedule.post.time_range, body);
        });
    }
    patchScheduleTimeRange(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.schedule.patch.time_range, body);
        });
    }
    deleteScheduleTimeRange(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.schedule.del.time_range, { parent_id, id });
        });
    }
    getSchedules(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.schedule.get.schedules, query);
        });
    }
    putSchedules(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.firewall.schedule.put.schedules, body);
        });
    }
    deleteSchedules(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.schedule.del.schedules, query);
        });
    }
    getState(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.state.get.default, query);
        });
    }
    deleteState(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.firewall.state.del.default, query);
        });
    }
    getStateSize() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.firewall.state.get.size);
        });
    }
    patchStateSize(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.firewall.state.patch.size, body);
        });
    }
}
class GraphQL {
    constructor(client) {
        this.client = client;
    }
    query(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.graphQL.post.default, { query });
        });
    }
}
class Interface {
    constructor(client) {
        this.client = client;
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.Interface.post.apply, {});
        });
    }
    getAvailableInterfaces(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.available, query);
        });
    }
    getBridge(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.bridge, { id });
        });
    }
    postBridge(Bridge) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.Interface.post.bridge, Bridge);
        });
    }
    patchBridge(Bridge) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.Interface.patch.bridge, Bridge);
        });
    }
    deleteBridge(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.Interface.del.bridge, { id });
        });
    }
    getBridges(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.bridges, query);
        });
    }
    getGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.group, { id });
        });
    }
    postGroup(Group) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.Interface.post.group, Group);
        });
    }
    patchGroup(Group) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.Interface.patch.group, Group);
        });
    }
    deleteGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.Interface.del.group, { id });
        });
    }
    getGroups(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.groups, query);
        });
    }
    putGroups(Groups) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.Interface.put.groups, Groups);
        });
    }
    deleteGroups(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.Interface.del.groups, query);
        });
    }
    getVlan(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.vlan, { id });
        });
    }
    postVlan(Vlan) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.Interface.post.vlan, Vlan);
        });
    }
    patchVlan(Vlan) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.Interface.patch.vlan, Vlan);
        });
    }
    deleteVlan(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.Interface.del.vlan, { id });
        });
    }
    getVlans(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.vlans, query);
        });
    }
    deleteVlans(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.Interface.del.vlans, query);
        });
    }
    getInterface(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.default, { id });
        });
    }
    postInterface(Interface) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.Interface.post.default, Interface);
        });
    }
    patchInterface(Interface) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.Interface.patch.default, Interface);
        });
    }
    deleteInterface(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.Interface.del.default, { id, apply });
        });
    }
    getInterfaces(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.Interface.get.interfaces, query);
        });
    }
    deleteInterfaces(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.Interface.del.interfaces, query);
        });
    }
}
class Gateway {
    constructor(client) {
        this.client = client;
    }
    getDefaultGateway() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.gateway.get.defaultGateway);
        });
    }
    patchDefaultGateway(defaultGateway) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.routing.gateway.patch.defaultGateway, defaultGateway);
        });
    }
    getGateway(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.gateway.get.default, { id });
        });
    }
    postGateway(Gateway) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.routing.gateway.post.default, Gateway);
        });
    }
    patchGateway(Gateway) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.routing.gateway.patch.default, Gateway);
        });
    }
    deleteGateway(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.routing.gateway.del.default, { id, apply });
        });
    }
    getGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.gateway.group.get.default, { id });
        });
    }
    postGroup(Group) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.routing.gateway.group.post.default, Group);
        });
    }
    patchGroup(Group) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.routing.gateway.group.patch.default, Group);
        });
    }
    deleteGroup(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.routing.gateway.group.del.default, {
                id,
                apply,
            });
        });
    }
    getGroupPriority(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.gateway.group.get.priority, {
                parent_id,
                id,
            });
        });
    }
    postGroupPriority(GroupPriority) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.routing.gateway.group.post.priority, GroupPriority);
        });
    }
    patchGroupPriority(GroupPriority) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.routing.gateway.group.patch.priority, GroupPriority);
        });
    }
    deleteGroupPriority(parent_id_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (parent_id, id, apply = false) {
            return yield this.client.delete(PfsenseAPI.routing.gateway.group.del.priority, {
                parent_id,
                id,
                apply,
            });
        });
    }
    getGroups(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.gateway.group.get.groups, query);
        });
    }
    deleteGroups(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.routing.gateway.group.del.groups, query);
        });
    }
    getGateways(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.gateway.get.gateways, query);
        });
    }
    deleteGateways(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.routing.gateway.del.gateways, query);
        });
    }
}
class Routing {
    constructor(client) {
        this.client = client;
        this.gateway = new Gateway(client);
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.routing.post.apply, {});
        });
    }
    getStaticRoute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.get.staticRoute, { id });
        });
    }
    postStaticRoute(StaticRoute) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.routing.post.staticRoute, StaticRoute);
        });
    }
    patchStaticRoute(StaticRoute) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.routing.patch.staticRoute, StaticRoute);
        });
    }
    deleteStaticRoute(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.routing.del.staticRoute, { id, apply });
        });
    }
    getStaticRoutes(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.routing.get.staticRoutes, query);
        });
    }
    deleteStaticRoutes(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.routing.del.staticRoutes, query);
        });
    }
}
class AcmeCertificate {
    constructor(client) {
        this.client = client;
    }
    getAction(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.certificate.get.action, {
                parent_id,
                id,
            });
        });
    }
    postAction(Action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.acme.certificate.post.action, Action);
        });
    }
    patchAction(Action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.acme.certificate.patch.action, Action);
        });
    }
    deleteAction(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.acme.certificate.del.action, {
                parent_id,
                id,
            });
        });
    }
    getDomain(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.certificate.get.domain, {
                parent_id,
                id,
            });
        });
    }
    postDomain(Domain) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.acme.certificate.post.domain, Domain);
        });
    }
    patchDomain(Domain) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.acme.certificate.patch.domain, Domain);
        });
    }
    deleteDomain(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.acme.certificate.del.domain, {
                parent_id,
                id,
            });
        });
    }
    getCertificate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.certificate.get.default, { id });
        });
    }
    postCertificate(Certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.acme.certificate.post.default, Certificate);
        });
    }
    patchCertificate(Certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.acme.certificate.patch.default, Certificate);
        });
    }
    deleteCertificate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.acme.certificate.del.default, {
                id,
            });
        });
    }
    getIssuances(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.certificate.get.issuances, query);
        });
    }
    postIssue(certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.acme.certificate.post.issue, {
                certificate,
            });
        });
    }
    postRenew(certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.acme.certificate.post.renew, {
                certificate,
            });
        });
    }
    getRenewals(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.certificate.get.renewals, query);
        });
    }
    getCertificates(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.certificate.get.certificates, query);
        });
    }
    putCertificates(Certificates) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.acme.certificate.put.certificates, Certificates);
        });
    }
    deleteCertificates(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.acme.certificate.del.certificates, query);
        });
    }
}
class Acme {
    constructor(client) {
        this.client = client;
        this.certificate = new AcmeCertificate(client);
    }
    getAccountKey(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.account.get.key, { id });
        });
    }
    postAccountKey(AccountKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.acme.account.post.key, AccountKey);
        });
    }
    patchAccountKey(AccountKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.acme.account.patch.key, AccountKey);
        });
    }
    deleteAccountKey(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.acme.account.del.key, { id });
        });
    }
    postAccountKeyRegister(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.acme.account.post.register, {
                name,
            });
        });
    }
    getAccountKeyRegisters(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.account.get.registrations, query);
        });
    }
    getAccountKeys(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.account.get.keys, query);
        });
    }
    putAccountKeys(AccountKeys) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.acme.account.put.keys, AccountKeys);
        });
    }
    deleteAccountKeys(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.acme.account.del.keys, query);
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.acme.get.settings);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.acme.patch.settings, Settings);
        });
    }
}
class BindAccessList {
    constructor(client) {
        this.client = client;
    }
    getAccessList(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.accessList.get.default, { id });
        });
    }
    postAccessList(AccessList) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.bind.accessList.post.default, AccessList);
        });
    }
    patchAccessList(AccessList) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.bind.accessList.patch.default, AccessList);
        });
    }
    deleteAccessList(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.accessList.del.default, { id });
        });
    }
    getEntry(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.accessList.get.entry, {
                parent_id,
                id,
            });
        });
    }
    postEntry(Entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.bind.accessList.post.entry, Entry);
        });
    }
    patchEntry(Entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.bind.accessList.patch.entry, Entry);
        });
    }
    deleteEntry(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.accessList.del.entry, {
                parent_id,
                id,
            });
        });
    }
    getAccessLists(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.accessList.get.access_lists, query);
        });
    }
    putAccessLists(AccessLists) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.bind.accessList.put.access_lists, AccessLists);
        });
    }
    deleteAccessLists(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.accessList.del.access_lists, query);
        });
    }
}
class BindSync {
    constructor(client) {
        this.client = client;
    }
    getRemoteHost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.sync.get.remoteHost, { id });
        });
    }
    postRemoteHost(RemoteHost) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.bind.sync.post.remoteHost, RemoteHost);
        });
    }
    patchRemoteHost(RemoteHost) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.bind.sync.patch.remoteHost, RemoteHost);
        });
    }
    deleteRemoteHost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.sync.del.remoteHost, { id });
        });
    }
    getRemoteHosts(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.sync.get.remoteHosts, query);
        });
    }
    putRemoteHosts(RemoteHosts) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.bind.sync.put.remoteHosts, RemoteHosts);
        });
    }
    deleteRemoteHosts(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.sync.del.remoteHosts, query);
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.sync.get.settings);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.bind.sync.patch.settings, Settings);
        });
    }
}
class BindView {
    constructor(client) {
        this.client = client;
    }
    getView(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.get.view, { id });
        });
    }
    postView(View) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.bind.post.view, View);
        });
    }
    patchView(View) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.bind.patch.view, View);
        });
    }
    deleteView(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.del.view, { id });
        });
    }
    getViews(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.get.views, query);
        });
    }
    putViews(Views) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.bind.put.views, Views);
        });
    }
    deleteViews(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.del.views, query);
        });
    }
}
class BindZone {
    constructor(client) {
        this.client = client;
    }
    getZone(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.zone.get.default, { id });
        });
    }
    postZone(Zone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.bind.zone.post.default, Zone);
        });
    }
    patchZone(Zone) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.bind.zone.patch.default, Zone);
        });
    }
    deleteZone(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.zone.del.default, { id });
        });
    }
    getRecord(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.zone.get.record, { parent_id, id });
        });
    }
    postRecord(Record) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.bind.zone.post.record, Record);
        });
    }
    patchRecord(Record) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.bind.zone.patch.record, Record);
        });
    }
    deleteRecord(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.zone.del.record, { parent_id, id });
        });
    }
    getZones(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.bind.zone.get.zones, query);
        });
    }
    putZones(Zones) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.bind.zone.put.zones, Zones);
        });
    }
    deleteZones(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.bind.zone.del.zones, query);
        });
    }
}
class Bind {
    constructor(client) {
        this.client = client;
        this.accessList = new BindAccessList(client);
        this.sync = new BindSync(client);
        this.view = new BindView(client);
        this.zone = new BindZone(client);
    }
}
class Cron {
    constructor(client) {
        this.client = client;
    }
    getJob(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.cron.get.job, { id });
        });
    }
    postJob(Job) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.cron.post.job, Job);
        });
    }
    patchJob(Job) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.cron.patch.job, Job);
        });
    }
    deleteJob(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.cron.del.job, { id });
        });
    }
    getJobs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.cron.get.jobs, query);
        });
    }
    putJobs(Jobs) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.cron.put.jobs, Jobs);
        });
    }
    deleteJobs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.cron.del.jobs, query);
        });
    }
}
class DhcpServer {
    constructor(client) {
        this.client = client;
    }
    getAddressPool(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dhcpServer.get.addressPool, {
                parent_id,
                id,
            });
        });
    }
    postAddressPool(AddressPool) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dhcpServer.post.addressPool, AddressPool);
        });
    }
    patchAddressPool(AddressPool) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dhcpServer.patch.addressPool, AddressPool);
        });
    }
    deleteAddressPool(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.dhcpServer.del.addressPool, {
                parent_id,
                id,
            });
        });
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dhcpServer.post.apply, {});
        });
    }
    patchBackend(dchpbackend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dhcpServer.patch.backend, {
                dchpbackend,
            });
        });
    }
    getCustomOption(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dhcpServer.get.customOption, {
                parent_id,
                id,
            });
        });
    }
    postCustomOption(CustomOption) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dhcpServer.post.customOption, CustomOption);
        });
    }
    patchCustomOption(CustomOption) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dhcpServer.patch.customOption, CustomOption);
        });
    }
    deleteCustomOption(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.dhcpServer.del.customOption, {
                parent_id,
                id,
            });
        });
    }
    getServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dhcpServer.get.default, { id });
        });
    }
    patchServer(Server) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dhcpServer.patch.default, Server);
        });
    }
    getStaticMapping(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dhcpServer.get.staticMapping, {
                parent_id,
                id,
            });
        });
    }
    postStaticMapping(StaticMapping) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dhcpServer.post.staticMapping, StaticMapping);
        });
    }
    patchStaticMapping(StaticMapping) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dhcpServer.patch.staticMapping, StaticMapping);
        });
    }
    deleteStaticMapping(parent_id_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (parent_id, id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dhcpServer.del.staticMapping, {
                parent_id,
                id,
                apply,
            });
        });
    }
    getServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dhcpServer.get.servers, query);
        });
    }
    putServers(Servers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.dhcpServer.put.servers, Servers);
        });
    }
}
class DnsForwarderHostOverride {
    constructor(client) {
        this.client = client;
    }
    getAlias(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsForwarder.hostOverride.get.alias, { parent_id, id });
        });
    }
    postAlias(Alias) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsForwarder.hostOverride.post.alias, Alias);
        });
    }
    patchAlias(Alias) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsForwarder.hostOverride.patch.alias, Alias);
        });
    }
    deleteAlias(parent_id_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (parent_id, id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dnsForwarder.hostOverride.del.alias, { parent_id, id, apply });
        });
    }
    getHostOverride(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsForwarder.hostOverride.get.default, { id });
        });
    }
    postHostOverride(HostOverride) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsForwarder.hostOverride.post.default, HostOverride);
        });
    }
    patchHostOverride(HostOverride) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsForwarder.hostOverride.patch.default, HostOverride);
        });
    }
    deleteHostOverride(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dnsForwarder.hostOverride.del.default, { id, apply });
        });
    }
    getHostOverrides(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsForwarder.hostOverride.get.overrides, query);
        });
    }
    putHostOverrides(HostOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.dnsForwarder.hostOverride.put.overrides, HostOverrides);
        });
    }
    deleteHostOverrides(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.dnsForwarder.hostOverride.del.overrides, query);
        });
    }
}
class DnsForwarder {
    constructor(client) {
        this.client = client;
        this.hostOverride = new DnsForwarderHostOverride(client);
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsForwarder.post.apply, {});
        });
    }
}
class DnsResolverAccessList {
    constructor(client) {
        this.client = client;
    }
    getAccessList(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.accessList.get.default, { id });
        });
    }
    postAccessList(AccessList) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsResolver.accessList.post.default, AccessList);
        });
    }
    patchAccessList(AccessList) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsResolver.accessList.patch.default, AccessList);
        });
    }
    deleteAccessList(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.accessList.del.default, { apply, id });
        });
    }
    getNetwork(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.accessList.get.network, { parent_id, id });
        });
    }
    postNetwork(Network) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsResolver.accessList.post.network, Network);
        });
    }
    patchNetwork(Network) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsResolver.accessList.patch.network, Network);
        });
    }
    deleteNetwork(parent_id_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (parent_id, id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.accessList.del.network, { parent_id, id, apply });
        });
    }
    getAccessLists(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.accessList.get.access_lists, query);
        });
    }
    putAccessLists(AccessLists) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.dnsResolver.accessList.put.access_lists, AccessLists);
        });
    }
    deleteAccessLists(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.accessList.del.access_lists, query);
        });
    }
}
class DnsResolverHostOverride {
    constructor(client) {
        this.client = client;
    }
    getAlias(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.hostOverride.get.alias, { parent_id, id });
        });
    }
    postAlias(Alias) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsResolver.hostOverride.post.alias, Alias);
        });
    }
    patchAlias(Alias) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsResolver.hostOverride.patch.alias, Alias);
        });
    }
    deleteAlias(parent_id_1, id_1) {
        return __awaiter(this, arguments, void 0, function* (parent_id, id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.hostOverride.del.alias, { parent_id, id, apply });
        });
    }
    getHostOverride(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.hostOverride.get.default, { id });
        });
    }
    postHostOverride(HostOverride) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsResolver.hostOverride.post.default, HostOverride);
        });
    }
    patchHostOverride(HostOverride) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsResolver.hostOverride.patch.default, HostOverride);
        });
    }
    deleteHostOverride(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.hostOverride.del.default, { id, apply });
        });
    }
    getHostOverrides(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.hostOverride.get.overrides, query);
        });
    }
    putHostOverrides(HostOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.dnsResolver.hostOverride.put.overrides, HostOverrides);
        });
    }
    deleteHostOverrides(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.hostOverride.del.overrides, query);
        });
    }
}
class DnsResolver {
    constructor(client) {
        this.client = client;
        this.accessList = new DnsResolverAccessList(client);
        this.hostOverride = new DnsResolverHostOverride(client);
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsResolver.post.apply, {});
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.get.settings);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsResolver.patch.settings, Settings);
        });
    }
    getDomainOverride(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.get.domainOverride, {
                id,
            });
        });
    }
    postDomainOverride(DomainOverride) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.dnsResolver.post.domainOverride, DomainOverride);
        });
    }
    patchDomainOverride(DomainOverride) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.dnsResolver.patch.domainOverride, DomainOverride);
        });
    }
    deleteDomainOverride(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.del.domainOverride, { id, apply });
        });
    }
    getDomainOverrides(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.dnsResolver.get.domainOverrides, query);
        });
    }
    putDomainOverrides(DomainOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.dnsResolver.put.domainOverrides, DomainOverrides);
        });
    }
    deleteDomainOverrides(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.dnsResolver.del.domainOverrides, query);
        });
    }
}
class HaProxyBackend {
    constructor(client) {
        this.client = client;
    }
    getACL(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.backend.get.acl, {
                parent_id,
                id,
            });
        });
    }
    postACL(ACL) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.backend.post.acl, ACL);
        });
    }
    patchACL(ACL) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.backend.patch.acl, ACL);
        });
    }
    deleteACL(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.backend.del.acl, {
                parent_id,
                id,
            });
        });
    }
    getAction(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.backend.get.action, {
                parent_id,
                id,
            });
        });
    }
    postAction(Action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.backend.post.action, Action);
        });
    }
    patchAction(Action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.backend.patch.action, Action);
        });
    }
    deleteAction(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.backend.del.action, {
                parent_id,
                id,
            });
        });
    }
    getBackend(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.backend.get.default, { id });
        });
    }
    postBackend(Backend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.backend.post.default, Backend);
        });
    }
    patchBackend(Backend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.backend.patch.default, Backend);
        });
    }
    deleteBackend(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.backend.del.default, { id });
        });
    }
    getErrorFile(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.backend.get.errorFile, {
                parent_id,
                id,
            });
        });
    }
    postErrorFile(ErrorFile) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.backend.post.errorFile, ErrorFile);
        });
    }
    patchErrorFile(ErrorFile) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.backend.patch.errorFile, ErrorFile);
        });
    }
    deleteErrorFile(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.backend.del.errorFile, {
                parent_id,
                id,
            });
        });
    }
    getServer(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.backend.get.server, {
                parent_id,
                id,
            });
        });
    }
    postServer(Server) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.backend.post.server, Server);
        });
    }
    patchServer(Server) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.backend.patch.server, Server);
        });
    }
    deleteServer(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.backend.del.server, {
                parent_id,
                id,
            });
        });
    }
    getBackends(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.backend.get.backends, query);
        });
    }
    putBackends(Backends) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.haProxy.backend.put.backends, Backends);
        });
    }
    deleteBackends(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.backend.del.backends, query);
        });
    }
}
class HaProxyFrontend {
    constructor(client) {
        this.client = client;
    }
    getACL(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.frontend.get.acl, {
                parent_id,
                id,
            });
        });
    }
    postACL(ACL) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.frontend.post.acl, ACL);
        });
    }
    patchACL(ACL) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.frontend.patch.acl, ACL);
        });
    }
    deleteACL(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.frontend.del.acl, {
                parent_id,
                id,
            });
        });
    }
    getAction(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.frontend.get.action, {
                parent_id,
                id,
            });
        });
    }
    postAction(Action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.frontend.post.action, Action);
        });
    }
    patchAction(Action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.frontend.patch.action, Action);
        });
    }
    deleteAction(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.frontend.del.action, {
                parent_id,
                id,
            });
        });
    }
    getAddress(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.frontend.get.address, {
                parent_id,
                id,
            });
        });
    }
    postAddress(Address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.frontend.post.address, Address);
        });
    }
    patchAddress(Address) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.frontend.patch.address, Address);
        });
    }
    deleteAddress(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.frontend.del.address, {
                parent_id,
                id,
            });
        });
    }
    getFrontend(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.frontend.get.default, { id });
        });
    }
    postFrontend(Frontend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.frontend.post.default, Frontend);
        });
    }
    patchFrontend(Frontend) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.frontend.patch.default, Frontend);
        });
    }
    deleteFrontend(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.frontend.del.default, {
                id,
            });
        });
    }
    getErrorFile(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.frontend.get.errorFile, {
                parent_id,
                id,
            });
        });
    }
    postErrorFile(ErrorFile) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.frontend.post.errorFile, ErrorFile);
        });
    }
    patchErrorFile(ErrorFile) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.frontend.patch.errorFile, ErrorFile);
        });
    }
    deleteErrorFile(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.frontend.del.errorFile, {
                parent_id,
                id,
            });
        });
    }
    getFrontends(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.frontend.get.frontends, query);
        });
    }
    putFrontends(Frontends) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.haProxy.frontend.put.frontends, Frontends);
        });
    }
    deleteFrontends(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.frontend.del.frontends, query);
        });
    }
}
class HaProxySettings {
    constructor(client) {
        this.client = client;
    }
    getDnsResolver(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.settings.get.dns_resolver, {
                id,
            });
        });
    }
    postDnsResolver(DnsResolver) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.settings.post.dns_resolver, DnsResolver);
        });
    }
    patchDnsResolver(DnsResolver) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.settings.patch.dns_resolver, DnsResolver);
        });
    }
    deleteDnsResolver(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.settings.del.dns_resolver, {
                id,
            });
        });
    }
    getEmailMailer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.settings.get.email, {
                id,
            });
        });
    }
    postEmailMailer(EmailMailer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.settings.post.email, EmailMailer);
        });
    }
    patchEmailMailer(EmailMailer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.settings.patch.email, EmailMailer);
        });
    }
    deleteEmailMailer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.settings.del.email, {
                id,
            });
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.settings.get.default);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.settings.patch.default, Settings);
        });
    }
}
class HaProxy {
    constructor(client) {
        this.client = client;
        this.backend = new HaProxyBackend(client);
        this.frontend = new HaProxyFrontend(client);
        this.settings = new HaProxySettings(client);
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.post.apply, {});
        });
    }
    getFile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.get.file, { id });
        });
    }
    postFile(File) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.haProxy.post.file, File);
        });
    }
    patchFile(File) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.haProxy.patch.file, File);
        });
    }
    deleteFile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.del.file, { id });
        });
    }
    getFiles(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.haProxy.get.files, query);
        });
    }
    putFiles(Files) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.haProxy.put.files, Files);
        });
    }
    deleteFiles(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.haProxy.del.files, query);
        });
    }
}
class Ntp {
    constructor(client) {
        this.client = client;
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.ntp.get.settings);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.ntp.patch.settings, Settings);
        });
    }
    getTimeServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.ntp.get.time_server, { id });
        });
    }
    postTimeServer(TimeServer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.ntp.post.time_server, TimeServer);
        });
    }
    patchTimeServer(TimeServer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.ntp.patch.time_server, TimeServer);
        });
    }
    deleteTimeServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.ntp.del.time_server, { id });
        });
    }
    getTimeServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.ntp.get.time_servers, query);
        });
    }
    putTimeServers(TimeServers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.ntp.put.time_servers, TimeServers);
        });
    }
    deleteTimeServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.ntp.del.time_servers, query);
        });
    }
}
class SSH {
    constructor(client) {
        this.client = client;
    }
    getSSH() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.ssh.get.default);
        });
    }
    patchSSH(SSH) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.ssh.patch.default, SSH);
        });
    }
}
class ServiceWatchDog {
    constructor(client) {
        this.client = client;
    }
    getServiceWatchDog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.service_watchdog.get.default, { id });
        });
    }
    postServiceWatchDog(ServiceWatchDog) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.service_watchdog.post.default, ServiceWatchDog);
        });
    }
    patchServiceWatchDog(ServiceWatchDog) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.services.service_watchdog.patch.default, ServiceWatchDog);
        });
    }
    deleteServiceWatchDog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.service_watchdog.del.default, {
                id,
            });
        });
    }
    getServiceWatchDogs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.services.service_watchdog.get.watchdogs, query);
        });
    }
    putServiceWatchDogs(ServiceWatchDogs) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.services.service_watchdog.put.watchdogs, ServiceWatchDogs);
        });
    }
    deleteServiceWatchDogs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.services.service_watchdog.del.watchdogs, query);
        });
    }
}
class Services {
    constructor(client) {
        this.client = client;
        this.acme = new Acme(client);
        this.bind = new Bind(client);
        this.cron = new Cron(client);
        this.dhcpServer = new DhcpServer(client);
        this.dnsForwarder = new DnsForwarder(client);
        this.dnsResolver = new DnsResolver(client);
        this.haProxy = new HaProxy(client);
        this.ntp = new Ntp(client);
        this.ssh = new SSH(client);
        this.watchdog = new ServiceWatchDog(client);
    }
    wakeOnLan(Interface, mac_addr) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.services.wakeOnLan.post.send, {
                interface: Interface,
                mac_addr,
            });
        });
    }
}
class StatusDhcpServer {
    constructor(client) {
        this.client = client;
    }
    getLeases(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.dhcpServer.get.leases, query);
        });
    }
    deleteLeases(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.status.dhcpServer.del.leases, query);
        });
    }
}
class StatusIpsec {
    constructor(client) {
        this.client = client;
    }
    getChildSA(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.ipsec.get.child_sa, { parent_id, id });
        });
    }
    getSas(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.ipsec.get.sas, query);
        });
    }
}
class StatusLog {
    constructor(client) {
        this.client = client;
    }
    getDhcp(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.logs.get.dhcp, query);
        });
    }
    getFirewall(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.logs.get.firewall, query);
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.logs.get.settings);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.status.logs.patch.settings, Settings);
        });
    }
    getSystem(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.logs.get.system, query);
        });
    }
}
class StatusOpenVpn {
    constructor(client) {
        this.client = client;
    }
    getClients(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.openvpn.get.clients, query);
        });
    }
    getServerConnection(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.openvpn.server.get.connection, {
                parent_id,
                id,
            });
        });
    }
    deleteServerConnection(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.status.openvpn.server.del.connection, {
                parent_id,
                id,
            });
        });
    }
    getServerRoute(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.openvpn.server.get.route, {
                parent_id,
                id,
            });
        });
    }
    getServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.openvpn.get.servers, query);
        });
    }
}
class Status {
    constructor(client) {
        this.client = client;
        this.dhcpServer = new StatusDhcpServer(client);
        this.ipsec = new StatusIpsec(client);
        this.log = new StatusLog(client);
        this.openvpn = new StatusOpenVpn(client);
    }
    getCarp() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.get.carp);
        });
    }
    patchCarp(Carp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.status.patch.carp, Carp);
        });
    }
    getGateways(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.get.gateways, query);
        });
    }
    getInterfaces(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.get.interfaces, query);
        });
    }
    postService(name, action) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.status.post.service, { name, action });
        });
    }
    getServices(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.get.services, query);
        });
    }
    getSystem() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.status.get.system);
        });
    }
}
class SystemCerts {
    constructor(client) {
        this.client = client;
    }
    getCrl(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.crl.get.default, { id });
        });
    }
    postCrl(Crl) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.crl.post.default, Crl);
        });
    }
    patchCrl(Crl) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.crl.patch.default, Crl);
        });
    }
    deleteCrl(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.crl.del.default, { id });
        });
    }
    getRevokeCertificate(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.crl.post.revoke_certificate, { parent_id, id });
        });
    }
    postRevokeCertificate(RevokeCertificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.crl.post.revoke_certificate, RevokeCertificate);
        });
    }
    patchRevokeCertificate(RevokeCertificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.crl.patch.revoke_certificate, RevokeCertificate);
        });
    }
    deleteRevokeCertificate(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.crl.del.revoke_certificate, { parent_id, id });
        });
    }
    getCrls(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.crl.get.crls, query);
        });
    }
    deleteCrls(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.crl.del.crls, query);
        });
    }
    getCertificateAuthorities(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.certificate_authority.get.default, query);
        });
    }
    deleteCertificateAuthorities(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.certificate_authority.del.default, query);
        });
    }
    getCertificateAuthority(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.certificate_authority.get.default, { id });
        });
    }
    postCertificateAuthority(CertificateAuthority) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate_authority.post.default, CertificateAuthority);
        });
    }
    patchCertificateAuthority(CertificateAuthority) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.certificate_authority.patch.default, CertificateAuthority);
        });
    }
    deleteCertificateAuthority(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.certificate_authority.del.default, { id });
        });
    }
    generateCertificate(CertificateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate_authority.post.generate, CertificateRequest);
        });
    }
    renewCertificate(RenewCertificateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate_authority.post.renew, RenewCertificateRequest);
        });
    }
    getCertificate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.certificate.get.default, { id });
        });
    }
    postCertificate(Certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate.post.default, Certificate);
        });
    }
    patchCertificate(Certificate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.certificate.patch.default, Certificate);
        });
    }
    deleteCertificate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.certificate.del.default, { id });
        });
    }
    generateInternalCertificate(CertificateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate.post.generate, CertificateRequest);
        });
    }
    exportPKCS12Certificate(ExportPKCS12Request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate.post.pkcs12, ExportPKCS12Request);
        });
    }
    renewInternalCertificate(RenewCertificateRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate.post.renew, RenewCertificateRequest);
        });
    }
    signingRequest(CertificateSigningRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate.post.sign, CertificateSigningRequest);
        });
    }
    signSingingRequest(CertificateSigningRequestSign) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.certificate.post.sign, CertificateSigningRequestSign);
        });
    }
    getCertificates(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.certificate.get.certificates, query);
        });
    }
    deleteCertificates(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.certificate.del.certificates, query);
        });
    }
}
class SystemPackage {
    constructor(client) {
        this.client = client;
    }
    getAvailable(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.Package.get.available, query);
        });
    }
    getPackage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.Package.get.default, { id });
        });
    }
    postPackage(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.Package.post.default, { name });
        });
    }
    deletePackage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.Package.del.default, { id });
        });
    }
    getPackages(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.Package.get.packages, query);
        });
    }
    deletePackages(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.Package.del.packages, query);
        });
    }
}
class SystemRestAPI {
    constructor(client) {
        this.client = client;
    }
    getAccessList(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.restapi.get.access_list, query);
        });
    }
    putAccessList(AccessList) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.system.restapi.put.access_list, AccessList);
        });
    }
    deleteAccessList(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.restapi.del.access_list, query);
        });
    }
    getAccessListEntry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.restapi.get.entry, { id });
        });
    }
    postAccessListEntry(AccessListEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.restapi.post.entry, AccessListEntry);
        });
    }
    patchAccessListEntry(AccessListEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.restapi.patch.entry, AccessListEntry);
        });
    }
    deleteAccessListEntry(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.restapi.del.entry, { id });
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.restapi.get.settings);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.restapi.patch.settings, Settings);
        });
    }
    syncSettings(sync_data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.restapi.post.settings_sync, { sync_data });
        });
    }
    getVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.restapi.get.version);
        });
    }
    patchVersion(install_version) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.restapi.patch.version, { install_version });
        });
    }
}
class SystemWebGUI {
    constructor(client) {
        this.client = client;
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.get.webgui_settings);
        });
    }
    patchSettings(WebGUISettings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.patch.webgui_settings, WebGUISettings);
        });
    }
}
class System {
    constructor(client) {
        this.client = client;
        this.certificate = new SystemCerts(client);
        this.package = new SystemPackage(client);
        this.restapi = new SystemRestAPI(client);
        this.webgui = new SystemWebGUI(client);
    }
    getConsole() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.get.console);
        });
    }
    patchConsole(SystemConsole) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.patch.console, SystemConsole);
        });
    }
    getDNS() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.get.dns);
        });
    }
    patchDNS(SystemDNS) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.patch.dns, SystemDNS);
        });
    }
    getHostname() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.get.hostname);
        });
    }
    patchHostname(SystemHostname) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.patch.hostname, SystemHostname);
        });
    }
    getTunable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.get.tunable, { id });
        });
    }
    postTunable(SystemTunable) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.system.post.tunable, SystemTunable);
        });
    }
    patchTunable(SystemTunable) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.system.patch.tunable, SystemTunable);
        });
    }
    deleteTunable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.del.tunable, { id });
        });
    }
    getTunables(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.get.tunables, query);
        });
    }
    putTunables(Tunables) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.system.put.tunables, Tunables);
        });
    }
    deleteTunables(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.system.del.tunables, query);
        });
    }
    getVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.system.get.version);
        });
    }
}
class UserAuthServer {
    constructor(client) {
        this.client = client;
    }
    getAuthServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.user.get.auth_server, { id });
        });
    }
    postAuthServer(AuthServer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.user.post.auth_server, AuthServer);
        });
    }
    patchAuthServer(AuthServer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.user.patch.auth_server, AuthServer);
        });
    }
    deleteAuthServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.user.del.auth_server, { id });
        });
    }
    getAuthServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.user.get.auth_servers, query);
        });
    }
    putAuthServers(AuthServers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.user.put.auth_servers, AuthServers);
        });
    }
    deleteAuthServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.user.del.auth_servers, query);
        });
    }
}
class UserGroup {
    constructor(client) {
        this.client = client;
    }
    getGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.user.get.group, { id });
        });
    }
    postGroup(Group) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.user.post.group, Group);
        });
    }
    patchGroup(Group) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.user.patch.group, Group);
        });
    }
    deleteGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.user.del.group, { id });
        });
    }
    getGroups(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.user.get.groups, query);
        });
    }
    putGroups(Groups) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.user.put.groups, Groups);
        });
    }
    deleteGroups(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.user.del.groups, query);
        });
    }
}
class User {
    constructor(client) {
        this.client = client;
        this.authServer = new UserAuthServer(client);
        this.group = new UserGroup(client);
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.user.get.default, { id });
        });
    }
    postUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.user.post.default, User);
        });
    }
    patchUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.user.patch.default, User);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.user.del.default, { id });
        });
    }
    getUsers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.user.get.users, { query });
        });
    }
    deleteUsers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.user.del.users, { query });
        });
    }
}
class IPsecPhase1 {
    constructor(client) {
        this.client = client;
    }
    getPhase1Encryption(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.ipsec.phase1.get.encryption, { parent_id, id });
        });
    }
    postPhase1Encryption(Phase1Encryption) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.ipsec.phase1.post.encryption, Phase1Encryption);
        });
    }
    patchPhase1Encryption(Phase1Encryption) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.ipsec.phase1.patch.encryption, Phase1Encryption);
        });
    }
    deletePhase1Encryption(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.ipsec.phase1.del.encryption, { parent_id, id });
        });
    }
    getPhase1(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.ipsec.phase1.get.default, { id });
        });
    }
    postPhase1(Phase1) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.ipsec.phase1.post.default, Phase1);
        });
    }
    patchPhase1(Phase1) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.ipsec.phase1.patch.default, Phase1);
        });
    }
    deletePhase1(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.vpn.ipsec.phase1.del.default, { id, apply });
        });
    }
    getPhase1s(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.ipsec.get.phase1s, query);
        });
    }
    putPhase1s(Phase1s) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.vpn.ipsec.get.phase1s, Phase1s);
        });
    }
    deletePhase1s(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.ipsec.get.phase1s, query);
        });
    }
}
class IPsecPhase2 {
    constructor(client) {
        this.client = client;
    }
    getPhase2Encryption(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.ipsec.phase2.get.encryption, { parent_id, id });
        });
    }
    postPhase2Encryption(Phase2Encryption) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.ipsec.phase2.post.encryption, Phase2Encryption);
        });
    }
    patchPhase2Encryption(Phase2Encryption) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.ipsec.phase2.patch.encryption, Phase2Encryption);
        });
    }
    deletePhase2Encryption(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.ipsec.phase2.del.encryption, { parent_id, id });
        });
    }
    getPhase2(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.ipsec.phase2.get.default, { id });
        });
    }
    postPhase2(Phase2) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.ipsec.phase2.post.default, Phase2);
        });
    }
    patchPhase2(Phase2) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.ipsec.phase2.patch.default, Phase2);
        });
    }
    deletePhase2(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, apply = false) {
            return yield this.client.delete(PfsenseAPI.vpn.ipsec.phase2.del.default, { id, apply });
        });
    }
    getPhase2s(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.ipsec.get.phase2s, query);
        });
    }
    putPhase2s(Phase2s) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.vpn.ipsec.get.phase2s, Phase2s);
        });
    }
    deletePhase2s(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.ipsec.get.phase2s, query);
        });
    }
}
class VPNIpsec {
    constructor(client) {
        this.client = client;
        this.phase1 = new IPsecPhase1(client);
        this.phase2 = new IPsecPhase2(client);
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.ipsec.post.apply, {});
        });
    }
}
class OpenVPN {
    constructor(client) {
        this.client = client;
    }
    getCSO(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.openvpn.get.cso, { id });
        });
    }
    postCSO(CSO) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.openvpn.post.cso, CSO);
        });
    }
    patchCSO(CSO) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.openvpn.patch.cso, CSO);
        });
    }
    deleteCSO(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.openvpn.del.cso, { id });
        });
    }
    getCSOs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.openvpn.get.csos, query);
        });
    }
    deleteCSOs(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.openvpn.del.csos, query);
        });
    }
    getClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.openvpn.get.client, { id });
        });
    }
    postClient(Client) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.openvpn.post.client, Client);
        });
    }
    patchClient(Client) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.openvpn.patch.client, Client);
        });
    }
    deleteClient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.openvpn.del.client, { id });
        });
    }
    getClients(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.openvpn.get.clients, query);
        });
    }
    deleteClients(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.openvpn.del.clients, query);
        });
    }
    getServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.openvpn.get.server, { id });
        });
    }
    postServer(Server) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.openvpn.post.server, Server);
        });
    }
    patchServer(Server) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.openvpn.patch.server, Server);
        });
    }
    deleteServer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.openvpn.del.server, { id });
        });
    }
    deleteServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.openvpn.del.servers, query);
        });
    }
    getServers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.openvpn.get.servers, query);
        });
    }
}
class WireGuard {
    constructor(client) {
        this.client = client;
    }
    apply() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.wireguard.post.apply, {});
        });
    }
    getAllowedIps(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.wireguard.peer.get.allowed_ips, {
                parent_id,
                id,
            });
        });
    }
    postAllowedIps(AllowedIps) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.wireguard.peer.post.allowed_ips, AllowedIps);
        });
    }
    patchAllowedIps(AllowedIps) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.wireguard.peer.patch.allowed_ips, AllowedIps);
        });
    }
    deleteAllowedIps(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.wireguard.peer.del.allowed_ips, {
                parent_id,
                id,
            });
        });
    }
    getPeer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.wireguard.peer.get.default, { id });
        });
    }
    postPeer(Peer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.wireguard.peer.post.default, Peer);
        });
    }
    patchPeer(Peer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.wireguard.peer.patch.default, Peer);
        });
    }
    deletePeer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.wireguard.peer.del.default, { id });
        });
    }
    getPeers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.wireguard.peer.get.peers, query);
        });
    }
    putPeers(Peers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.vpn.wireguard.peer.put.peers, Peers);
        });
    }
    deletePeers(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.wireguard.peer.del.peers, query);
        });
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.wireguard.get.settings);
        });
    }
    patchSettings(Settings) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.wireguard.patch.settings, Settings);
        });
    }
    getTunnelAddress(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.wireguard.tunnel.get.address, {
                parent_id,
                id,
            });
        });
    }
    postTunnelAddress(TunnelAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.wireguard.tunnel.post.address, TunnelAddress);
        });
    }
    patchTunnelAddress(TunnelAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.wireguard.tunnel.patch.address, TunnelAddress);
        });
    }
    deleteTunnelAddress(parent_id, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.wireguard.tunnel.del.address, {
                parent_id,
                id,
            });
        });
    }
    getTunnel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.wireguard.tunnel.get.default, { id });
        });
    }
    postTunnel(Tunnel) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.post(PfsenseAPI.vpn.wireguard.tunnel.post.default, Tunnel);
        });
    }
    patchTunnel(Tunnel) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.patch(PfsenseAPI.vpn.wireguard.tunnel.patch.default, Tunnel);
        });
    }
    deleteTunnel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.wireguard.tunnel.del.default, { id });
        });
    }
    getTunnels(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get(PfsenseAPI.vpn.wireguard.tunnel.get.tunnels, query);
        });
    }
    putTunnels(Tunnels) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.put(PfsenseAPI.vpn.wireguard.tunnel.put.tunnels, Tunnels);
        });
    }
    deleteTunnels(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.delete(PfsenseAPI.vpn.wireguard.tunnel.del.tunnels, query);
        });
    }
}
class VPN {
    constructor(client) {
        this.client = client;
        this.ipsec = new VPNIpsec(client);
        this.openvpn = new OpenVPN(client);
        this.wireguard = new WireGuard(client);
    }
}
class Pfsense {
    constructor(host, api_key, { version } = { version: "v2" }) {
        this.version = version;
        this.defaultEndpoint = "/api/" + this.version;
        this.host = host;
        this.key = api_key;
        this.full_endpoint = this.host + this.defaultEndpoint;
        this.client = new client_1.Client({
            base_url: this.full_endpoint,
            api_key: this.key,
        });
        this.auth = new Auth(this.client);
        this.diagnostics = new Diagnostics(this.client);
        this.firewall = new Firewall(this.client);
        this.graphql = new GraphQL(this.client);
        this.interface = new Interface(this.client);
        this.routing = new Routing(this.client);
        this.service = new Services(this.client);
        this.status = new Status(this.client);
        this.system = new System(this.client);
        this.user = new User(this.client);
        this.vpn = new VPN(this.client);
    }
}
var PfsenseAPI;
(function (PfsenseAPI) {
    let auth;
    (function (auth) {
        let get;
        (function (get) {
            get["keys"] = "/auth/keys";
            get["jwt"] = "/auth/jwt";
        })(get = auth.get || (auth.get = {}));
        let post;
        (function (post) {
            post["key"] = "/auth/key";
            post["keys"] = "/auth/keys";
        })(post = auth.post || (auth.post = {}));
        let del;
        (function (del) {
            del["key"] = "/auth/key";
            del["keys"] = "/auth/keys";
        })(del = auth.del || (auth.del = {}));
    })(auth = PfsenseAPI.auth || (PfsenseAPI.auth = {}));
    let diagnostics;
    (function (diagnostics) {
        let Arp;
        (function (Arp) {
            let get;
            (function (get) {
                get["arpTable"] = "/diagnostics/arp_table";
                get["arpEntry"] = "/diagnostics/arp_table/entry";
            })(get = Arp.get || (Arp.get = {}));
            let del;
            (function (del) {
                del["arpTable"] = "/diagnostics/arp_table";
                del["arpEntry"] = "/diagnostics/arp_table/entry";
            })(del = Arp.del || (Arp.del = {}));
        })(Arp = diagnostics.Arp || (diagnostics.Arp = {}));
        let config;
        (function (config) {
            let get;
            (function (get) {
                get["revision"] = "/diagnostics/config_history/revision";
                get["revisions"] = "/diagnostics/config_history/revisions";
            })(get = config.get || (config.get = {}));
            let del;
            (function (del) {
                del["revision"] = "/diagnostics/config_history/revision";
                del["revisions"] = "/diagnostics/config_history/revision";
            })(del = config.del || (config.del = {}));
        })(config = diagnostics.config || (diagnostics.config = {}));
        let post;
        (function (post) {
            post["command"] = "/diagnostics/command_prompt";
            post["halt"] = "/diagnostics/halt_system";
            post["reboot"] = "/diagnostics/reboot";
        })(post = diagnostics.post || (diagnostics.post = {}));
    })(diagnostics = PfsenseAPI.diagnostics || (PfsenseAPI.diagnostics = {}));
    let firewall;
    (function (firewall) {
        let nat;
        (function (nat) {
            let onetoone;
            (function (onetoone) {
                let get;
                (function (get) {
                    get["mapping"] = "/firewall/nat/one_to_one/mapping";
                    get["mappings"] = "/firewall/nat/one_to_one/mappings";
                })(get = onetoone.get || (onetoone.get = {}));
                let post;
                (function (post) {
                    post["mapping"] = "/firewall/nat/one_to_one/mapping";
                })(post = onetoone.post || (onetoone.post = {}));
                let del;
                (function (del) {
                    del["mapping"] = "/firewall/nat/one_to_one/mapping";
                    del["mappings"] = "/firewall/nat/one_to_one/mappings";
                })(del = onetoone.del || (onetoone.del = {}));
                let patch;
                (function (patch) {
                    patch["mapping"] = "/firewall/nat/one_to_one/mapping";
                })(patch = onetoone.patch || (onetoone.patch = {}));
                let put;
                (function (put) {
                    put["mappings"] = "/firewall/nat/one_to_one/mappings";
                })(put = onetoone.put || (onetoone.put = {}));
            })(onetoone = nat.onetoone || (nat.onetoone = {}));
            let outbound;
            (function (outbound) {
                let get;
                (function (get) {
                    get["mapping"] = "/firewall/nat/outbound/mapping";
                    get["mappings"] = "/firewall/nat/outbound/mappings";
                    get["mode"] = "/firewall/nat/outbound/mode";
                })(get = outbound.get || (outbound.get = {}));
                let post;
                (function (post) {
                    post["mapping"] = "/firewall/nat/outbound/mapping";
                })(post = outbound.post || (outbound.post = {}));
                let del;
                (function (del) {
                    del["mapping"] = "/firewall/nat/outbound/mapping";
                    del["mappings"] = "/firewall/nat/outbound/mappings";
                })(del = outbound.del || (outbound.del = {}));
                let patch;
                (function (patch) {
                    patch["mapping"] = "/firewall/nat/outbound/mapping";
                    patch["mode"] = "/firewall/nat/outbound/mode";
                })(patch = outbound.patch || (outbound.patch = {}));
                let put;
                (function (put) {
                    put["mappings"] = "/firewall/nat/outbound/mappings";
                })(put = outbound.put || (outbound.put = {}));
            })(outbound = nat.outbound || (nat.outbound = {}));
            let get;
            (function (get) {
                get["portForward"] = "/firewall/nat/port_forward";
                get["portForwards"] = "/firewall/nat/port_forwards";
            })(get = nat.get || (nat.get = {}));
            let post;
            (function (post) {
                post["portForward"] = "/firewall/nat/port_forward";
            })(post = nat.post || (nat.post = {}));
            let del;
            (function (del) {
                del["portForward"] = "/firewall/nat/port_forward";
                del["portForwards"] = "/firewall/nat/port_forwards";
            })(del = nat.del || (nat.del = {}));
            let patch;
            (function (patch) {
                patch["portForward"] = "/firewall/nat/port_forward";
            })(patch = nat.patch || (nat.patch = {}));
            let put;
            (function (put) {
                put["portForwards"] = "/firewall/nat/port_forwards";
            })(put = nat.put || (nat.put = {}));
        })(nat = firewall.nat || (firewall.nat = {}));
        let schedule;
        (function (schedule) {
            let get;
            (function (get) {
                get["default"] = "/firewall/schedule";
                get["time_range"] = "/firewall/schedule/time_range";
                get["schedules"] = "/firewall/schedules";
            })(get = schedule.get || (schedule.get = {}));
            let post;
            (function (post) {
                post["default"] = "/firewall/schedule";
                post["time_range"] = "/firewall/schedule/time_range";
            })(post = schedule.post || (schedule.post = {}));
            let del;
            (function (del) {
                del["default"] = "/firewall/schedule";
                del["time_range"] = "/firewall/schedule/time_range";
                del["schedules"] = "/firewall/schedules";
            })(del = schedule.del || (schedule.del = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/firewall/schedule";
                patch["time_range"] = "/firewall/schedule/time_range";
            })(patch = schedule.patch || (schedule.patch = {}));
            let put;
            (function (put) {
                put["schedules"] = "/firewall/schedules";
            })(put = schedule.put || (schedule.put = {}));
        })(schedule = firewall.schedule || (firewall.schedule = {}));
        let state;
        (function (state) {
            let get;
            (function (get) {
                get["default"] = "/firewall/states";
                get["size"] = "/firewall/states/size";
            })(get = state.get || (state.get = {}));
            let post;
            (function (post) {
            })(post = state.post || (state.post = {}));
            let del;
            (function (del) {
                del["default"] = "/firewall/states";
            })(del = state.del || (state.del = {}));
            let patch;
            (function (patch) {
                patch["size"] = "/firewall/states/size";
            })(patch = state.patch || (state.patch = {}));
            let put;
            (function (put) {
            })(put = state.put || (state.put = {}));
        })(state = firewall.state || (firewall.state = {}));
        let trafficShaper;
        (function (trafficShaper) {
            let limiter;
            (function (limiter) {
                let get;
                (function (get) {
                    get["default"] = "/firewall/traffic_shaper/limiter/";
                    get["bandwidth"] = "/firewall/traffic_shaper/limiter/bandwidth";
                    get["queue"] = "/firewall/traffic_shaper/limiter/queue";
                    get["limiters"] = "/firewall/traffic_shaper/limiters";
                })(get = limiter.get || (limiter.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/firewall/traffic_shaper/limiter/";
                    post["bandwidth"] = "/firewall/traffic_shaper/limiter/bandwidth";
                    post["queue"] = "/firewall/traffic_shaper/limiter/queue";
                })(post = limiter.post || (limiter.post = {}));
                let del;
                (function (del) {
                    del["default"] = "/firewall/traffic_shaper/limiter/";
                    del["bandwidth"] = "/firewall/traffic_shaper/limiter/bandwidth";
                    del["queue"] = "/firewall/traffic_shaper/limiter/queue";
                })(del = limiter.del || (limiter.del = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/firewall/traffic_shaper/limiter/";
                    patch["bandwidth"] = "/firewall/traffic_shaper/limiter/bandwidth";
                    patch["queue"] = "/firewall/traffic_shaper/limiter/queue";
                })(patch = limiter.patch || (limiter.patch = {}));
                let put;
                (function (put) {
                    put["limiters"] = "/firewall/traffic_shaper/limiters";
                })(put = limiter.put || (limiter.put = {}));
            })(limiter = trafficShaper.limiter || (trafficShaper.limiter = {}));
            let get;
            (function (get) {
                get["default"] = "/firewall/traffic_shaper";
                get["queue"] = "/firewall/traffic_shaper/queue";
                get["trafficShapers"] = "/firewall/traffic_shapers";
            })(get = trafficShaper.get || (trafficShaper.get = {}));
            let post;
            (function (post) {
                post["default"] = "/firewall/traffic_shaper";
                post["queue"] = "/firewall/traffic_shaper/queue";
            })(post = trafficShaper.post || (trafficShaper.post = {}));
            let del;
            (function (del) {
                del["default"] = "/firewall/traffic_shaper";
                del["queue"] = "/firewall/traffic_shaper/queue";
                del["trafficShapers"] = "/firewall/traffic_shapers";
            })(del = trafficShaper.del || (trafficShaper.del = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/firewall/traffic_shaper";
                patch["queue"] = "/firewall/traffic_shaper/queue";
            })(patch = trafficShaper.patch || (trafficShaper.patch = {}));
            let put;
            (function (put) {
                put["trafficShapers"] = "/firewall/traffic_shapers";
            })(put = trafficShaper.put || (trafficShaper.put = {}));
        })(trafficShaper = firewall.trafficShaper || (firewall.trafficShaper = {}));
        let virtualIp;
        (function (virtualIp) {
            let get;
            (function (get) {
                get["default"] = "/firewall/virtual_ip";
                get["apply"] = "/firewall/virtual_ip/apply";
                get["virtualIps"] = "/firewall/virtual_ips";
            })(get = virtualIp.get || (virtualIp.get = {}));
            let post;
            (function (post) {
                post["default"] = "/firewall/virtual_ip";
                post["apply"] = "/firewall/virtual_ip/apply";
            })(post = virtualIp.post || (virtualIp.post = {}));
            let del;
            (function (del) {
                del["default"] = "/firewall/virtual_ip";
                del["virtualIps"] = "/firewall/virtual_ips";
            })(del = virtualIp.del || (virtualIp.del = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/firewall/virtual_ip";
            })(patch = virtualIp.patch || (virtualIp.patch = {}));
            let put;
            (function (put) {
            })(put = virtualIp.put || (virtualIp.put = {}));
        })(virtualIp = firewall.virtualIp || (firewall.virtualIp = {}));
        let get;
        (function (get) {
            get["advancedSettings"] = "/firewall/advanced_settings";
            get["alias"] = "/firewall/alias";
            get["aliases"] = "/firewall/aliases";
            get["apply"] = "/firewall/apply";
            get["rule"] = "/firewall/rule";
            get["rules"] = "/firewall/rules";
        })(get = firewall.get || (firewall.get = {}));
        let post;
        (function (post) {
            post["alias"] = "/firewall/alias";
            post["apply"] = "/firewall/apply";
            post["rule"] = "/firewall/rule";
        })(post = firewall.post || (firewall.post = {}));
        let del;
        (function (del) {
            del["alias"] = "/firewall/alias";
            del["rule"] = "/firewall/rule";
            del["rules"] = "/firewall/rules";
            del["aliases"] = "/firewall/aliases";
        })(del = firewall.del || (firewall.del = {}));
        let put;
        (function (put) {
            put["aliases"] = "/firewall/aliases";
            put["rules"] = "/firewall/rules";
        })(put = firewall.put || (firewall.put = {}));
        let patch;
        (function (patch) {
            patch["advancedSettings"] = "/firewall/advanced_settings";
            patch["alias"] = "/firewall/alias";
            patch["rule"] = "/firewall/rule";
        })(patch = firewall.patch || (firewall.patch = {}));
    })(firewall = PfsenseAPI.firewall || (PfsenseAPI.firewall = {}));
    let graphQL;
    (function (graphQL) {
        let post;
        (function (post) {
            post["default"] = "/graphql";
        })(post = graphQL.post || (graphQL.post = {}));
    })(graphQL = PfsenseAPI.graphQL || (PfsenseAPI.graphQL = {}));
    let Interface;
    (function (Interface) {
        let get;
        (function (get) {
            get["default"] = "/interface";
            get["interfaces"] = "/interfaces";
            get["apply"] = "/interface/apply";
            get["available"] = "/interface/available_interfaces";
            get["bridge"] = "/interface/bridge";
            get["bridges"] = "/interface/bridges";
            get["group"] = "/interface/group";
            get["groups"] = "/interface/groups";
            get["vlan"] = "/interface/vlan";
            get["vlans"] = "/interface/vlans";
        })(get = Interface.get || (Interface.get = {}));
        let post;
        (function (post) {
            post["default"] = "/interface";
            post["apply"] = "/interface/apply";
            post["bridge"] = "/interface/bridge";
            post["group"] = "/interface/group";
            post["vlan"] = "/interface/vlan";
        })(post = Interface.post || (Interface.post = {}));
        let del;
        (function (del) {
            del["default"] = "/interface";
            del["interfaces"] = "/interfaces";
            del["bridge"] = "/interface/bridge";
            del["group"] = "/interface/group";
            del["groups"] = "/interface/groups";
            del["vlan"] = "/interface/vlan";
            del["vlans"] = "/interface/vlans";
        })(del = Interface.del || (Interface.del = {}));
        let patch;
        (function (patch) {
            patch["default"] = "/interface";
            patch["bridge"] = "/interface/bridge";
            patch["group"] = "/interface/group";
            patch["vlan"] = "/interface/vlan";
        })(patch = Interface.patch || (Interface.patch = {}));
        let put;
        (function (put) {
            put["groups"] = "/interface/groups";
        })(put = Interface.put || (Interface.put = {}));
    })(Interface = PfsenseAPI.Interface || (PfsenseAPI.Interface = {}));
    let routing;
    (function (routing) {
        let gateway;
        (function (gateway) {
            let group;
            (function (group) {
                let get;
                (function (get) {
                    get["default"] = "/routing/gateway/group";
                    get["priority"] = "/routing/gateway/group/priority";
                    get["groups"] = "/routing/gateway/groups";
                })(get = group.get || (group.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/routing/gateway/group";
                    post["priority"] = "/routing/gateway/group/priority";
                })(post = group.post || (group.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/routing/gateway/group";
                    patch["priority"] = "/routing/gateway/group/priority";
                })(patch = group.patch || (group.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/routing/gateway/group";
                    del["priority"] = "/routing/gateway/group/priority";
                    del["groups"] = "/routing/gateway/groups";
                })(del = group.del || (group.del = {}));
                let put;
                (function (put) {
                })(put = group.put || (group.put = {}));
            })(group = gateway.group || (gateway.group = {}));
            let get;
            (function (get) {
                get["default"] = "/routing/gateway";
                get["defaultGateway"] = "/routing/gateway/default";
                get["gateways"] = "/routing/gateways";
            })(get = gateway.get || (gateway.get = {}));
            let post;
            (function (post) {
                post["default"] = "/routing/gateway";
            })(post = gateway.post || (gateway.post = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/routing/gateway";
                patch["defaultGateway"] = "/routing/gateway/default";
            })(patch = gateway.patch || (gateway.patch = {}));
            let del;
            (function (del) {
                del["default"] = "/routing/gateway";
                del["gateways"] = "/routing/gateways";
            })(del = gateway.del || (gateway.del = {}));
            let put;
            (function (put) {
            })(put = gateway.put || (gateway.put = {}));
        })(gateway = routing.gateway || (routing.gateway = {}));
        let get;
        (function (get) {
            get["apply"] = "/routing/apply";
            get["staticRoute"] = "/routing/static_route";
            get["staticRoutes"] = "/routing/static_routes";
        })(get = routing.get || (routing.get = {}));
        let post;
        (function (post) {
            post["apply"] = "/routing/apply";
            post["staticRoute"] = "/routing/static_route";
        })(post = routing.post || (routing.post = {}));
        let patch;
        (function (patch) {
            patch["staticRoute"] = "/routing/static_route";
        })(patch = routing.patch || (routing.patch = {}));
        let del;
        (function (del) {
            del["staticRoute"] = "/routing/static_route";
            del["staticRoutes"] = "/routing/static_routes";
        })(del = routing.del || (routing.del = {}));
        let put;
        (function (put) {
        })(put = routing.put || (routing.put = {}));
    })(routing = PfsenseAPI.routing || (PfsenseAPI.routing = {}));
    let services;
    (function (services) {
        let acme;
        (function (acme) {
            let account;
            (function (account) {
                let get;
                (function (get) {
                    get["key"] = "/services/acme/account_key";
                    get["keys"] = "/services/acme/account_key";
                    get["registrations"] = "/services/acme/account_key/registrations";
                })(get = account.get || (account.get = {}));
                let post;
                (function (post) {
                    post["key"] = "/services/acme/account_key";
                    post["register"] = "/services/acme/account_key/register";
                })(post = account.post || (account.post = {}));
                let patch;
                (function (patch) {
                    patch["key"] = "/services/acme/account_key";
                })(patch = account.patch || (account.patch = {}));
                let del;
                (function (del) {
                    del["key"] = "/services/acme/account_key";
                    del["keys"] = "/services/acme/account_key";
                })(del = account.del || (account.del = {}));
                let put;
                (function (put) {
                    put["keys"] = "/services/acme/account_key";
                })(put = account.put || (account.put = {}));
            })(account = acme.account || (acme.account = {}));
            let certificate;
            (function (certificate) {
                let get;
                (function (get) {
                    get["default"] = "/services/acme/certificate";
                    get["action"] = "/services/acme/certificate/action";
                    get["domain"] = "/services/acme/certificate/domain";
                    get["issuances"] = "/services/acme/certificate/issuances";
                    get["renewals"] = "/services/acme/certificate/renewals";
                    get["certificates"] = "/services/acme/certificates";
                })(get = certificate.get || (certificate.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/acme/certificate";
                    post["action"] = "/services/acme/certificate/action";
                    post["domain"] = "/services/acme/certificate/domain";
                    post["issue"] = "/services/acme/certificate/issue";
                    post["renew"] = "/services/acme/certificate/renew";
                })(post = certificate.post || (certificate.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/acme/certificate";
                    patch["action"] = "/services/acme/certificate/action";
                    patch["domain"] = "/services/acme/certificate/domain";
                })(patch = certificate.patch || (certificate.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/acme/certificate";
                    del["action"] = "/services/acme/certificate/action";
                    del["domain"] = "/services/acme/certificate/domain";
                    del["certificates"] = "/services/acme/certificates";
                })(del = certificate.del || (certificate.del = {}));
                let put;
                (function (put) {
                    put["certificates"] = "/services/acme/certificates";
                })(put = certificate.put || (certificate.put = {}));
            })(certificate = acme.certificate || (acme.certificate = {}));
            let get;
            (function (get) {
                get["settings"] = "/services/acme/settings";
            })(get = acme.get || (acme.get = {}));
            let post;
            (function (post) {
            })(post = acme.post || (acme.post = {}));
            let patch;
            (function (patch) {
                patch["settings"] = "/services/acme/settings";
            })(patch = acme.patch || (acme.patch = {}));
            let del;
            (function (del) {
            })(del = acme.del || (acme.del = {}));
            let put;
            (function (put) {
            })(put = acme.put || (acme.put = {}));
        })(acme = services.acme || (services.acme = {}));
        let bind;
        (function (bind) {
            let get;
            (function (get) {
                get["settings"] = "/services/bind/settings";
                get["view"] = "/services/bind/view";
                get["views"] = "/services/bind/views";
            })(get = bind.get || (bind.get = {}));
            let post;
            (function (post) {
                post["view"] = "/services/bind/view";
            })(post = bind.post || (bind.post = {}));
            let patch;
            (function (patch) {
                patch["settings"] = "/services/bind/settings";
                patch["view"] = "/services/bind/view";
            })(patch = bind.patch || (bind.patch = {}));
            let del;
            (function (del) {
                del["view"] = "/services/bind/view";
                del["views"] = "/services/bind/views";
                del["zones"] = "/services/bind/zones";
            })(del = bind.del || (bind.del = {}));
            let put;
            (function (put) {
                put["views"] = "/services/bind/views";
                put["zones"] = "/services/bind/zones";
            })(put = bind.put || (bind.put = {}));
            let accessList;
            (function (accessList) {
                let get;
                (function (get) {
                    get["default"] = "/services/bind/access_list";
                    get["entry"] = "/services/bind/access_list/entry";
                    get["access_lists"] = "/services/bind/access_lists";
                })(get = accessList.get || (accessList.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/bind/access_list";
                    post["entry"] = "/services/bind/access_list/entry";
                })(post = accessList.post || (accessList.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/bind/access_list";
                    patch["entry"] = "/services/bind/access_list/entry";
                })(patch = accessList.patch || (accessList.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/bind/access_list";
                    del["entry"] = "/services/bind/access_list/entry";
                    del["access_lists"] = "/services/bind/access_lists";
                })(del = accessList.del || (accessList.del = {}));
                let put;
                (function (put) {
                    put["access_lists"] = "/services/bind/access_lists";
                })(put = accessList.put || (accessList.put = {}));
            })(accessList = bind.accessList || (bind.accessList = {}));
            let sync;
            (function (sync) {
                let get;
                (function (get) {
                    get["remoteHost"] = "/services/bind/sync/remote_host";
                    get["remoteHosts"] = "/services/bind/sync/remote_hosts";
                    get["settings"] = "/services/bind/sync/settings";
                })(get = sync.get || (sync.get = {}));
                let post;
                (function (post) {
                    post["remoteHost"] = "/services/bind/sync/remote_host";
                })(post = sync.post || (sync.post = {}));
                let patch;
                (function (patch) {
                    patch["remoteHost"] = "/services/bind/sync/remote_host";
                    patch["settings"] = "/services/bind/sync/settings";
                })(patch = sync.patch || (sync.patch = {}));
                let del;
                (function (del) {
                    del["remoteHost"] = "/services/bind/sync/remote_host";
                    del["remoteHosts"] = "/services/bind/sync/remote_hosts";
                })(del = sync.del || (sync.del = {}));
                let put;
                (function (put) {
                    put["remoteHosts"] = "/services/bind/sync/remote_hosts";
                })(put = sync.put || (sync.put = {}));
            })(sync = bind.sync || (bind.sync = {}));
            let zone;
            (function (zone) {
                let get;
                (function (get) {
                    get["default"] = "/services/bind/zone";
                    get["record"] = "/services/bind/zone/record";
                    get["zones"] = "/services/bind/zones";
                })(get = zone.get || (zone.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/bind/zone";
                    post["record"] = "/services/bind/zone/record";
                })(post = zone.post || (zone.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/bind/zone";
                    patch["record"] = "/services/bind/zone/record";
                })(patch = zone.patch || (zone.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/bind/zone";
                    del["record"] = "/services/bind/zone/record";
                    del["zones"] = "/services/bind/zones";
                })(del = zone.del || (zone.del = {}));
                let put;
                (function (put) {
                    put["zones"] = "/services/bind/zones";
                })(put = zone.put || (zone.put = {}));
            })(zone = bind.zone || (bind.zone = {}));
        })(bind = services.bind || (services.bind = {}));
        let cron;
        (function (cron) {
            let get;
            (function (get) {
                get["job"] = "/services/cron/job";
                get["jobs"] = "/services/cron/jobs";
            })(get = cron.get || (cron.get = {}));
            let post;
            (function (post) {
                post["job"] = "/services/cron/job";
            })(post = cron.post || (cron.post = {}));
            let patch;
            (function (patch) {
                patch["job"] = "/services/cron/job";
            })(patch = cron.patch || (cron.patch = {}));
            let del;
            (function (del) {
                del["job"] = "/services/cron/job";
                del["jobs"] = "/services/cron/jobs";
            })(del = cron.del || (cron.del = {}));
            let put;
            (function (put) {
                put["jobs"] = "/services/cron/jobs";
            })(put = cron.put || (cron.put = {}));
        })(cron = services.cron || (services.cron = {}));
        let dhcpServer;
        (function (dhcpServer) {
            let get;
            (function (get) {
                get["default"] = "/services/dhcp_server";
                get["addressPool"] = "/services/dhcp_server/address_pool";
                get["apply"] = "/services/dhcp_server/apply";
                get["customOption"] = "/services/dhcp_server/custom_option";
                get["staticMapping"] = "/services/dhcp_server/static_mapping";
                get["servers"] = "/services/dhcp_servers";
            })(get = dhcpServer.get || (dhcpServer.get = {}));
            let post;
            (function (post) {
                post["addressPool"] = "/services/dhcp_server/address_pool";
                post["apply"] = "/services/dhcp_server/apply";
                post["customOption"] = "/services/dhcp_server/custom_option";
                post["staticMapping"] = "/services/dhcp_server/static_mapping";
            })(post = dhcpServer.post || (dhcpServer.post = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/services/dhcp_server";
                patch["addressPool"] = "/services/dhcp_server/address_pool";
                patch["backend"] = "/services/dhcp_server/backend";
                patch["customOption"] = "/services/dhcp_server/custom_option";
                patch["staticMapping"] = "/services/dhcp_server/static_mapping";
            })(patch = dhcpServer.patch || (dhcpServer.patch = {}));
            let del;
            (function (del) {
                del["addressPool"] = "/services/dhcp_server/address_pool";
                del["customOption"] = "/services/dhcp_server/custom_option";
                del["staticMapping"] = "/services/dhcp_server/static_mapping";
            })(del = dhcpServer.del || (dhcpServer.del = {}));
            let put;
            (function (put) {
                put["servers"] = "/services/dhcp_servers";
            })(put = dhcpServer.put || (dhcpServer.put = {}));
        })(dhcpServer = services.dhcpServer || (services.dhcpServer = {}));
        let dnsForwarder;
        (function (dnsForwarder) {
            let get;
            (function (get) {
                get["apply"] = "/services/dns_forwarder/apply";
            })(get = dnsForwarder.get || (dnsForwarder.get = {}));
            let post;
            (function (post) {
                post["apply"] = "/services/dns_forwarder/apply";
            })(post = dnsForwarder.post || (dnsForwarder.post = {}));
            let patch;
            (function (patch) {
            })(patch = dnsForwarder.patch || (dnsForwarder.patch = {}));
            let del;
            (function (del) {
            })(del = dnsForwarder.del || (dnsForwarder.del = {}));
            let put;
            (function (put) {
            })(put = dnsForwarder.put || (dnsForwarder.put = {}));
            let hostOverride;
            (function (hostOverride) {
                let get;
                (function (get) {
                    get["default"] = "/services/dns_forwarder/host_override";
                    get["alias"] = "/services/dns_forwarder/host_override/alias";
                    get["overrides"] = "/services/dns_forwarder/host_overrides";
                })(get = hostOverride.get || (hostOverride.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/dns_forwarder/host_override";
                    post["alias"] = "/services/dns_forwarder/host_override/alias";
                })(post = hostOverride.post || (hostOverride.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/dns_forwarder/host_override";
                    patch["alias"] = "/services/dns_forwarder/host_override/alias";
                })(patch = hostOverride.patch || (hostOverride.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/dns_forwarder/host_override";
                    del["alias"] = "/services/dns_forwarder/host_override/alias";
                    del["overrides"] = "/services/dns_forwarder/host_overrides";
                })(del = hostOverride.del || (hostOverride.del = {}));
                let put;
                (function (put) {
                    put["overrides"] = "/services/dns_forwarder/host_overrides";
                })(put = hostOverride.put || (hostOverride.put = {}));
            })(hostOverride = dnsForwarder.hostOverride || (dnsForwarder.hostOverride = {}));
        })(dnsForwarder = services.dnsForwarder || (services.dnsForwarder = {}));
        let dnsResolver;
        (function (dnsResolver) {
            let get;
            (function (get) {
                get["apply"] = "/services/dns_resolver/apply";
                get["domainOverride"] = "/services/dns_resolver/domain_override";
                get["domainOverrides"] = "/services/dns_resolver/domain_overrides";
                get["settings"] = "/services/dns_resolver/settings";
            })(get = dnsResolver.get || (dnsResolver.get = {}));
            let post;
            (function (post) {
                post["apply"] = "/services/dns_resolver/apply";
                post["domainOverride"] = "/services/dns_resolver/domain_override";
            })(post = dnsResolver.post || (dnsResolver.post = {}));
            let patch;
            (function (patch) {
                patch["domainOverride"] = "/services/dns_resolver/domain_override";
                patch["settings"] = "/services/dns_resolver/settings";
            })(patch = dnsResolver.patch || (dnsResolver.patch = {}));
            let del;
            (function (del) {
                del["domainOverride"] = "/services/dns_resolver/domain_override";
                del["domainOverrides"] = "/services/dns_resolver/domain_overrides";
            })(del = dnsResolver.del || (dnsResolver.del = {}));
            let put;
            (function (put) {
                put["domainOverrides"] = "/services/dns_resolver/domain_overrides";
            })(put = dnsResolver.put || (dnsResolver.put = {}));
            let accessList;
            (function (accessList) {
                let get;
                (function (get) {
                    get["default"] = "/services/dns_resolver/access_list";
                    get["network"] = "/services/dns_resolver/access_list/network";
                    get["access_lists"] = "/services/dns_resolver/access_lists";
                })(get = accessList.get || (accessList.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/dns_resolver/access_list";
                    post["network"] = "/services/dns_resolver/access_list/network";
                })(post = accessList.post || (accessList.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/dns_resolver/access_list";
                    patch["network"] = "/services/dns_resolver/access_list/network";
                })(patch = accessList.patch || (accessList.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/dns_resolver/access_list";
                    del["network"] = "/services/dns_resolver/access_list/network";
                    del["access_lists"] = "/services/dns_resolver/access_lists";
                })(del = accessList.del || (accessList.del = {}));
                let put;
                (function (put) {
                    put["access_lists"] = "/services/dns_resolver/access_lists";
                })(put = accessList.put || (accessList.put = {}));
            })(accessList = dnsResolver.accessList || (dnsResolver.accessList = {}));
            let hostOverride;
            (function (hostOverride) {
                let get;
                (function (get) {
                    get["default"] = "/services/dns_resolver/host_override";
                    get["alias"] = "/services/dns_resolver/host_override/alias";
                    get["overrides"] = "/services/dns_resolver/host_overrides";
                })(get = hostOverride.get || (hostOverride.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/dns_resolver/host_override";
                    post["alias"] = "/services/dns_resolver/host_override/alias";
                })(post = hostOverride.post || (hostOverride.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/dns_resolver/host_override";
                    patch["alias"] = "/services/dns_resolver/host_override/alias";
                })(patch = hostOverride.patch || (hostOverride.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/dns_resolver/host_override";
                    del["alias"] = "/services/dns_resolver/host_override/alias";
                    del["overrides"] = "/services/dns_resolver/host_overrides";
                })(del = hostOverride.del || (hostOverride.del = {}));
                let put;
                (function (put) {
                    put["overrides"] = "/services/dns_resolver/host_overrides";
                })(put = hostOverride.put || (hostOverride.put = {}));
            })(hostOverride = dnsResolver.hostOverride || (dnsResolver.hostOverride = {}));
        })(dnsResolver = services.dnsResolver || (services.dnsResolver = {}));
        let haProxy;
        (function (haProxy) {
            let get;
            (function (get) {
                get["apply"] = "/services/haproxy/apply";
                get["file"] = "/services/haproxy/file";
                get["files"] = "/services/haproxy/files";
                get["settings"] = "/services/haproxy/settings";
            })(get = haProxy.get || (haProxy.get = {}));
            let post;
            (function (post) {
                post["apply"] = "/services/haproxy/apply";
                post["file"] = "/services/haproxy/file";
            })(post = haProxy.post || (haProxy.post = {}));
            let patch;
            (function (patch) {
                patch["file"] = "/services/haproxy/file";
                patch["settings"] = "/services/haproxy/settings";
            })(patch = haProxy.patch || (haProxy.patch = {}));
            let del;
            (function (del) {
                del["file"] = "/services/haproxy/file";
                del["files"] = "/services/haproxy/files";
            })(del = haProxy.del || (haProxy.del = {}));
            let put;
            (function (put) {
                put["files"] = "/services/haproxy/files";
            })(put = haProxy.put || (haProxy.put = {}));
            let backend;
            (function (backend) {
                let get;
                (function (get) {
                    get["default"] = "/services/haproxy/backend";
                    get["acl"] = "/services/haproxy/backend/acl";
                    get["action"] = "/services/haproxy/backend/action";
                    get["errorFile"] = "/services/haproxy/backend/error_file";
                    get["server"] = "/services/haproxy/backend/server";
                    get["backends"] = "/services/haproxy/backends";
                })(get = backend.get || (backend.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/haproxy/backend";
                    post["acl"] = "/services/haproxy/backend/acl";
                    post["action"] = "/services/haproxy/backend/action";
                    post["errorFile"] = "/services/haproxy/backend/error_file";
                    post["server"] = "/services/haproxy/backend/server";
                })(post = backend.post || (backend.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/haproxy/backend";
                    patch["acl"] = "/services/haproxy/backend/acl";
                    patch["action"] = "/services/haproxy/backend/action";
                    patch["errorFile"] = "/services/haproxy/backend/error_file";
                    patch["server"] = "/services/haproxy/backend/server";
                })(patch = backend.patch || (backend.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/haproxy/backend";
                    del["acl"] = "/services/haproxy/backend/acl";
                    del["action"] = "/services/haproxy/backend/action";
                    del["errorFile"] = "/services/haproxy/backend/error_file";
                    del["server"] = "/services/haproxy/backend/server";
                    del["backends"] = "/services/haproxy/backends";
                })(del = backend.del || (backend.del = {}));
                let put;
                (function (put) {
                    put["backends"] = "/services/haproxy/backends";
                })(put = backend.put || (backend.put = {}));
            })(backend = haProxy.backend || (haProxy.backend = {}));
            let frontend;
            (function (frontend) {
                let get;
                (function (get) {
                    get["default"] = "/services/haproxy/frontend";
                    get["acl"] = "/services/haproxy/frontend/acl";
                    get["action"] = "/services/haproxy/frontend/action";
                    get["address"] = "/services/haproxy/frontend/address";
                    get["errorFile"] = "/services/haproxy/frontend/error_file";
                    get["frontends"] = "/services/haproxy/frontends";
                })(get = frontend.get || (frontend.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/services/haproxy/frontend";
                    post["acl"] = "/services/haproxy/frontend/acl";
                    post["action"] = "/services/haproxy/frontend/action";
                    post["address"] = "/services/haproxy/frontend/address";
                    post["errorFile"] = "/services/haproxy/frontend/error_file";
                })(post = frontend.post || (frontend.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/services/haproxy/frontend";
                    patch["acl"] = "/services/haproxy/frontend/acl";
                    patch["action"] = "/services/haproxy/frontend/action";
                    patch["address"] = "/services/haproxy/frontend/address";
                    patch["errorFile"] = "/services/haproxy/frontend/error_file";
                })(patch = frontend.patch || (frontend.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/services/haproxy/frontend";
                    del["acl"] = "/services/haproxy/frontend/acl";
                    del["action"] = "/services/haproxy/frontend/action";
                    del["address"] = "/services/haproxy/frontend/address";
                    del["errorFile"] = "/services/haproxy/frontend/error_file";
                    del["frontends"] = "/services/haproxy/frontends";
                })(del = frontend.del || (frontend.del = {}));
                let put;
                (function (put) {
                    put["frontends"] = "/services/haproxy/frontends";
                })(put = frontend.put || (frontend.put = {}));
            })(frontend = haProxy.frontend || (haProxy.frontend = {}));
            let settings;
            (function (settings) {
                let get;
                (function (get) {
                    get["dns_resolver"] = "/services/haproxy/settings/dns_resolver";
                    get["email"] = "/services/haproxy/settings/email_mailer";
                    get["default"] = "/services/haproxy/settings";
                })(get = settings.get || (settings.get = {}));
                let post;
                (function (post) {
                    post["dns_resolver"] = "/services/haproxy/settings/dns_resolver";
                    post["email"] = "/services/haproxy/settings/email_mailer";
                })(post = settings.post || (settings.post = {}));
                let patch;
                (function (patch) {
                    patch["dns_resolver"] = "/services/haproxy/settings/dns_resolver";
                    patch["email"] = "/services/haproxy/settings/email_mailer";
                    patch["default"] = "/services/haproxy/settings";
                })(patch = settings.patch || (settings.patch = {}));
                let del;
                (function (del) {
                    del["dns_resolver"] = "/services/haproxy/settings/dns_resolver";
                    del["email"] = "/services/haproxy/settings/email_mailer";
                })(del = settings.del || (settings.del = {}));
                let put;
                (function (put) {
                })(put = settings.put || (settings.put = {}));
            })(settings = haProxy.settings || (haProxy.settings = {}));
        })(haProxy = services.haProxy || (services.haProxy = {}));
        let ntp;
        (function (ntp) {
            let get;
            (function (get) {
                get["settings"] = "/services/ntp/settings";
                get["time_server"] = "/services/ntp/time_server";
                get["time_servers"] = "/services/ntp/time_servers";
            })(get = ntp.get || (ntp.get = {}));
            let post;
            (function (post) {
                post["time_server"] = "/services/ntp/time_server";
            })(post = ntp.post || (ntp.post = {}));
            let patch;
            (function (patch) {
                patch["settings"] = "/services/ntp/settings";
                patch["time_server"] = "/services/ntp/time_server";
            })(patch = ntp.patch || (ntp.patch = {}));
            let del;
            (function (del) {
                del["time_server"] = "/services/ntp/time_server";
                del["time_servers"] = "/services/ntp/time_servers";
            })(del = ntp.del || (ntp.del = {}));
            let put;
            (function (put) {
                put["time_servers"] = "/services/ntp/time_servers";
            })(put = ntp.put || (ntp.put = {}));
        })(ntp = services.ntp || (services.ntp = {}));
        let ssh;
        (function (ssh) {
            let get;
            (function (get) {
                get["default"] = "/services/ssh";
            })(get = ssh.get || (ssh.get = {}));
            let post;
            (function (post) {
            })(post = ssh.post || (ssh.post = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/services/ssh";
            })(patch = ssh.patch || (ssh.patch = {}));
            let del;
            (function (del) {
            })(del = ssh.del || (ssh.del = {}));
            let put;
            (function (put) {
            })(put = ssh.put || (ssh.put = {}));
        })(ssh = services.ssh || (services.ssh = {}));
        let service_watchdog;
        (function (service_watchdog) {
            let get;
            (function (get) {
                get["default"] = "/services/service_watchdog";
                get["watchdogs"] = "/services/service_watchdogs";
            })(get = service_watchdog.get || (service_watchdog.get = {}));
            let post;
            (function (post) {
                post["default"] = "/services/service_watchdog";
            })(post = service_watchdog.post || (service_watchdog.post = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/services/service_watchdog";
            })(patch = service_watchdog.patch || (service_watchdog.patch = {}));
            let del;
            (function (del) {
                del["default"] = "/services/service_watchdog";
                del["watchdogs"] = "/services/service_watchdogs";
            })(del = service_watchdog.del || (service_watchdog.del = {}));
            let put;
            (function (put) {
                put["watchdogs"] = "/services/service_watchdogs";
            })(put = service_watchdog.put || (service_watchdog.put = {}));
        })(service_watchdog = services.service_watchdog || (services.service_watchdog = {}));
        let wakeOnLan;
        (function (wakeOnLan) {
            let post;
            (function (post) {
                post["send"] = "/services/wake_on_lan/send";
            })(post = wakeOnLan.post || (wakeOnLan.post = {}));
        })(wakeOnLan = services.wakeOnLan || (services.wakeOnLan = {}));
    })(services = PfsenseAPI.services || (PfsenseAPI.services = {}));
    let status;
    (function (status) {
        let get;
        (function (get) {
            get["carp"] = "/status/carp";
            get["gateways"] = "/status/gateways";
            get["interfaces"] = "/status/interfaces";
            get["services"] = "/status/services";
            get["system"] = "/status/system";
        })(get = status.get || (status.get = {}));
        let post;
        (function (post) {
            post["service"] = "/status/service";
        })(post = status.post || (status.post = {}));
        let patch;
        (function (patch) {
            patch["carp"] = "/status/carp";
        })(patch = status.patch || (status.patch = {}));
        let del;
        (function (del) {
        })(del = status.del || (status.del = {}));
        let put;
        (function (put) {
        })(put = status.put || (status.put = {}));
        let dhcpServer;
        (function (dhcpServer) {
            let get;
            (function (get) {
                get["leases"] = "/status/dhcp_server/leases";
            })(get = dhcpServer.get || (dhcpServer.get = {}));
            let post;
            (function (post) {
            })(post = dhcpServer.post || (dhcpServer.post = {}));
            let patch;
            (function (patch) {
            })(patch = dhcpServer.patch || (dhcpServer.patch = {}));
            let del;
            (function (del) {
                del["leases"] = "/status/dhcp_server/leases";
            })(del = dhcpServer.del || (dhcpServer.del = {}));
            let put;
            (function (put) {
            })(put = dhcpServer.put || (dhcpServer.put = {}));
        })(dhcpServer = status.dhcpServer || (status.dhcpServer = {}));
        let ipsec;
        (function (ipsec) {
            let get;
            (function (get) {
                get["child_sa"] = "/status/ipsec/child_sa";
                get["sas"] = "/status/ipsec/sas";
            })(get = ipsec.get || (ipsec.get = {}));
        })(ipsec = status.ipsec || (status.ipsec = {}));
        let logs;
        (function (logs) {
            let get;
            (function (get) {
                get["dhcp"] = "/status/logs/dhcp";
                get["firewall"] = "/status/logs/firewall";
                get["settings"] = "/status/logs/settings";
                get["system"] = "/status/logs/system";
            })(get = logs.get || (logs.get = {}));
            let patch;
            (function (patch) {
                patch["settings"] = "/status/logs/settings";
            })(patch = logs.patch || (logs.patch = {}));
        })(logs = status.logs || (status.logs = {}));
        let openvpn;
        (function (openvpn) {
            let get;
            (function (get) {
                get["clients"] = "/status/openvpn/clients";
                get["servers"] = "/status/openvpn/servers";
            })(get = openvpn.get || (openvpn.get = {}));
            let server;
            (function (server) {
                let get;
                (function (get) {
                    get["connection"] = "/status/openvpn/server/connection";
                    get["route"] = "/status/openvpn/server/route";
                })(get = server.get || (server.get = {}));
                let post;
                (function (post) {
                })(post = server.post || (server.post = {}));
                let patch;
                (function (patch) {
                })(patch = server.patch || (server.patch = {}));
                let del;
                (function (del) {
                    del["connection"] = "/status/openvpn/server/connection";
                })(del = server.del || (server.del = {}));
                let put;
                (function (put) {
                })(put = server.put || (server.put = {}));
            })(server = openvpn.server || (openvpn.server = {}));
        })(openvpn = status.openvpn || (status.openvpn = {}));
    })(status = PfsenseAPI.status || (PfsenseAPI.status = {}));
    let system;
    (function (system) {
        let get;
        (function (get) {
            get["certificate_authorities"] = "/system/certificate_authorities";
            get["console"] = "/system/console";
            get["dns"] = "/system/dns";
            get["hostname"] = "/system/hostname";
            get["email_settings"] = "/system/notificaitons/email_settings";
            get["tunable"] = "/system/tunable";
            get["tunables"] = "/system/tunables";
            get["webgui_settings"] = "/system/webgui/settings";
            get["version"] = "/system/version";
        })(get = system.get || (system.get = {}));
        let post;
        (function (post) {
            post["tunable"] = "/system/tunable";
        })(post = system.post || (system.post = {}));
        let patch;
        (function (patch) {
            patch["console"] = "/system/console";
            patch["dns"] = "/system/dns";
            patch["hostname"] = "/system/hostname";
            patch["email_settings"] = "/system/notificaitons/email_settings";
            patch["tunable"] = "/system/tunable";
            patch["webgui_settings"] = "/system/webgui/settings";
        })(patch = system.patch || (system.patch = {}));
        let del;
        (function (del) {
            del["certificate_authorities"] = "/system/certificate_authorities";
            del["tunable"] = "/system/tunable";
            del["tunables"] = "/system/tunables";
        })(del = system.del || (system.del = {}));
        let put;
        (function (put) {
            put["tunables"] = "/system/tunables";
        })(put = system.put || (system.put = {}));
        let crl;
        (function (crl) {
            let get;
            (function (get) {
                get["default"] = "/system/crl";
                get["revoke_certificate"] = "/system/crl/revoke_certificate";
                get["crls"] = "/system/crls";
            })(get = crl.get || (crl.get = {}));
            let post;
            (function (post) {
                post["default"] = "/system/crl";
                post["revoke_certificate"] = "/system/crl/revoke_certificate";
            })(post = crl.post || (crl.post = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/system/crl";
                patch["revoke_certificate"] = "/system/crl/revoke_certificate";
            })(patch = crl.patch || (crl.patch = {}));
            let del;
            (function (del) {
                del["default"] = "/system/crl";
                del["revoke_certificate"] = "/system/crl/revoke_certificate";
                del["crls"] = "/system/crls";
            })(del = crl.del || (crl.del = {}));
            let put;
            (function (put) {
            })(put = crl.put || (crl.put = {}));
        })(crl = system.crl || (system.crl = {}));
        let certificate_authority;
        (function (certificate_authority) {
            let get;
            (function (get) {
                get["default"] = "/system/certificate_authority";
            })(get = certificate_authority.get || (certificate_authority.get = {}));
            let post;
            (function (post) {
                post["default"] = "/system/certificate_authority";
                post["generate"] = "/system/certificate_authority/generate";
                post["renew"] = "/system/certificate_authority/renew";
            })(post = certificate_authority.post || (certificate_authority.post = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/system/certificate_authority";
            })(patch = certificate_authority.patch || (certificate_authority.patch = {}));
            let del;
            (function (del) {
                del["default"] = "/system/certificate_authority";
            })(del = certificate_authority.del || (certificate_authority.del = {}));
            let put;
            (function (put) {
            })(put = certificate_authority.put || (certificate_authority.put = {}));
        })(certificate_authority = system.certificate_authority || (system.certificate_authority = {}));
        let certificate;
        (function (certificate) {
            let get;
            (function (get) {
                get["default"] = "/system/certificate";
                get["certificates"] = "/system/certificates";
            })(get = certificate.get || (certificate.get = {}));
            let post;
            (function (post) {
                post["default"] = "/system/certificate";
                post["renew"] = "/system/certificate/renew";
                post["generate"] = "/system/certificate/generate";
                post["pkcs12"] = "/system/certificate/pkcs12/export";
                post["signing_request"] = "/system/certificate/signing_request";
                post["sign"] = "/system/certificate/signing_request/sign";
            })(post = certificate.post || (certificate.post = {}));
            let patch;
            (function (patch) {
                patch["default"] = "/system/certificate";
            })(patch = certificate.patch || (certificate.patch = {}));
            let del;
            (function (del) {
                del["default"] = "/system/certificate";
                del["certificates"] = "/system/certificates";
            })(del = certificate.del || (certificate.del = {}));
            let put;
            (function (put) {
            })(put = certificate.put || (certificate.put = {}));
        })(certificate = system.certificate || (system.certificate = {}));
        let Package;
        (function (Package) {
            let get;
            (function (get) {
                get["available"] = "/system/package/available";
                get["default"] = "/system/package";
                get["packages"] = "/system/packages";
            })(get = Package.get || (Package.get = {}));
            let post;
            (function (post) {
                post["default"] = "/system/package";
            })(post = Package.post || (Package.post = {}));
            let patch;
            (function (patch) {
            })(patch = Package.patch || (Package.patch = {}));
            let del;
            (function (del) {
                del["default"] = "/system/package";
                del["packages"] = "/system/packages";
            })(del = Package.del || (Package.del = {}));
            let put;
            (function (put) {
            })(put = Package.put || (Package.put = {}));
        })(Package = system.Package || (system.Package = {}));
        let restapi;
        (function (restapi) {
            let get;
            (function (get) {
                get["access_list"] = "/system/restapi/access_list";
                get["entry"] = "/system/restapi/access_list/entry";
                get["settings"] = "/system/restapi/settings";
                get["version"] = "/system/restapi/version";
            })(get = restapi.get || (restapi.get = {}));
            let post;
            (function (post) {
                post["entry"] = "/system/restapi/access_list/entry";
                post["settings_sync"] = "/system/restapi/settings/sync";
            })(post = restapi.post || (restapi.post = {}));
            let patch;
            (function (patch) {
                patch["entry"] = "/system/restapi/access_list/entry";
                patch["settings"] = "/system/restapi/settings";
                patch["version"] = "/system/restapi/version";
            })(patch = restapi.patch || (restapi.patch = {}));
            let del;
            (function (del) {
                del["access_list"] = "/system/restapi/access_list";
                del["entry"] = "/system/restapi/access_list/entry";
            })(del = restapi.del || (restapi.del = {}));
            let put;
            (function (put) {
                put["access_list"] = "/system/restapi/access_list";
            })(put = restapi.put || (restapi.put = {}));
        })(restapi = system.restapi || (system.restapi = {}));
    })(system = PfsenseAPI.system || (PfsenseAPI.system = {}));
    let user;
    (function (user) {
        let get;
        (function (get) {
            get["default"] = "/user";
            get["auth_server"] = "/user/auth_server";
            get["auth_servers"] = "/user/auth_servers";
            get["group"] = "/user/group";
            get["groups"] = "/user/groups";
            get["users"] = "/users";
        })(get = user.get || (user.get = {}));
        let post;
        (function (post) {
            post["default"] = "/user";
            post["auth_server"] = "/user/auth_server";
            post["group"] = "/user/group";
            post["groups"] = "/user/groups";
        })(post = user.post || (user.post = {}));
        let patch;
        (function (patch) {
            patch["default"] = "/user";
            patch["auth_server"] = "/user/auth_server";
            patch["group"] = "/user/group";
        })(patch = user.patch || (user.patch = {}));
        let del;
        (function (del) {
            del["default"] = "/user";
            del["auth_server"] = "/user/auth_server";
            del["auth_servers"] = "/user/auth_servers";
            del["group"] = "/user/group";
            del["groups"] = "/user/groups";
            del["users"] = "/users";
        })(del = user.del || (user.del = {}));
        let put;
        (function (put) {
            put["auth_servers"] = "/user/auth_servers";
            put["groups"] = "/user/groups";
        })(put = user.put || (user.put = {}));
    })(user = PfsenseAPI.user || (PfsenseAPI.user = {}));
    let vpn;
    (function (vpn) {
        let ipsec;
        (function (ipsec) {
            let get;
            (function (get) {
                get["apply"] = "/vpn/ipsec/apply";
                get["phase1s"] = "/vpn/ipsec/phase1s";
                get["phase2s"] = "/vpn/ipsec/phase2s";
            })(get = ipsec.get || (ipsec.get = {}));
            let post;
            (function (post) {
                post["apply"] = "/vpn/ipsec/apply";
            })(post = ipsec.post || (ipsec.post = {}));
            let patch;
            (function (patch) {
            })(patch = ipsec.patch || (ipsec.patch = {}));
            let del;
            (function (del) {
                del["phase1s"] = "/vpn/ipsec/phase1s";
                del["phase2s"] = "/vpn/ipsec/phase2s";
            })(del = ipsec.del || (ipsec.del = {}));
            let put;
            (function (put) {
                put["phase1s"] = "/vpn/ipsec/phase1s";
                put["phase2s"] = "/vpn/ipsec/phase2s";
            })(put = ipsec.put || (ipsec.put = {}));
            let phase1;
            (function (phase1) {
                let get;
                (function (get) {
                    get["default"] = "/vpn/ipsec/phase1";
                    get["encryption"] = "/vpn/ipsec/phase1/encryption";
                })(get = phase1.get || (phase1.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/vpn/ipsec/phase1";
                    post["encryption"] = "/vpn/ipsec/phase1/encryption";
                })(post = phase1.post || (phase1.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/vpn/ipsec/phase1";
                    patch["encryption"] = "/vpn/ipsec/phase1/encryption";
                })(patch = phase1.patch || (phase1.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/vpn/ipsec/phase1";
                    del["encryption"] = "/vpn/ipsec/phase1/encryption";
                })(del = phase1.del || (phase1.del = {}));
                let put;
                (function (put) {
                })(put = phase1.put || (phase1.put = {}));
            })(phase1 = ipsec.phase1 || (ipsec.phase1 = {}));
            let phase2;
            (function (phase2) {
                let get;
                (function (get) {
                    get["default"] = "/vpn/ipsec/phase2";
                    get["encryption"] = "/vpn/ipsec/phase2/encryption";
                })(get = phase2.get || (phase2.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/vpn/ipsec/phase2";
                    post["encryption"] = "/vpn/ipsec/phase2/encryption";
                })(post = phase2.post || (phase2.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/vpn/ipsec/phase2";
                    patch["encryption"] = "/vpn/ipsec/phase2/encryption";
                })(patch = phase2.patch || (phase2.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/vpn/ipsec/phase2";
                    del["encryption"] = "/vpn/ipsec/phase2/encryption";
                })(del = phase2.del || (phase2.del = {}));
                let put;
                (function (put) {
                })(put = phase2.put || (phase2.put = {}));
            })(phase2 = ipsec.phase2 || (ipsec.phase2 = {}));
        })(ipsec = vpn.ipsec || (vpn.ipsec = {}));
        let openvpn;
        (function (openvpn) {
            let get;
            (function (get) {
                get["cso"] = "/vpn/openvpn/cso";
                get["csos"] = "/vpn/openvpn/csos";
                get["client"] = "/vpn/openvpn/client";
                get["clients"] = "/vpn/openvpn/clients";
                get["server"] = "/vpn/openvpn/server";
                get["servers"] = "/vpn/openvpn/servers";
            })(get = openvpn.get || (openvpn.get = {}));
            let post;
            (function (post) {
                post["cso"] = "/vpn/openvpn/cso";
                post["client"] = "/vpn/openvpn/client";
                post["server"] = "/vpn/openvpn/server";
            })(post = openvpn.post || (openvpn.post = {}));
            let patch;
            (function (patch) {
                patch["cso"] = "/vpn/openvpn/cso";
                patch["client"] = "/vpn/openvpn/client";
                patch["server"] = "/vpn/openvpn/server";
            })(patch = openvpn.patch || (openvpn.patch = {}));
            let del;
            (function (del) {
                del["cso"] = "/vpn/openvpn/cso";
                del["csos"] = "/vpn/openvpn/csos";
                del["client"] = "/vpn/openvpn/client";
                del["clients"] = "/vpn/openvpn/clients";
                del["server"] = "/vpn/openvpn/server";
                del["servers"] = "/vpn/openvpn/servers";
            })(del = openvpn.del || (openvpn.del = {}));
            let put;
            (function (put) {
            })(put = openvpn.put || (openvpn.put = {}));
        })(openvpn = vpn.openvpn || (vpn.openvpn = {}));
        let wireguard;
        (function (wireguard) {
            let get;
            (function (get) {
                get["apply"] = "/vpn/wireguard/apply";
                get["settings"] = "/vpn/wireguard/settings";
            })(get = wireguard.get || (wireguard.get = {}));
            let post;
            (function (post) {
                post["apply"] = "/vpn/wireguard/apply";
            })(post = wireguard.post || (wireguard.post = {}));
            let patch;
            (function (patch) {
                patch["settings"] = "/vpn/wireguard/settings";
            })(patch = wireguard.patch || (wireguard.patch = {}));
            let del;
            (function (del) {
            })(del = wireguard.del || (wireguard.del = {}));
            let put;
            (function (put) {
            })(put = wireguard.put || (wireguard.put = {}));
            let peer;
            (function (peer) {
                let get;
                (function (get) {
                    get["default"] = "/vpn/wireguard/peer";
                    get["peers"] = "/vpn/wireguard/peers";
                    get["allowed_ips"] = "/vpn/wireguard/peer/allowed_ips";
                })(get = peer.get || (peer.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/vpn/wireguard/peer";
                    post["allowed_ips"] = "/vpn/wireguard/peer/allowed_ips";
                })(post = peer.post || (peer.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/vpn/wireguard/peer";
                    patch["allowed_ips"] = "/vpn/wireguard/peer/allowed_ips";
                })(patch = peer.patch || (peer.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/vpn/wireguard/peer";
                    del["peers"] = "/vpn/wireguard/peers";
                    del["allowed_ips"] = "/vpn/wireguard/peer/allowed_ips";
                })(del = peer.del || (peer.del = {}));
                let put;
                (function (put) {
                    put["peers"] = "/vpn/wireguard/peers";
                })(put = peer.put || (peer.put = {}));
            })(peer = wireguard.peer || (wireguard.peer = {}));
            let tunnel;
            (function (tunnel) {
                let get;
                (function (get) {
                    get["default"] = "/vpn/wireguard/tunnel";
                    get["tunnels"] = "/vpn/wireguard/tunnels";
                    get["address"] = "/vpn/wireguard/tunnel/address";
                })(get = tunnel.get || (tunnel.get = {}));
                let post;
                (function (post) {
                    post["default"] = "/vpn/wireguard/tunnel";
                    post["address"] = "/vpn/wireguard/tunnel/address";
                })(post = tunnel.post || (tunnel.post = {}));
                let patch;
                (function (patch) {
                    patch["default"] = "/vpn/wireguard/tunnel";
                    patch["address"] = "/vpn/wireguard/tunnel/address";
                })(patch = tunnel.patch || (tunnel.patch = {}));
                let del;
                (function (del) {
                    del["default"] = "/vpn/wireguard/tunnel";
                    del["tunnels"] = "/vpn/wireguard/tunnels";
                    del["address"] = "/vpn/wireguard/tunnel/address";
                })(del = tunnel.del || (tunnel.del = {}));
                let put;
                (function (put) {
                    put["tunnels"] = "/vpn/wireguard/tunnels";
                })(put = tunnel.put || (tunnel.put = {}));
            })(tunnel = wireguard.tunnel || (wireguard.tunnel = {}));
        })(wireguard = vpn.wireguard || (vpn.wireguard = {}));
    })(vpn = PfsenseAPI.vpn || (PfsenseAPI.vpn = {}));
})(PfsenseAPI || (exports.PfsenseAPI = PfsenseAPI = {}));
exports.default = Pfsense;
