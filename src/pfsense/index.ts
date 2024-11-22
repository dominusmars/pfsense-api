import { Client } from "../client";

class Auth {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async postKey(body: PfsenseAPI.auth.keyRequest) {
        return await this.client.post<PfsenseAPI.auth.keyResponse>(PfsenseAPI.auth.post.key, body, "basic");
    }
    async deleteKey(id: number) {
        return await this.client.delete<PfsenseAPI.auth.keyResponse>(PfsenseAPI.auth.del.key, { id }, "basic");
    }
    async keys(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.auth.keyResponse[]>(PfsenseAPI.auth.get.keys, query);
    }
    async deleteKeys(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.auth.keyResponse[]>(PfsenseAPI.auth.del.keys, query);
    }
}

class Diagnostics {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async arpTable(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.diagnostics.Arp.arpTableResponse[]>(PfsenseAPI.diagnostics.Arp.get.arpTable, query);
    }
    async deleteArpTable(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.diagnostics.Arp.arpTableResponse[]>(PfsenseAPI.diagnostics.Arp.del.arpTable, query);
    }
    async getArpEntry(id: number) {
        return await this.client.get<PfsenseAPI.diagnostics.Arp.arpTableResponse>(PfsenseAPI.diagnostics.Arp.get.arpEntry, { id });
    }
    async deleteArpEntry(id: number) {
        return await this.client.delete<PfsenseAPI.diagnostics.Arp.arpTableResponse>(PfsenseAPI.diagnostics.Arp.del.arpEntry, { id });
    }
    async runCommand(command: string) {
        return await this.client.post<PfsenseAPI.diagnostics.CommandResponse>(PfsenseAPI.diagnostics.post.command, { command });
    }
    async getConfigRevision(id: number) {
        return await this.client.get<PfsenseAPI.diagnostics.config.ConfigHistoryRevision>(PfsenseAPI.diagnostics.config.get.revision, { id });
    }
    async deleteConfigRevision(id: number) {
        return await this.client.delete<PfsenseAPI.diagnostics.config.ConfigHistoryRevision>(PfsenseAPI.diagnostics.config.del.revision, { id });
    }
    async getConfigRevisions(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.diagnostics.config.ConfigHistoryRevision[]>(PfsenseAPI.diagnostics.config.get.revisions, query);
    }
    async deleteConfigRevisions(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.diagnostics.config.ConfigHistoryRevision[]>(PfsenseAPI.diagnostics.config.del.revisions, query);
    }
    async HaltSystem(body: PfsenseAPI.diagnostics.SystemHaltRequest) {
        return await this.client.post<PfsenseAPI.diagnostics.SystemHaltResponse>(PfsenseAPI.diagnostics.post.halt, body);
    }

    async RebootSystem(body: PfsenseAPI.diagnostics.SystemRebootRequest) {
        return await this.client.post<PfsenseAPI.diagnostics.SystemRebootResponse>(PfsenseAPI.diagnostics.post.reboot, body);
    }
}
class OneToOne {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getMapping(id: number) {
        return await this.client.get<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>(PfsenseAPI.firewall.nat.onetoone.get.mapping, { id });
    }
    async postMapping(body: PfsenseAPI.firewall.nat.onetoone.OneToOneMapping) {
        return await this.client.post<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>(PfsenseAPI.firewall.nat.onetoone.post.mapping, body);
    }
    async patchMapping(body: PfsenseAPI.firewall.nat.onetoone.OneToOneMappingId) {
        return await this.client.patch<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>(PfsenseAPI.firewall.nat.onetoone.patch.mapping, body);
    }
    async deleteMapping(id: number, apply: boolean) {
        return await this.client.delete<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>(PfsenseAPI.firewall.nat.onetoone.del.mapping, {
            id,
            apply,
        });
    }
    async getMappings(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>(PfsenseAPI.firewall.nat.onetoone.get.mappings, query);
    }
    async putMappings(body: PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]) {
        return await this.client.put<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>(PfsenseAPI.firewall.nat.onetoone.put.mappings, body);
    }
    async deleteMappings(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>(PfsenseAPI.firewall.nat.onetoone.del.mappings, query);
    }
}
class Outbound {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getMapping(id: number) {
        return await this.client.get<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>(PfsenseAPI.firewall.nat.outbound.get.mapping, { id });
    }
    async postMapping(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMapping) {
        return await this.client.post<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>(PfsenseAPI.firewall.nat.outbound.post.mapping, body);
    }
    async patchMapping(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMappingId) {
        return await this.client.patch<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>(PfsenseAPI.firewall.nat.outbound.patch.mapping, body);
    }
    async deleteMapping(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>(PfsenseAPI.firewall.nat.outbound.del.mapping, {
            id,
            apply,
        });
    }
    async getMappings(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>(PfsenseAPI.firewall.nat.outbound.get.mappings, query);
    }
    async putMappings(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]) {
        return await this.client.put<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>(PfsenseAPI.firewall.nat.outbound.put.mappings, body);
    }
    async deleteMappings(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>(PfsenseAPI.firewall.nat.outbound.del.mappings, query);
    }
    async getMode() {
        return await this.client.get<PfsenseAPI.firewall.nat.outbound.OutboundNATMode>(PfsenseAPI.firewall.nat.outbound.get.mode);
    }
    async patchMode(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMode) {
        return await this.client.patch<PfsenseAPI.firewall.nat.outbound.OutboundNATMode>(PfsenseAPI.firewall.nat.outbound.patch.mode, body);
    }
}
class PortForward {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getPortForward(id: number) {
        return await this.client.get<PfsenseAPI.firewall.nat.PortForward>(PfsenseAPI.firewall.nat.get.portForward, { id });
    }
    async postPortForward(body: PfsenseAPI.firewall.nat.PortForward) {
        return await this.client.post<PfsenseAPI.firewall.nat.PortForward>(PfsenseAPI.firewall.nat.post.portForward, body);
    }
    async patchPortForward(body: PfsenseAPI.firewall.nat.PortForwardId) {
        return await this.client.patch<PfsenseAPI.firewall.nat.PortForward>(PfsenseAPI.firewall.nat.patch.portForward, body);
    }
    async deletePortForward(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.firewall.nat.PortForward>(PfsenseAPI.firewall.nat.del.portForward, { id, apply });
    }
    async getPortForwards(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.firewall.nat.PortForward[]>(PfsenseAPI.firewall.nat.get.portForwards, query);
    }
    async putPortForwards(body: PfsenseAPI.firewall.nat.PortForward[]) {
        return await this.client.put<PfsenseAPI.firewall.nat.PortForward[]>(PfsenseAPI.firewall.nat.put.portForwards, body);
    }
    async deletePortForwards(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.firewall.nat.PortForward[]>(PfsenseAPI.firewall.nat.del.portForwards, query);
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
class GraphQL {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async query(query: PfsenseAPI.graphQL.GraphQLRequest) {
        return await this.client.post<PfsenseAPI.graphQL.GraphQLResponse>(PfsenseAPI.graphQL.post.default, { query });
    }
}
class Interface {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async apply() {
        return await this.client.post<PfsenseAPI.Interface.InterfaceApply>(PfsenseAPI.Interface.post.apply, {});
    }
    async getAvailableInterfaces(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.Interface.InterfaceAvailable[]>(PfsenseAPI.Interface.get.available, query);
    }
    async getBridge(id: number) {
        return await this.client.get<PfsenseAPI.Interface.InterfaceBridge>(PfsenseAPI.Interface.get.bridge, { id });
    }
    async postBridge(Bridge: PfsenseAPI.Interface.InterfaceBridgeRequest) {
        return await this.client.post<PfsenseAPI.Interface.InterfaceBridge>(PfsenseAPI.Interface.post.bridge, Bridge);
    }
    async patchBridge(Bridge: PfsenseAPI.Interface.InterfaceBridgeRequest) {
        return await this.client.patch<PfsenseAPI.Interface.InterfaceBridge>(PfsenseAPI.Interface.patch.bridge, Bridge);
    }
    async deleteBridge(id: number) {
        return await this.client.delete<PfsenseAPI.Interface.InterfaceBridge>(PfsenseAPI.Interface.del.bridge, { id });
    }
    async getBridges(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.Interface.InterfaceBridge[]>(PfsenseAPI.Interface.get.bridges, query);
    }
    async getGroup(id: number) {
        return await this.client.get<PfsenseAPI.Interface.InterfaceGroup>(PfsenseAPI.Interface.get.group, { id });
    }
    async postGroup(Group: PfsenseAPI.Interface.InterfaceGroupRequest) {
        return await this.client.post<PfsenseAPI.Interface.InterfaceGroup>(PfsenseAPI.Interface.post.group, Group);
    }
    async patchGroup(Group: PfsenseAPI.Interface.InterfaceGroupRequestId) {
        return await this.client.patch<PfsenseAPI.Interface.InterfaceGroup>(PfsenseAPI.Interface.patch.group, Group);
    }
    async deleteGroup(id: number) {
        return await this.client.delete<PfsenseAPI.Interface.InterfaceGroup>(PfsenseAPI.Interface.del.group, { id });
    }
    async getGroups(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.Interface.InterfaceGroup[]>(PfsenseAPI.Interface.get.groups, query);
    }
    async putGroups(Groups: PfsenseAPI.Interface.InterfaceGroup[]) {
        return await this.client.put<PfsenseAPI.Interface.InterfaceGroup[]>(PfsenseAPI.Interface.put.groups, Groups);
    }
    async deleteGroups(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.Interface.InterfaceGroup[]>(PfsenseAPI.Interface.del.groups, query);
    }
    async getVlan(id: number) {
        return await this.client.get<PfsenseAPI.Interface.InterfaceVlan>(PfsenseAPI.Interface.get.vlan, { id });
    }
    async postVlan(Vlan: PfsenseAPI.Interface.InterfaceVlan) {
        return await this.client.post<PfsenseAPI.Interface.InterfaceVlan>(PfsenseAPI.Interface.post.vlan, Vlan);
    }
    async patchVlan(Vlan: PfsenseAPI.Interface.InterfaceVlanId) {
        return await this.client.patch<PfsenseAPI.Interface.InterfaceVlan>(PfsenseAPI.Interface.patch.vlan, Vlan);
    }
    async deleteVlan(id: number) {
        return await this.client.delete<PfsenseAPI.Interface.InterfaceVlan>(PfsenseAPI.Interface.del.vlan, { id });
    }
    async getVlans(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.Interface.InterfaceVlan[]>(PfsenseAPI.Interface.get.vlans, query);
    }
    async deleteVlans(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.Interface.InterfaceVlan[]>(PfsenseAPI.Interface.del.vlans, query);
    }
    async getInterface(id: number) {
        return await this.client.get<PfsenseAPI.Interface.NetworkInterface>(PfsenseAPI.Interface.get.default, { id });
    }
    async postInterface(Interface: PfsenseAPI.Interface.NetworkInterface) {
        return await this.client.post<PfsenseAPI.Interface.NetworkInterface>(PfsenseAPI.Interface.post.default, Interface);
    }
    async patchInterface(Interface: PfsenseAPI.Interface.NetworkInterfaceId) {
        return await this.client.patch<PfsenseAPI.Interface.NetworkInterface>(PfsenseAPI.Interface.patch.default, Interface);
    }
    async deleteInterface(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.Interface.NetworkInterface>(PfsenseAPI.Interface.del.default, { id, apply });
    }
    async getInterfaces(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.Interface.NetworkInterface[]>(PfsenseAPI.Interface.get.interfaces, query);
    }
    async deleteInterfaces(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.Interface.NetworkInterface[]>(PfsenseAPI.Interface.del.interfaces, query);
    }
}

class Gateway {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getDefaultGateway() {
        return await this.client.get<PfsenseAPI.routing.gateway.DefaultGateway>(PfsenseAPI.routing.gateway.get.defaultGateway);
    }
    async patchDefaultGateway(defaultGateway: PfsenseAPI.routing.gateway.DefaultGateway) {
        return await this.client.patch<PfsenseAPI.routing.gateway.DefaultGateway>(PfsenseAPI.routing.gateway.patch.defaultGateway, defaultGateway);
    }
    async getGateway(id: number) {
        return await this.client.get<PfsenseAPI.routing.gateway.RoutingGateway>(PfsenseAPI.routing.gateway.get.default, { id });
    }
    async postGateway(Gateway: PfsenseAPI.routing.gateway.RoutingGateway) {
        return await this.client.post<PfsenseAPI.routing.gateway.RoutingGateway>(PfsenseAPI.routing.gateway.post.default, Gateway);
    }
    async patchGateway(Gateway: PfsenseAPI.routing.gateway.RoutingGatewayId) {
        return await this.client.patch<PfsenseAPI.routing.gateway.RoutingGateway>(PfsenseAPI.routing.gateway.patch.default, Gateway);
    }
    async deleteGateway(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.routing.gateway.RoutingGateway>(PfsenseAPI.routing.gateway.del.default, { id, apply });
    }
    async getGroup(id: number) {
        return await this.client.get<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>(PfsenseAPI.routing.gateway.group.get.default, { id });
    }
    async postGroup(Group: PfsenseAPI.routing.gateway.group.RoutingGatewayGroup) {
        return await this.client.post<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>(PfsenseAPI.routing.gateway.group.post.default, Group);
    }
    async patchGroup(Group: PfsenseAPI.routing.gateway.group.RoutingGatewayGroupId) {
        return await this.client.patch<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>(PfsenseAPI.routing.gateway.group.patch.default, Group);
    }
    async deleteGroup(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>(PfsenseAPI.routing.gateway.group.del.default, {
            id,
            apply,
        });
    }
    async getGroupPriority(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>(PfsenseAPI.routing.gateway.group.get.priority, {
            parent_id,
            id,
        });
    }
    async postGroupPriority(GroupPriority: PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriorityParentId) {
        return await this.client.post<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>(
            PfsenseAPI.routing.gateway.group.post.priority,
            GroupPriority
        );
    }
    async patchGroupPriority(GroupPriority: PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriorityId) {
        return await this.client.patch<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>(
            PfsenseAPI.routing.gateway.group.patch.priority,
            GroupPriority
        );
    }
    async deleteGroupPriority(parent_id: number, id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>(PfsenseAPI.routing.gateway.group.del.priority, {
            parent_id,
            id,
            apply,
        });
    }
    async getGroups(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup[]>(PfsenseAPI.routing.gateway.group.get.groups, query);
    }
    async deleteGroups(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup[]>(PfsenseAPI.routing.gateway.group.del.groups, query);
    }
    async getGateways(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.routing.gateway.RoutingGateway[]>(PfsenseAPI.routing.gateway.get.gateways, query);
    }
    async deleteGateways(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.routing.gateway.RoutingGateway[]>(PfsenseAPI.routing.gateway.del.gateways, query);
    }
}
class Routing {
    client: Client;
    gateway: Gateway;
    constructor(client: Client) {
        this.client = client;
        this.gateway = new Gateway(client);
    }
    async apply() {
        return await this.client.post<PfsenseAPI.routing.RoutingApply>(PfsenseAPI.routing.post.apply, {});
    }
    async getStaticRoute(id: number) {
        return await this.client.get<PfsenseAPI.routing.StaticRoute>(PfsenseAPI.routing.get.staticRoute, { id });
    }
    async postStaticRoute(StaticRoute: PfsenseAPI.routing.StaticRoute) {
        return await this.client.post<PfsenseAPI.routing.StaticRoute>(PfsenseAPI.routing.post.staticRoute, StaticRoute);
    }
    async patchStaticRoute(StaticRoute: PfsenseAPI.routing.StaticRouteId) {
        return await this.client.patch<PfsenseAPI.routing.StaticRoute>(PfsenseAPI.routing.patch.staticRoute, StaticRoute);
    }
    async deleteStaticRoute(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.routing.StaticRoute>(PfsenseAPI.routing.del.staticRoute, { id, apply });
    }
    async getStaticRoutes(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.routing.StaticRoute[]>(PfsenseAPI.routing.get.staticRoutes, query);
    }
    async deleteStaticRoutes(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.routing.StaticRoute[]>(PfsenseAPI.routing.del.staticRoutes, query);
    }
}
class AcmeCertificate {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAction(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.acme.certificate.ACMECertificateAction>(PfsenseAPI.services.acme.certificate.get.action, {
            parent_id,
            id,
        });
    }
    async postAction(Action: PfsenseAPI.services.acme.certificate.ACMECertificateActionParentId) {
        return await this.client.post<PfsenseAPI.services.acme.certificate.ACMECertificateAction>(
            PfsenseAPI.services.acme.certificate.post.action,
            Action
        );
    }
    async patchAction(Action: PfsenseAPI.services.acme.certificate.ACMECertificateActionId) {
        return await this.client.patch<PfsenseAPI.services.acme.certificate.ACMECertificateAction>(
            PfsenseAPI.services.acme.certificate.patch.action,
            Action
        );
    }
    async deleteAction(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.acme.certificate.ACMECertificateAction>(PfsenseAPI.services.acme.certificate.del.action, {
            parent_id,
            id,
        });
    }
    async getDomain(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>(PfsenseAPI.services.acme.certificate.get.domain, {
            parent_id,
            id,
        });
    }
    async postDomain(Domain: PfsenseAPI.services.acme.certificate.ACMECertificateDomainParentId) {
        return await this.client.post<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>(
            PfsenseAPI.services.acme.certificate.post.domain,
            Domain
        );
    }
    async patchDomain(Domain: PfsenseAPI.services.acme.certificate.ACMECertificateDomainId) {
        return await this.client.patch<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>(
            PfsenseAPI.services.acme.certificate.patch.domain,
            Domain
        );
    }
    async deleteDomain(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>(PfsenseAPI.services.acme.certificate.del.domain, {
            parent_id,
            id,
        });
    }
    async getCertificate(id: number) {
        return await this.client.get<PfsenseAPI.services.acme.certificate.ACMECertificate>(PfsenseAPI.services.acme.certificate.get.default, { id });
    }
    async postCertificate(Certificate: PfsenseAPI.services.acme.certificate.ACMECertificate) {
        return await this.client.post<PfsenseAPI.services.acme.certificate.ACMECertificate>(
            PfsenseAPI.services.acme.certificate.post.default,
            Certificate
        );
    }
    async patchCertificate(Certificate: PfsenseAPI.services.acme.certificate.ACMECertificateId) {
        return await this.client.patch<PfsenseAPI.services.acme.certificate.ACMECertificate>(
            PfsenseAPI.services.acme.certificate.patch.default,
            Certificate
        );
    }
    async deleteCertificate(id: number) {
        return await this.client.delete<PfsenseAPI.services.acme.certificate.ACMECertificate>(PfsenseAPI.services.acme.certificate.del.default, {
            id,
        });
    }
    async getIssuances(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.acme.certificate.ACMECertificate[]>(
            PfsenseAPI.services.acme.certificate.get.issuances,
            query
        );
    }
    async postIssue(certificate: string) {
        return await this.client.post<PfsenseAPI.services.acme.certificate.ACMECertificateIssue>(PfsenseAPI.services.acme.certificate.post.issue, {
            certificate,
        });
    }
    async postRenew(certificate: string) {
        return await this.client.post<PfsenseAPI.services.acme.certificate.ACMECertificateRenew>(PfsenseAPI.services.acme.certificate.post.renew, {
            certificate,
        });
    }
    async getRenewals(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.acme.certificate.ACMECertificateRenew[]>(
            PfsenseAPI.services.acme.certificate.get.renewals,
            query
        );
    }
    async getCertificates(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.acme.certificate.ACMECertificate[]>(
            PfsenseAPI.services.acme.certificate.get.certificates,
            query
        );
    }
    async putCertificates(Certificates: PfsenseAPI.services.acme.certificate.ACMECertificate[]) {
        return await this.client.put<PfsenseAPI.services.acme.certificate.ACMECertificate[]>(
            PfsenseAPI.services.acme.certificate.put.certificates,
            Certificates
        );
    }
    async deleteCertificates(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.acme.certificate.ACMECertificate[]>(
            PfsenseAPI.services.acme.certificate.del.certificates,
            query
        );
    }
}
class Acme {
    client: Client;
    certificate: AcmeCertificate;
    constructor(client: Client) {
        this.client = client;
        this.certificate = new AcmeCertificate(client);
    }
    async getAccountKey(id: number) {
        return await this.client.get<PfsenseAPI.services.acme.account.ACMEAccountKey>(PfsenseAPI.services.acme.account.get.key, { id });
    }
    async postAccountKey(AccountKey: PfsenseAPI.services.acme.account.ACMEAccountKey) {
        return await this.client.post<PfsenseAPI.services.acme.account.ACMEAccountKey>(PfsenseAPI.services.acme.account.post.key, AccountKey);
    }
    async patchAccountKey(AccountKey: PfsenseAPI.services.acme.account.ACMEAccountKeyId) {
        return await this.client.patch<PfsenseAPI.services.acme.account.ACMEAccountKey>(PfsenseAPI.services.acme.account.patch.key, AccountKey);
    }
    async deleteAccountKey(id: number) {
        return await this.client.delete<PfsenseAPI.services.acme.account.ACMEAccountKey>(PfsenseAPI.services.acme.account.del.key, { id });
    }
    async postAccountKeyRegister(name: string) {
        return await this.client.post<PfsenseAPI.services.acme.account.ACMEAccountKeyRegister>(PfsenseAPI.services.acme.account.post.register, {
            name,
        });
    }
    async getAccountKeyRegisters(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.acme.account.ACMEAccountKeyRegister[]>(
            PfsenseAPI.services.acme.account.get.registrations,
            query
        );
    }
    async getAccountKeys(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.acme.account.ACMEAccountKey[]>(PfsenseAPI.services.acme.account.get.keys, query);
    }
    async putAccountKeys(AccountKeys: PfsenseAPI.services.acme.account.ACMEAccountKey[]) {
        return await this.client.put<PfsenseAPI.services.acme.account.ACMEAccountKey[]>(PfsenseAPI.services.acme.account.put.keys, AccountKeys);
    }
    async deleteAccountKeys(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.acme.account.ACMEAccountKey[]>(PfsenseAPI.services.acme.account.del.keys, query);
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.services.acme.ACMESettings>(PfsenseAPI.services.acme.get.settings);
    }
    async patchSettings(Settings: PfsenseAPI.services.acme.ACMESettings) {
        return await this.client.patch<PfsenseAPI.services.acme.ACMESettings>(PfsenseAPI.services.acme.patch.settings, Settings);
    }
}

class BindAccessList {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAccessList(id: number) {
        return await this.client.get<PfsenseAPI.services.bind.accessList.BINDAccessList>(PfsenseAPI.services.bind.accessList.get.default, { id });
    }
    async postAccessList(AccessList: PfsenseAPI.services.bind.accessList.BINDAccessList) {
        return await this.client.post<PfsenseAPI.services.bind.accessList.BINDAccessList>(
            PfsenseAPI.services.bind.accessList.post.default,
            AccessList
        );
    }
    async patchAccessList(AccessList: PfsenseAPI.services.bind.accessList.BINDAccessListId) {
        return await this.client.patch<PfsenseAPI.services.bind.accessList.BINDAccessList>(
            PfsenseAPI.services.bind.accessList.patch.default,
            AccessList
        );
    }
    async deleteAccessList(id: number) {
        return await this.client.delete<PfsenseAPI.services.bind.accessList.BINDAccessList>(PfsenseAPI.services.bind.accessList.del.default, { id });
    }
    async getEntry(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>(PfsenseAPI.services.bind.accessList.get.entry, {
            parent_id,
            id,
        });
    }
    async postEntry(Entry: PfsenseAPI.services.bind.accessList.BINDAccessListEntryParentId) {
        return await this.client.post<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>(PfsenseAPI.services.bind.accessList.post.entry, Entry);
    }
    async patchEntry(Entry: PfsenseAPI.services.bind.accessList.BINDAccessListEntryId) {
        return await this.client.patch<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>(
            PfsenseAPI.services.bind.accessList.patch.entry,
            Entry
        );
    }
    async deleteEntry(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>(PfsenseAPI.services.bind.accessList.del.entry, {
            parent_id,
            id,
        });
    }
    async getAccessLists(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.bind.accessList.BINDAccessList[]>(
            PfsenseAPI.services.bind.accessList.get.access_lists,
            query
        );
    }
    async putAccessLists(AccessLists: PfsenseAPI.services.bind.accessList.BINDAccessList[]) {
        return await this.client.put<PfsenseAPI.services.bind.accessList.BINDAccessList[]>(
            PfsenseAPI.services.bind.accessList.put.access_lists,
            AccessLists
        );
    }
    async deleteAccessLists(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.bind.accessList.BINDAccessList[]>(
            PfsenseAPI.services.bind.accessList.del.access_lists,
            query
        );
    }
}

class BindSync {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getRemoteHost(id: number) {
        return await this.client.get<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>(PfsenseAPI.services.bind.sync.get.remoteHost, { id });
    }
    async postRemoteHost(RemoteHost: PfsenseAPI.services.bind.sync.BINDSyncRemoteHost) {
        return await this.client.post<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>(PfsenseAPI.services.bind.sync.post.remoteHost, RemoteHost);
    }
    async patchRemoteHost(RemoteHost: PfsenseAPI.services.bind.sync.BINDSyncRemoteHostId) {
        return await this.client.patch<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>(PfsenseAPI.services.bind.sync.patch.remoteHost, RemoteHost);
    }
    async deleteRemoteHost(id: number) {
        return await this.client.delete<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>(PfsenseAPI.services.bind.sync.del.remoteHost, { id });
    }
    async getRemoteHosts(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]>(PfsenseAPI.services.bind.sync.get.remoteHosts, query);
    }
    async putRemoteHosts(RemoteHosts: PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]) {
        return await this.client.put<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]>(PfsenseAPI.services.bind.sync.put.remoteHosts, RemoteHosts);
    }
    async deleteRemoteHosts(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]>(PfsenseAPI.services.bind.sync.del.remoteHosts, query);
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.services.bind.sync.BINDSyncSettings>(PfsenseAPI.services.bind.sync.get.settings);
    }
    async patchSettings(Settings: PfsenseAPI.services.bind.sync.BINDSyncSettings) {
        return await this.client.patch<PfsenseAPI.services.bind.sync.BINDSyncSettings>(PfsenseAPI.services.bind.sync.patch.settings, Settings);
    }
}
class BindView {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getView(id: number) {
        return await this.client.get<PfsenseAPI.services.bind.BINDview>(PfsenseAPI.services.bind.get.view, { id });
    }
    async postView(View: PfsenseAPI.services.bind.BINDview) {
        return await this.client.post<PfsenseAPI.services.bind.BINDview>(PfsenseAPI.services.bind.post.view, View);
    }
    async patchView(View: PfsenseAPI.services.bind.BINDviewId) {
        return await this.client.patch<PfsenseAPI.services.bind.BINDview>(PfsenseAPI.services.bind.patch.view, View);
    }
    async deleteView(id: number) {
        return await this.client.delete<PfsenseAPI.services.bind.BINDview>(PfsenseAPI.services.bind.del.view, { id });
    }
    async getViews(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.bind.BINDview[]>(PfsenseAPI.services.bind.get.views, query);
    }
    async putViews(Views: PfsenseAPI.services.bind.BINDview[]) {
        return await this.client.put<PfsenseAPI.services.bind.BINDview[]>(PfsenseAPI.services.bind.put.views, Views);
    }
    async deleteViews(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.bind.BINDview[]>(PfsenseAPI.services.bind.del.views, query);
    }
}

