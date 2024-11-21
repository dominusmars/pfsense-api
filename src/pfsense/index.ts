import { Client } from "client";
type APIResponse<T> = PfsenseAPI.APIResponse<T>;

class Auth {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async postKey(body: PfsenseAPI.auth.keyRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse>> {
        return await this.client.post(PfsenseAPI.auth.post.key, body, "basic");
    }
    async deleteKey(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse>> {
        return await this.client.delete(PfsenseAPI.auth.del.key, { id }, "basic");
    }
    async keys(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse[]>> {
        return await this.client.get(PfsenseAPI.auth.get.keys, query);
    }
    async deleteKeys(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse[]>> {
        return await this.client.delete(PfsenseAPI.auth.del.keys, query);
    }
}

class Diagnostics {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async arpTable(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse[]>> {
        return await this.client.get(PfsenseAPI.diagnostics.Arp.get.arpTable, query);
    }
    async deleteArpTable(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse[]>> {
        return await this.client.delete(PfsenseAPI.diagnostics.Arp.del.arpTable, query);
    }
    async getArpEntry(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse>> {
        return await this.client.get(PfsenseAPI.diagnostics.Arp.get.arpEntry, { id });
    }
    async deleteArpEntry(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse>> {
        return await this.client.delete(PfsenseAPI.diagnostics.Arp.del.arpEntry, { id });
    }
    async runCommand(command: string): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.CommandResponse>> {
        return await this.client.post(PfsenseAPI.diagnostics.post.command, { command });
    }
    async getConfigRevision(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision>> {
        return await this.client.get(PfsenseAPI.diagnostics.config.get.revision, { id });
    }
    async deleteConfigRevision(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision>> {
        return await this.client.delete(PfsenseAPI.diagnostics.config.del.revision, { id });
    }
    async getConfigRevisions(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision[]>> {
        return await this.client.get(PfsenseAPI.diagnostics.config.get.revisions, query);
    }
    async deleteConfigRevisions(
        query: PfsenseAPI.queryWithoutSortRequest
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision[]>> {
        return await this.client.delete(PfsenseAPI.diagnostics.config.del.revisions, query);
    }
    async HaltSystem(body: PfsenseAPI.diagnostics.SystemHaltRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.SystemHaltResponse>> {
        return await this.client.post(PfsenseAPI.diagnostics.post.halt, body);
    }

    async RebootSystem(
        body: PfsenseAPI.diagnostics.SystemRebootRequest
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.SystemRebootResponse>> {
        return await this.client.post(PfsenseAPI.diagnostics.post.reboot, body);
    }
}
class OneToOne {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getMapping(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>> {
        return await this.client.get(PfsenseAPI.firewall.nat.onetoone.get.mapping, { id });
    }
    async postMapping(
        body: PfsenseAPI.firewall.nat.onetoone.OneToOneMapping
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>> {
        return await this.client.post(PfsenseAPI.firewall.nat.onetoone.post.mapping, body);
    }
    async patchMapping(
        body: PfsenseAPI.firewall.nat.onetoone.OneToOneMappingId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>> {
        return await this.client.patch(PfsenseAPI.firewall.nat.onetoone.patch.mapping, body);
    }
    async deleteMapping(id: number, apply: boolean): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>> {
        return await this.client.delete(PfsenseAPI.firewall.nat.onetoone.del.mapping, { id, apply });
    }
    async getMappings(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>> {
        return await this.client.get(PfsenseAPI.firewall.nat.onetoone.get.mappings, query);
    }
    async putMappings(
        body: PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>> {
        return await this.client.put(PfsenseAPI.firewall.nat.onetoone.put.mappings, body);
    }
    async deleteMappings(
        query: PfsenseAPI.queryWithoutSortRequest
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>> {
        return await this.client.delete(PfsenseAPI.firewall.nat.onetoone.del.mappings, query);
    }
}
class Outbound {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getMapping(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>> {
        return await this.client.get(PfsenseAPI.firewall.nat.outbound.get.mapping, { id });
    }
    async postMapping(
        body: PfsenseAPI.firewall.nat.outbound.OutboundNATMapping
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>> {
        return await this.client.post(PfsenseAPI.firewall.nat.outbound.post.mapping, body);
    }
    async patchMapping(
        body: PfsenseAPI.firewall.nat.outbound.OutboundNATMappingId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>> {
        return await this.client.patch(PfsenseAPI.firewall.nat.outbound.patch.mapping, body);
    }
    async deleteMapping(id: number, apply: boolean = false): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>> {
        return await this.client.delete(PfsenseAPI.firewall.nat.outbound.del.mapping, { id, apply });
    }
    async getMappings(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>> {
        return await this.client.get(PfsenseAPI.firewall.nat.outbound.get.mappings, query);
    }
    async putMappings(
        body: PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>> {
        return await this.client.put(PfsenseAPI.firewall.nat.outbound.put.mappings, body);
    }
    async deleteMappings(
        query: PfsenseAPI.queryWithoutSortRequest
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>> {
        return await this.client.delete(PfsenseAPI.firewall.nat.outbound.del.mappings, query);
    }
    async getMode(): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>> {
        return await this.client.get(PfsenseAPI.firewall.nat.outbound.get.mode);
    }
    async patchMode(
        body: PfsenseAPI.firewall.nat.outbound.OutboundNATMode
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMode>> {
        return await this.client.patch(PfsenseAPI.firewall.nat.outbound.patch.mode, body);
    }
}
class PortForward {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getPortForward(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>> {
        return await this.client.get(PfsenseAPI.firewall.nat.get.portForward, { id });
    }
    async postPortForward(body: PfsenseAPI.firewall.nat.PortForward): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>> {
        return await this.client.post(PfsenseAPI.firewall.nat.post.portForward, body);
    }
    async patchPortForward(body: PfsenseAPI.firewall.nat.PortForwardId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>> {
        return await this.client.patch(PfsenseAPI.firewall.nat.patch.portForward, body);
    }
    async deletePortForward(id: number, apply: boolean = false): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>> {
        return await this.client.delete(PfsenseAPI.firewall.nat.del.portForward, { id, apply });
    }
    async getPortForwards(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward[]>> {
        return await this.client.get(PfsenseAPI.firewall.nat.get.portForwards, query);
    }
    async putPortForwards(body: PfsenseAPI.firewall.nat.PortForward[]): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward[]>> {
        return await this.client.put(PfsenseAPI.firewall.nat.put.portForwards, body);
    }
    async deletePortForwards(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward[]>> {
        return await this.client.delete(PfsenseAPI.firewall.nat.del.portForwards, query);
    }
}
class Nat {
    client: Client;
    one_to_one: OneToOne;
    outbound: Outbound;
    portForward: PortForward;
    constructor(client: Client) {
        this.client = client;
        this.one_to_one = new OneToOne(client);
        this.outbound = new Outbound(client);
        this.portForward = new PortForward(client);
    }
}
class Limiter {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getBandwidth(
        parent_id: number,
        id: number
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>> {
        return await this.client.get(PfsenseAPI.firewall.trafficShaper.limiter.get.bandwidth, { parent_id, id });
    }
    async postBandwidth(
        body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidthParentId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>> {
        return await this.client.post(PfsenseAPI.firewall.trafficShaper.limiter.post.bandwidth, body);
    }
    async patchBandwidth(
        body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidthId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>> {
        return await this.client.patch(PfsenseAPI.firewall.trafficShaper.limiter.post.bandwidth, body);
    }
    async deleteBandwidth(
        parent_id: number,
        id: number
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>> {
        return await this.client.delete(PfsenseAPI.firewall.trafficShaper.limiter.get.bandwidth, { parent_id, id });
    }
    async getLimiter(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>> {
        return await this.client.get(PfsenseAPI.firewall.trafficShaper.limiter.get.default, { id });
    }
    async postLimiter(
        body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>> {
        return await this.client.post(PfsenseAPI.firewall.trafficShaper.limiter.post.default, body);
    }
    // Need to change Id to just id required because the rest can be optional
    async patchLimiter(
        body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>> {
        return await this.client.patch(PfsenseAPI.firewall.trafficShaper.limiter.patch.default, body);
    }
    async deleteLimiter(
        id: number,
        apply: boolean = false
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>> {
        return await this.client.delete(PfsenseAPI.firewall.trafficShaper.limiter.del.default, { id, apply });
    }
    async getQueue(
        parent_id: number,
        id: number
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>> {
        return await this.client.get(PfsenseAPI.firewall.trafficShaper.limiter.get.queue, { parent_id, id });
    }
    async postQueue(body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueueParentId) {
        return await this.client.post<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>(
            PfsenseAPI.firewall.trafficShaper.limiter.post.queue,
            body
        );
    }
    async patchQueue(Queue: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueueId) {
        return await this.client.patch<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>(
            PfsenseAPI.firewall.trafficShaper.limiter.patch.queue,
            Queue
        );
    }
    async deleteQueue(parent_id: number, id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>(
            PfsenseAPI.firewall.trafficShaper.limiter.del.queue,
            { parent_id, id, apply }
        );
    }
    async getLimiters(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter[]>(
            PfsenseAPI.firewall.trafficShaper.limiter.get.limiters,
            query
        );
    }
    async putLimiters(Limiters: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter[]) {
        return await this.client.put<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter[]>(
            PfsenseAPI.firewall.trafficShaper.limiter.put.limiters,
            Limiters
        );
    }
}
class TrafficShaper {
    client: Client;
    limiter: Limiter;
    constructor(client: Client) {
        this.client = client;
        this.limiter = new Limiter(client);
    }
    async getTrafficShaper(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper>> {
        return await this.client.get(PfsenseAPI.firewall.trafficShaper.get.default, { id });
    }
    async postTrafficShaper(
        body: PfsenseAPI.firewall.trafficShaper.TrafficShaper
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper>> {
        return await this.client.post(PfsenseAPI.firewall.trafficShaper.post.default, body);
    }
    async patchTrafficShaper(
        body: PfsenseAPI.firewall.trafficShaper.TrafficShaperId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaperId>> {
        return await this.client.post(PfsenseAPI.firewall.trafficShaper.patch.default, body);
    }
    async deleteTrafficShaper(id: number, apply: boolean = false): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper>> {
        return await this.client.delete(PfsenseAPI.firewall.trafficShaper.del.default, { id, apply });
    }
    async getQueue(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>(PfsenseAPI.firewall.trafficShaper.get.queue, {
            parent_id,
            id,
        });
    }
    async postQueue(body: PfsenseAPI.firewall.trafficShaper.TrafficShaperQueueParentId) {
        return await this.client.post<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>(PfsenseAPI.firewall.trafficShaper.post.queue, body);
    }
    async patchQueue(body: PfsenseAPI.firewall.trafficShaper.TrafficShaperQueueId) {
        return await this.client.patch<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>(PfsenseAPI.firewall.trafficShaper.patch.queue, body);
    }
    async deleteQueue(parent_id: number, id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>(PfsenseAPI.firewall.trafficShaper.del.queue, {
            parent_id,
            id,
            apply,
        });
    }
    async getTrafficShapers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.firewall.trafficShaper.TrafficShaper[]>(PfsenseAPI.firewall.trafficShaper.get.trafficShapers, query);
    }
    async putTrafficShapers(body: PfsenseAPI.firewall.trafficShaper.TrafficShaper[]) {
        return await this.client.put<PfsenseAPI.firewall.trafficShaper.TrafficShaper[]>(PfsenseAPI.firewall.trafficShaper.put.trafficShapers, body);
    }
    async deleteTrafficShapers(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.firewall.trafficShaper.TrafficShaper[]>(
            PfsenseAPI.firewall.trafficShaper.del.trafficShapers,
            query
        );
    }
}

class VirtualIP {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async apply() {
        return await this.client.post<PfsenseAPI.firewall.virtualIp.VirtualIpApplied>(PfsenseAPI.firewall.post.apply, {});
    }
    async getVirtualIp(id: number) {
        return await this.client.get<PfsenseAPI.firewall.virtualIp.VirtualIp>(PfsenseAPI.firewall.virtualIp.get.default, { id });
    }
    async postVirtualIp(VirtualIp: PfsenseAPI.firewall.virtualIp.VirtualIpRequest) {
        return await this.client.post<PfsenseAPI.firewall.virtualIp.VirtualIp>(PfsenseAPI.firewall.virtualIp.post.default, VirtualIp);
    }
    async patchVirtualIp(VirtualIp: PfsenseAPI.firewall.virtualIp.VirtualIpId) {
        return await this.client.patch<PfsenseAPI.firewall.virtualIp.VirtualIp>(PfsenseAPI.firewall.virtualIp.patch.default, VirtualIp);
    }
    async deleteVirtualIp(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.firewall.virtualIp.VirtualIp>(PfsenseAPI.firewall.virtualIp.del.default, { id, apply });
    }
    async getVirtualIps(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.firewall.virtualIp.VirtualIp[]>(PfsenseAPI.firewall.virtualIp.get.virtualIps, query);
    }
    async deleteVirtualIps(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.firewall.virtualIp.VirtualIp[]>(PfsenseAPI.firewall.virtualIp.del.virtualIps, query);
    }
}

class Firewall {
    client: Client;
    nat: Nat;
    trafficShaper: TrafficShaper;
    virtualIp: VirtualIP;

    constructor(client: Client) {
        this.client = client;
        this.nat = new Nat(client);
        this.trafficShaper = new TrafficShaper(client);
        this.virtualIp = new VirtualIP(client);
    }

    async getAdvancedSettings(): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAdvancedSettings>> {
        return await this.client.get(PfsenseAPI.firewall.get.advancedSettings);
    }
    async patchAdvancedSettings(
        body: PfsenseAPI.firewall.AdvancedSettingsRequest
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAdvancedSettings>> {
        return await this.client.patch(PfsenseAPI.firewall.patch.advancedSettings, body);
    }
    async getAlias(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>> {
        return await this.client.get(PfsenseAPI.firewall.get.alias, { id });
    }
    async postAlias(body: PfsenseAPI.firewall.FirewallAlias): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>> {
        return await this.client.post(PfsenseAPI.firewall.post.alias, body);
    }
    async patchAlias(body: PfsenseAPI.firewall.FirewallAlias): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>> {
        return await this.client.patch(PfsenseAPI.firewall.patch.alias, body);
    }
    async deleteAlias(id: number, apply: boolean = false): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>> {
        return await this.client.delete(PfsenseAPI.firewall.del.alias, { id, apply });
    }
    async getAliases(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias[]>> {
        return await this.client.get(PfsenseAPI.firewall.get.aliases, query);
    }
    async putAliases(body: PfsenseAPI.firewall.FirewallAlias[]): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias[]>> {
        return await this.client.put(PfsenseAPI.firewall.put.aliases, body);
    }
    async deleteAliases(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias[]>> {
        return await this.client.delete(PfsenseAPI.firewall.del.aliases, query);
    }
    async apply(): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallApply>> {
        return await this.client.post(PfsenseAPI.firewall.post.apply, {});
    }
    async getRule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>> {
        return await this.client.get(PfsenseAPI.firewall.get.rule, { id });
    }
    async postRule(body: PfsenseAPI.firewall.FirewallRule): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>> {
        return await this.client.post(PfsenseAPI.firewall.post.rule, body);
    }
    async patchRule(body: PfsenseAPI.firewall.FirewallRuleId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>> {
        return await this.client.patch(PfsenseAPI.firewall.patch.rule, body);
    }
    async deleteRule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>> {
        return await this.client.delete(PfsenseAPI.firewall.del.rule, { id });
    }
    async getRules(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule[]>> {
        return await this.client.get(PfsenseAPI.firewall.get.rules, query);
    }
    async putRules(body: PfsenseAPI.firewall.FirewallRule[]): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule[]>> {
        return await this.client.put(PfsenseAPI.firewall.put.rules, body);
    }
    async deleteRules(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule[]>> {
        return await this.client.delete(PfsenseAPI.firewall.del.rules, query);
    }
    async getSchedule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>> {
        return await this.client.get(PfsenseAPI.firewall.schedule.get.default, { id });
    }
    async postSchedule(
        body: PfsenseAPI.firewall.schedule.FirewallSchedule
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>> {
        return await this.client.post(PfsenseAPI.firewall.schedule.post.default, body);
    }
    async patchSchedule(
        body: PfsenseAPI.firewall.schedule.FirewallScheduleId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>> {
        return await this.client.patch(PfsenseAPI.firewall.schedule.patch.default, body);
    }
    async deleteSchedule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>> {
        return await this.client.delete(PfsenseAPI.firewall.schedule.del.default, { id });
    }
    async getScheduleTimeRange(parent_id: number, id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>> {
        return await this.client.get(PfsenseAPI.firewall.schedule.get.time_range, { parent_id, id });
    }
    async postScheduleTimeRange(
        body: PfsenseAPI.firewall.schedule.FirewallScheduleTimeRangeWithParentId
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange>> {
        return await this.client.post(PfsenseAPI.firewall.schedule.post.time_range, body);
    }
    async patchScheduleTimeRange(
        body: PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange>> {
        return await this.client.patch(PfsenseAPI.firewall.schedule.patch.time_range, body);
    }
    async deleteScheduleTimeRange(
        parent_id: number,
        id: number
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange>> {
        return await this.client.delete(PfsenseAPI.firewall.schedule.del.time_range, { parent_id, id });
    }
    async getSchedules(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule[]>> {
        return await this.client.get(PfsenseAPI.firewall.schedule.get.schedules, query);
    }
    async putSchedules(
        body: PfsenseAPI.firewall.schedule.FirewallSchedule[]
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule[]>> {
        return await this.client.put(PfsenseAPI.firewall.schedule.put.schedules, body);
    }
    async deleteSchedules(
        query: PfsenseAPI.queryWithoutSortRequest
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule[]>> {
        return await this.client.delete(PfsenseAPI.firewall.schedule.del.schedules, query);
    }
    async getState(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallState[]>> {
        return await this.client.get(PfsenseAPI.firewall.state.get.default, query);
    }
    async deleteState(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallState[]>> {
        return await this.client.delete(PfsenseAPI.firewall.state.del.default, query);
    }
    async getStateSize(): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallStateSize>> {
        return await this.client.get(PfsenseAPI.firewall.state.get.size);
    }
    async patchStateSize(
        body: PfsenseAPI.firewall.state.FirewallStateSizeRequest
    ): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallStateSize>> {
        return await this.client.patch(PfsenseAPI.firewall.state.patch.size, body);
    }
}

class Pfsense {
    version: string;
    defaultEndpoint: string;
    host: string;
    key: string;
    full_endpoint: string;
    client: any;
    auth: Auth;
    diagnostics: Diagnostics;
    firewall: Firewall;
    constructor(host: string, api_key: string, { version } = { version: "v2" }) {
        this.version = version;
        this.defaultEndpoint = "/api/" + this.version;
        this.host = host;
        this.key = api_key;
        this.full_endpoint = this.host + this.defaultEndpoint;
        this.client = new Client({
            base_url: this.full_endpoint,
            api_key: this.key,
        });
        this.auth = new Auth(this.client);
        this.diagnostics = new Diagnostics(this.client);
        this.firewall = new Firewall(this.client);
    }
}

export namespace PfsenseAPI {
    export interface APIResponse<T> {
        code: number;
        status: string;
        response_id: string;
        message: string;
        data: T;
        _links: any;
    }

    export interface APIResponseError extends APIResponse<any> {
        code: 400 | 401 | 403 | 404 | 406 | 409 | 415 | 422 | 424 | 500 | 503;
    }

    export interface queryRequest {
        limit?: number;
        offset?: number;
        sort_by?: string[];
        sort_order?: "SORT_ASC" | "SORT_DESC";
        query?: Map<any, any>;
    }
    export interface queryWithoutSortRequest {
        limit?: number;
        offset?: number;
        query?: Map<any, any>;
    }

    export namespace auth {
        export enum get {
            keys = "/auth/keys",
            jwt = "/auth/jwt",
        }
        export interface keyRequest {
            descr: string;
            hash_algo: string;
            length_bytes: number;
            hash: string;
            key: string;
        }
        export interface keyResponse extends keyRequest {
            username: string;
        }
        export enum post {
            key = "/auth/key",
            keys = "/auth/keys",
        }
        export enum del {
            key = "/auth/key",
            keys = "/auth/keys",
        }
    }
    export namespace diagnostics {
        export namespace Arp {
            export enum get {
                arpTable = "/diagnostics/arp_table",
                arpEntry = "/diagnostics/arp_table/entry",
            }

            export interface arpTableResponse {
                hostname: string;
                ip_address: string;
                mac_address: string;
                interface: string;
                type: string;
                permanent: boolean;
                dnsresolve: string;
                expires: string;
            }

            export enum del {
                arpTable = "/diagnostics/arp_table",
                arpEntry = "/diagnostics/arp_table/entry",
            }
        }
        export namespace config {
            export enum get {
                revision = "/diagnostics/config_history/revision",
                revisions = "/diagnostics/config_history/revisions",
            }
            export interface ConfigHistoryRevision {
                description: string;
                time: string;
                version: string;
                filesize: number;
                oneOf: any[];
            }

            export enum del {
                revision = "/diagnostics/config_history/revision",
                revisions = "/diagnostics/config_history/revision",
            }
        }
        export enum post {
            command = "/diagnostics/command_prompt",
            halt = "/diagnostics/halt_system",
            reboot = "/diagnostics/reboot",
        }

        export interface CommandResponse {
            output: string;
            result_code: number;
            command: string;
        }
        export interface SystemHaltRequest {
            dry_run: boolean;
        }
        export interface SystemHaltResponse {
            description: string;
            oneOf: any[];
        }
        export interface SystemRebootRequest {
            dry_run: boolean;
        }
        export interface SystemRebootResponse {
            description: string;
            oneOf: any[];
        }
    }
    export namespace firewall {
        export namespace nat {
            export namespace onetoone {
                export enum get {
                    mapping = "/firewall/nat/one_to_one/mapping",
                    mappings = "/firewall/nat/one_to_one/mappings",
                }
                export interface OneToOneMapping {
                    interface: string;
                    disabled: boolean;
                    nobinat: boolean;
                    natreflection: string;
                    ipprotocol: string;
                    external: string;
                    source: string;
                    destination: string;
                    descr: string;
                }
                export interface OneToOneMappingId extends OneToOneMapping {
                    id: number;
                }
                export enum post {
                    mapping = "/firewall/nat/one_to_one/mapping",
                }
                export enum del {
                    mapping = "/firewall/nat/one_to_one/mapping",
                    mappings = "/firewall/nat/one_to_one/mappings",
                }
                export enum patch {
                    mapping = "/firewall/nat/one_to_one/mapping",
                }
                export enum put {
                    mappings = "/firewall/nat/one_to_one/mappings",
                }
            }
            export namespace outbound {
                export enum get {
                    mapping = "/firewall/nat/outbound/mapping",
                    mappings = "/firewall/nat/outbound/mappings",
                    mode = "/firewall/nat/outbound/mode",
                }
                export interface OutboundNATMode {
                    mode: string;
                }
                export interface OutboundNATMapping {
                    interface: string;
                    protocol: string;
                    disabled: boolean;
                    nonat: string;
                    nosync: boolean;
                    source: string;
                    source_port: string;
                    destination: string;
                    destination_port: string;
                    target: string;
                    target_subnet: string;
                    nat_port: string;
                    static_nat_port: string;
                    poolopts: string;
                    source_hash_key: string;
                    descr: string;
                }
                export interface OutboundNATMappingId extends OutboundNATMapping {
                    id: number;
                }

                export enum post {
                    mapping = "/firewall/nat/outbound/mapping",
                }
                export enum del {
                    mapping = "/firewall/nat/outbound/mapping",
                    mappings = "/firewall/nat/outbound/mappings",
                }
                export enum patch {
                    mapping = "/firewall/nat/outbound/mapping",
                    mode = "/firewall/nat/outbound/mode",
                }
                export enum put {
                    mappings = "/firewall/nat/outbound/mappings",
                }
            }
            export enum get {
                portForward = "/firewall/nat/port_forward",
                portForwards = "/firewall/nat/port_forwards",
            }
            export interface PortForward {
                interface: string;
                ipprotocol: string;
                protocol: string;
                source: string;
                source_port: string;
                destination: string;
                destination_port: string;
                target: string;
                local_port: string;
                disabled: boolean;
                nordr: boolean;
                nosync: boolean;
                descr: string;
                natreflection: string;
                associated_rule_id: string;
                created_time?: string;
                created_by?: string;
                updated_time?: string;
                updated_by?: string;
            }
            export interface PortForwardId extends PortForward {
                id: number;
            }

            export enum post {
                portForward = "/firewall/nat/port_forward",
            }
            export enum del {
                portForward = "/firewall/nat/port_forward",
                portForwards = "/firewall/nat/port_forwards",
            }
            export enum patch {
                portForward = "/firewall/nat/port_forward",
            }
            export enum put {
                portForwards = "/firewall/nat/port_forwards",
            }
        }
        export namespace schedule {
            export enum get {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
                schedules = "/firewall/schedules",
            }
            export interface FirewallSchedule {
                schedlabel?: string;
                name: string;
                descr: string;
                active?: boolean;
                timerange: {
                    position: number[];
                    month: number[];
                    day: number[];
                    hour: string;
                    rangedescr?: string;
                }[];
            }
            export interface FirewallScheduleTimeRangeWithParentId extends FirewallScheduleTimeRange {
                parent_id: number;
            }
            export interface FirewallScheduleTimeRange {
                position: number;
                month: number;
                day: number;
                hour: string;
                rangedescr: string;
            }
            export interface FirewallScheduleId extends FirewallSchedule {
                id: number;
            }
            export enum post {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
            }
            export enum del {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
                schedules = "/firewall/schedules",
            }
            export enum patch {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
            }
            export enum put {
                schedules = "/firewall/schedules",
            }
        }

        export namespace state {
            export enum get {
                default = "/firewall/states",
                size = "/firewall/states/size",
            }
            export interface FirewallState {
                interface: string | null;
                protocol: string | null;
                direction: string | null;
                source: string | null;
                destination: string | null;
                state: string | null;
                age: string | null;
                expires_in: string | null;
                packets_total: number | null;
                packets_in: number | null;
                packets_out: number | null;
                bytes_total: number | null;
                bytes_in: number | null;
                bytes_out: number | null;
            }
            export interface FirewallStateSize {
                maximumstates: number;
                defaultmaximumstates?: number;
                currentstates?: number;
            }
            export interface FirewallStateSizeRequest {
                maximumstates: number;
            }
            export enum post {}
            export enum del {
                default = "/firewall/states",
            }
            export enum patch {
                size = "/firewall/states/size",
            }
            export enum put {}
        }
        export namespace trafficShaper {
            export namespace limiter {
                export enum get {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue",
                    limiters = "/firewall/traffic_shaper/limiters",
                }
                export interface TrafficShaperLimiter {
                    name: string;
                    number?: number;
                    enabled: boolean;
                    mask: "none" | "srcaddress" | "dstaddress";
                    maskbits: number;
                    maskbitsv6: number;
                    qlimit?: number;
                    ecn: boolean;
                    description: string;
                    aqm: "droptail" | "codel" | "pie" | "red" | "gred";
                    sched: "wf2q+" | "fifo" | "qfq" | "rr" | "prio" | "fq_codel" | "fq_pie";
                    param_codel_target: number;
                    param_codel_interval: number;
                    param_pie_target: number;
                    param_pie_tupdate: number;
                    param_pie_alpha: number;
                    param_pie_beta: number;
                    param_pie_max_burst: number;
                    param_pie_max_ecnth: number;
                    pie_onoff: boolean;
                    pie_capdrop: boolean;
                    pie_qdelay: boolean;
                    pie_pderand: boolean;
                    param_red_w_q: number;
                    param_red_min_th: number;
                    param_red_max_th: number;
                    param_red_max_p: number;
                    param_gred_w_q: number;
                    param_gred_min_th: number;
                    param_gred_max_th: number;
                    param_gred_max_p: number;
                    param_fq_codel_target: number;
                    param_fq_codel_interval: number;
                    param_fq_codel_quantum?: number;
                    param_fq_codel_limit?: number;
                    param_fq_codel_flows?: number;
                    param_fq_pie_target: number;
                    param_fq_pie_tupdate: number;
                    param_fq_pie_alpha: number;
                    param_fq_pie_beta: number;
                    param_fq_pie_max_burst: number;
                    param_fq_pie_max_ecnth: number;
                    param_fq_pie_quantum?: number;
                    param_fq_pie_limit?: number;
                    param_fq_pie_flows?: number;
                    delay?: number;
                    plr?: number;
                    buckets?: number;
                    bandwidth: {
                        profile: string;
                        bandwidth: number;
                        unit: string;
                    }[];
                    queue: {
                        name: string;
                        enabled: boolean;
                        mask: "none" | "srcaddress" | "dstaddress";
                        maskbits: number;
                        maskbitsv6: number;
                        qlimit?: number;
                        ecn: boolean;
                        description: string;
                        aqm: "droptail" | "codel" | "pie" | "red" | "gred";
                        sched: "wf2q+" | "fifo" | "qfq" | "rr" | "prio" | "fq_codel" | "fq_pie";
                        param_codel_target: number;
                        param_codel_interval: number;
                        param_pie_target: number;
                        param_pie_tupdate: number;
                        param_pie_alpha: number;
                        param_pie_beta: number;
                        param_pie_max_burst: number;
                        param_pie_max_ecnth: number;
                        pie_onoff: boolean;
                        pie_capdrop: boolean;
                        pie_qdelay: boolean;
                        pie_pderand: boolean;
                        param_red_w_q: number;
                        param_red_min_th: number;
                        param_red_max_th: number;
                        param_red_max_p: number;
                        param_gred_w_q: number;
                        param_gred_min_th: number;
                        param_gred_max_th: number;
                        param_gred_max_p: number;
                        param_fq_codel_target: number;
                        param_fq_codel_interval: number;
                        param_fq_codel_quantum?: number;
                        param_fq_codel_limit?: number;
                        param_fq_codel_flows?: number;
                        param_fq_pie_target: number;
                        param_fq_pie_tupdate: number;
                        param_fq_pie_alpha: number;
                        param_fq_pie_beta: number;
                        param_fq_pie_max_burst: number;
                        param_fq_pie_max_ecnth: number;
                        param_fq_pie_quantum?: number;
                        param_fq_pie_limit?: number;
                        param_fq_pie_flows?: number;
                        delay?: number;
                        plr?: number;
                        buckets?: number;
                        bandwidth: {
                            profile: string;
                            bandwidth: number;
                            unit: string;
                        }[];
                    }[];
                }
                export interface TrafficShaperLimiterQueue {
                    name: string;
                    number?: number;
                    enabled: boolean;
                    mask: "none" | "srcaddress" | "dstaddress";
                    maskbits: number;
                    maskbitsv6: number;
                    qlimit?: number;
                    ecn: boolean;
                    description: string;
                    aqm: "droptail" | "codel" | "pie" | "red" | "gred";
                    param_codel_target: number;
                    param_codel_interval: number;
                    param_pie_target: number;
                    param_pie_tupdate: number;
                    param_pie_alpha: number;
                    param_pie_beta: number;
                    param_pie_max_burst: number;
                    param_pie_max_ecnth: number;
                    pie_onoff: boolean;
                    pie_capdrop: boolean;
                    pie_qdelay: boolean;
                    pie_pderand: boolean;
                    param_red_w_q: number;
                    param_red_min_th: number;
                    param_red_max_th: number;
                    param_red_max_p: number;
                    param_gred_w_q: number;
                    param_gred_min_th: number;
                    param_gred_max_th: number;
                    param_gred_max_p: number;
                    weight?: number;
                    plr?: number;
                    buckets?: number;
                }
                export interface TrafficShaperLimiterQueueParentId extends TrafficShaperLimiterQueue {
                    parent_id: number;
                }
                export interface TrafficShaperLimiterQueueId extends TrafficShaperLimiterQueueParentId {
                    id: number;
                }

                export interface TrafficShaperLimiterId extends TrafficShaperLimiter {
                    id: number;
                }
                export interface TrafficShaperLimiterBandwidth {
                    bw: number;
                    bwscale: string;
                    bwsched: string;
                }
                export interface TrafficShaperLimiterBandwidthParentId extends TrafficShaperLimiterBandwidth {
                    parent_id: number;
                }
                export interface TrafficShaperLimiterBandwidthId extends TrafficShaperLimiterBandwidthParentId {
                    id: number;
                }
                export enum post {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue",
                }
                export enum del {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue",
                }
                export enum patch {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue",
                }
                export enum put {
                    limiters = "/firewall/traffic_shaper/limiters",
                }
            }

            export enum get {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
                trafficShapers = "/firewall/traffic_shapers",
            }
            export interface TrafficShaper {
                enabled: boolean;
                interface: string;
                name?: string;
                scheduler: string;
                bandwidthtype: string;
                bandwidth: number;
                qlimit?: number;
                tbrconfig?: number;
                queue: {
                    interface?: string;
                    enabled: boolean;
                    name: string;
                    priority: number;
                    qlimit: number;
                    description: string;
                    default: boolean;
                    red: boolean;
                    rio: boolean;
                    ecn: boolean;
                    codel: boolean;
                    bandwidthtype: string;
                    bandwidth: number;
                    buckets?: number;
                    hogs?: number;
                    borrow: boolean;
                    upperlimit: boolean;
                    upperlimit_m1?: string;
                    upperlimit_d?: number;
                    upperlimit_m2: string;
                    realtime: boolean;
                    realtime_m1?: string;
                    realtime_d?: number;
                    realtime_m2: string;
                    linkshare: boolean;
                    linkshare_m1?: string;
                    linkshare_d?: number;
                    linkshare_m2: string;
                }[];
            }
            export interface TrafficShaperId extends TrafficShaper {
                id: number;
            }

            export interface TrafficShaperQueue {
                interface?: string;
                enabled: boolean;
                name: string;
                priority: number;
                qlimit: number;
                description: string;
                default: boolean;
                red: boolean;
                rio: boolean;
                ecn: boolean;
                codel: boolean;
                bandwidthtype: string;
                bandwidth: number;
                buckets?: number;
                hogs?: number;
                borrow?: boolean;
                upperlimit: boolean;
                upperlimit_m1?: string;
                upperlimit_d?: number;
                upperlimit_m2: string;
                realtime: boolean;
                realtime_m1?: string;
                realtime_d?: number;
                realtime_m2: string;
                linkshare: boolean;
                linkshare_m1?: string;
                linkshare_d?: number;
                linkshare_m2: string;
            }
            export interface TrafficShaperQueueParentId extends TrafficShaperQueue {
                parent_id: number;
            }
            export interface TrafficShaperQueueId extends TrafficShaperQueueParentId {
                id: number;
            }

            export enum post {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
            }
            export enum del {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
                trafficShapers = "/firewall/traffic_shapers",
            }
            export enum patch {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
            }
            export enum put {
                trafficShapers = "/firewall/traffic_shapers",
            }
        }

        export namespace virtualIp {
            export enum get {
                default = "/firewall/virtual_ip",
                apply = "/firewall/virtual_ip/apply",
                virtualIps = "/firewall/virtual_ips",
            }
            export interface VirtualIpRequest {
                mode: "ipalias" | "proxyarp" | "carp" | "other";
                interface: string;
                type: "single" | "network";
                subnet: string;
                subnet_bits: number;
                descr: string;
                noexpand?: boolean;
                vhid?: number;
                advbase?: number;
                advskew?: number;
                password?: string;
            }
            export interface VirtualIpId extends VirtualIpRequest {
                id: number;
            }
            export interface VirtualIp {
                uniqid?: string;
                mode: "ipalias" | "proxyarp" | "carp" | "other";
                interface: string;
                type: "single" | "network";
                subnet: string;
                subnet_bits: number;
                descr: string;
                noexpand?: boolean;
                vhid?: number;
                advbase?: number;
                advskew?: number;
                password?: string;
                carp_status?: string;
            }
            export interface VirtualIpApplied {
                applied: boolean;
            }

            export enum post {
                default = "/firewall/virtual_ip",
                apply = "/firewall/virtual_ip/apply",
            }
            export enum del {
                default = "/firewall/virtual_ip",
                virtualIps = "/firewall/virtual_ips",
            }
            export enum patch {
                default = "/firewall/virtual_ip",
            }
            export enum put {}
        }

        export enum get {
            advancedSettings = "/firewall/advanced_settings",
            alias = "/firewall/alias",
            aliases = "/firewall/aliases",
            apply = "/firewall/apply",
            rule = "/firewall/rule",
            rules = "/firewall/rules",
        }
        export interface FirewallRule {
            type: string;
            interface: string[];
            ipprotocol: string;
            protocol: string;
            icmptype: string[];
            source: string;
            source_port: string;
            destination: string;
            destination_port: string;
            descr: string;
            disabled: boolean;
            log: boolean;
            statetype: string;
            tcp_flags_any: string;
            tcp_flags_out_of: string[];
            tcp_flags_set: string[];
            gateway: string;
            sched: string;
            dnpipe: string;
            pdnpipe: string;
            defaultqueue: string;
            ackqueue: string;
            floating: boolean;
            quick: boolean;
            direction: string;
            tracker: number;
            associated_rule_id: string;
            created_time?: number;
            created_by?: string;
            updated_time?: number;
            updated_by?: string;
        }
        export interface FirewallRuleId extends FirewallRule {
            id: number;
        }
        export interface FirewallAlias {
            description: string;
            name: string;
            type: string;
            descr: string;
            address: string[];
            detail: string[];
        }
        export interface FirewallAdvancedSettings {
            description: string;
            aliasesresolveinterval: number;
            checkaliaseurlcert: boolean;
        }

        export enum post {
            alias = "/firewall/alias",
            apply = "/firewall/apply",
            rule = "/firewall/rule",
        }
        export interface FirewallApply {
            description: string;
            applied: boolean;
            pending_subsystem: string[];
        }
        export enum del {
            alias = "/firewall/alias",
            rule = "/firewall/rule",
            rules = "/firewall/rules",
            aliases = "/firewall/aliases",
        }
        export enum put {
            aliases = "/firewall/aliases",
            rules = "/firewall/rules",
        }
        export enum patch {
            advancedSettings = "/firewall/advanced_settings",
            alias = "/firewall/alias",
            rule = "/firewall/rule",
        }
        export interface AdvancedSettingsRequest {
            aliasesresolveinterval: number;
            checkaliaseurlcert: boolean;
        }
    }
    export namespace graphQL {
        export enum post {
            default = "/graphql",
        }
    }
    // Only used because interface cannot be a keyword
    export namespace fInterface {
        export enum get {
            default = "/interface",
            interfaces = "/interfaces",
            apply = "/interface/apply",
            available = "/interface/available_interfaces",
            bridge = "/interface/bridge",
            bridges = "/interface/bridges",
            group = "/interface/group",
            groups = "/interface/groups",
            vlan = "/interface/vlan",
            vlans = "/interface/vlans",
        }
        export enum post {
            default = "/interface",
            apply = "/interface/apply",
            bridge = "/interface/bridge",
            group = "/interface/group",
            vlan = "/interface/vlan",
        }
        export enum del {
            default = "/interface",
            interfaces = "/interfaces",
            bridge = "/interface/bridge",
            group = "/interface/group",
            groups = "/interface/groups",
            vlan = "/interface/vlan",
            vlans = "/interface/vlans",
        }
        export enum patch {
            default = "/interface",
            bridge = "/interface/bridge",
            vlan = "/interface/vlan",
        }
        export enum put {
            groups = "/interface/groups",
        }
    }
    export namespace routing {
        export namespace gateway {
            export namespace group {
                export enum get {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority",
                }
                export enum post {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority",
                }
                export enum patch {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority",
                }
                export enum del {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority",
                }
                export enum put {}
            }
            export enum get {
                default = "/routing/gateway",
                defaultGateway = "/routing/gateway/default",
                groups = "/routing/gateway/groups",
                staticRoute = "/routing/static_route",
                staticRoutes = "/routing/static_routes",
            }
            export enum post {
                default = "/routing/gateway",
                staticRoute = "/routing/static_route",
            }
            export enum patch {
                default = "/routing/gateway",
                defaultGateway = "/routing/gateway/default",
                staticRoute = "/routing/static_route",
            }
            export enum del {
                default = "/routing/gateway",
                groups = "/routing/gateway/groups",
                staticRoute = "/routing/static_route",
                staticRoutes = "/routing/static_routes",
            }
            export enum put {}
        }
        export enum get {
            apply = "/routing/apply",
        }
        export enum post {
            apply = "/routing/apply",
        }
        export enum patch {}
        export enum del {}
        export enum put {}
    }
    export namespace services {
        export namespace acme {
            export namespace account {
                export enum get {
                    key = "/services/acme/account_key",
                    keys = "/services/acme/account_key",
                    registration = "/services/acme/account_key/registrations",
                }
                export enum post {
                    key = "/services/acme/account_key",
                    register = "/services/acme/account_key/register",
                }
                export enum patch {
                    key = "/services/acme/account_key",
                }
                export enum del {
                    key = "/services/acme/account_key",
                    keys = "/services/acme/account_key",
                }
                export enum put {
                    keys = "/services/acme/account_key",
                }
            }
            export namespace certificate {
                export enum get {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                    issuances = "/services/acme/certificate/issuances",
                    renewals = "/services/acme/certificate/renewals",
                }
                export enum post {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                    issue = "/services/acme/certificate/issue",
                    renew = "/services/acme/certificate/renew",
                }
                export enum patch {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                }
                export enum del {
                    default = "/services/acme/certificate",

                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                }
                export enum put {}
            }
            export enum get {
                certificates = "/services/acme/certificates",
                settings = "/services/acme/settings",
            }
            export enum post {}
            export enum patch {
                settings = "/services/acme/settings",
            }
            export enum del {
                certificates = "/services/acme/certificates",
            }
            export enum put {
                certificates = "/services/acme/certificates",
            }
        }
        export namespace bind {
            export enum get {
                access_lists = "/services/bind/access_lists",
                settings = "/services/bind/settings",
                view = "/services/bind/view",
                views = "/services/bind/views",
                zones = "/services/bind/zones",
            }
            export enum post {
                view = "/services/bind/view",
            }
            export enum patch {
                settings = "/services/bind/settings",
                view = "/services/bind/view",
            }
            export enum del {
                access_lists = "/services/bind/access_lists",
                view = "/services/bind/view",
                views = "/services/bind/views",
                zones = "/services/bind/zones",
            }
            export enum put {
                access_lists = "/services/bind/access_lists",
                views = "/services/bind/views",
                zones = "/services/bind/zones",
            }
            export namespace accessList {
                export enum get {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry",
                }
                export enum post {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry",
                }
                export enum patch {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry",
                }
                export enum del {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry",
                }
                export enum put {}
            }
            export namespace sync {
                export enum get {
                    remoteHost = "/services/bind/sync/remote_host",
                    remoteHosts = "/services/bind/sync/remote_hosts",
                    settings = "/services/bind/sync/settings",
                }
                export enum post {
                    remoteHost = "/services/bind/sync/remote_host",
                }
                export enum patch {
                    remoteHost = "/services/bind/sync/remote_host",
                    settings = "/services/bind/sync/settings",
                }
                export enum del {
                    remoteHost = "/services/bind/sync/remote_host",
                    remoteHosts = "/services/bind/sync/remote_hosts",
                }
                export enum put {
                    remoteHosts = "/services/bind/sync/remote_hosts",
                }
            }
            export namespace zone {
                export enum get {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record",
                }
                export enum post {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record",
                }
                export enum patch {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record",
                }
                export enum del {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record",
                }
                export enum put {}
            }
        }
        export namespace cron {
            export enum get {
                job = "/services/cron/job",
                jobs = "/services/cron/jobs",
            }
            export enum post {
                job = "/services/cron/job",
            }
            export enum patch {
                job = "/services/cron/job",
            }
            export enum del {
                job = "/services/cron/job",
                jobs = "/services/cron/jobs",
            }
            export enum put {
                jobs = "/services/cron/jobs",
            }
        }
        export namespace dhcpServer {
            export enum get {
                default = "/services/dhcp_server",
                addressPool = "/services/dhcp_server/address_pool",
                apply = "/services/dhcp_server/apply",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping",
                servers = "/services/dhcp_servers",
            }
            export enum post {
                addressPool = "/services/dhcp_server/address_pool",
                apply = "/services/dhcp_server/apply",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping",
            }
            export enum patch {
                default = "/services/dhcp_server",
                addressPool = "/services/dhcp_server/address_pool",
                backend = "/services/dhcp_server/backend",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping",
            }
            export enum del {
                addressPool = "/services/dhcp_server/address_pool",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping",
            }
            export enum put {
                servers = "/services/dhcp_servers",
            }
        }
        export namespace dnsForwarder {
            export enum get {
                apply = "/services/dns_forwarder/apply",
            }
            export enum post {
                apply = "/services/dns_forwarder/apply",
            }
            export enum patch {}
            export enum del {}
            export enum put {}
            export namespace hostOverride {
                export enum get {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias",
                    overrides = "/services/dns_forwarder/host_overrides",
                }
                export enum post {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias",
                }
                export enum patch {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias",
                }
                export enum del {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias",
                    overrides = "/services/dns_forwarder/host_overrides",
                }
                export enum put {
                    overrides = "/services/dns_forwarder/host_overrides",
                }
            }
        }
        export namespace dnsResolver {
            export enum get {
                apply = "/services/dns_resolver/apply",
                domainOverride = "/services/dns_resolver/domain_override",
                domainOverrides = "/services/dns_resolver/domain_overrides",
                settings = "/services/dns_resolver/settings",
            }
            export enum post {
                apply = "/services/dns_resolver/apply",
                domainOverride = "/services/dns_resolver/domain_override",
            }
            export enum patch {
                domainOverride = "/services/dns_resolver/domain_override",
                settings = "/services/dns_resolver/settings",
            }
            export enum del {
                domainOverride = "/services/dns_resolver/domain_override",
                domainOverrides = "/services/dns_resolver/domain_overrides",
            }
            export enum put {
                domainOverrides = "/services/dns_resolver/domain_overrides",
            }
            export namespace accessList {
                export enum get {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network",
                    lists = "/services/dns_resolver/access_lists",
                }
                export enum post {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network",
                }
                export enum patch {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network",
                }
                export enum del {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network",
                    lists = "/services/dns_resolver/access_lists",
                }
                export enum put {
                    lists = "/services/dns_resolver/access_lists",
                }
            }
            export namespace hostOverride {
                export enum get {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias",
                    overrides = "/services/dns_resolver/host_overrides",
                }
                export enum post {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias",
                }
                export enum patch {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias",
                }
                export enum del {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias",
                    overrides = "/services/dns_resolver/host_overrides",
                }
                export enum put {
                    overrides = "/services/dns_resolver/host_overrides",
                }
            }
        }
        export namespace haproxy {
            export enum get {
                apply = "/services/haproxy/apply",
                file = "/services/haproxy/file",
                files = "/services/haproxy/files",
                settings = "/services/haproxy/settings",
            }
            export enum post {
                apply = "/services/haproxy/apply",
                file = "/services/haproxy/file",
            }
            export enum patch {
                file = "/services/haproxy/file",
                settings = "/services/haproxy/settings",
            }

            export enum del {
                file = "/services/haproxy/file",
                files = "/services/haproxy/files",
            }
            export enum put {
                files = "/services/haproxy/files",
            }
            export namespace backend {
                export enum get {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server",
                    backends = "/services/haproxy/backends",
                }
                export enum post {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server",
                }
                export enum patch {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server",
                }
                export enum del {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server",
                    backends = "/services/haproxy/backends",
                }
                export enum put {
                    backends = "/services/haproxy/backends",
                }
            }
            export namespace frontend {
                export enum get {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file",
                    frontends = "/services/haproxy/frontends",
                }
                export enum post {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file",
                }
                export enum patch {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file",
                }
                export enum del {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file",
                    frontends = "/services/haproxy/frontends",
                }
                export enum put {
                    frontends = "/services/haproxy/frontends",
                }
            }
            export namespace settings {
                export enum get {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                }
                export enum post {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                }
                export enum patch {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                }
                export enum del {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                }
                export enum put {}
            }
        }
        export namespace ntp {
            export enum get {
                settings = "/services/ntp/settings",
                time_server = "/services/ntp/time_server",
                time_servers = "/services/ntp/time_servers",
            }
            export enum post {
                time_server = "/services/ntp/time_server",
            }
            export enum patch {
                settings = "/services/ntp/settings",
                time_server = "/services/ntp/time_server",
            }
            export enum del {
                time_server = "/services/ntp/time_server",
                time_servers = "/services/ntp/time_servers",
            }
            export enum put {
                time_servers = "/services/ntp/time_servers",
            }
        }
        export namespace ssh {
            export enum get {
                default = "/services/ssh",
            }
            export enum post {}
            export enum patch {
                default = "/services/ssh",
            }
            export enum del {}
            export enum put {}
        }
        export namespace service_watchdog {
            export enum get {
                default = "/services/service_watchdog",
                watchdogs = "/services/service_watchdogs",
            }
            export enum post {
                default = "/services/service_watchdog",
            }
            export enum patch {
                default = "/services/service_watchdog",
            }
            export enum del {
                default = "/services/service_watchdog",
                watchdogs = "/services/service_watchdogs",
            }
            export enum put {
                watchdogs = "/services/service_watchdogs",
            }
        }
        export namespace wakeOnLan {
            export enum post {
                send = "/services/wake_on_lan/send",
            }
        }
    }
    export namespace status {
        export enum get {
            carp = "/status/carp",
            gateways = "/status/gateways",
            interfaces = "/status/interfaces",
            services = "/status/services",
            system = "/status/system",
        }
        export enum post {
            service = "/status/service",
        }
        export enum patch {
            carp = "/status/carp",
        }
        export enum del {}
        export enum put {}
        export namespace dhcpServer {
            export enum get {
                leases = "/status/dhcp_server/leases",
            }
            export enum post {}
            export enum patch {}
            export enum del {
                leases = "/status/dhcp_server/leases",
            }
            export enum put {}
        }
        export namespace ipsec {
            export enum get {
                child_sa = "/status/ipsec/child_sa",
                sas = "/status/ipsec/sas",
            }
        }
        export namespace logs {
            export enum get {
                dhcp = "/status/logs/dhcp",
                firewall = "/status/logs/firewall",
                settings = "/status/logs/settings",
                system = "/status/logs/system",
            }
            export enum patch {
                settings = "/status/logs/settings",
            }
        }
        export namespace openvpn {
            export enum get {
                client = "/status/openvpn/client",
                servers = "/status/openvpn/servers",
            }
            export namespace server {
                export enum get {
                    connection = "/status/openvpn/server/connection",
                    route = "/status/openvpn/server/route",
                }
                export enum post {}
                export enum patch {}
                export enum del {
                    connection = "/status/openvpn/server/connection",
                }
                export enum put {}
            }
        }
    }
    export namespace user {
        export enum get {
            default = "/user",
            auth_server = "/user/auth_server",
            auth_servers = "/user/auth_servers",
            group = "/user/group",
            groups = "/user/groups",
            users = "/users",
        }
        export enum post {
            default = "/user",
            auth_server = "/user/auth_server",
            group = "/user/group",
            groups = "/user/groups",
        }
        export enum patch {
            default = "/user",
            auth_server = "/user/auth_server",
            group = "/user/group",
            groups = "/user/groups",
        }
        export enum del {
            default = "/user",

            auth_server = "/user/auth_server",
            auth_servers = "/user/auth_servers",
            group = "/user/group",
            groups = "/user/groups",
            users = "/users",
        }
        export enum put {
            auth_servers = "/user/auth_servers",
        }
    }
    export namespace vpn {
        export namespace ipsec {
            export enum get {
                apply = "/vpn/ipsec/apply",
                phase1s = "/vpn/ipsec/phase1s",
                phase2s = "/vpn/ipsec/phase2s",
            }
            export enum post {
                apply = "/vpn/ipsec/apply",
            }
            export enum patch {}
            export enum del {
                phase1s = "/vpn/ipsec/phase1s",
                phase2s = "/vpn/ipsec/phase2s",
            }
            export enum put {
                phase1s = "/vpn/ipsec/phase1s",
                phase2s = "/vpn/ipsec/phase2s",
            }
            export namespace phase1 {
                export enum get {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption",
                }
                export enum post {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption",
                }
                export enum patch {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption",
                }
                export enum del {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption",
                }
                export enum put {}
            }
            export namespace phase2 {
                export enum get {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption",
                }
                export enum post {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption",
                }
                export enum patch {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption",
                }
                export enum del {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption",
                }
                export enum put {}
            }
        }
        export namespace openvpn {
            export enum get {
                cso = "/vpn/openvpn/cso",
                csos = "/vpn/openvpn/csos",
                client = "/vpn/openvpn/client",
                clients = "/vpn/openvpn/clients",
                server = "/vpn/openvpn/server",
                servers = "/vpn/openvpn/servers",
            }
            export enum post {
                cso = "/vpn/openvpn/cso",
                client = "/vpn/openvpn/client",
                server = "/vpn/openvpn/server",
            }
            export enum patch {
                cso = "/vpn/openvpn/cso",
                client = "/vpn/openvpn/client",
                server = "/vpn/openvpn/server",
            }
            export enum del {
                cso = "/vpn/openvpn/cso",
                csos = "/vpn/openvpn/csos",
                client = "/vpn/openvpn/client",
                clients = "/vpn/openvpn/clients",
                server = "/vpn/openvpn/server",
                servers = "/vpn/openvpn/servers",
            }
            export enum put {}
        }
        export namespace wireguard {
            export enum get {
                apply = "/vpn/wireguard/apply",
                settings = "/vpn/wireguard/settings",
            }
            export enum post {
                apply = "/vpn/wireguard/apply",
            }
            export enum patch {
                settings = "/vpn/wireguard/settings",
            }
            export enum del {}
            export enum put {}
            export namespace peer {
                export enum get {
                    default = "/vpn/wireguard/peer",
                    peers = "/vpn/wireguard/peers",
                }
                export enum post {
                    default = "/vpn/wireguard/peer",
                }
                export enum patch {
                    default = "/vpn/wireguard/peer",
                }
                export enum del {
                    default = "/vpn/wireguard/peer",
                    peers = "/vpn/wireguard/peers",
                }
                export enum put {
                    peers = "/vpn/wireguard/peers",
                }
            }
            export namespace tunnel {
                export enum get {
                    default = "/vpn/wireguard/tunnel",
                    tunnels = "/vpn/wireguard/tunnels",
                    address = "/vpn/wireguard/tunnel/address",
                }
                export enum post {
                    default = "/vpn/wireguard/tunnel",
                    address = "/vpn/wireguard/tunnel/address",
                }
                export enum patch {
                    default = "/vpn/wireguard/tunnel",
                    address = "/vpn/wireguard/tunnel/address",
                }
                export enum del {
                    default = "/vpn/wireguard/tunnel",
                    tunnels = "/vpn/wireguard/tunnels",
                    address = "/vpn/wireguard/tunnel/address",
                }
                export enum put {
                    tunnels = "/vpn/wireguard/tunnels",
                }
            }
        }
    }
}
export enum get {}
export enum post {}
export enum patch {}
export enum del {}
export enum put {}

export default Pfsense;