class BindZone {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getZone(id: number) {
        return await this.client.get<PfsenseAPI.services.bind.zone.BINDZone>(PfsenseAPI.services.bind.zone.get.default, { id });
    }
    async postZone(Zone: PfsenseAPI.services.bind.zone.BINDZone) {
        return await this.client.post<PfsenseAPI.services.bind.zone.BINDZone>(PfsenseAPI.services.bind.zone.post.default, Zone);
    }
    async patchZone(Zone: PfsenseAPI.services.bind.zone.BINDZoneId) {
        return await this.client.patch<PfsenseAPI.services.bind.zone.BINDZone>(PfsenseAPI.services.bind.zone.patch.default, Zone);
    }
    async deleteZone(id: number) {
        return await this.client.delete<PfsenseAPI.services.bind.zone.BINDZone>(PfsenseAPI.services.bind.zone.del.default, { id });
    }
    async getRecord(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.bind.zone.BINDZoneRecord>(PfsenseAPI.services.bind.zone.get.record, { parent_id, id });
    }
    async postRecord(Record: PfsenseAPI.services.bind.zone.BINDZoneRecordParentId) {
        return await this.client.post<PfsenseAPI.services.bind.zone.BINDZoneRecord>(PfsenseAPI.services.bind.zone.post.record, Record);
    }
    async patchRecord(Record: PfsenseAPI.services.bind.zone.BINDZoneRecordId) {
        return await this.client.patch<PfsenseAPI.services.bind.zone.BINDZoneRecord>(PfsenseAPI.services.bind.zone.patch.record, Record);
    }
    async deleteRecord(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.bind.zone.BINDZoneRecord>(PfsenseAPI.services.bind.zone.del.record, { parent_id, id });
    }
    async getZones(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.bind.zone.BINDZone[]>(PfsenseAPI.services.bind.zone.get.zones, query);
    }
    async putZones(Zones: PfsenseAPI.services.bind.zone.BINDZone[]) {
        return await this.client.put<PfsenseAPI.services.bind.zone.BINDZone[]>(PfsenseAPI.services.bind.zone.put.zones, Zones);
    }
    async deleteZones(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.bind.zone.BINDZone[]>(PfsenseAPI.services.bind.zone.del.zones, query);
    }
}
class Bind {
    client: Client;
    accessList: BindAccessList;
    sync: BindSync;
    view: BindView;
    zone: BindZone;
    constructor(client: Client) {
        this.client = client;
        this.accessList = new BindAccessList(client);
        this.sync = new BindSync(client);
        this.view = new BindView(client);
        this.zone = new BindZone(client);
    }
}
class Cron {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getJob(id: number) {
        return await this.client.get<PfsenseAPI.services.cron.CronJob>(PfsenseAPI.services.cron.get.job, { id });
    }
    async postJob(Job: PfsenseAPI.services.cron.CronJob) {
        return await this.client.post<PfsenseAPI.services.cron.CronJob>(PfsenseAPI.services.cron.post.job, Job);
    }
    async patchJob(Job: PfsenseAPI.services.cron.CronJobId) {
        return await this.client.patch<PfsenseAPI.services.cron.CronJob>(PfsenseAPI.services.cron.patch.job, Job);
    }
    async deleteJob(id: number) {
        return await this.client.delete<PfsenseAPI.services.cron.CronJob>(PfsenseAPI.services.cron.del.job, { id });
    }
    async getJobs(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.cron.CronJob[]>(PfsenseAPI.services.cron.get.jobs, query);
    }
    async putJobs(Jobs: PfsenseAPI.services.cron.CronJob[]) {
        return await this.client.put<PfsenseAPI.services.cron.CronJob[]>(PfsenseAPI.services.cron.put.jobs, Jobs);
    }
    async deleteJobs(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.cron.CronJob[]>(PfsenseAPI.services.cron.del.jobs, query);
    }
}

class DhcpServer {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAddressPool(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>(PfsenseAPI.services.dhcpServer.get.addressPool, {
            parent_id,
            id,
        });
    }
    async postAddressPool(AddressPool: PfsenseAPI.services.dhcpServer.DHCPServerAddressPoolParentId) {
        return await this.client.post<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>(
            PfsenseAPI.services.dhcpServer.post.addressPool,
            AddressPool
        );
    }
    async patchAddressPool(AddressPool: PfsenseAPI.services.dhcpServer.DHCPServerAddressPoolId) {
        return await this.client.patch<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>(
            PfsenseAPI.services.dhcpServer.patch.addressPool,
            AddressPool
        );
    }
    async deleteAddressPool(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>(PfsenseAPI.services.dhcpServer.del.addressPool, {
            parent_id,
            id,
        });
    }
    async apply() {
        return await this.client.post<PfsenseAPI.services.dhcpServer.DHCPServerApply>(PfsenseAPI.services.dhcpServer.post.apply, {});
    }
    async patchBackend(dchpbackend: "isc" | "kea") {
        return await this.client.patch<PfsenseAPI.services.dhcpServer.DHCPServerBackend>(PfsenseAPI.services.dhcpServer.patch.backend, {
            dchpbackend,
        });
    }
    async getCustomOption(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>(PfsenseAPI.services.dhcpServer.get.customOption, {
            parent_id,
            id,
        });
    }
    async postCustomOption(CustomOption: PfsenseAPI.services.dhcpServer.DHCPServerCustomOptionParentId) {
        return await this.client.post<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>(
            PfsenseAPI.services.dhcpServer.post.customOption,
            CustomOption
        );
    }
    async patchCustomOption(CustomOption: PfsenseAPI.services.dhcpServer.DHCPServerCustomOptionId) {
        return await this.client.patch<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>(
            PfsenseAPI.services.dhcpServer.patch.customOption,
            CustomOption
        );
    }
    async deleteCustomOption(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>(PfsenseAPI.services.dhcpServer.del.customOption, {
            parent_id,
            id,
        });
    }
    async getServer(id: number) {
        return await this.client.get<PfsenseAPI.services.dhcpServer.DHCPServer>(PfsenseAPI.services.dhcpServer.get.default, { id });
    }
    async patchServer(Server: PfsenseAPI.services.dhcpServer.DHCPServerId) {
        return await this.client.patch<PfsenseAPI.services.dhcpServer.DHCPServer>(PfsenseAPI.services.dhcpServer.patch.default, Server);
    }
    async getStaticMapping(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>(PfsenseAPI.services.dhcpServer.get.staticMapping, {
            parent_id,
            id,
        });
    }
    async postStaticMapping(StaticMapping: PfsenseAPI.services.dhcpServer.DHCPServerStaticMappingParentId) {
        return await this.client.post<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>(
            PfsenseAPI.services.dhcpServer.post.staticMapping,
            StaticMapping
        );
    }
    async patchStaticMapping(StaticMapping: PfsenseAPI.services.dhcpServer.DHCPServerStaticMappingId) {
        return await this.client.patch<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>(
            PfsenseAPI.services.dhcpServer.patch.staticMapping,
            StaticMapping
        );
    }
    async deleteStaticMapping(parent_id: number, id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>(PfsenseAPI.services.dhcpServer.del.staticMapping, {
            parent_id,
            id,
            apply,
        });
    }
    async getServers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.dhcpServer.DHCPServer[]>(PfsenseAPI.services.dhcpServer.get.servers, query);
    }
    async putServers(Servers: PfsenseAPI.services.dhcpServer.DHCPServer[]) {
        return await this.client.put<PfsenseAPI.services.dhcpServer.DHCPServer[]>(PfsenseAPI.services.dhcpServer.put.servers, Servers);
    }
}

class DnsForwarderHostOverride {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAlias(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>(
            PfsenseAPI.services.dnsForwarder.hostOverride.get.alias,
            { parent_id, id }
        );
    }
    async postAlias(Alias: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAliasParentId) {
        return await this.client.post<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>(
            PfsenseAPI.services.dnsForwarder.hostOverride.post.alias,
            Alias
        );
    }
    async patchAlias(Alias: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAliasId) {
        return await this.client.patch<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>(
            PfsenseAPI.services.dnsForwarder.hostOverride.patch.alias,
            Alias
        );
    }
    async deleteAlias(parent_id: number, id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>(
            PfsenseAPI.services.dnsForwarder.hostOverride.del.alias,
            { parent_id, id, apply }
        );
    }
    async getHostOverride(id: number) {
        return await this.client.get<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>(
            PfsenseAPI.services.dnsForwarder.hostOverride.get.default,
            { id }
        );
    }
    async postHostOverride(HostOverride: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride) {
        return await this.client.post<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>(
            PfsenseAPI.services.dnsForwarder.hostOverride.post.default,
            HostOverride
        );
    }
    async patchHostOverride(HostOverride: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideId) {
        return await this.client.patch<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>(
            PfsenseAPI.services.dnsForwarder.hostOverride.patch.default,
            HostOverride
        );
    }
    async deleteHostOverride(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>(
            PfsenseAPI.services.dnsForwarder.hostOverride.del.default,
            { id, apply }
        );
    }
    async getHostOverrides(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]>(
            PfsenseAPI.services.dnsForwarder.hostOverride.get.overrides,
            query
        );
    }
    async putHostOverrides(HostOverrides: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]) {
        return await this.client.put<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]>(
            PfsenseAPI.services.dnsForwarder.hostOverride.put.overrides,
            HostOverrides
        );
    }
    async deleteHostOverrides(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]>(
            PfsenseAPI.services.dnsForwarder.hostOverride.del.overrides,
            query
        );
    }
}

class DnsForwarder {
    client: Client;
    hostOverride: DnsForwarderHostOverride;
    constructor(client: Client) {
        this.client = client;
        this.hostOverride = new DnsForwarderHostOverride(client);
    }
    async apply() {
        return await this.client.post<PfsenseAPI.services.dnsForwarder.DNSForwarderApply>(PfsenseAPI.services.dnsForwarder.post.apply, {});
    }
}
class DnsResolverAccessList {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAccessList(id: number) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>(
            PfsenseAPI.services.dnsResolver.accessList.get.default,
            { id }
        );
    }
    async postAccessList(AccessList: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList) {
        return await this.client.post<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>(
            PfsenseAPI.services.dnsResolver.accessList.post.default,
            AccessList
        );
    }
    async patchAccessList(AccessList: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListId) {
        return await this.client.patch<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>(
            PfsenseAPI.services.dnsResolver.accessList.patch.default,
            AccessList
        );
    }
    async deleteAccessList(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>(
            PfsenseAPI.services.dnsResolver.accessList.del.default,
            { apply, id }
        );
    }
    async getNetwork(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>(
            PfsenseAPI.services.dnsResolver.accessList.get.network,
            { parent_id, id }
        );
    }
    async postNetwork(Network: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetworkParentId) {
        return await this.client.post<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>(
            PfsenseAPI.services.dnsResolver.accessList.post.network,
            Network
        );
    }
    async patchNetwork(Network: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetworkId) {
        return await this.client.patch<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>(
            PfsenseAPI.services.dnsResolver.accessList.patch.network,
            Network
        );
    }
    async deleteNetwork(parent_id: number, id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>(
            PfsenseAPI.services.dnsResolver.accessList.del.network,
            { parent_id, id, apply }
        );
    }
    async getAccessLists(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]>(
            PfsenseAPI.services.dnsResolver.accessList.get.access_lists,
            query
        );
    }
    async putAccessLists(AccessLists: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]) {
        return await this.client.put<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]>(
            PfsenseAPI.services.dnsResolver.accessList.put.access_lists,
            AccessLists
        );
    }
    async deleteAccessLists(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]>(
            PfsenseAPI.services.dnsResolver.accessList.del.access_lists,
            query
        );
    }
}
class DnsResolverHostOverride {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAlias(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>(
            PfsenseAPI.services.dnsResolver.hostOverride.get.alias,
            { parent_id, id }
        );
    }
    async postAlias(Alias: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAliasParentId) {
        return await this.client.post<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>(
            PfsenseAPI.services.dnsResolver.hostOverride.post.alias,
            Alias
        );
    }
    async patchAlias(Alias: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAliasId) {
        return await this.client.patch<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>(
            PfsenseAPI.services.dnsResolver.hostOverride.patch.alias,
            Alias
        );
    }
    async deleteAlias(parent_id: number, id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>(
            PfsenseAPI.services.dnsResolver.hostOverride.del.alias,
            { parent_id, id, apply }
        );
    }
    async getHostOverride(id: number) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>(
            PfsenseAPI.services.dnsResolver.hostOverride.get.default,
            { id }
        );
    }
    async postHostOverride(HostOverride: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride) {
        return await this.client.post<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>(
            PfsenseAPI.services.dnsResolver.hostOverride.post.default,
            HostOverride
        );
    }
    async patchHostOverride(HostOverride: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideId) {
        return await this.client.patch<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>(
            PfsenseAPI.services.dnsResolver.hostOverride.patch.default,
            HostOverride
        );
    }
    async deleteHostOverride(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>(
            PfsenseAPI.services.dnsResolver.hostOverride.del.default,
            { id, apply }
        );
    }
    async getHostOverrides(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]>(
            PfsenseAPI.services.dnsResolver.hostOverride.get.overrides,
            query
        );
    }
    async putHostOverrides(HostOverrides: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]) {
        return await this.client.put<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]>(
            PfsenseAPI.services.dnsResolver.hostOverride.put.overrides,
            HostOverrides
        );
    }
    async deleteHostOverrides(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]>(
            PfsenseAPI.services.dnsResolver.hostOverride.del.overrides,
            query
        );
    }
}

class DnsResolver {
    client: Client;
    accessList: DnsResolverAccessList;
    hostOverride: DnsResolverHostOverride;
    constructor(client: Client) {
        this.client = client;
        this.accessList = new DnsResolverAccessList(client);
        this.hostOverride = new DnsResolverHostOverride(client);
    }
    async apply() {
        return await this.client.post<PfsenseAPI.services.dnsResolver.DNSResolverApply>(PfsenseAPI.services.dnsResolver.post.apply, {});
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.services.dnsResolver.DNSResolverSettings>(PfsenseAPI.services.dnsResolver.get.settings);
    }
    async patchSettings(Settings: PfsenseAPI.services.dnsResolver.DNSResolverSettings) {
        return await this.client.patch<PfsenseAPI.services.dnsResolver.DNSResolverSettings>(PfsenseAPI.services.dnsResolver.patch.settings, Settings);
    }
    async getDomainOverride(id: number) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>(PfsenseAPI.services.dnsResolver.get.domainOverride, {
            id,
        });
    }
    async postDomainOverride(DomainOverride: PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride) {
        return await this.client.post<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>(
            PfsenseAPI.services.dnsResolver.post.domainOverride,
            DomainOverride
        );
    }
    async patchDomainOverride(DomainOverride: PfsenseAPI.services.dnsResolver.DNSResolverDomainOverrideId) {
        return await this.client.patch<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>(
            PfsenseAPI.services.dnsResolver.patch.domainOverride,
            DomainOverride
        );
    }
    async deleteDomainOverride(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>(
            PfsenseAPI.services.dnsResolver.del.domainOverride,
            { id, apply }
        );
    }
    async getDomainOverrides(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]>(
            PfsenseAPI.services.dnsResolver.get.domainOverrides,
            query
        );
    }
    async putDomainOverrides(DomainOverrides: PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]) {
        return await this.client.put<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]>(
            PfsenseAPI.services.dnsResolver.put.domainOverrides,
            DomainOverrides
        );
    }
    async deleteDomainOverrides(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]>(
            PfsenseAPI.services.dnsResolver.del.domainOverrides,
            query
        );
    }
}
class HaProxyBackend {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getACL(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>(PfsenseAPI.services.haProxy.backend.get.acl, {
            parent_id,
            id,
        });
    }
    async postACL(ACL: PfsenseAPI.services.haProxy.backend.HAProxyBackendACLParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>(PfsenseAPI.services.haProxy.backend.post.acl, ACL);
    }
    async patchACL(ACL: PfsenseAPI.services.haProxy.backend.HAProxyBackendACLId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>(PfsenseAPI.services.haProxy.backend.patch.acl, ACL);
    }
    async deleteACL(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>(PfsenseAPI.services.haProxy.backend.del.acl, {
            parent_id,
            id,
        });
    }
    async getAction(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>(PfsenseAPI.services.haProxy.backend.get.action, {
            parent_id,
            id,
        });
    }
    async postAction(Action: PfsenseAPI.services.haProxy.backend.HAProxyBackendActionParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>(
            PfsenseAPI.services.haProxy.backend.post.action,
            Action
        );
    }
    async patchAction(Action: PfsenseAPI.services.haProxy.backend.HAProxyBackendActionId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>(
            PfsenseAPI.services.haProxy.backend.patch.action,
            Action
        );
    }
    async deleteAction(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>(PfsenseAPI.services.haProxy.backend.del.action, {
            parent_id,
            id,
        });
    }
    async getBackend(id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.backend.HAProxyBackend>(PfsenseAPI.services.haProxy.backend.get.default, { id });
    }
    async postBackend(Backend: PfsenseAPI.services.haProxy.backend.HAProxyBackend) {
        return await this.client.post<PfsenseAPI.services.haProxy.backend.HAProxyBackend>(PfsenseAPI.services.haProxy.backend.post.default, Backend);
    }
    async patchBackend(Backend: PfsenseAPI.services.haProxy.backend.HAProxyBackendId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.backend.HAProxyBackend>(
            PfsenseAPI.services.haProxy.backend.patch.default,
            Backend
        );
    }
    async deleteBackend(id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.backend.HAProxyBackend>(PfsenseAPI.services.haProxy.backend.del.default, { id });
    }
    async getErrorFile(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>(PfsenseAPI.services.haProxy.backend.get.errorFile, {
            parent_id,
            id,
        });
    }
    async postErrorFile(ErrorFile: PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFileParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>(
            PfsenseAPI.services.haProxy.backend.post.errorFile,
            ErrorFile
        );
    }
    async patchErrorFile(ErrorFile: PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFileId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>(
            PfsenseAPI.services.haProxy.backend.patch.errorFile,
            ErrorFile
        );
    }
    async deleteErrorFile(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>(
            PfsenseAPI.services.haProxy.backend.del.errorFile,
            {
                parent_id,
                id,
            }
        );
    }
    async getServer(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>(PfsenseAPI.services.haProxy.backend.get.server, {
            parent_id,
            id,
        });
    }
    async postServer(Server: PfsenseAPI.services.haProxy.backend.HAProxyBackendServerParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>(
            PfsenseAPI.services.haProxy.backend.post.server,
            Server
        );
    }
    async patchServer(Server: PfsenseAPI.services.haProxy.backend.HAProxyBackendServerId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>(
            PfsenseAPI.services.haProxy.backend.patch.server,
            Server
        );
    }
    async deleteServer(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>(PfsenseAPI.services.haProxy.backend.del.server, {
            parent_id,
            id,
        });
    }
    async getBackends(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.haProxy.backend.HAProxyBackend[]>(PfsenseAPI.services.haProxy.backend.get.backends, query);
    }
    async putBackends(Backends: PfsenseAPI.services.haProxy.backend.HAProxyBackend[]) {
        return await this.client.put<PfsenseAPI.services.haProxy.backend.HAProxyBackend[]>(
            PfsenseAPI.services.haProxy.backend.put.backends,
            Backends
        );
    }
    async deleteBackends(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.haProxy.backend.HAProxyBackend[]>(
            PfsenseAPI.services.haProxy.backend.del.backends,
            query
        );
    }
}
class HaProxyFrontend {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getACL(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>(PfsenseAPI.services.haProxy.frontend.get.acl, {
            parent_id,
            id,
        });
    }
    async postACL(ACL: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACLParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>(PfsenseAPI.services.haProxy.frontend.post.acl, ACL);
    }
    async patchACL(ACL: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACLId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>(PfsenseAPI.services.haProxy.frontend.patch.acl, ACL);
    }
    async deleteACL(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>(PfsenseAPI.services.haProxy.frontend.del.acl, {
            parent_id,
            id,
        });
    }
    async getAction(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>(PfsenseAPI.services.haProxy.frontend.get.action, {
            parent_id,
            id,
        });
    }
    async postAction(Action: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendActionParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>(
            PfsenseAPI.services.haProxy.frontend.post.action,
            Action
        );
    }
    async patchAction(Action: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendActionId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>(
            PfsenseAPI.services.haProxy.frontend.patch.action,
            Action
        );
    }
    async deleteAction(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>(PfsenseAPI.services.haProxy.frontend.del.action, {
            parent_id,
            id,
        });
    }
    async getAddress(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>(PfsenseAPI.services.haProxy.frontend.get.address, {
            parent_id,
            id,
        });
    }
    async postAddress(Address: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddressParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>(
            PfsenseAPI.services.haProxy.frontend.post.address,
            Address
        );
    }
    async patchAddress(Address: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddressId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>(
            PfsenseAPI.services.haProxy.frontend.patch.address,
            Address
        );
    }
    async deleteAddress(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>(
            PfsenseAPI.services.haProxy.frontend.del.address,
            {
                parent_id,
                id,
            }
        );
    }
    async getFrontend(id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>(PfsenseAPI.services.haProxy.frontend.get.default, { id });
    }
    async postFrontend(Frontend: PfsenseAPI.services.haProxy.frontend.HAProxyFrontend) {
        return await this.client.post<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>(
            PfsenseAPI.services.haProxy.frontend.post.default,
            Frontend
        );
    }
    async patchFrontend(Frontend: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>(
            PfsenseAPI.services.haProxy.frontend.patch.default,
            Frontend
        );
    }
    async deleteFrontend(id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>(PfsenseAPI.services.haProxy.frontend.del.default, {
            id,
        });
    }
    async getErrorFile(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>(
            PfsenseAPI.services.haProxy.frontend.get.errorFile,
            {
                parent_id,
                id,
            }
        );
    }
    async postErrorFile(ErrorFile: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFileParentId) {
        return await this.client.post<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>(
            PfsenseAPI.services.haProxy.frontend.post.errorFile,
            ErrorFile
        );
    }
    async patchErrorFile(ErrorFile: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFileId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>(
            PfsenseAPI.services.haProxy.frontend.patch.errorFile,
            ErrorFile
        );
    }
    async deleteErrorFile(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>(
            PfsenseAPI.services.haProxy.frontend.del.errorFile,
            {
                parent_id,
                id,
            }
        );
    }
    async getFrontends(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]>(
            PfsenseAPI.services.haProxy.frontend.get.frontends,
            query
        );
    }
    async putFrontends(Frontends: PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]) {
        return await this.client.put<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]>(
            PfsenseAPI.services.haProxy.frontend.put.frontends,
            Frontends
        );
    }
    async deleteFrontends(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]>(
            PfsenseAPI.services.haProxy.frontend.del.frontends,
            query
        );
    }
}

class HaProxySettings {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getDnsResolver(id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>(PfsenseAPI.services.haProxy.settings.get.dns_resolver, {
            id,
        });
    }
    async postDnsResolver(DnsResolver: PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver) {
        return await this.client.post<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>(
            PfsenseAPI.services.haProxy.settings.post.dns_resolver,
            DnsResolver
        );
    }
    async patchDnsResolver(DnsResolver: PfsenseAPI.services.haProxy.settings.HAProxyDNSResolverId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>(
            PfsenseAPI.services.haProxy.settings.patch.dns_resolver,
            DnsResolver
        );
    }
    async deleteDnsResolver(id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>(
            PfsenseAPI.services.haProxy.settings.del.dns_resolver,
            {
                id,
            }
        );
    }
    async getEmailMailer(id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>(PfsenseAPI.services.haProxy.settings.get.email, {
            id,
        });
    }
    async postEmailMailer(EmailMailer: PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer) {
        return await this.client.post<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>(
            PfsenseAPI.services.haProxy.settings.post.email,
            EmailMailer
        );
    }
    async patchEmailMailer(EmailMailer: PfsenseAPI.services.haProxy.settings.HAProxyEmailMailerId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>(
            PfsenseAPI.services.haProxy.settings.patch.email,
            EmailMailer
        );
    }
    async deleteEmailMailer(id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>(PfsenseAPI.services.haProxy.settings.del.email, {
            id,
        });
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.services.haProxy.settings.HAProxySettings>(PfsenseAPI.services.haProxy.settings.get.default);
    }
    async patchSettings(Settings: PfsenseAPI.services.haProxy.settings.HAProxySettings) {
        return await this.client.patch<PfsenseAPI.services.haProxy.settings.HAProxySettings>(
            PfsenseAPI.services.haProxy.settings.patch.default,
            Settings
        );
    }
}

class HaProxy {
    client: Client;
    backend: HaProxyBackend;
    frontend: HaProxyFrontend;
    settings: HaProxySettings;
    constructor(client: Client) {
        this.client = client;
        this.backend = new HaProxyBackend(client);
        this.frontend = new HaProxyFrontend(client);
        this.settings = new HaProxySettings(client);
    }
    async apply() {
        return await this.client.post<PfsenseAPI.services.haProxy.HAProxyApply>(PfsenseAPI.services.haProxy.post.apply, {});
    }
    async getFile(id: number) {
        return await this.client.get<PfsenseAPI.services.haProxy.HAProxyFile>(PfsenseAPI.services.haProxy.get.file, { id });
    }
    async postFile(File: PfsenseAPI.services.haProxy.HAProxyFile) {
        return await this.client.post<PfsenseAPI.services.haProxy.HAProxyFile>(PfsenseAPI.services.haProxy.post.file, File);
    }
    async patchFile(File: PfsenseAPI.services.haProxy.HAProxyFileId) {
        return await this.client.patch<PfsenseAPI.services.haProxy.HAProxyFile>(PfsenseAPI.services.haProxy.patch.file, File);
    }
    async deleteFile(id: number) {
        return await this.client.delete<PfsenseAPI.services.haProxy.HAProxyFile>(PfsenseAPI.services.haProxy.del.file, { id });
    }
    async getFiles(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.haProxy.HAProxyFile[]>(PfsenseAPI.services.haProxy.get.files, query);
    }
    async putFiles(Files: PfsenseAPI.services.haProxy.HAProxyFile[]) {
        return await this.client.put<PfsenseAPI.services.haProxy.HAProxyFile[]>(PfsenseAPI.services.haProxy.put.files, Files);
    }
    async deleteFiles(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.haProxy.HAProxyFile[]>(PfsenseAPI.services.haProxy.del.files, query);
    }
}

class Ntp {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.services.ntp.NTPSettings>(PfsenseAPI.services.ntp.get.settings);
    }
    async patchSettings(Settings: PfsenseAPI.services.ntp.NTPSettings) {
        return await this.client.patch<PfsenseAPI.services.ntp.NTPSettings>(PfsenseAPI.services.ntp.patch.settings, Settings);
    }
    async getTimeServer(id: number) {
        return await this.client.get<PfsenseAPI.services.ntp.NTPTimeServer>(PfsenseAPI.services.ntp.get.time_server, { id });
    }
    async postTimeServer(TimeServer: PfsenseAPI.services.ntp.NTPTimeServer) {
        return await this.client.post<PfsenseAPI.services.ntp.NTPTimeServer>(PfsenseAPI.services.ntp.post.time_server, TimeServer);
    }
    async patchTimeServer(TimeServer: PfsenseAPI.services.ntp.NTPTimeServerId) {
        return await this.client.patch<PfsenseAPI.services.ntp.NTPTimeServer>(PfsenseAPI.services.ntp.patch.time_server, TimeServer);
    }
    async deleteTimeServer(id: number) {
        return await this.client.delete<PfsenseAPI.services.ntp.NTPTimeServer>(PfsenseAPI.services.ntp.del.time_server, { id });
    }
    async getTimeServers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.ntp.NTPTimeServer[]>(PfsenseAPI.services.ntp.get.time_servers, query);
    }
    async putTimeServers(TimeServers: PfsenseAPI.services.ntp.NTPTimeServer[]) {
        return await this.client.put<PfsenseAPI.services.ntp.NTPTimeServer[]>(PfsenseAPI.services.ntp.put.time_servers, TimeServers);
    }
    async deleteTimeServers(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.ntp.NTPTimeServer[]>(PfsenseAPI.services.ntp.del.time_servers, query);
    }
}
class SSH {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getSSH() {
        return await this.client.get<PfsenseAPI.services.ssh.SSH>(PfsenseAPI.services.ssh.get.default);
    }
    async patchSSH(SSH: PfsenseAPI.services.ssh.SSH) {
        return await this.client.patch<PfsenseAPI.services.ssh.SSH>(PfsenseAPI.services.ssh.patch.default, SSH);
    }
}

class ServiceWatchDog {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getServiceWatchDog(id: number) {
        return await this.client.get<PfsenseAPI.services.service_watchdog.ServiceWatchdog>(PfsenseAPI.services.service_watchdog.get.default, { id });
    }
    async postServiceWatchDog(ServiceWatchDog: PfsenseAPI.services.service_watchdog.ServiceWatchdog) {
        return await this.client.post<PfsenseAPI.services.service_watchdog.ServiceWatchdog>(
            PfsenseAPI.services.service_watchdog.post.default,
            ServiceWatchDog
        );
    }
    async patchServiceWatchDog(ServiceWatchDog: PfsenseAPI.services.service_watchdog.ServiceWatchdogId) {
        return await this.client.patch<PfsenseAPI.services.service_watchdog.ServiceWatchdog>(
            PfsenseAPI.services.service_watchdog.patch.default,
            ServiceWatchDog
        );
    }
    async deleteServiceWatchDog(id: number) {
        return await this.client.delete<PfsenseAPI.services.service_watchdog.ServiceWatchdog>(PfsenseAPI.services.service_watchdog.del.default, {
            id,
        });
    }
    async getServiceWatchDogs(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.services.service_watchdog.ServiceWatchdog[]>(
            PfsenseAPI.services.service_watchdog.get.watchdogs,
            query
        );
    }
    async putServiceWatchDogs(ServiceWatchDogs: PfsenseAPI.services.service_watchdog.ServiceWatchdog[]) {
        return await this.client.put<PfsenseAPI.services.service_watchdog.ServiceWatchdog[]>(
            PfsenseAPI.services.service_watchdog.put.watchdogs,
            ServiceWatchDogs
        );
    }
    async deleteServiceWatchDogs(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.services.service_watchdog.ServiceWatchdog[]>(
            PfsenseAPI.services.service_watchdog.del.watchdogs,
            query
        );
    }
}
class Services {
    client: Client;
    acme: Acme;
    bind: Bind;
    cron: Cron;
    dhcpServer: DhcpServer;
    dnsForwarder: DnsForwarder;
    dnsResolver: DnsResolver;
    haProxy: HaProxy;
    ntp: Ntp;
    ssh: SSH;
    watchdog: ServiceWatchDog;
    constructor(client: Client) {
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
    async wakeOnLan(Interface: string, mac_addr: string) {
        return await this.client.post<PfsenseAPI.services.wakeOnLan.WakeOnLan>(PfsenseAPI.services.wakeOnLan.post.send, {
            interface: Interface,
            mac_addr,
        });
    }
}

class StatusDhcpServer {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getLeases(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.dhcpServer.DHCPServerLease>(PfsenseAPI.status.dhcpServer.get.leases, query);
    }
    async deleteLeases(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.status.dhcpServer.DHCPServerLease[]>(PfsenseAPI.status.dhcpServer.del.leases, query);
    }
}

class StatusIpsec {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getChildSA(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.status.ipsec.IPsecChildSAStatus>(PfsenseAPI.status.ipsec.get.child_sa, { parent_id, id });
    }
    async getSas(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.ipsec.IPsecSAStatus[]>(PfsenseAPI.status.ipsec.get.sas, query);
    }
}

class StatusLog {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getDhcp(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.logs.DHCPLog>(PfsenseAPI.status.logs.get.dhcp, query);
    }
    async getFirewall(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.logs.FirewallLog>(PfsenseAPI.status.logs.get.firewall, query);
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.status.logs.LogSettings>(PfsenseAPI.status.logs.get.settings);
    }
    async patchSettings(Settings: PfsenseAPI.status.logs.LogSettings) {
        return await this.client.patch<PfsenseAPI.status.logs.LogSettings>(PfsenseAPI.status.logs.patch.settings, Settings);
    }
    async getSystem(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.logs.SystemLog>(PfsenseAPI.status.logs.get.system, query);
    }
}

class StatusOpenVpn {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getClients(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.openvpn.OpenVPNClientStatus[]>(PfsenseAPI.status.openvpn.get.clients, query);
    }
    async getServerConnection(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.status.openvpn.OpenVPNConnectionStatus>(PfsenseAPI.status.openvpn.server.get.connection, {
            parent_id,
            id,
        });
    }
    async deleteServerConnection(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.status.openvpn.OpenVPNConnectionStatus>(PfsenseAPI.status.openvpn.server.del.connection, {
            parent_id,
            id,
        });
    }
    async getServerRoute(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.status.openvpn.OpenVPNServerRouteStatus>(PfsenseAPI.status.openvpn.server.get.route, {
            parent_id,
            id,
        });
    }
    async getServers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.openvpn.OpenVPNServerStatus[]>(PfsenseAPI.status.openvpn.get.servers, query);
    }
}

class Status {
    client: Client;
    dhcpServer: StatusDhcpServer;
    ipsec: StatusIpsec;
    log: StatusLog;
    openvpn: StatusOpenVpn;
    constructor(client: Client) {
        this.client = client;
        this.dhcpServer = new StatusDhcpServer(client);
        this.ipsec = new StatusIpsec(client);
        this.log = new StatusLog(client);
        this.openvpn = new StatusOpenVpn(client);
    }
    async getCarp() {
        return await this.client.get<PfsenseAPI.status.CARP>(PfsenseAPI.status.get.carp);
    }
    async patchCarp(Carp: PfsenseAPI.status.CARP) {
        return await this.client.patch<PfsenseAPI.status.CARP>(PfsenseAPI.status.patch.carp, Carp);
    }
    async getGateways(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.RoutingGatewayStatus[]>(PfsenseAPI.status.get.gateways, query);
    }
    async getInterfaces(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.InterfaceStats[]>(PfsenseAPI.status.get.interfaces, query);
    }
    async postService(name: string, action: string) {
        return await this.client.post<PfsenseAPI.status.Service>(PfsenseAPI.status.post.service, { name, action });
    }
    async getServices(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.status.Service[]>(PfsenseAPI.status.get.services, query);
    }
    async getSystem() {
        return await this.client.get<PfsenseAPI.status.SystemStatus>(PfsenseAPI.status.get.system);
    }
}

class SystemCerts {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getCrl(id: number) {
        return await this.client.get<PfsenseAPI.system.crl.CertificateRevocationList>(PfsenseAPI.system.crl.get.default, { id });
    }
    async postCrl(Crl: PfsenseAPI.system.crl.CertificateRevocationList) {
        return await this.client.post<PfsenseAPI.system.crl.CertificateRevocationList>(PfsenseAPI.system.crl.post.default, Crl);
    }
    async patchCrl(Crl: PfsenseAPI.system.crl.CertificateRevocationListId) {
        return await this.client.patch<PfsenseAPI.system.crl.CertificateRevocationList>(PfsenseAPI.system.crl.patch.default, Crl);
    }
    async deleteCrl(id: number) {
        return await this.client.delete<PfsenseAPI.system.crl.CertificateRevocationList>(PfsenseAPI.system.crl.del.default, { id });
    }

    async getRevokeCertificate(parent_id: number, id: number) {
        return await this.client.post<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>(
            PfsenseAPI.system.crl.post.revoke_certificate,
            { parent_id, id }
        );
    }
    async postRevokeCertificate(RevokeCertificate: PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificateParentId) {
        return await this.client.post<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>(
            PfsenseAPI.system.crl.post.revoke_certificate,
            RevokeCertificate
        );
    }
    async patchRevokeCertificate(RevokeCertificate: PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificateId) {
        return await this.client.patch<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>(
            PfsenseAPI.system.crl.patch.revoke_certificate,
            RevokeCertificate
        );
    }
    async deleteRevokeCertificate(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>(
            PfsenseAPI.system.crl.del.revoke_certificate,
            { parent_id, id }
        );
    }

    async getCrls(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.system.crl.CertificateRevocationList[]>(PfsenseAPI.system.crl.get.crls, query);
    }
    async deleteCrls(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.system.crl.CertificateRevocationList[]>(PfsenseAPI.system.crl.del.crls, query);
    }

    async getCertificateAuthorities(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.system.certificate_authority.CertificateAuthority[]>(
            PfsenseAPI.system.certificate_authority.get.default,
            query
        );
    }
    async deleteCertificateAuthorities(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.system.certificate_authority.CertificateAuthority[]>(
            PfsenseAPI.system.certificate_authority.del.default,
            query
        );
    }
    async getCertificateAuthority(id: number) {
        return await this.client.get<PfsenseAPI.system.certificate_authority.CertificateAuthority>(
            PfsenseAPI.system.certificate_authority.get.default,
            { id }
        );
    }
    async postCertificateAuthority(CertificateAuthority: PfsenseAPI.system.certificate_authority.CertificateAuthority) {
        return await this.client.post<PfsenseAPI.system.certificate_authority.CertificateAuthority>(
            PfsenseAPI.system.certificate_authority.post.default,
            CertificateAuthority
        );
    }
    async patchCertificateAuthority(CertificateAuthority: PfsenseAPI.system.certificate_authority.CertificateAuthorityId) {
        return await this.client.patch<PfsenseAPI.system.certificate_authority.CertificateAuthority>(
            PfsenseAPI.system.certificate_authority.patch.default,
            CertificateAuthority
        );
    }
    async deleteCertificateAuthority(id: number) {
        return await this.client.delete<PfsenseAPI.system.certificate_authority.CertificateAuthority>(
            PfsenseAPI.system.certificate_authority.del.default,
            { id }
        );
    }
    async generateCertificate(CertificateRequest: PfsenseAPI.system.certificate_authority.GenerateCertificateRequest) {
        return await this.client.post<PfsenseAPI.system.certificate_authority.CertificateAuthorityGenerate>(
            PfsenseAPI.system.certificate_authority.post.generate,
            CertificateRequest
        );
    }
    async renewCertificate(RenewCertificateRequest: PfsenseAPI.system.certificate_authority.CertificateAuthorityRenewRequest) {
        return await this.client.post<PfsenseAPI.system.certificate_authority.CertificateAuthorityRenew>(
            PfsenseAPI.system.certificate_authority.post.renew,
            RenewCertificateRequest
        );
    }

    async getCertificate(id: number) {
        return await this.client.get<PfsenseAPI.system.certificate.Certificate>(PfsenseAPI.system.certificate.get.default, { id });
    }

    async postCertificate(Certificate: PfsenseAPI.system.certificate.Certificate) {
        return await this.client.post<PfsenseAPI.system.certificate.Certificate>(PfsenseAPI.system.certificate.post.default, Certificate);
    }
    async patchCertificate(Certificate: PfsenseAPI.system.certificate.CertificateId) {
        return await this.client.patch<PfsenseAPI.system.certificate.Certificate>(PfsenseAPI.system.certificate.patch.default, Certificate);
    }
    async deleteCertificate(id: number) {
        return await this.client.delete<PfsenseAPI.system.certificate.Certificate>(PfsenseAPI.system.certificate.del.default, { id });
    }
    async generateInternalCertificate(CertificateRequest: PfsenseAPI.system.certificate.GenerateInternalCertificateRequest) {
        return await this.client.post<PfsenseAPI.system.certificate.Certificate>(PfsenseAPI.system.certificate.post.generate, CertificateRequest);
    }
    async exportPKCS12Certificate(ExportPKCS12Request: PfsenseAPI.system.certificate.PKCS12exportRequest) {
        return await this.client.post<PfsenseAPI.system.certificate.Certificate>(PfsenseAPI.system.certificate.post.pkcs12, ExportPKCS12Request);
    }
    async renewInternalCertificate(RenewCertificateRequest: PfsenseAPI.system.certificate.InternalCertificateRenewRequest) {
        return await this.client.post<PfsenseAPI.system.certificate.CertificateRenew>(
            PfsenseAPI.system.certificate.post.renew,
            RenewCertificateRequest
        );
    }
    async signingRequest(CertificateSigningRequest: PfsenseAPI.system.certificate.CertificateSigningRequest) {
        return await this.client.post<PfsenseAPI.system.certificate.CertificateSigningRequest>(
            PfsenseAPI.system.certificate.post.sign,
            CertificateSigningRequest
        );
    }
    async signSingingRequest(CertificateSigningRequestSign: PfsenseAPI.system.certificate.CertificateSigningRequestSign) {
        return await this.client.post<PfsenseAPI.system.certificate.CertificateSigningRequestSign>(
            PfsenseAPI.system.certificate.post.sign,
            CertificateSigningRequestSign
        );
    }
    async getCertificates(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.system.certificate.Certificate[]>(PfsenseAPI.system.certificate.get.certificates, query);
    }
    async deleteCertificates(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.system.certificate.Certificate[]>(PfsenseAPI.system.certificate.del.certificates, query);
    }
}

class SystemPackage {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getAvailable(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.system.Package.AvailablePackage[]>(PfsenseAPI.system.Package.get.available, query);
    }
    async getPackage(id: number) {
        return await this.client.get<PfsenseAPI.system.Package.Package>(PfsenseAPI.system.Package.get.default, { id });
    }
    async postPackage(name: string) {
        return await this.client.post<PfsenseAPI.system.Package.Package>(PfsenseAPI.system.Package.post.default, { name });
    }
    async deletePackage(id: number) {
        return await this.client.delete<PfsenseAPI.system.Package.Package>(PfsenseAPI.system.Package.del.default, { id });
    }
    async getPackages(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.system.Package.Package[]>(PfsenseAPI.system.Package.get.packages, query);
    }
    async deletePackages(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.system.Package.Package[]>(PfsenseAPI.system.Package.del.packages, query);
    }
}

class SystemRestAPI {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAccessList(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]>(PfsenseAPI.system.restapi.get.access_list, query);
    }
    async putAccessList(AccessList: PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]) {
        return await this.client.put<PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]>(PfsenseAPI.system.restapi.put.access_list, AccessList);
    }
    async deleteAccessList(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]>(PfsenseAPI.system.restapi.del.access_list, query);
    }
    async getAccessListEntry(id: number) {
        return await this.client.get<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>(PfsenseAPI.system.restapi.get.entry, { id });
    }
    async postAccessListEntry(AccessListEntry: PfsenseAPI.system.restapi.RESTAPIAccessListEntry) {
        return await this.client.post<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>(PfsenseAPI.system.restapi.post.entry, AccessListEntry);
    }
    async patchAccessListEntry(AccessListEntry: PfsenseAPI.system.restapi.RESTAPIAccessListEntryId) {
        return await this.client.patch<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>(PfsenseAPI.system.restapi.patch.entry, AccessListEntry);
    }
    async deleteAccessListEntry(id: number) {
        return await this.client.delete<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>(PfsenseAPI.system.restapi.del.entry, { id });
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.system.restapi.RESTAPISettings>(PfsenseAPI.system.restapi.get.settings);
    }
    async patchSettings(Settings: PfsenseAPI.system.restapi.RESTAPISettings) {
        return await this.client.patch<PfsenseAPI.system.restapi.RESTAPISettings>(PfsenseAPI.system.restapi.patch.settings, Settings);
    }
    async syncSettings(sync_data: string) {
        return await this.client.post<PfsenseAPI.system.restapi.RESTAPISettingsSync>(PfsenseAPI.system.restapi.post.settings_sync, { sync_data });
    }
    async getVersion() {
        return await this.client.get<PfsenseAPI.system.restapi.RESTAPIVersion>(PfsenseAPI.system.restapi.get.version);
    }
    async patchVersion(install_version: string) {
        return await this.client.patch<PfsenseAPI.system.restapi.RESTAPIVersion>(PfsenseAPI.system.restapi.patch.version, { install_version });
    }
}

class SystemWebGUI {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.system.WebGUISettings>(PfsenseAPI.system.get.webgui_settings);
    }
    async patchSettings(WebGUISettings: PfsenseAPI.system.WebGUISettings) {
        return await this.client.patch<PfsenseAPI.system.WebGUISettings>(PfsenseAPI.system.patch.webgui_settings, WebGUISettings);
    }
}

class System {
    client: Client;
    certificate: SystemCerts;
    package: SystemPackage;
    restapi: SystemRestAPI;
    webgui: SystemWebGUI;
    constructor(client: Client) {
        this.client = client;
        this.certificate = new SystemCerts(client);
        this.package = new SystemPackage(client);
        this.restapi = new SystemRestAPI(client);
        this.webgui = new SystemWebGUI(client);
    }
    async getConsole() {
        return await this.client.get<PfsenseAPI.system.SystemConsole>(PfsenseAPI.system.get.console);
    }
    async patchConsole(SystemConsole: PfsenseAPI.system.SystemConsole) {
        return await this.client.patch<PfsenseAPI.system.SystemConsole>(PfsenseAPI.system.patch.console, SystemConsole);
    }
    async getDNS() {
        return await this.client.get<PfsenseAPI.system.SystemDNS>(PfsenseAPI.system.get.dns);
    }
    async patchDNS(SystemDNS: PfsenseAPI.system.SystemDNS) {
        return await this.client.patch<PfsenseAPI.system.SystemDNS>(PfsenseAPI.system.patch.dns, SystemDNS);
    }
    async getHostname() {
        return await this.client.get<PfsenseAPI.system.SystemHostname>(PfsenseAPI.system.get.hostname);
    }
    async patchHostname(SystemHostname: PfsenseAPI.system.SystemHostname) {
        return await this.client.patch<PfsenseAPI.system.SystemHostname>(PfsenseAPI.system.patch.hostname, SystemHostname);
    }
    async getTunable(id: number) {
        return await this.client.get<PfsenseAPI.system.SystemTunable>(PfsenseAPI.system.get.tunable, { id });
    }
    async postTunable(SystemTunable: PfsenseAPI.system.SystemTunable) {
        return await this.client.post<PfsenseAPI.system.SystemTunable>(PfsenseAPI.system.post.tunable, SystemTunable);
    }
    async patchTunable(SystemTunable: PfsenseAPI.system.SystemTunableId) {
        return await this.client.patch<PfsenseAPI.system.SystemTunable>(PfsenseAPI.system.patch.tunable, SystemTunable);
    }
    async deleteTunable(id: number) {
        return await this.client.delete<PfsenseAPI.system.SystemTunable>(PfsenseAPI.system.del.tunable, { id });
    }
    async getTunables(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.system.SystemTunable[]>(PfsenseAPI.system.get.tunables, query);
    }
    async putTunables(Tunables: PfsenseAPI.system.SystemTunable[]) {
        return await this.client.put<PfsenseAPI.system.SystemTunable[]>(PfsenseAPI.system.put.tunables, Tunables);
    }
    async deleteTunables(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.system.SystemTunable[]>(PfsenseAPI.system.del.tunables, query);
    }
    async getVersion() {
        return await this.client.get<PfsenseAPI.system.SystemVersion>(PfsenseAPI.system.get.version);
    }
}

class UserAuthServer {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getAuthServer(id: number) {
        return await this.client.get<PfsenseAPI.user.AuthServer>(PfsenseAPI.user.get.auth_server, { id });
    }
    async postAuthServer(AuthServer: PfsenseAPI.user.AuthServer) {
        return await this.client.post<PfsenseAPI.user.AuthServer>(PfsenseAPI.user.post.auth_server, AuthServer);
    }
    async patchAuthServer(AuthServer: PfsenseAPI.user.AuthServerId) {
        return await this.client.patch<PfsenseAPI.user.AuthServer>(PfsenseAPI.user.patch.auth_server, AuthServer);
    }
    async deleteAuthServer(id: number) {
        return await this.client.delete<PfsenseAPI.user.AuthServer>(PfsenseAPI.user.del.auth_server, { id });
    }
    async getAuthServers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.user.AuthServer[]>(PfsenseAPI.user.get.auth_servers, query);
    }
    async putAuthServers(AuthServers: PfsenseAPI.user.AuthServer[]) {
        return await this.client.put<PfsenseAPI.user.AuthServer[]>(PfsenseAPI.user.put.auth_servers, AuthServers);
    }
    async deleteAuthServers(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.user.AuthServer[]>(PfsenseAPI.user.del.auth_servers, query);
    }
}
class UserGroup {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getGroup(id: number) {
        return await this.client.get<PfsenseAPI.user.UserGroup>(PfsenseAPI.user.get.group, { id });
    }
    async postGroup(Group: PfsenseAPI.user.UserGroup) {
        return await this.client.post<PfsenseAPI.user.UserGroup>(PfsenseAPI.user.post.group, Group);
    }
    async patchGroup(Group: PfsenseAPI.user.UserGroupId) {
        return await this.client.patch<PfsenseAPI.user.UserGroup>(PfsenseAPI.user.patch.group, Group);
    }
    async deleteGroup(id: number) {
        return await this.client.patch<PfsenseAPI.user.UserGroup>(PfsenseAPI.user.del.group, { id });
    }
    async getGroups(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.user.UserGroup[]>(PfsenseAPI.user.get.groups, query);
    }
    async putGroups(Groups: PfsenseAPI.user.UserGroup[]) {
        return await this.client.put<PfsenseAPI.user.UserGroup[]>(PfsenseAPI.user.put.groups, Groups);
    }
    async deleteGroups(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.user.UserGroup[]>(PfsenseAPI.user.del.groups, query);
    }
}

class User {
    client: Client;
    authServer: UserAuthServer;
    group: UserGroup;
    constructor(client: Client) {
        this.client = client;
        this.authServer = new UserAuthServer(client);
        this.group = new UserGroup(client);
    }
    async getUser(id: number) {
        return await this.client.get<PfsenseAPI.user.User>(PfsenseAPI.user.get.default, { id });
    }
    async postUser(User: PfsenseAPI.user.User) {
        return await this.client.post<PfsenseAPI.user.User>(PfsenseAPI.user.post.default, User);
    }
    async patchUser(User: PfsenseAPI.user.UserId) {
        return await this.client.patch<PfsenseAPI.user.User>(PfsenseAPI.user.patch.default, User);
    }
    async deleteUser(id: number) {
        return await this.client.delete<PfsenseAPI.user.User>(PfsenseAPI.user.del.default, { id });
    }
    async getUsers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.user.User[]>(PfsenseAPI.user.get.users, { query });
    }
    async deleteUsers(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.user.User[]>(PfsenseAPI.user.del.users, { query });
    }
}

class IPsecPhase1 {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async getPhase1Encryption(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>(PfsenseAPI.vpn.ipsec.phase1.get.encryption, { parent_id, id });
    }
    async postPhase1Encryption(Phase1Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption) {
        return await this.client.post<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>(PfsenseAPI.vpn.ipsec.phase1.post.encryption, Phase1Encryption);
    }
    async patchPhase1Encryption(Phase1Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase1EncryptionId) {
        return await this.client.patch<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>(PfsenseAPI.vpn.ipsec.phase1.patch.encryption, Phase1Encryption);
    }
    async deletePhase1Encryption(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>(PfsenseAPI.vpn.ipsec.phase1.del.encryption, { parent_id, id });
    }
    async getPhase1(id: number) {
        return await this.client.get<PfsenseAPI.vpn.ipsec.IPsecPhase1>(PfsenseAPI.vpn.ipsec.phase1.get.default, { id });
    }
    async postPhase1(Phase1: PfsenseAPI.vpn.ipsec.IPsecPhase1) {
        return await this.client.post<PfsenseAPI.vpn.ipsec.IPsecPhase1>(PfsenseAPI.vpn.ipsec.phase1.post.default, Phase1);
    }
    async patchPhase1(Phase1: PfsenseAPI.vpn.ipsec.IPsecPhase1Id) {
        return await this.client.patch<PfsenseAPI.vpn.ipsec.IPsecPhase1>(PfsenseAPI.vpn.ipsec.phase1.patch.default, Phase1);
    }
    async deletePhase1(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.vpn.ipsec.IPsecPhase1>(PfsenseAPI.vpn.ipsec.phase1.del.default, { id, apply });
    }
    async getPhase1s(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.vpn.ipsec.IPsecPhase1[]>(PfsenseAPI.vpn.ipsec.get.phase1s, query);
    }
    async putPhase1s(Phase1s: PfsenseAPI.vpn.ipsec.IPsecPhase1[]) {
        return await this.client.put<PfsenseAPI.vpn.ipsec.IPsecPhase1[]>(PfsenseAPI.vpn.ipsec.get.phase1s, Phase1s);
    }
    async deletePhase1s(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.vpn.ipsec.IPsecPhase1[]>(PfsenseAPI.vpn.ipsec.get.phase1s, query);
    }
}
class IPsecPhase2 {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getPhase2Encryption(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>(PfsenseAPI.vpn.ipsec.phase2.get.encryption, { parent_id, id });
    }
    async postPhase2Encryption(Phase2Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase2EncryptionParentId) {
        return await this.client.post<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>(PfsenseAPI.vpn.ipsec.phase2.post.encryption, Phase2Encryption);
    }
    async patchPhase2Encryption(Phase2Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase2EncryptionId) {
        return await this.client.patch<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>(PfsenseAPI.vpn.ipsec.phase2.patch.encryption, Phase2Encryption);
    }
    async deletePhase2Encryption(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>(PfsenseAPI.vpn.ipsec.phase2.del.encryption, { parent_id, id });
    }

    async getPhase2(id: number) {
        return await this.client.get<PfsenseAPI.vpn.ipsec.IPsecPhase2>(PfsenseAPI.vpn.ipsec.phase2.get.default, { id });
    }
    async postPhase2(Phase2: PfsenseAPI.vpn.ipsec.IPsecPhase2) {
        return await this.client.post<PfsenseAPI.vpn.ipsec.IPsecPhase2>(PfsenseAPI.vpn.ipsec.phase2.post.default, Phase2);
    }
    async patchPhase2(Phase2: PfsenseAPI.vpn.ipsec.IPsecPhase2Id) {
        return await this.client.patch<PfsenseAPI.vpn.ipsec.IPsecPhase2>(PfsenseAPI.vpn.ipsec.phase2.patch.default, Phase2);
    }
    async deletePhase2(id: number, apply: boolean = false) {
        return await this.client.delete<PfsenseAPI.vpn.ipsec.IPsecPhase2>(PfsenseAPI.vpn.ipsec.phase2.del.default, { id, apply });
    }
    async getPhase2s(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.vpn.ipsec.IPsecPhase2[]>(PfsenseAPI.vpn.ipsec.get.phase2s, query);
    }
    async putPhase2s(Phase2s: PfsenseAPI.vpn.ipsec.IPsecPhase2[]) {
        return await this.client.put<PfsenseAPI.vpn.ipsec.IPsecPhase2[]>(PfsenseAPI.vpn.ipsec.get.phase2s, Phase2s);
    }
    async deletePhase2s(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.vpn.ipsec.IPsecPhase2[]>(PfsenseAPI.vpn.ipsec.get.phase2s, query);
    }
}
class VPNIpsec {
    client: Client;
    phase1: IPsecPhase1;
    phase2: IPsecPhase2;
    constructor(client: Client) {
        this.client = client;
        this.phase1 = new IPsecPhase1(client);
        this.phase2 = new IPsecPhase2(client);
    }

    async apply() {
        return await this.client.post<PfsenseAPI.vpn.ipsec.IPsecApply>(PfsenseAPI.vpn.ipsec.post.apply, {});
    }
}

class OpenVPN {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async getCSO(id: number) {
        return await this.client.get<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>(PfsenseAPI.vpn.openvpn.get.cso, { id });
    }
    async postCSO(CSO: PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride) {
        return await this.client.post<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>(PfsenseAPI.vpn.openvpn.post.cso, CSO);
    }
    async patchCSO(CSO: PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverrideId) {
        return await this.client.patch<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>(PfsenseAPI.vpn.openvpn.patch.cso, CSO);
    }
    async deleteCSO(id: number) {
        return await this.client.delete<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>(PfsenseAPI.vpn.openvpn.del.cso, { id });
    }
    async getCSOs(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride[]>(PfsenseAPI.vpn.openvpn.get.csos, query);
    }
    async deleteCSOs(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride[]>(PfsenseAPI.vpn.openvpn.del.csos, query);
    }
    async getClient(id: number) {
        return await this.client.get<PfsenseAPI.vpn.openvpn.OpenVPNClient>(PfsenseAPI.vpn.openvpn.get.client, { id });
    }
    async postClient(Client: PfsenseAPI.vpn.openvpn.OpenVPNClient) {
        return await this.client.post<PfsenseAPI.vpn.openvpn.OpenVPNClient>(PfsenseAPI.vpn.openvpn.post.client, Client);
    }
    async patchClient(Client: PfsenseAPI.vpn.openvpn.OpenVPNClientId) {
        return await this.client.patch<PfsenseAPI.vpn.openvpn.OpenVPNClient>(PfsenseAPI.vpn.openvpn.patch.client, Client);
    }
    async deleteClient(id: number) {
        return await this.client.delete<PfsenseAPI.vpn.openvpn.OpenVPNClient>(PfsenseAPI.vpn.openvpn.del.client, { id });
    }
    async getClients(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.vpn.openvpn.OpenVPNClient[]>(PfsenseAPI.vpn.openvpn.get.clients, query);
    }
    async deleteClients(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.vpn.openvpn.OpenVPNClient[]>(PfsenseAPI.vpn.openvpn.del.clients, query);
    }
    async getServer(id: number) {
        return await this.client.get<PfsenseAPI.vpn.openvpn.OpenVPNServer>(PfsenseAPI.vpn.openvpn.get.server, { id });
    }
    async postServer(Server: PfsenseAPI.vpn.openvpn.OpenVPNServer) {
        return await this.client.post<PfsenseAPI.vpn.openvpn.OpenVPNServer>(PfsenseAPI.vpn.openvpn.post.server, Server);
    }
    async patchServer(Server: PfsenseAPI.vpn.openvpn.OpenVPNServerId) {
        return await this.client.patch<PfsenseAPI.vpn.openvpn.OpenVPNServer>(PfsenseAPI.vpn.openvpn.patch.server, Server);
    }
    async deleteServer(id: number) {
        return await this.client.delete<PfsenseAPI.vpn.openvpn.OpenVPNServer>(PfsenseAPI.vpn.openvpn.del.server, { id });
    }

    async deleteServers(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.vpn.openvpn.OpenVPNServer[]>(PfsenseAPI.vpn.openvpn.del.servers, query);
    }
    async getServers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.vpn.openvpn.OpenVPNServer[]>(PfsenseAPI.vpn.openvpn.get.servers, query);
    }
}

class WireGuard {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async apply() {
        return await this.client.post<PfsenseAPI.vpn.wireguard.WireGuardApply>(PfsenseAPI.vpn.wireguard.post.apply, {});
    }
    async getAllowedIps(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>(PfsenseAPI.vpn.wireguard.peer.get.allowed_ips, {
            parent_id,
            id,
        });
    }
    async postAllowedIps(AllowedIps: PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP) {
        return await this.client.post<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>(
            PfsenseAPI.vpn.wireguard.peer.post.allowed_ips,
            AllowedIps
        );
    }
    async patchAllowedIps(AllowedIps: PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIPId) {
        return await this.client.patch<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>(
            PfsenseAPI.vpn.wireguard.peer.patch.allowed_ips,
            AllowedIps
        );
    }
    async deleteAllowedIps(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>(PfsenseAPI.vpn.wireguard.peer.del.allowed_ips, {
            parent_id,
            id,
        });
    }
    async getPeer(id: number) {
        return await this.client.get<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>(PfsenseAPI.vpn.wireguard.peer.get.default, { id });
    }
    async postPeer(Peer: PfsenseAPI.vpn.wireguard.peer.WireGuardPeer) {
        return await this.client.post<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>(PfsenseAPI.vpn.wireguard.peer.post.default, Peer);
    }
    async patchPeer(Peer: PfsenseAPI.vpn.wireguard.peer.WireGuardPeerId) {
        return await this.client.patch<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>(PfsenseAPI.vpn.wireguard.peer.patch.default, Peer);
    }
    async deletePeer(id: number) {
        return await this.client.delete<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>(PfsenseAPI.vpn.wireguard.peer.del.default, { id });
    }
    async getPeers(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]>(PfsenseAPI.vpn.wireguard.peer.get.peers, query);
    }
    async putPeers(Peers: PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]) {
        return await this.client.put<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]>(PfsenseAPI.vpn.wireguard.peer.put.peers, Peers);
    }
    async deletePeers(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]>(PfsenseAPI.vpn.wireguard.peer.del.peers, query);
    }
    async getSettings() {
        return await this.client.get<PfsenseAPI.vpn.wireguard.WireGuardSettings>(PfsenseAPI.vpn.wireguard.get.settings);
    }
    async patchSettings(Settings: PfsenseAPI.vpn.wireguard.WireGuardSettings) {
        return await this.client.patch<PfsenseAPI.vpn.wireguard.WireGuardSettings>(PfsenseAPI.vpn.wireguard.patch.settings, Settings);
    }
    async getTunnelAddress(parent_id: number, id: number) {
        return await this.client.get<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>(PfsenseAPI.vpn.wireguard.tunnel.get.address, {
            parent_id,
            id,
        });
    }
    async postTunnelAddress(TunnelAddress: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddressParentId) {
        return await this.client.post<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>(
            PfsenseAPI.vpn.wireguard.tunnel.post.address,
            TunnelAddress
        );
    }
    async patchTunnelAddress(TunnelAddress: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddressId) {
        return await this.client.patch<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>(
            PfsenseAPI.vpn.wireguard.tunnel.patch.address,
            TunnelAddress
        );
    }
    async deleteTunnelAddress(parent_id: number, id: number) {
        return await this.client.delete<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>(PfsenseAPI.vpn.wireguard.tunnel.del.address, {
            parent_id,
            id,
        });
    }
    async getTunnel(id: number) {
        return await this.client.get<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>(PfsenseAPI.vpn.wireguard.tunnel.get.default, { id });
    }
    async postTunnel(Tunnel: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel) {
        return await this.client.post<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>(PfsenseAPI.vpn.wireguard.tunnel.post.default, Tunnel);
    }
    async patchTunnel(Tunnel: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelId) {
        return await this.client.patch<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>(PfsenseAPI.vpn.wireguard.tunnel.patch.default, Tunnel);
    }
    async deleteTunnel(id: number) {
        return await this.client.delete<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>(PfsenseAPI.vpn.wireguard.tunnel.del.default, { id });
    }
    async getTunnels(query: PfsenseAPI.queryRequest) {
        return await this.client.get<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]>(PfsenseAPI.vpn.wireguard.tunnel.get.tunnels, query);
    }
    async putTunnels(Tunnels: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]) {
        return await this.client.put<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]>(PfsenseAPI.vpn.wireguard.tunnel.put.tunnels, Tunnels);
    }
    async deleteTunnels(query: PfsenseAPI.queryWithoutSortRequest) {
        return await this.client.delete<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]>(PfsenseAPI.vpn.wireguard.tunnel.del.tunnels, query);
    }
}

class VPN {
    client: Client;
    ipsec: VPNIpsec;
    openvpn: OpenVPN;
    wireguard: WireGuard;
    constructor(client: Client) {
        this.client = client;
        this.ipsec = new VPNIpsec(client);
        this.openvpn = new OpenVPN(client);
        this.wireguard = new WireGuard(client);
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
    graphql: GraphQL;
    interface: Interface;
    routing: Routing;
    service: Services;
    status: Status;
    system: System;
    user: User;
    vpn: VPN;
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
        export interface GraphQLRequest {
            query: string;
            variables?: any;
        }
        export interface GraphQLResponse {
            data: any;
            errors: any;
        }
    }
    export namespace Interface {
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

        export interface InterfaceApply {
            applied: boolean;
            pending_interfaces: string[];
        }
        export interface InterfaceAvailable {
            if: string | null;
            mac: string | null;
            dmesg: string | null;
            in_use_by: string | null;
        }
        export interface InterfaceBridge {
            members: string[];
            descr: string;
            bridgeif?: string;
        }
        export interface InterfaceGroup {
            ifname: string;
            members: string[];
            descr: string;
        }
        export interface InterfaceVlan {
            if: string;
            tag: number;
            vlanif: string;
            pcp?: number;
            descr: string;
        }
        export interface InterfaceVlanId extends InterfaceVlan {
            id: number;
        }

        export interface NetworkInterface {
            if: string;
            enable: boolean;
            descr: string;
            spoofmac: string;
            mtu?: number;
            mss?: number;
            media: string;
            mediaopt: string;
            blockpriv: boolean;
            blockbogons: boolean;
            typev4: string;
            ipaddr: string;
            subnet: number;
            gateway?: string;
            dhcphostname: string;
            alias_address: string;
            alias_subnet?: number;
            dhcprejectfrom: string[];
            adv_dhcp_config_advanced: boolean;
            adv_dhcp_pt_values: string;
            adv_dhcp_pt_timeout?: number;
            adv_dhcp_pt_retry?: number;
            adv_dhcp_pt_select_timeout?: number;
            adv_dhcp_pt_reboot?: number;
            adv_dhcp_pt_backoff_cutoff?: number;
            adv_dhcp_pt_initial_interval?: number;
            adv_dhcp_send_options?: string;
            adv_dhcp_request_options?: string;
            adv_dhcp_required_options?: string;
            adv_dhcp_option_modifiers?: string;
            adv_dhcp_config_file_override: boolean;
            adv_dhcp_config_file_override_path?: string;
            typev6?: string;
            ipaddrv6: string;
            subnetv6: number;
            gatewayv6?: string;
            ipv6usev4iface: boolean;
            slaacusev4iface: boolean;
            prefix_6rd: string;
            gateway_6rd: string;
            prefix_6rd_v4plen: number;
            track6_interface: string;
            track6_prefix_id_hex: string;
        }
        export interface NetworkInterfaceId extends NetworkInterface {
            id: number;
        }

        export enum post {
            default = "/interface",
            apply = "/interface/apply",
            bridge = "/interface/bridge",
            group = "/interface/group",
            vlan = "/interface/vlan",
        }
        export interface InterfaceGroupRequest {
            ifname: string;
            members: string[];
            descr: string;
        }
        export interface InterfaceGroupRequestId {
            id: number;
        }
        export interface InterfaceBridgeRequest {
            members: string[];
            descr: string;
        }
        export interface InterfaceBridgeRequestId extends InterfaceBridgeRequest {
            id: number;
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
            group = "/interface/group",
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
                    groups = "/routing/gateway/groups",
                }
                export interface RoutingGatewayGroup {
                    name: string;
                    trigger: "down" | "downloss" | "downlatency" | "downlosslatency";
                    descr: string;
                    ipprotocol?: string;
                    priorities: {
                        gateway: string;
                        tier: number;
                        virtual_ip: string;
                    }[];
                }
                export interface RoutingGatewayGroupId extends RoutingGatewayGroup {
                    id: number;
                }
                export interface RoutingGatewayGroupPriority {
                    gateway: string;
                    tier: number;
                    virtual_ip: string;
                }
                export interface RoutingGatewayGroupPriorityParentId extends RoutingGatewayGroupPriority {
                    parent_id: number;
                }
                export interface RoutingGatewayGroupPriorityId extends RoutingGatewayGroupPriorityParentId {
                    id: number;
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
                    groups = "/routing/gateway/groups",
                }
                export enum put {}
            }
            export enum get {
                default = "/routing/gateway",
                defaultGateway = "/routing/gateway/default",
                gateways = "/routing/gateways",
            }
            export interface RoutingGateway {
                name: string;
                descr: string;
                disabled: boolean;
                ipprotocol: "inet" | "inet6";
                interface: string;
                gateway: string;
                monitor_disable: boolean;
                monitor?: string;
                action_disable: boolean;
                force_down: boolean;
                dpinger_dont_add_static_route: boolean;
                gw_down_kill_states: "" | "none" | "down";
                nonlocalgateway: boolean;
                weight: number;
                data_payload: number;
                latencylow: number;
                latencyhigh: number;
                losslow: number;
                losshigh: number;
                interval: number;
                loss_interval: number;
                time_period: number;
                alert_interval: number;
            }
            export interface RoutingGatewayId extends RoutingGateway {
                id: number;
            }
            export interface DefaultGateway {
                defaultgw4: string;
                defaultgw6: string;
            }
            export enum post {
                default = "/routing/gateway",
            }
            export enum patch {
                default = "/routing/gateway",
                defaultGateway = "/routing/gateway/default",
            }
            export enum del {
                default = "/routing/gateway",

                gateways = "/routing/gateways",
            }
            export enum put {}
        }
        export enum get {
            apply = "/routing/apply",
            staticRoute = "/routing/static_route",
            staticRoutes = "/routing/static_routes",
        }
        export interface StaticRoute {
            network: string;
            gateway: string;
            descr: string;
            disabled: boolean;
        }
        export interface StaticRouteId extends StaticRoute {
            id: number;
        }

        export interface RoutingApply {
            applied: boolean;
        }
        export enum post {
            apply = "/routing/apply",
            staticRoute = "/routing/static_route",
        }
        export enum patch {
            staticRoute = "/routing/static_route",
        }
        export enum del {
            staticRoute = "/routing/static_route",
            staticRoutes = "/routing/static_routes",
        }
        export enum put {}
    }
    export namespace services {
        export namespace acme {
            export namespace account {
                export enum get {
                    key = "/services/acme/account_key",
                    keys = "/services/acme/account_key",
                    registrations = "/services/acme/account_key/registrations",
                }
                export interface ACMEAccountKey {
                    name: string;
                    descr: string;
                    email: string;
                    acmeserver: string;
                    accountkey: string;
                }
                export interface ACMEAccountKeyId extends ACMEAccountKey {
                    id: number;
                }
                export enum post {
                    key = "/services/acme/account_key",
                    register = "/services/acme/account_key/register",
                }
                export interface ACMEAccountKeyRegister {
                    name: string;
                    status?: string;
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
                    certificates = "/services/acme/certificates",
                }
                export interface ACMECertificate {
                    name: string;
                    descr: string;
                    status: "active" | "disabled";
                    acmeaccount: string;
                    keylength: "2048" | "3072" | "4096" | "ec-256" | "ec-384" | "custom";
                    keypaste?: string;
                    preferredchain?: string;
                    oscpstaple: boolean;
                    dnssleep?: number;
                    renewafter: number;
                    a_domainlist: any[];
                    a_actionlist:
                        | {
                              status: "active" | "disabled";
                              command: string;
                              method: "shellcommand" | "php_command" | "servicerestart" | "xmlrpcservicerestart";
                          }[]
                        | ACMECertificateDomain[];
                }
                export interface ACMECertificateId extends ACMECertificate {
                    id: number;
                }

                export interface ACMECertificateAction {
                    status: "active" | "disabled";
                    command: string;
                    method: "shellcommand" | "php_command" | "servicerestart" | "xmlrpcservicerestart";
                }
                export interface ACMECertificateActionParentId extends ACMECertificateAction {
                    parent_id: number;
                }
                export interface ACMECertificateActionId extends ACMECertificateActionParentId {
                    id: number;
                }
                export interface ACMECertificateDomain {
                    name: string;
                    status: "enable" | "disable";
                    method: string;
                    webrootfolder?: string;
                    webrootftpftpserver?: string;
                    webrootftpusername?: string;
                    webrootftppassword?: string;
                    webrootftpfolder?: string;
                    standaloneport?: string;
                    standaloneipv6?: boolean;
                    standalonetlsport?: string;
                    nsupdate_server?: string;
                    nsupdate_keyname?: string;
                    nsupdate_keyalgo?: "" | "157" | "165" | "164" | "163" | "162" | "161";
                    nsupdate_key?: string;
                    nsupdate_zone?: string;
                    one984hosting_username?: string;
                    one984hosting_password?: string;
                    acmeproxy_endpoint?: string;
                    acmeproxy_username?: string;
                    acmeproxy_password?: string;
                    acmedns_username?: string;
                    acmedns_password?: string;
                    acmedns_subdomain?: string;
                    acmedns_update_url?: string;
                    active24_token?: string;
                    akamai_host?: string;
                    akamai_access_token?: string;
                    akamai_client_token?: string;
                    akamai_client_secret?: string;
                    ali_key?: string;
                    ali_secret?: string;
                    kas_login?: string;
                    kas_authtype?: string;
                    kas_authdata?: string;
                    ad_api_key?: string;
                    anx_token?: string;
                    af_api_username?: string;
                    af_api_password?: string;
                    arvan_token?: string;
                    aurora_key?: string;
                    aurora_secret?: string;
                    autodns_user?: string;
                    autodns_password?: string;
                    autodns_context?: string;
                    aws_access_key_id?: string;
                    aws_secret_access_key?: string;
                    aws_dns_slowrate?: string;
                    azion_email?: string;
                    azion_password?: string;
                    azuredns_subscriptionid?: string;
                    azuredns_tenantid?: string;
                    azuredns_appid?: string;
                    azuredns_clientsecret?: string;
                    bookmyname_username?: string;
                    bookmyname_password?: string;
                    bunny_api_key?: string;
                    clouddns_email?: string;
                    clouddns_client_id?: string;
                    clouddns_password?: string;
                    cloudns_auth_id?: string;
                    cloudns_sub_auth_id?: string;
                    cloudns_auth_password?: string;
                    cf_key?: string;
                    cf_email?: string;
                    cf_token?: string;
                    cf_account_id?: string;
                    cf_zone_id?: string;
                    conoha_username?: string;
                    conoha_password?: string;
                    conoha_tenantid?: string;
                    conoha_identityserviceapi?: string;
                    constellix_key?: string;
                    constellix_secret?: string;
                    cpanel_username?: string;
                    cpanel_apitoken?: string;
                    cpanel_hostname?: string;
                    cn_user?: string;
                    cn_password?: string;
                    curanet_authclientid?: string;
                    curanet_authsecret?: string;
                    cy_username?: string;
                    cy_password?: string;
                    ddnss_token?: string;
                    dedyn_token?: string;
                    dedyn_name?: string;
                    do_api_key?: string;
                    da_api?: string;
                    da_api_insecure?: string;
                    dnsexit_api_key?: string;
                    dnsexit_auth_user?: string;
                    dnsexit_auth_pass?: string;
                    dnshome_subdomain?: string;
                    dnshome_subdomainpassword?: string;
                    dnsimple_oauth_token?: string;
                    me_key?: string;
                    me_secret?: string;
                    dnsservices_username?: string;
                    dnsservices_password?: string;
                    do_letoken?: string;
                    do_pid?: string;
                    do_pw?: string;
                    domeneshop_token?: string;
                    domeneshop_secret?: string;
                    dp_id?: string;
                    dp_key?: string;
                    dpi_id?: string;
                    dpi_key?: string;
                    dh_api_key?: string;
                    duckdns_token?: string;
                    dd_api_user?: string;
                    dd_api_key?: string;
                    dyn_customer?: string;
                    dyn_username?: string;
                    dyn_password?: string;
                    df_user?: string;
                    df_password?: string;
                    dynu_clientid?: string;
                    dynu_secret?: string;
                    easydns_key?: string;
                    easydns_token?: string;
                    euserv_username?: string;
                    euserv_password?: string;
                    exoscale_api_key?: string;
                    exoscale_secret_key?: string;
                    fornex_api_key?: string;
                    freedns_user?: string;
                    freedns_password?: string;
                    gandi_livedns_key?: string;
                    gcore_key?: string;
                    geoscaling_username?: string;
                    geoscaling_password?: string;
                    gd_key?: string;
                    gd_secret?: string;
                    googledomains_access_token?: string;
                    googledomains_zone?: string;
                    hetzner_token?: string;
                    hexonet_login?: string;
                    hexonet_password?: string;
                    huaweicloud_username?: string;
                    huaweicloud_password?: string;
                    huaweicloud_domainname?: string;
                    he_username?: string;
                    he_password?: string;
                    hostingde_apikey?: string;
                    hostingde_endpoint?: string;
                    infoblox_creds?: string;
                    infoblox_server?: string;
                    infoblox_view?: string;
                    infomaniak_api_token?: string;
                    default_infomaniak_api_url?: string;
                    infomaniak_ttl?: string;
                    ionos_prefix?: string;
                    ionos_secret?: string;
                    ipv64_token?: string;
                    internetbs_api_key?: string;
                    internetbs_api_password?: string;
                    inwx_username?: string;
                    inwx_password?: string;
                    inwx_shared_secret?: string;
                    ispc_user?: string;
                    ispc_password?: string;
                    ispc_api?: string;
                    ispc_api_insecure?: string;
                    jd_access_key_id?: string;
                    jd_region?: string;
                    joker_username?: string;
                    kinghost_username?: string;
                    knot_server?: string;
                    la_id?: string;
                    loopia_user?: string;
                    lua_email?: string;
                    miab_username?: string;
                    miab_server?: string;
                    mydnsjp_masterid?: string;
                    namecom_username?: string;
                    namecom_token?: string;
                    namecheap_username?: string;
                    nm_user?: string;
                    nc_cid?: string;
                    nic_clientid?: string;
                    nic_clientsecret?: string;
                    nic_username?: string;
                    nw_api_endpoint?: "" | "https://portal.nexcess.net" | "https://core.thermo.io" | "https://my.futurehosting.com";
                    onecom_user?: string;
                    oci_cli_tenancy?: string;
                    oci_cli_user?: string;
                    oci_cli_region?: string;
                    oci_cli_key?: string;
                    openprovider_user?: string;
                    ovh_end_point?: "" | "ovh-eu" | "ovh-ca" | "kimsufi-eu" | "kimsufi-ca" | "soyoustart-eu" | "soyoustart-ca" | "runabove-ca";
                    pleskxml_user?: string;
                    pleskxml_uri?: string;
                    pointhq_email?: string;
                    pdns_url?: string;
                    pdns_serverid?: string;
                    pdns_ttl?: string;
                    rackcorp_apiuuid?: string;
                    rackspace_username?: string;
                    rackspace_apikey?: string;
                    rage4_username?: string;
                    rcode0_url?: string;
                    rcode0_ttl?: string;
                    regru_api_username?: string;
                    scaleway_api_token?: string;
                    schlundtech_user?: string;
                    selfhostdns_username?: string;
                    selfhostdns_map?: string;
                    servercow_api_username?: string;
                    simply_accountname?: string;
                    simply_api?: string;
                    udr_user?: string;
                    ultra_usr?: string;
                    uno_user?: string;
                    veesp_user?: string;
                    west_username?: string;
                    world4you_username?: string;
                    yc_zone_id?: string;
                    yc_folder_id?: string;
                    yc_sa_id?: string;
                    yc_sa_key_id?: string;
                    yc_sa_key_file_pem_b64?: string;
                    zone_username?: string;
                    zone_key?: string;
                    anydnschallengealias?: string;
                    anydnschallengedomain?: boolean;
                }
                export interface ACMECertificateDomainParentId extends ACMECertificateDomain {
                    parent_id: number;
                }
                export interface ACMECertificateDomainId extends ACMECertificateDomainParentId {
                    id: number;
                }

                export enum post {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                    issue = "/services/acme/certificate/issue",
                    renew = "/services/acme/certificate/renew",
                }
                export interface ACMECertificateIssue {
                    certificate: string;
                    status?: string;
                    last_updated?: number;
                    result_log?: string;
                }
                export interface ACMECertificateRenew {
                    certificate: string;
                    status?: string;
                    last_updated?: number;
                    result_log?: string;
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
                    certificates = "/services/acme/certificates",
                }
                export enum put {
                    certificates = "/services/acme/certificates",
                }
            }
            export enum get {
                settings = "/services/acme/settings",
            }
            export interface ACMESettings {
                enable: boolean;
                writecerts: boolean;
            }
            export enum post {}
            export enum patch {
                settings = "/services/acme/settings",
            }
            export enum del {}
            export enum put {}
        }
        export namespace bind {
            export enum get {
                settings = "/services/bind/settings",
                view = "/services/bind/view",
                views = "/services/bind/views",
            }
            export interface BINDview {
                name: string;
                descr: string;
                recursion: boolean;
                match_clients: string[];
                allow_recursion: string[];
                bind_custom_options: string;
            }
            export interface BINDviewId extends BINDview {
                id: number;
            }

            export enum post {
                view = "/services/bind/view",
            }
            export enum patch {
                settings = "/services/bind/settings",
                view = "/services/bind/view",
            }
            export enum del {
                view = "/services/bind/view",
                views = "/services/bind/views",
                zones = "/services/bind/zones",
            }
            export enum put {
                views = "/services/bind/views",
                zones = "/services/bind/zones",
            }
            export namespace accessList {
                export enum get {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry",
                    access_lists = "/services/bind/access_lists",
                }
                export interface BINDAccessList {
                    name: string;
                    description: string;
                    entries: {
                        value: string;
                        description: string;
                    }[];
                }
                export interface BINDAccessListId extends BINDAccessList {
                    id: number;
                }
                export interface BINDAccessListEntry {
                    value: string;
                    description: string;
                }
                export interface BINDAccessListEntryParentId extends BINDAccessListEntry {
                    parent_id: number;
                }
                export interface BINDAccessListEntryId extends BINDAccessListEntryParentId {
                    id: number;
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
                    access_lists = "/services/bind/access_lists",
                }
                export enum put {
                    access_lists = "/services/bind/access_lists",
                }
            }
            export namespace sync {
                export enum get {
                    remoteHost = "/services/bind/sync/remote_host",
                    remoteHosts = "/services/bind/sync/remote_hosts",
                    settings = "/services/bind/sync/settings",
                }
                export interface BINDSyncSettings {
                    synconchanges: "disabled" | "manual" | "auto";
                    synctimeout: 30 | 60 | 90 | 120 | 150 | 250;
                    masterip: string;
                }
                export interface BINDSyncRemoteHost {
                    syncdestinenable: boolean;
                    syncprotocol: "http" | "https";
                    ipaddress: string;
                    syncport: string;
                    username: string;
                    password: string;
                }
                export interface BINDSyncRemoteHostId extends BINDSyncRemoteHost {
                    id: number;
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
                    zones = "/services/bind/zones",
                }
                export interface BINDZone {
                    disabled: boolean;
                    name: string;
                    description: string;
                    type: "master" | "slave" | "forward" | "redirect";
                    view: string[];
                    reversev4: boolean;
                    reversev6: boolean;
                    rpz: boolean;
                    custom: string;
                    dnssec: boolean;
                    backupkeys: boolean;
                    slaveip: string;
                    forwarders: string[];
                    ttl: number | null;
                    baseip: string;
                    nameserver: string;
                    mail: string;
                    serial: number;
                    refresh: number | null;
                    retry: number | null;
                    expire: number | null;
                    minimum: number | null;
                    enable_updatepolicy: boolean;
                    updatepolicy: string;
                    allowupdate: string[];
                    allowtransfer: string[];
                    allowquery: string[];
                    regdhcpstatic: boolean;
                    customzonerecords: string;
                    records: {
                        name: string;
                        type: "A" | "AAAA" | "CNAME" | "MX" | "NS" | "LOC" | "PTR" | "SRV" | "TXT" | "SPF";
                        rdata: string;
                        priority: number;
                    }[];
                }
                export interface BINDZoneId extends BINDZone {
                    id: number;
                }
                export interface BINDZoneRecord {
                    name: string;
                    type: "A" | "AAAA" | "CNAME" | "MX" | "NS" | "LOC" | "PTR" | "SRV" | "TXT" | "SPF";
                    rdata: string;
                    priority: number;
                }
                export interface BINDZoneRecordParentId extends BINDZoneRecord {
                    parent_id: number;
                }
                export interface BINDZoneRecordId extends BINDZoneRecordParentId {
                    id: number;
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
                    zones = "/services/bind/zones",
                }
                export enum put {
                    zones = "/services/bind/zones",
                }
            }
        }
        export namespace cron {
            export enum get {
                job = "/services/cron/job",
                jobs = "/services/cron/jobs",
            }
            export interface CronJob {
                minute: string;
                hour: string;
                mday: string;
                month: string;
                wday: string;
                who: string;
                command: string;
            }

            export interface CronJobId extends CronJob {
                id: number;
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
            export interface DHCPServer {
                interface: string;
                enable: boolean;
                range_from: string;
                range_to: string;
                domain: string;
                failover_peerip: string;
                mac_allow: string[];
                mac_deny: string[];
                domainsearchlist: string[];
                defaultleasetime?: number;
                maxleasetime?: number;
                gateway: string;
                dnsserver: string[];
                winsserver: string[];
                ntpserver: string[];
                staticarp: boolean;
                ignorebootp: boolean;
                ignoreclientuids: boolean;
                nonak: boolean;
                disablepingcheck: boolean;
                dhcpleaseinlocaltime: boolean;
                statsgraph: boolean;
                denyunknown?: "enabled" | "class";
                pool: {
                    range_from: string;
                    range_to: string;
                    domain: string;
                    mac_allow: string[];
                    mac_deny: string[];
                    domainsearchlist: string[];
                    defaultleasetime?: number;
                    maxleasetime?: number;
                    gateway: string;
                    dnsserver: string[];
                    winsserver: string[];
                    ntpserver: string[];
                    ignorebootp: boolean;
                    ignoreclientuids: boolean;
                    denyunknown?: "enabled" | "class";
                }[];
                numberoptions: {
                    number: number;
                    type:
                        | "text"
                        | "string"
                        | "boolean"
                        | "unsigned integer 8"
                        | "unsigned integer 16"
                        | "unsigned integer 32"
                        | "signed integer 8"
                        | "signed integer 16"
                        | "signed integer 32"
                        | "ip-address";
                    value: string;
                }[];
                staticmap: {
                    mac: string;
                    ipaddr?: string;
                    cid?: string;
                    hostname?: string;
                    domain: string;
                    domainsearchlist: string[];
                    defaultleasetime?: number;
                    maxleasetime?: number;
                    gateway: string;
                    dnsserver: string[];
                    winsserver: string[];
                    ntpserver: string[];
                    arp_table_static_entry: boolean;
                    descr: string;
                }[];
            }
            export interface DHCPServerId extends DHCPServer {
                id: number;
            }
            export interface DHCPServerCustomOption {
                number: number;
                type:
                    | "text"
                    | "string"
                    | "boolean"
                    | "unsigned integer 8"
                    | "unsigned integer 16"
                    | "unsigned integer 32"
                    | "signed integer 8"
                    | "signed integer 16"
                    | "signed integer 32"
                    | "ip-address";
                value: string;
            }
            export interface DHCPServerCustomOptionParentId extends DHCPServerCustomOption {
                parent_id: number;
            }
            export interface DHCPServerCustomOptionId extends DHCPServerCustomOptionParentId {
                id: number;
            }
            export interface DHCPServerAddressPool {
                range_from: string;
                range_to: string;
                domain: string;
                mac_allow: string[];
                mac_deny: string[];
                domainsearchlist: string[];
                defaultleasetime?: number;
                maxleasetime?: number;
                gateway: string;
                dnsserver: string[];
                winsserver: string[];
                ntpserver: string[];
                ignorebootp: boolean;
                ignoreclientuids: boolean;
                denyunknown?: "enabled" | "class";
            }
            export interface DHCPServerAddressPoolParentId {
                parent_id: number;
            }
            export interface DHCPServerAddressPoolId extends DHCPServerAddressPoolParentId {
                id: number;
            }
            export interface DHCPServerStaticMapping {
                mac: string;
                ipaddr?: string;
                cid?: string;
                hostname?: string;
                domain: string;
                domainsearchlist: string[];
                defaultleasetime?: number;
                maxleasetime?: number;
                gateway: string;
                dnsserver: string[];
                winsserver: string[];
                ntpserver: string[];
                arp_table_static_entry: boolean;
                descr: string;
            }
            export interface DHCPServerStaticMappingParentId extends DHCPServerStaticMapping {
                parent_id: number;
            }
            export interface DHCPServerStaticMappingId extends DHCPServerStaticMappingParentId {
                id: number;
            }
            export enum post {
                addressPool = "/services/dhcp_server/address_pool",
                apply = "/services/dhcp_server/apply",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping",
            }
            export interface DHCPServerApply {
                applied: boolean;
            }
            export enum patch {
                default = "/services/dhcp_server",
                addressPool = "/services/dhcp_server/address_pool",
                backend = "/services/dhcp_server/backend",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping",
            }
            export interface DHCPServerBackend {
                dchpbackend: "isc" | "kea";
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
            export interface DNSForwarderApply {
                applied: boolean;
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
                export interface DNSForwarderHostOverride {
                    host: string;
                    domain: string;
                    ip: string;
                    descr: string;
                    aliases: {
                        host: string;
                        domain: string;
                        description: string;
                    }[];
                }
                export interface DNSForwarderHostOverrideId extends DNSForwarderHostOverride {
                    id: number;
                }
                export interface DNSForwarderHostOverrideAlias {
                    host: string;
                    domain: string;
                    description: string;
                }
                export interface DNSForwarderHostOverrideAliasParentId extends DNSForwarderHostOverrideAlias {
                    parent_id: number;
                }
                export interface DNSForwarderHostOverrideAliasId extends DNSForwarderHostOverrideAliasParentId {
                    id: number;
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
            export interface DNSResolverSettings {
                enable: boolean;
                port: string;
                enablessl: boolean;
                sslcertref: string;
                tlsport: string;
                active_interface: string[];
                outgoing_interface: string[];
                strictout: boolean;
                system_domain_local_zone_type:
                    | "deny"
                    | "refuse"
                    | "static"
                    | "transparent"
                    | "typetransparent"
                    | "redirect"
                    | "inform"
                    | "inform_deny"
                    | "nodefault";
                dnssec: boolean;
                python: boolean;
                python_order: "pre_validator" | "post_validator";
                python_script: string;
                forwarding: boolean;
                regdhcp: boolean;
                regdhcpstatic: boolean;
                regovpnclients: boolean;
                custom_options: string;
            }
            export interface DNSResolverApply {
                applied: boolean;
            }
            export interface DNSResolverDomainOverride {
                domain: string;
                ip: string;
                descr: string;
                forward_tls_upstream: boolean;
                tls_hostname?: string;
            }
            export interface DNSResolverDomainOverrideId extends DNSResolverDomainOverride {
                id: number;
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
                    access_lists = "/services/dns_resolver/access_lists",
                }
                export interface DNSResolverAccessListNetwork {
                    network: string;
                    mask: number;
                    description: string;
                }
                export interface DNSResolverAccessListNetworkParentId extends DNSResolverAccessListNetwork {
                    parent_id: number;
                }
                export interface DNSResolverAccessListNetworkId extends DNSResolverAccessListNetworkParentId {
                    id: number;
                }
                export interface DNSResolverAccessList {
                    name: string;
                    action: "allow" | "deny" | "refuse" | "allow snoop" | "deny nonlocal" | "refuse nonlocal";
                    description: string;
                    networks: {
                        network: string;
                        mask: number;
                        description: string;
                    }[];
                }
                export interface DNSResolverAccessListId extends DNSResolverAccessList {
                    id: number;
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
                    access_lists = "/services/dns_resolver/access_lists",
                }
                export enum put {
                    access_lists = "/services/dns_resolver/access_lists",
                }
            }
            export namespace hostOverride {
                export enum get {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias",
                    overrides = "/services/dns_resolver/host_overrides",
                }
                export interface DNSResolverHostOverrideAlias {
                    host: string;
                    domain: string;
                    descr: string;
                }
                export interface DNSResolverHostOverrideAliasParentId extends DNSResolverHostOverrideAlias {
                    parent_id: number;
                }
                export interface DNSResolverHostOverrideAliasId extends DNSResolverHostOverrideAliasParentId {
                    id: number;
                }
                export interface DNSResolverHostOverride {
                    host: string;
                    domain: string;
                    ip: string[];
                    descr: string;
                    aliases: {
                        host: string;
                        domain: string;
                        descr: string;
                    }[];
                }
                export interface DNSResolverHostOverrideId extends DNSResolverHostOverride {
                    id: number;
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
        export namespace haProxy {
            export enum get {
                apply = "/services/haproxy/apply",
                file = "/services/haproxy/file",
                files = "/services/haproxy/files",
                settings = "/services/haproxy/settings",
            }
            export interface HAProxyFile {
                name: string;
                type?: "luascript" | "writetodisk" | null;
                content: string;
            }
            export interface HAProxyFileId extends HAProxyFile {
                id: number;
            }

            export interface HAProxyApply {
                applied: boolean;
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

                export interface HAProxyBackendACL {
                    name: string;
                    expression: string;
                    value: string;
                    casesensitive: boolean;
                    not: boolean;
                }
                export interface HAProxyBackendACLParentId extends HAProxyBackendACL {
                    parent_id: number;
                }
                export interface HAProxyBackendACLId extends HAProxyBackendACLParentId {
                    id: number;
                }
                export interface HAProxyBackendAction {
                    action:
                        | "use_server"
                        | "custom"
                        | "http-request_allow"
                        | "http-request_deny"
                        | "http-request_tarpit"
                        | "http-request_auth"
                        | "http-request_redirect"
                        | "http-request_lua"
                        | "http-request_use-service"
                        | "http-request_add-header"
                        | "http-request_set-header"
                        | "http-request_del-header"
                        | "http-request_replace-header"
                        | "http-request_replace-path"
                        | "http-request_replace-value"
                        | "http-request_set-method"
                        | "http-request_set-path"
                        | "http-request_set-query"
                        | "http-request_set-uri"
                        | "http-response_allow"
                        | "http-response_deny"
                        | "http-response_lua"
                        | "http-response_add-header"
                        | "http-response_set-header"
                        | "http-response_del-header"
                        | "http-response_replace-header"
                        | "http-response_replace-value"
                        | "http-response_set-status"
                        | "http-after-response_add-header"
                        | "http-after-response_set-header"
                        | "http-after-response_del-header"
                        | "http-after-response_replace-header"
                        | "http-after-response_replace-value"
                        | "http-after-response_set-status"
                        | "tcp-request_connection_accept"
                        | "tcp-request_connection_reject"
                        | "tcp-request_content_accept"
                        | "tcp-request_content_reject"
                        | "tcp-request_content_lua"
                        | "tcp-request_content_use-service"
                        | "tcp-response_content_accept"
                        | "tcp-response_content_close"
                        | "tcp-response_content_reject"
                        | "tcp-response_content_lua";
                    acl: string;
                    server?: string;
                    customaction?: string;
                    deny_status?: string;
                    realm?: string;
                    rule?: string;
                    lua_function?: string;
                    name?: string;
                    fmt?: string;
                    find?: string;
                    replace?: string;
                    path?: string;
                    status?: string;
                    reason?: string;
                }

                export interface HAProxyBackendActionParentId extends HAProxyBackendAction {
                    parent_id: number;
                }
                export interface HAProxyBackendActionId extends HAProxyBackendActionParentId {
                    id: number;
                }

                export interface HAProxyBackend {
                    name: string;
                    servers: {
                        name: string;
                        status: "active" | "backup" | "disabled" | "inactive";
                        address: string;
                        port: string;
                        weight: number;
                        ssl: boolean;
                        sslserververify: boolean;
                        serverid?: number;
                    }[];
                    balance: "" | "roundrobin" | "static-rr" | "leastconn" | "source" | "uri";
                    balance_urilen?: number;
                    balance_uridepth?: number;
                    balance_uriwhole: boolean;
                    acls: {
                        name: string;
                        expression:
                            | "host_starts_with"
                            | "host_ends_with"
                            | "host_matches"
                            | "host_regex"
                            | "host_contains"
                            | "path_starts_with"
                            | "path_ends_with"
                            | "path_matches"
                            | "path_regex"
                            | "path_contains"
                            | "path_dir"
                            | "url_parameter"
                            | "ssl_c_verify_code"
                            | "ssl_c_verify"
                            | "ssl_c_ca_commonname"
                            | "source_ip"
                            | "backendservercount"
                            | "traffic_is_http"
                            | "traffic_is_ssl"
                            | "ssl_sni_matches"
                            | "ssl_sni_contains"
                            | "ssl_sni_starts_with"
                            | "ssl_sni_ends_with"
                            | "ssl_sni_regex"
                            | "custom";
                        value: string;
                        casesensitive: boolean;
                        not: boolean;
                    }[];
                    actions: {
                        action:
                            | "use_server"
                            | "custom"
                            | "http-request_allow"
                            | "http-request_deny"
                            | "http-request_tarpit"
                            | "http-request_auth"
                            | "http-request_redirect"
                            | "http-request_lua"
                            | "http-request_use-service"
                            | "http-request_add-header"
                            | "http-request_set-header"
                            | "http-request_del-header"
                            | "http-request_replace-header"
                            | "http-request_replace-path"
                            | "http-request_replace-value"
                            | "http-request_set-method"
                            | "http-request_set-path"
                            | "http-request_set-query"
                            | "http-request_set-uri"
                            | "http-response_allow"
                            | "http-response_deny"
                            | "http-response_lua"
                            | "http-response_add-header"
                            | "http-response_set-header"
                            | "http-response_del-header"
                            | "http-response_replace-header"
                            | "http-response_replace-value"
                            | "http-response_set-status"
                            | "http-after-response_add-header"
                            | "http-after-response_set-header"
                            | "http-after-response_del-header"
                            | "http-after-response_replace-header"
                            | "http-after-response_replace-value"
                            | "http-after-response_set-status"
                            | "tcp-request_connection_accept"
                            | "tcp-request_connection_reject"
                            | "tcp-request_content_accept"
                            | "tcp-request_content_reject"
                            | "tcp-request_content_lua"
                            | "tcp-request_content_use-service"
                            | "tcp-response_content_accept"
                            | "tcp-response_content_close"
                            | "tcp-response_content_reject"
                            | "tcp-response_content_lua";
                        acl: string;
                        server?: string;
                        customaction?: string;
                        deny_status?: string;
                        realm?: string;
                        rule?: string;
                        lua_function?: string;
                        name?: string;
                        fmt?: string;
                        find?: string;
                        replace?: string;
                        path?: string;
                        status?: string;
                        reason?: string;
                    }[];
                    connection_timeout?: number;
                    server_timeout?: number;
                    retries?: number;
                    check_type: "none" | "Basic" | "HTTP" | "LDAP" | "MySQL" | "PostgreSQL" | "Redis" | "SMTP" | "ESMTP" | "SSL";
                    checkinter?: number;
                    log_health_checks: boolean;
                    httpcheck_method: "OPTIONS" | "HEAD" | "GET" | "POST" | "PUT" | "DELETE" | "TRACE";
                    monitor_uri: string;
                    monitor_httpversion: string;
                    monitor_username?: string;
                    monitor_domain?: string;
                    agent_checks: boolean;
                    agent_port: string;
                    agent_inter?: number;
                    persist_cookie_enabled: boolean;
                    persist_cookie_name: string;
                    persist_cookie_mode:
                        | "passive"
                        | "passive-silent"
                        | "reset"
                        | "set"
                        | "set-silent"
                        | "insert-only"
                        | "insert-only-silent"
                        | "session-prefix"
                        | "passive-session-prefix";
                    persist_cookie_cachable: boolean;
                    persist_cookie_postonly: boolean;
                    persist_cookie_httponly: boolean;
                    persist_cookie_secure: boolean;
                    haproxy_cookie_maxidle?: number;
                    haproxy_cookie_maxlife?: number;
                    haproxy_cookie_domains: string[];
                    haproxy_cookie_dynamic_cookie_key: string;
                    persist_sticky_type:
                        | "none"
                        | "stick_sslsessionid"
                        | "stick_sourceipv4"
                        | "stick_sourceipv6"
                        | "stick_cookie_value"
                        | "stick_rdp_cookie";
                    persist_stick_expire: string;
                    persist_stick_tablesize: string;
                    persist_stick_cookiename?: string;
                    persist_stick_length?: number;
                    email_level: "" | "dontlog" | "emerg" | "alert" | "crit" | "err" | "warning" | "notice" | "info" | "debug";
                    email_to: string;
                    stats_enabled: boolean;
                    stats_uri: string;
                    stats_scope: string[];
                    stats_realm: string;
                    stats_username: string;
                    stats_password: string;
                    stats_admin: string;
                    stats_node: string;
                    stats_desc: string;
                    stats_refresh: number;
                    strict_transport_security?: number;
                    errorfiles: {
                        errorcode: number;
                        errorfile: string;
                    }[];
                    cookie_attribute_secure: boolean;
                    advanced: string;
                    advanced_backend: string;
                    transparent_clientip: boolean;
                    transparent_interface?: string;
                }
                export interface HAProxyBackendId extends HAProxyBackend {
                    id: number;
                }

                export interface HAProxyBackendErrorFile {
                    errorcode: number;
                    errorfile: string;
                }

                export interface HAProxyBackendErrorFileParentId extends HAProxyBackendErrorFile {
                    parent_id: number;
                }
                export interface HAProxyBackendErrorFileId extends HAProxyBackendErrorFileParentId {
                    id: number;
                }

                export interface HAProxyBackendServer {
                    name: string;
                    status: "active" | "backup" | "disabled" | "inactive";
                    address: string;
                    port: string;
                    weight: number;
                    ssl: boolean;
                    sslserververify: boolean;
                    serverid?: number;
                }
                export interface HAProxyBackendServerParentId extends HAProxyBackendServer {
                    parent_id: number;
                }
                export interface HAProxyBackendServerId extends HAProxyBackendServerParentId {
                    id: number;
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
                export interface HAProxyFrontend {
                    name: string;
                    descr: string;
                    status: "active" | "disabled";
                    a_extaddr: {
                        extaddr: "custom" | "any_ipv4" | "any_ipv6" | "localhost_ipv4" | "localhost_ipv6";
                        extaddr_custom: string;
                        extaddr_port?: string;
                        extaddr_ssl: boolean;
                        exaddr_advanced: string;
                    }[];
                    max_connections?: number;
                    type: "http" | "https" | "tcp";
                    ha_acls: {
                        name: string;
                        expression:
                            | "host_starts_with"
                            | "host_ends_with"
                            | "host_matches"
                            | "host_regex"
                            | "host_contains"
                            | "path_starts_with"
                            | "path_ends_with"
                            | "path_matches"
                            | "path_regex"
                            | "path_contains"
                            | "path_dir"
                            | "url_parameter"
                            | "ssl_c_verify_code"
                            | "ssl_c_verify"
                            | "ssl_c_ca_commonname"
                            | "source_ip"
                            | "backendservercount"
                            | "traffic_is_http"
                            | "traffic_is_ssl"
                            | "ssl_sni_matches"
                            | "ssl_sni_contains"
                            | "ssl_sni_starts_with"
                            | "ssl_sni_ends_with"
                            | "ssl_sni_regex"
                            | "custom";
                        value: string;
                        casesensitive: boolean;
                        not: boolean;
                    }[];
                    a_actionitems: {
                        action:
                            | "use_backend"
                            | "custom"
                            | "http-request_allow"
                            | "http-request_deny"
                            | "http-request_tarpit"
                            | "http-request_auth"
                            | "http-request_redirect"
                            | "http-request_lua"
                            | "http-request_use-service"
                            | "http-request_add-header"
                            | "http-request_set-header"
                            | "http-request_del-header"
                            | "http-request_replace-header"
                            | "http-request_replace-path"
                            | "http-request_replace-value"
                            | "http-request_set-method"
                            | "http-request_set-path"
                            | "http-request_set-query"
                            | "http-request_set-uri"
                            | "http-response_allow"
                            | "http-response_deny"
                            | "http-response_lua"
                            | "http-response_add-header"
                            | "http-response_set-header"
                            | "http-response_del-header"
                            | "http-response_replace-header"
                            | "http-response_replace-value"
                            | "http-response_set-status"
                            | "http-after-response_add-header"
                            | "http-after-response_set-header"
                            | "http-after-response_del-header"
                            | "http-after-response_replace-header"
                            | "http-after-response_replace-value"
                            | "http-after-response_set-status"
                            | "tcp-request_connection_accept"
                            | "tcp-request_connection_reject"
                            | "tcp-request_content_accept"
                            | "tcp-request_content_reject"
                            | "tcp-request_content_lua"
                            | "tcp-request_content_use-service"
                            | "tcp-response_content_accept"
                            | "tcp-response_content_close"
                            | "tcp-response_content_reject"
                            | "tcp-response_content_lua";
                        acl: string;
                        backend?: string;
                        customaction?: string;
                        deny_status?: string;
                        realm?: string;
                        rule?: string;
                        lua_function?: string;
                        name?: string;
                        fmt?: string;
                        find?: string;
                        replace?: string;
                        path?: string;
                        status?: string;
                        reason?: string;
                    }[];
                    backend_serverpool?: string;
                    socket_stats: boolean;
                    dontlognull: boolean;
                    dontlog_normal: boolean;
                    log_separate_errors: boolean;
                    log_detailed: boolean;
                    a_errorfiles: {
                        errorcode: number;
                        errorfile: string;
                    }[];
                    client_timeout?: number;
                    forwardfor: boolean;
                    httpclose: "http-keep-alive" | "http-tunnel" | "httpclose" | "http-server-close" | "forceclose";
                    advanced_bind?: string;
                    advanced?: string;
                }

                export interface HAProxyFrontendId extends HAProxyFrontend {
                    id: number;
                }

                export interface HAProxyFrontendErrorFile {
                    errorcode: number;
                    errorfile: string;
                }
                export interface HAProxyFrontendErrorFileParentId extends HAProxyFrontendErrorFile {
                    parent_id: number;
                }
                export interface HAProxyFrontendErrorFileId extends HAProxyFrontendErrorFileParentId {
                    id: number;
                }

                export interface HAProxyFrontendACL {
                    name: string;
                    expression:
                        | "host_starts_with"
                        | "host_ends_with"
                        | "host_matches"
                        | "host_regex"
                        | "host_contains"
                        | "path_starts_with"
                        | "path_ends_with"
                        | "path_matches"
                        | "path_regex"
                        | "path_contains"
                        | "path_dir"
                        | "url_parameter"
                        | "ssl_c_verify_code"
                        | "ssl_c_verify"
                        | "ssl_c_ca_commonname"
                        | "source_ip"
                        | "backendservercount"
                        | "traffic_is_http"
                        | "traffic_is_ssl"
                        | "ssl_sni_matches"
                        | "ssl_sni_contains"
                        | "ssl_sni_starts_with"
                        | "ssl_sni_ends_with"
                        | "ssl_sni_regex"
                        | "custom";
                    value: string;
                    casesensitive: boolean;
                    not: boolean;
                }
                export interface HAProxyFrontendACLParentId extends HAProxyFrontendACL {
                    parent_id: number;
                }
                export interface HAProxyFrontendACLId extends HAProxyFrontendACLParentId {
                    id: number;
                }

                export interface HAProxyFrontendAction {
                    action:
                        | "use_backend"
                        | "custom"
                        | "http-request_allow"
                        | "http-request_deny"
                        | "http-request_tarpit"
                        | "http-request_auth"
                        | "http-request_redirect"
                        | "http-request_lua"
                        | "http-request_use-service"
                        | "http-request_add-header"
                        | "http-request_set-header"
                        | "http-request_del-header"
                        | "http-request_replace-header"
                        | "http-request_replace-path"
                        | "http-request_replace-value"
                        | "http-request_set-method"
                        | "http-request_set-path"
                        | "http-request_set-query"
                        | "http-request_set-uri"
                        | "http-response_allow"
                        | "http-response_deny"
                        | "http-response_lua"
                        | "http-response_add-header"
                        | "http-response_set-header"
                        | "http-response_del-header"
                        | "http-response_replace-header"
                        | "http-response_replace-value"
                        | "http-response_set-status"
                        | "http-after-response_add-header"
                        | "http-after-response_set-header"
                        | "http-after-response_del-header"
                        | "http-after-response_replace-header"
                        | "http-after-response_replace-value"
                        | "http-after-response_set-status"
                        | "tcp-request_connection_accept"
                        | "tcp-request_connection_reject"
                        | "tcp-request_content_accept"
                        | "tcp-request_content_reject"
                        | "tcp-request_content_lua"
                        | "tcp-request_content_use-service"
                        | "tcp-response_content_accept"
                        | "tcp-response_content_close"
                        | "tcp-response_content_reject"
                        | "tcp-response_content_lua";
                    acl: string;
                    backend?: string;
                    customaction?: string;
                    deny_status?: string;
                    realm?: string;
                    rule?: string;
                    lua_function?: string;
                    name?: string;
                    fmt?: string;
                    find?: string;
                    replace?: string;
                    path?: string;
                    status?: string;
                    reason?: string;
                }

                export interface HAProxyFrontendActionParentId {
                    parent_id: number;
                }
                export interface HAProxyFrontendActionId extends HAProxyFrontendActionParentId {
                    id: number;
                }

                export interface HAProxyFrontendAddress {
                    extaddr: "custom" | "any_ipv4" | "any_ipv6" | "localhost_ipv4" | "localhost_ipv6";
                    extaddr_custom: string;
                    extaddr_port?: string;
                    extaddr_ssl: boolean;
                    exaddr_advanced: string;
                }
                export interface HAProxyFrontendAddressParentId extends HAProxyFrontendAddress {
                    parent_id: number;
                }
                export interface HAProxyFrontendAddressId extends HAProxyFrontendAddressParentId {
                    id: number;
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
                    default = "/services/haproxy/settings",
                }
                export interface HAProxySettings {
                    enable: boolean;
                    maxconn?: number;
                    nbthread: number;
                    terminate_on_reload: boolean;
                    hard_stop_after: string;
                    carpdev?: string;
                    localstatsport?: string;
                    localstats_refreshtime?: number;
                    localstats_sticktable_refreshtime?: number;
                    remotesyslog?: string;
                    logfacility:
                        | "kern"
                        | "user"
                        | "mail"
                        | "daemon"
                        | "auth"
                        | "syslog"
                        | "lpr"
                        | "news"
                        | "uucp"
                        | "cron"
                        | "auth2"
                        | "ftp"
                        | "ntp"
                        | "audit"
                        | "cron2"
                        | "local0"
                        | "local1"
                        | "local2"
                        | "local3"
                        | "local4"
                        | "local5"
                        | "local6"
                        | "local7";
                    loglevel?: string;
                    log_send_hostname: string;
                    dns_resolvers: {
                        name: string;
                        server: string;
                        port: string;
                    }[];
                    resolver_retries: number;
                    resolver_timeoutretry?: string;
                    resolver_holdvalid: string;
                    email_mailers: {
                        name: string;
                        mailserver: string;
                        mailserverport: string;
                    }[];
                    email_level: "" | "emerg" | "alert" | "crit" | "err" | "warning" | "notice" | "info" | "debug";
                    email_myhostname?: string;
                    email_from: string;
                    email_to: string;
                    sslcompatibilitymode: "auto" | "modern" | "intermediate" | "old";
                    ssldefaultdhparam: number;
                    advanced: string;
                    enablesync: boolean;
                }
                export interface HAProxyDNSResolver {
                    name: string;
                    server: string;
                    port: string;
                }
                export interface HAProxyDNSResolverId extends HAProxyDNSResolver {
                    id: number;
                }
                export interface HAProxyEmailMailer {
                    name: string;
                    mailserver: string;
                    mailserverport: string;
                }
                export interface HAProxyEmailMailerId extends HAProxyEmailMailer {
                    id: number;
                }
                export enum post {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                }
                export enum patch {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                    default = "/services/haproxy/settings",
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
            export interface NTPSettings {
                enable: boolean;
                interface: string[];
                ntpmaxpeers: number;
                orphan: number;
                ntpminpoll: "" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "omit";
                ntpmaxpoll: "" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "omit";
                dnsresolv: "auto" | "inet" | "inet6";
                logpeer: boolean;
                logsys: boolean;
                clockstats: boolean;
                loopstats: boolean;
                peerstats: boolean;
                statsgraph: boolean;
                leapsec: string;
                serverauth: boolean;
                serverauthkey: string;
                serverauthalgo: "md5" | "sha1" | "sha256";
            }
            export interface NTPTimeServer {
                timeserver: string;
                type: "server" | "pool" | "peer";
                prefer: boolean;
                noselect: boolean;
            }
            export interface NTPTimeServerId extends NTPTimeServer {
                id: number;
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
            export interface SSH {
                enable: boolean;
                port: string;
                sshdkeyonly?: "enabled" | "both";
                sshdagentforwarding: boolean;
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
            export interface ServiceWatchdog {
                name: string;
                description?: string;
                notify: boolean;
                enabled?: boolean;
            }
            export interface ServiceWatchdogId extends ServiceWatchdog {
                id: number;
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
            export interface WakeOnLan {
                interface: string;
                mac_addr: string;
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
        export interface Service {
            name: string;
            description?: string;
            enabled?: boolean;
            status?: boolean;
        }
        export interface SystemStatus {
            platform?: string | null;
            serial?: string | null;
            netgate_id?: string | null;
            uptime?: string | null;
            bios_vendor?: string | null;
            bios_version?: string | null;
            bios_date?: string | null;
            kernel_pti?: boolean | null;
            mds_mitigation?: string | null;
            temp_c?: number | null;
            temp_f?: number | null;
            cpu_model?: string | null;
            cpu_load_avg?: number[] | null;
            cpu_count?: number | null;
            cpu_usage?: number | null;
            mbuf_usage?: number | null;
            mem_usage?: number | null;
            swap_usage?: number | null;
            disk_usage?: number | null;
        }
        export interface InterfaceStats {
            name: string | null;
            descr: string | null;
            hwif: string | null;
            macaddr: string | null;
            mtu: string | null;
            enable: boolean;
            status: string | null;
            ipaddr: string | null;
            subnet: string | null;
            linklocal: string | null;
            ipaddrv6: string | null;
            subnetv6: string | null;
            inerrs: number;
            outerrs: number;
            collisions: number;
            inbytes: number;
            inbytespass: number;
            outbytes: number;
            outbytespass: number;
            inpkts: number;
            inpktspass: number;
            outpkts: number;
            outpktspass: number;
            dhcplink: string | null;
            media: string | null;
            gateway: string | null;
            gatewayv6: string | null;
        }

        export interface RoutingGatewayStatus {
            name?: string;
            srcip?: string;
            monitorip?: string;
            delay?: number;
            stddev?: number;
            loss?: number;
            status?: string;
            substatus?: string;
        }

        export interface CARP {
            enable: boolean;
            maintenance_mode: boolean;
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
            export interface DHCPServerLease {
                ip: string | null;
                mac: string | null;
                hostname: string | null;
                if: string | null;
                starts: string | null;
                ends: string | null;
                active_status: string | null;
                online_status: string | null;
                descr: string | null;
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
            export interface IPsecChildSAStatus {
                name?: string;
                uniqueid?: number;
                reqid?: number;
                state?: string;
                mode?: string;
                protocol?: string;
                encap?: boolean;
                spi_in?: string;
                spi_out?: string;
                encr_alg?: string;
                encr_keysize?: number;
                integ_alg?: string;
                dh_group?: string;
                bytes_in?: number;
                bytes_out?: number;
                packets_in?: number;
                packets_out?: number;
                use_in?: number;
                use_out?: number;
                rekey_time?: number;
                life_time?: number;
                install_time?: number;
                local_ts?: string[];
                remote_ts?: string[];
            }
            export interface IPsecSAStatus {
                con_id?: string;
                uniqueid?: number;
                version?: number;
                state?: string;
                local_host?: string;
                local_port?: string;
                local_id?: string;
                remote_host?: string;
                remote_port?: string;
                remote_id?: string;
                initiator_spi?: string;
                responder_spi?: string;
                nat_remote?: boolean;
                nat_any?: boolean;
                encr_alg?: string;
                encr_keysize?: number;
                integ_alg?: string;
                prf_alg?: string;
                dh_group?: string;
                established?: number;
                rekey_time?: number;
                child_sas?: {
                    name?: string;
                    uniqueid?: number;
                    reqid?: number;
                    state?: string;
                    mode?: string;
                    protocol?: string;
                    encap?: boolean;
                    spi_in?: string;
                    spi_out?: string;
                    encr_alg?: string;
                    encr_keysize?: number;
                    integ_alg?: string;
                    dh_group?: string;
                    bytes_in?: number;
                    bytes_out?: number;
                    packets_in?: number;
                    packets_out?: number;
                    use_in?: number;
                    use_out?: number;
                    rekey_time?: number;
                    life_time?: number;
                    install_time?: number;
                    local_ts?: string[];
                    remote_ts?: string[];
                }[];
            }
        }

        export namespace logs {
            export enum get {
                dhcp = "/status/logs/dhcp",
                firewall = "/status/logs/firewall",
                settings = "/status/logs/settings",
                system = "/status/logs/system",
            }
            export interface DHCPLog {
                text: string;
            }
            export interface FirewallLog {
                text: string;
            }
            export enum patch {
                settings = "/status/logs/settings",
            }
            export interface LogSettings {
                format: "rfc3164" | "rfc5424";
                reverseorder: boolean;
                nentries: number;
                nologdefaultblock: boolean;
                nologdefaultpass: boolean;
                nologbogons: boolean;
                nologprivatenets: boolean;
                nolognginx: boolean;
                rawfilter: boolean;
                disablelocallogging: boolean;
                logconfigchanges: boolean;
                filterdescriptions: 0 | 1 | 2;
                rotatecount: number;
                logcompressiontype: "bzip2" | "gzip" | "xz" | "zstd" | "none";
                enableremotelogging: boolean;
                ipprotocol?: "ipv4" | "ipv6";
                sourceip?: string;
                remoteserver?: string;
                remoteserver2?: string;
                remoteserver3?: string;
                logall?: boolean;
                filter?: boolean;
                dhcp?: boolean;
                auth?: boolean;
                portalauth?: boolean;
                vpn?: boolean;
                dpinger?: boolean;
                hostapd?: boolean;
                system?: boolean;
                resolver?: boolean;
                ppp?: boolean;
                routing?: boolean;
                ntpd?: boolean;
            }
            export interface SystemLog {
                text: string;
            }
        }
        export namespace openvpn {
            export enum get {
                clients = "/status/openvpn/clients",
                servers = "/status/openvpn/servers",
            }

            export interface OpenVPNServerStatus {
                name?: string | null;
                mode?: string | null;
                port?: string | null;
                vpnid?: number | null;
                mgmt?: string | null;
                conns?:
                    | {
                          common_name?: string | null;
                          remote_host?: string | null;
                          virtual_addr?: string | null;
                          virtual_addr6?: string | null;
                          bytes_recv?: number | null;
                          bytes_sent?: number | null;
                          connect_time?: string | null;
                          connect_time_unix?: number | null;
                          user_name?: string | null;
                          client_id?: number | null;
                          peer_id?: number | null;
                          cipher?: string | null;
                      }[]
                    | null;
                routes?:
                    | {
                          common_name?: string | null;
                          remote_host?: string | null;
                          virtual_addr?: string | null;
                          last_time?: string | null;
                      }[]
                    | null;
            }

            export interface OpenVPNServerRouteStatus {
                common_name?: string | null;
                remote_host?: string | null;
                virtual_addr?: string | null;
                last_time?: string | null;
            }
            export interface OpenVPNConnectionStatus {
                common_name?: string | null;
                remote_host?: string | null;
                virtual_addr?: string | null;
                virtual_addr6?: string | null;
                bytes_recv?: number | null;
                bytes_sent?: number | null;
                connect_time?: string | null;
                connect_time_unix?: number | null;
                user_name?: string | null;
                client_id?: number | null;
                peer_id?: number | null;
                cipher?: string | null;
            }
            export interface OpenVPNClientStatus {
                name?: string | null;
                port?: string | null;
                vpnid?: number | null;
                mgmt?: string | null;
                status?: string | null;
                state?: string | null;
                state_detail?: string | null;
                connect_time?: string | null;
                virtual_addr?: string | null;
                virtual_addr6?: string | null;
                remote_host?: string | null;
                remote_port?: string | null;
                local_host?: string | null;
                local_port?: string | null;
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

    export namespace system {
        export enum get {
            certificate_authorities = "/system/certificate_authorities",
            console = "/system/console",
            dns = "/system/dns",
            hostname = "/system/hostname",
            email_settings = "/system/notificaitons/email_settings",
            tunable = "/system/tunable",
            tunables = "/system/tunables",
            webgui_settings = "/system/webgui/settings",
            version = "/system/version",
        }
        export interface SystemConsole {
            passwd_protect_console: boolean;
        }
        export interface SystemDNS {
            dnsallowoverride: boolean;
            dnslocalhost: "local" | "remote" | null;
            dnsserver: string[];
        }
        export interface SystemHostname {
            hostname: string;
            domain: string;
        }

        export interface SystemTunable {
            tunable: string;
            value: string;
            descr: string;
        }
        export interface SystemTunableId extends SystemTunable {
            id: number;
        }
        export interface SystemVersion {
            version?: string | null;
            base?: string | null;
            patch?: string | null;
            buildtime?: string | null;
        }
        export interface WebGUISettings {
            protocol: "http" | "https";
            port: string;
            sslcertref: string;
        }

        export enum post {
            tunable = "/system/tunable",
        }
        export enum patch {
            console = "/system/console",
            dns = "/system/dns",
            hostname = "/system/hostname",
            email_settings = "/system/notificaitons/email_settings",
            tunable = "/system/tunable",
            webgui_settings = "/system/webgui/settings",
        }
        export enum del {
            certificate_authorities = "/system/certificate_authorities",
            tunable = "/system/tunable",
            tunables = "/system/tunables",
        }
        export enum put {
            tunables = "/system/tunables",
        }
        export namespace crl {
            export enum get {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate",
                crls = "/system/crls",
            }
            export interface CertificateRevocationList {
                refid?: string;
                caref: string;
                descr: string;
                method: "existing" | "internal";
                lifetime?: number;
                serial?: number;
                text?: string;
                cert?: {
                    certref: string;
                    serial?: string;
                    reason: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 9;
                    revoke_time: number;
                }[];
            }
            export interface CertificateRevocationListId extends CertificateRevocationList {
                id: number;
            }

            export enum post {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate",
            }

            export interface CertificateRevocationListRevokedCertificate {
                certref: string;
                serial?: string;
                reason: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 9;
                revoke_time: number;
            }
            export interface CertificateRevocationListRevokedCertificateParentId extends CertificateRevocationListRevokedCertificate {
                parent_id: number;
            }
            export interface CertificateRevocationListRevokedCertificateId extends CertificateRevocationListRevokedCertificateParentId {
                id: number;
            }
            export enum patch {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate",
            }
            export enum del {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate",
                crls = "/system/crls",
            }
            export enum put {}
        }
        export namespace certificate_authority {
            export enum get {
                default = "/system/certificate_authority",
            }
            export interface CertificateAuthority {
                descr: string;
                refid?: string;
                trust: boolean;
                randomserial: boolean;
                serial: number;
                crt: string;
                prv: string;
            }
            export interface CertificateAuthorityId extends CertificateAuthority {
                id: number;
            }
            export interface GenerateCertificateRequest {
                descr: string;
                trust: boolean;
                randomserial: boolean;
                is_intermediate: boolean;
                caref: string;
                keytype: "RSA" | "ECDSA";
                keylen: 1024 | 2048 | 3072 | 4096 | 6144 | 7680 | 8192 | 15360 | 16384;
                ecname: string;
                digest_alg: string;
                lifetime: number;
                dn_commonname: string;
                dn_country: string;
                dn_state: string;
                dn_city: string;
                dn_organization: string;
                dn_organizationalunit: string;
            }

            export interface CertificateAuthorityGenerate {
                descr: string;
                refid?: string;
                trust: boolean;
                randomserial: boolean;
                serial?: number;
                is_intermediate: boolean;
                caref: string;
                keytype: "RSA" | "ECDSA";
                keylen?: 1024 | 2048 | 3072 | 4096 | 6144 | 7680 | 8192 | 15360 | 16384;
                ecname?: string;
                digest_alg: string;
                lifetime: number;
                dn_commonname: string;
                dn_country: string;
                dn_state: string;
                dn_city: string;
                dn_organization: string;
                dn_organizationalunit: string;
                crt?: string;
                prv?: string;
            }

            export interface CertificateAuthorityRenewRequest {
                caref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
            }

            export interface CertificateAuthorityRenew {
                caref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
                oldserial?: string;
                newserial?: string;
            }

            export enum post {
                default = "/system/certificate_authority",
                generate = "/system/certificate_authority/generate",
                renew = "/system/certificate_authority/renew",
            }
            export enum patch {
                default = "/system/certificate_authority",
            }
            export enum del {
                default = "/system/certificate_authority",
            }
            export enum put {}
        }
        export namespace certificate {
            export enum get {
                default = "/system/certificate",
                certificates = "/system/certificates",
            }
            export interface Certificate {
                descr: string;
                refid?: string;
                type: "server" | "user";
                csr?: string;
                crt: string;
                prv: string;
            }

            export interface CertificateSigningRequestSign {
                descr: string;
                refid?: string;
                caref: string;
                csr: string;
                crt?: string;
                prv?: string;
                digest_alg: string;
                lifetime: number;
                type: "server" | "user";
                dn_dns_sans?: string[];
                dn_email_sans?: string[];
                dn_ip_sans?: string[];
                dn_uri_sans?: string[];
            }

            export interface CertificateSigningRequest {
                descr: string;
                refid?: string;
                keytype: "RSA" | "ECDSA";
                keylen?: 1024 | 2048 | 3072 | 4096 | 6144 | 7680 | 8192 | 15360 | 16384;
                ecname?: string;
                digest_alg: string;
                lifetime: number;
                dn_commonname: string;
                dn_country?: string;
                dn_state?: string;
                dn_city?: string;
                dn_organization?: string;
                dn_organizationalunit?: string;
                type: "server" | "user";
                dn_dns_sans?: string[];
                dn_email_sans?: string[];
                dn_ip_sans?: string[];
                dn_uri_sans?: string[];
                csr?: string;
                prv?: string;
            }

            export interface CertificateRenew {
                certref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
                oldserial?: string;
                newserial?: string;
            }
            export interface GenerateInternalCertificateRequest {
                descr: string;
                caref: string;
                keytype: "RSA" | "ECDSA";
                keylen?: 1024 | 2048 | 3072 | 4096 | 6144 | 7680 | 8192 | 15360 | 16384;
                ecname?: string;
                digest_alg: string;
                lifetime: number;
                dn_commonname: string;
                dn_country?: string;
                dn_state?: string;
                dn_city?: string;
                dn_organization?: string;
                dn_organizationalunit?: string;
                type: "server" | "user";
                dn_dns_sans?: string[];
                dn_email_sans?: string[];
                dn_ip_sans?: string[];
                dn_uri_sans?: string[];
                prv?: string;
            }

            export interface CertificateId extends Certificate {
                id: number;
            }
            export interface InternalCertificateRenewRequest {
                certref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
            }

            export enum post {
                default = "/system/certificate",
                renew = "/system/certificate/renew",
                generate = "/system/certificate/generate",
                pkcs12 = "/system/certificate/pkcs12/export",
                signing_request = "/system/certificate/signing_request",
                sign = "/system/certificate/signing_request/sign",
            }
            export interface PKCS12exportRequest {
                certref: string;
                encryption: "high" | "low" | "legacy";
                passphrase: string;
            }

            export enum patch {
                default = "/system/certificate",
            }
            export enum del {
                default = "/system/certificate",
                certificates = "/system/certificates",
            }
            export enum put {}
        }
        export namespace Package {
            export enum get {
                available = "/system/package/available",
                default = "/system/package",
                packages = "/system/packages",
            }
            export interface Package {
                name: string;
                shortname?: string;
                descr?: string;
                installed_version?: string;
                latest_version?: string;
                update_available?: boolean;
            }
            export interface AvailablePackage {
                name: string;
                shortname?: string;
                descr?: string;
                version?: string;
                installed?: boolean;
                deps?: string[];
            }

            export enum post {
                default = "/system/package",
            }
            export enum patch {}
            export enum del {
                default = "/system/package",

                packages = "/system/packages",
            }
            export enum put {}
        }
        export namespace restapi {
            export enum get {
                access_list = "/system/restapi/access_list",
                entry = "/system/restapi/access_list/entry",
                settings = "/system/restapi/settings",
                version = "/system/restapi/version",
            }
            export interface RESTAPIAccessListEntry {
                type: "allow" | "deny";
                weight: number;
                network: string;
                users: string[];
                sched: string;
                descr: string;
            }
            export interface RESTAPIAccessListEntryId extends RESTAPIAccessListEntry {
                id: number;
            }

            export interface RESTAPISettings {
                enabled: boolean;
                read_only: boolean;
                keep_backup: boolean;
                login_protection: boolean;
                log_successful_auth: boolean;
                allow_pre_releases: boolean;
                hateoas: boolean;
                expose_sensitive_fields: boolean;
                override_sensitive_fields: string[];
                allowed_interfaces: string[];
                represent_interfaces_as: "descr" | "id" | "if";
                auth_methods: string[];
                jwt_exp: number;
                ha_sync: boolean;
                ha_sync_validate_certs: boolean;
                ha_sync_hosts: string[];
                ha_sync_username: string;
                ha_sync_password: string;
            }
            export interface RESTAPISettingsSync {
                sync_data: string;
            }
            export interface RESTAPIVersion {
                current_version?: string | null;
                latest_version?: string | null;
                latest_version_release_date?: string | null;
                update_available?: boolean | null;
                available_versions?: string[] | null;
            }

            export enum post {
                entry = "/system/restapi/access_list/entry",
                settings_sync = "/system/restapi/settings/sync",
            }
            export enum patch {
                entry = "/system/restapi/access_list/entry",
                settings = "/system/restapi/settings",
                version = "/system/restapi/version",
            }
            export enum del {
                access_list = "/system/restapi/access_list",
                entry = "/system/restapi/access_list/entry",
            }
            export enum put {
                access_list = "/system/restapi/access_list",
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
        export interface User {
            name: string;
            password: string;
            uid?: number;
            scope?: string;
            priv: string[];
            disabled: boolean;
            descr: string;
            expires: string;
            cert: string[];
            authorizedkeys: string;
            ipsecpsk: string;
        }
        export interface UserId extends User {
            id: number;
        }
        export interface UserGroup {
            name: string;
            gid?: number;
            scope: "local" | "remote";
            description: string;
            member: string[];
            priv: string[];
        }
        export interface UserGroupId extends UserGroup {
            id: number;
        }
        export interface AuthServer {
            refid?: string;
            type: "ldap" | "radius";
            name: string;
            host: string;
            ldap_port?: string;
            ldap_urltype?: "Standard TCP" | "STARTTLS Encrypt" | "SSL/TLS Encrypted";
            ldap_protver?: 2 | 3;
            ldap_timeout?: number;
            ldap_caref?: string;
            ldap_scope?: "one" | "subtree";
            ldap_basedn?: string;
            ldap_authcn?: string;
            ldap_extended_enabled?: boolean;
            ldap_extended_query?: string;
            ldap_binddn?: string | null;
            ldap_bindpw?: string;
            ldap_attr_user?: string;
            ldap_attr_group?: string;
            ldap_attr_member?: string;
            ldap_rfc2307?: boolean;
            ldap_rfc2307_userdn?: boolean;
            ldap_attr_groupobj?: string;
            ldap_pam_groupdn?: string;
            ldap_utf8?: boolean;
            ldap_nostrip_at?: boolean;
            ldap_allow_unauthenticated?: boolean;
            radius_secret?: string;
            radius_auth_port?: string | null;
            radius_acct_port?: string | null;
            radius_protocol?: "MSCHAPv2" | "MSCHAPv1" | "CHAP_MD5" | "PAP";
            radius_timeout?: number;
            radius_nasip_attribute?: string;
        }
        export interface AuthServerId extends AuthServer {
            id: number;
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
            groups = "/user/groups",
        }
    }
    export namespace vpn {
        export namespace ipsec {
            export enum get {
                apply = "/vpn/ipsec/apply",
                phase1s = "/vpn/ipsec/phase1s",
                phase2s = "/vpn/ipsec/phase2s",
            }
            export interface IPsecApply {
                applied: boolean;
            }
            export interface IPsecPhase1Encryption {
                encryption_algorithm_name: "aes" | "aes128gcm" | "aes192gcm" | "aes256gcm" | "chacha20poly1305";
                encryption_algorithm_keylen: number;
                hash_algorithm: "sha1" | "sha256" | "sha384" | "sha512" | "aesxcbc";
                dhgroup: 1 | 2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32;
                prf_algorithm: "sha1" | "sha256" | "sha384" | "sha512" | "aesxcbc";
            }
            export interface IPsecPhase1EncryptionParentId extends IPsecPhase1Encryption {
                parent_id: number;
            }
            export interface IPsecPhase1EncryptionId extends IPsecPhase1EncryptionParentId {
                id: number;
            }

            export interface IPsecPhase1 {
                ikeid?: number;
                descr: string;
                disabled: boolean;
                iketype: "ikev1" | "ikev2" | "auto";
                mode: "main" | "aggressive";
                protocol: "inet" | "inet6" | "both";
                interface: string;
                remote_gateway: string;
                authentication_method: "pre_shared_key" | "cert";
                myid_type: "myaddress" | "address" | "fqdn" | "user_fqdn" | "asn1dn" | "keyid tag" | "dyn_dns" | "auto";
                myid_data?: string;
                peerid_type: "any" | "peeraddress" | "address" | "fqdn" | "user_fqdn" | "asn1dn" | "keyid tag" | "dyn_dns" | "auto";
                peerid_data?: string;
                pre_shared_key?: string;
                certref?: string;
                caref?: string;
                rekey_time: number;
                reauth_time: number;
                rand_time: number;
                lifetime: number;
                startaction: "" | "none" | "start" | "trap";
                closeaction: "" | "none" | "start" | "trap";
                nat_traversal: "on" | "force";
                gw_duplicates: boolean;
                mobike: boolean;
                splitconn: boolean;
                prfselect_enable: boolean;
                ikeport: string;
                nattport: string;
                dpd_delay?: number;
                dpd_maxfail?: number;
                encryption: {
                    encryption_algorithm_name: "aes" | "aes128gcm" | "aes192gcm" | "aes256gcm" | "chacha20poly1305";
                    encryption_algorithm_keylen?: number;
                    hash_algorithm: "sha1" | "sha256" | "sha384" | "sha512" | "aesxcbc";
                    dhgroup: 1 | 2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32;
                    prf_algorithm: "sha1" | "sha256" | "sha384" | "sha512" | "aesxcbc";
                }[];
            }

            export interface IPsecPhase1Id extends IPsecPhase1 {
                id: number;
            }

            export interface IPsecPhase2Encryption {
                name: "aes" | "aes128gcm" | "aes192gcm" | "aes256gcm" | "chacha20poly1305";
                keylen: number;
            }

            export interface IPsecPhase2EncryptionParentId extends IPsecPhase2Encryption {
                parent_id: number;
            }
            export interface IPsecPhase2EncryptionId extends IPsecPhase2EncryptionParentId {
                id: number;
            }

            export interface IPsecPhase2 {
                uniqid?: string;
                reqid?: number;
                ikeid: number;
                descr: string;
                disabled: boolean;
                mode: "tunnel" | "tunnel6" | "transport" | "vti";
                localid_type: string;
                localid_address: string;
                localid_netbits: number;
                natlocalid_type?: string;
                natlocalid_address?: string;
                natlocalid_netbits?: number;
                remoteid_type: string;
                remoteid_address: string;
                remoteid_netbits: number;
                protocol: "esp" | "ah";
                encryption_algorithm_option: {
                    name: "aes" | "aes128gcm" | "aes192gcm" | "aes256gcm" | "chacha20poly1305";
                    keylen: number;
                }[];
                hash_algorithm_option: ("hmac_sha1" | "hmac_sha256" | "hmac_sha384" | "hmac_sha512" | "aesxcbc")[];
                pfsgroup: 0 | 1 | 2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32;
                rekey_time: number;
                rand_time: number;
                lifetime: number;
                pinghost: string;
                keepalive: boolean;
            }

            export interface IPsecPhase2Id extends IPsecPhase2 {
                id: number;
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
            export interface OpenVPNClientSpecificOverride {
                common_name: string;
                disable: boolean;
                block: boolean;
                description: string;
                server_list: string[];
                tunnel_network: string;
                tunnel_networkv6: string;
                local_network: string[];
                local_networkv6: string[];
                remote_network: string[];
                remote_networkv6: string[];
                gwredir: boolean;
                push_reset: boolean;
                remove_route: boolean;
                dns_domain: string;
                dns_server1: string;
                dns_server2: string;
                dns_server3: string;
                dns_server4: string;
                ntp_server1: string;
                ntp_server2: string;
                netbios_enable: boolean;
                netbios_ntype: 0 | 1 | 2 | 4 | 8;
                netbios_scope: string;
                wins_server1: string;
                wins_server2: string;
                custom_options: string[];
            }
            export interface OpenVPNClientSpecificOverrideId extends OpenVPNClientSpecificOverride {
                id: number;
            }

            export interface OpenVPNClient {
                vpnid?: number;
                vpnif?: string;
                description: string;
                disable: boolean;
                mode: "p2p_tls";
                dev_mode: "tun" | "tap";
                protocol: "UDP4" | "UDP6" | "UDP" | "TCP4" | "TCP6" | "TCP";
                interface: string;
                server_addr: string;
                local_port?: string;
                proxy_addr?: string;
                proxy_port?: string;
                proxy_authtype: "none" | "basic" | "ntlm";
                proxy_user?: string;
                proxy_passwd?: string;
                auth_user?: string;
                auth_pass?: string;
                auth_retry_none: boolean;
                tls?: string;
                tls_type: "auth" | "crypt";
                tlsauth_keydir: "default" | "0" | "1" | "2";
                caref: string;
                certref?: string;
                data_ciphers: string[];
                data_ciphers_fallback: string;
                digest: string;
                remote_cert_tls: boolean;
                tunnel_network: string;
                tunnel_networkv6: string;
                remote_network: string[];
                remote_networkv6: string[];
                use_shaper?: number;
                allow_compression: "no" | "yes" | "asym";
                passtos: boolean;
                route_no_pull: boolean;
                route_no_exec: boolean;
                dns_add: boolean;
                topology: "subnet" | "net30";
                inactive_seconds: number;
                ping_method: "keepalive" | "ping";
                keepalive_interval: number;
                keepalive_timeout: number;
                ping_seconds: number;
                ping_action: "ping_restart" | "ping_exit";
                ping_action_seconds: number;
                custom_options: string[];
                udp_fast_io: boolean;
                exit_notify: "1" | "2" | "3" | "4" | "5" | "none";
                sndrcvbuf?: number;
                verbosity_level: number;
            }
            export interface OpenVPNClientId extends OpenVPNClient {
                id: number;
            }
            export interface OpenVPNServer {
                vpnid?: number;
                vpnif?: string;
                description: string;
                disable: boolean;
                mode: "p2p_tls" | "server_tls" | "server_user" | "server_tls_user";
                authmode?: string[];
                dev_mode: "tun" | "tap";
                protocol: "UDP4" | "UDP6" | "UDP" | "TCP4" | "TCP6" | "TCP";
                interface: string;
                local_port: string;
                use_tls: boolean;
                tls?: string;
                tls_type?: "auth" | "crypt";
                tlsauth_keydir?: "default" | "0" | "1" | "2";
                caref: string;
                certref: string;
                cert_depth?: 1 | 2 | 3 | 4 | 5;
                dh_length: string;
                ecdh_curve: string;
                data_ciphers: string[];
                data_ciphers_fallback: string;
                digest: string;
                strictusercn?: boolean;
                remote_cert_tls: boolean;
                tunnel_network: string;
                tunnel_networkv6: string;
                serverbridge_dhcp?: boolean;
                serverbridge_interface?: string;
                serverbridge_routegateway?: boolean;
                serverbridge_dhcp_start?: string;
                serverbridge_dhcp_end?: string;
                gwredir: boolean;
                gwredir6: boolean;
                local_network?: string[];
                local_networkv6?: string[];
                remote_network?: string[];
                remote_networkv6?: string[];
                maxclients?: number;
                allow_compression: "no" | "yes" | "asym";
                passtos: boolean;
                client2client: boolean;
                duplicate_cn: boolean;
                connlimit?: number;
                dynamic_ip: boolean;
                topology: "subnet" | "net30";
                inactive_seconds: number;
                ping_method: "keepalive" | "ping";
                keepalive_interval?: number;
                keepalive_timeout?: number;
                ping_seconds?: number;
                ping_push?: boolean;
                ping_action?: "ping_restart" | "ping_exit";
                ping_action_seconds?: number;
                ping_action_push?: boolean;
                dns_domain?: string;
                dns_server1?: string;
                dns_server2?: string;
                dns_server3?: string;
                dns_server4?: string;
                push_blockoutsidedns?: boolean;
                push_register_dns?: boolean;
                ntp_server1?: string;
                ntp_server2?: string;
                netbios_enable?: boolean;
                netbios_ntype?: 0 | 1 | 2 | 4 | 8;
                netbios_scope?: string;
                wins_server1?: string;
                wins_server2?: string;
                custom_options?: string[];
                username_as_common_name?: boolean;
                sndrcvbuf?: 65536 | 131072 | 262144 | 524288 | 1048576 | 2097152;
                create_gw: "both" | "v4only" | "v6only";
                verbosity_level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
            }
            export interface OpenVPNServerId extends OpenVPNServer {
                id: number;
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
            export interface WireGuardSettings {
                enable: boolean;
                keep_conf: boolean;
                resolve_interval_track: boolean;
                resolve_interval: number;
                interface_group: "all" | "unassigned" | "none";
                hide_secrets: boolean;
                hide_peers: boolean;
            }
            export interface WireGuardApply {
                applied: boolean;
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
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips",
                }
                export interface WireGuardPeerAllowedIP {
                    address: string;
                    mask: number;
                    descr: string;
                }
                export interface WireGuardPeerAllowedIPId extends WireGuardPeerAllowedIP {
                    id: number;
                }
                export interface WireGuardPeer {
                    enabled: boolean;
                    tun: string;
                    endpoint?: string;
                    port: string;
                    descr: string;
                    persistentkeepalive?: number;
                    publickey: string;
                    allowedips: {
                        address: string;
                        mask: number;
                        descr: string;
                    }[];
                }
                export interface WireGuardPeerId extends WireGuardPeer {
                    id: number;
                }
                export enum post {
                    default = "/vpn/wireguard/peer",
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips",
                }
                export enum patch {
                    default = "/vpn/wireguard/peer",
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips",
                }
                export enum del {
                    default = "/vpn/wireguard/peer",
                    peers = "/vpn/wireguard/peers",
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips",
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
                export interface WireGuardTunnel {
                    name: string | null;
                    enabled: boolean;
                    listenport: string;
                    publickey: string | null;
                    privatekey: string;
                    mtu: number;
                    addresses: {
                        address: string;
                        mask: number;
                        descr: string;
                    }[];
                }
                export interface WireGuardTunnelId extends WireGuardTunnel {
                    id: number;
                }
                export interface WireGuardTunnelAddress {
                    address: string;
                    mask: number;
                    descr: string;
                }
                export interface WireGuardTunnelAddressParentId extends WireGuardTunnelAddress {
                    parent_id: number;
                }
                export interface WireGuardTunnelAddressId extends WireGuardTunnelAddressParentId {
                    id: number;
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

export default Pfsense;
