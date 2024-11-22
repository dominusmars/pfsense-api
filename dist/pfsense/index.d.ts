import { Client } from "../client";
declare class Auth {
    client: Client;
    constructor(client: Client);
    postKey(body: PfsenseAPI.auth.keyRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse>>;
    deleteKey(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse>>;
    keys(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse[]>>;
    deleteKeys(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.auth.keyResponse[]>>;
}
declare class Diagnostics {
    client: Client;
    constructor(client: Client);
    arpTable(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse[]>>;
    deleteArpTable(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse[]>>;
    getArpEntry(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse>>;
    deleteArpEntry(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.Arp.arpTableResponse>>;
    runCommand(command: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.CommandResponse>>;
    getConfigRevision(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision>>;
    deleteConfigRevision(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision>>;
    getConfigRevisions(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision[]>>;
    deleteConfigRevisions(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.config.ConfigHistoryRevision[]>>;
    HaltSystem(body: PfsenseAPI.diagnostics.SystemHaltRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.SystemHaltResponse>>;
    RebootSystem(body: PfsenseAPI.diagnostics.SystemRebootRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.diagnostics.SystemRebootResponse>>;
}
declare class OneToOne {
    client: Client;
    constructor(client: Client);
    getMapping(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>>;
    postMapping(body: PfsenseAPI.firewall.nat.onetoone.OneToOneMapping): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>>;
    patchMapping(body: PfsenseAPI.firewall.nat.onetoone.OneToOneMappingId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>>;
    deleteMapping(id: number, apply: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping>>;
    getMappings(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>>;
    putMappings(body: PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>>;
    deleteMappings(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.onetoone.OneToOneMapping[]>>;
}
declare class Outbound {
    client: Client;
    constructor(client: Client);
    getMapping(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>>;
    postMapping(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMapping): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>>;
    patchMapping(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMappingId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>>;
    deleteMapping(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping>>;
    getMappings(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>>;
    putMappings(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>>;
    deleteMappings(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMapping[]>>;
    getMode(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMode>>;
    patchMode(body: PfsenseAPI.firewall.nat.outbound.OutboundNATMode): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.outbound.OutboundNATMode>>;
}
declare class PortForward {
    client: Client;
    constructor(client: Client);
    getPortForward(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>>;
    postPortForward(body: PfsenseAPI.firewall.nat.PortForward): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>>;
    patchPortForward(body: PfsenseAPI.firewall.nat.PortForwardId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>>;
    deletePortForward(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward>>;
    getPortForwards(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward[]>>;
    putPortForwards(body: PfsenseAPI.firewall.nat.PortForward[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward[]>>;
    deletePortForwards(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.nat.PortForward[]>>;
}
declare class Nat {
    client: Client;
    one_to_one: OneToOne;
    outbound: Outbound;
    portForward: PortForward;
    constructor(client: Client);
}
declare class Limiter {
    client: Client;
    constructor(client: Client);
    getBandwidth(parent_id: number, id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>>;
    postBandwidth(body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidthParentId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>>;
    patchBandwidth(body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidthId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>>;
    deleteBandwidth(parent_id: number, id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterBandwidth>>;
    getLimiter(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>>;
    postLimiter(body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>>;
    patchLimiter(body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>>;
    deleteLimiter(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter>>;
    getQueue(parent_id: number, id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>>;
    postQueue(body: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueueParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>>;
    patchQueue(Queue: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueueId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>>;
    deleteQueue(parent_id: number, id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiterQueue>>;
    getLimiters(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter[]>>;
    putLimiters(Limiters: PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.limiter.TrafficShaperLimiter[]>>;
}
declare class TrafficShaper {
    client: Client;
    limiter: Limiter;
    constructor(client: Client);
    getTrafficShaper(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper>>;
    postTrafficShaper(body: PfsenseAPI.firewall.trafficShaper.TrafficShaper): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper>>;
    patchTrafficShaper(body: PfsenseAPI.firewall.trafficShaper.TrafficShaperId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaperId>>;
    deleteTrafficShaper(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper>>;
    getQueue(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>>;
    postQueue(body: PfsenseAPI.firewall.trafficShaper.TrafficShaperQueueParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>>;
    patchQueue(body: PfsenseAPI.firewall.trafficShaper.TrafficShaperQueueId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>>;
    deleteQueue(parent_id: number, id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaperQueue>>;
    getTrafficShapers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper[]>>;
    putTrafficShapers(body: PfsenseAPI.firewall.trafficShaper.TrafficShaper[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper[]>>;
    deleteTrafficShapers(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.trafficShaper.TrafficShaper[]>>;
}
declare class VirtualIP {
    client: Client;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.virtualIp.VirtualIpApplied>>;
    getVirtualIp(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.virtualIp.VirtualIp>>;
    postVirtualIp(VirtualIp: PfsenseAPI.firewall.virtualIp.VirtualIpRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.virtualIp.VirtualIp>>;
    patchVirtualIp(VirtualIp: PfsenseAPI.firewall.virtualIp.VirtualIpId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.virtualIp.VirtualIp>>;
    deleteVirtualIp(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.virtualIp.VirtualIp>>;
    getVirtualIps(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.virtualIp.VirtualIp[]>>;
    deleteVirtualIps(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.firewall.virtualIp.VirtualIp[]>>;
}
declare class Firewall {
    client: Client;
    nat: Nat;
    trafficShaper: TrafficShaper;
    virtualIp: VirtualIP;
    constructor(client: Client);
    getAdvancedSettings(): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAdvancedSettings>>;
    patchAdvancedSettings(body: PfsenseAPI.firewall.AdvancedSettingsRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAdvancedSettings>>;
    getAlias(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>>;
    postAlias(body: PfsenseAPI.firewall.FirewallAlias): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>>;
    patchAlias(body: PfsenseAPI.firewall.FirewallAlias): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>>;
    deleteAlias(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias>>;
    getAliases(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias[]>>;
    putAliases(body: PfsenseAPI.firewall.FirewallAlias[]): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias[]>>;
    deleteAliases(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallAlias[]>>;
    apply(): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallApply>>;
    getRule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>>;
    postRule(body: PfsenseAPI.firewall.FirewallRule): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>>;
    patchRule(body: PfsenseAPI.firewall.FirewallRuleId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>>;
    deleteRule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule>>;
    getRules(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule[]>>;
    putRules(body: PfsenseAPI.firewall.FirewallRule[]): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule[]>>;
    deleteRules(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.FirewallRule[]>>;
    getSchedule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>>;
    postSchedule(body: PfsenseAPI.firewall.schedule.FirewallSchedule): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>>;
    patchSchedule(body: PfsenseAPI.firewall.schedule.FirewallScheduleId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>>;
    deleteSchedule(id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>>;
    getScheduleTimeRange(parent_id: number, id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule>>;
    postScheduleTimeRange(body: PfsenseAPI.firewall.schedule.FirewallScheduleTimeRangeWithParentId): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange>>;
    patchScheduleTimeRange(body: PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange>>;
    deleteScheduleTimeRange(parent_id: number, id: number): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallScheduleTimeRange>>;
    getSchedules(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule[]>>;
    putSchedules(body: PfsenseAPI.firewall.schedule.FirewallSchedule[]): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule[]>>;
    deleteSchedules(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.schedule.FirewallSchedule[]>>;
    getState(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallState[]>>;
    deleteState(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallState[]>>;
    getStateSize(): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallStateSize>>;
    patchStateSize(body: PfsenseAPI.firewall.state.FirewallStateSizeRequest): Promise<PfsenseAPI.APIResponse<PfsenseAPI.firewall.state.FirewallStateSize>>;
}
declare class GraphQL {
    client: Client;
    constructor(client: Client);
    query(query: PfsenseAPI.graphQL.GraphQLRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.graphQL.GraphQLResponse>>;
}
declare class Interface {
    client: Client;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceApply>>;
    getAvailableInterfaces(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceAvailable[]>>;
    getBridge(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceBridge>>;
    postBridge(Bridge: PfsenseAPI.Interface.InterfaceBridgeRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceBridge>>;
    patchBridge(Bridge: PfsenseAPI.Interface.InterfaceBridgeRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceBridge>>;
    deleteBridge(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceBridge>>;
    getBridges(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceBridge[]>>;
    getGroup(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceGroup>>;
    postGroup(Group: PfsenseAPI.Interface.InterfaceGroupRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceGroup>>;
    patchGroup(Group: PfsenseAPI.Interface.InterfaceGroupRequestId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceGroup>>;
    deleteGroup(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceGroup>>;
    getGroups(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceGroup[]>>;
    putGroups(Groups: PfsenseAPI.Interface.InterfaceGroup[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceGroup[]>>;
    deleteGroups(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceGroup[]>>;
    getVlan(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceVlan>>;
    postVlan(Vlan: PfsenseAPI.Interface.InterfaceVlan): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceVlan>>;
    patchVlan(Vlan: PfsenseAPI.Interface.InterfaceVlanId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceVlan>>;
    deleteVlan(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceVlan>>;
    getVlans(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceVlan[]>>;
    deleteVlans(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.InterfaceVlan[]>>;
    getInterface(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.NetworkInterface>>;
    postInterface(Interface: PfsenseAPI.Interface.NetworkInterface): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.NetworkInterface>>;
    patchInterface(Interface: PfsenseAPI.Interface.NetworkInterfaceId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.NetworkInterface>>;
    deleteInterface(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.NetworkInterface>>;
    getInterfaces(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.NetworkInterface[]>>;
    deleteInterfaces(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.Interface.NetworkInterface[]>>;
}
declare class Gateway {
    client: Client;
    constructor(client: Client);
    getDefaultGateway(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.DefaultGateway>>;
    patchDefaultGateway(defaultGateway: PfsenseAPI.routing.gateway.DefaultGateway): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.DefaultGateway>>;
    getGateway(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.RoutingGateway>>;
    postGateway(Gateway: PfsenseAPI.routing.gateway.RoutingGateway): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.RoutingGateway>>;
    patchGateway(Gateway: PfsenseAPI.routing.gateway.RoutingGatewayId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.RoutingGateway>>;
    deleteGateway(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.RoutingGateway>>;
    getGroup(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>>;
    postGroup(Group: PfsenseAPI.routing.gateway.group.RoutingGatewayGroup): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>>;
    patchGroup(Group: PfsenseAPI.routing.gateway.group.RoutingGatewayGroupId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>>;
    deleteGroup(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup>>;
    getGroupPriority(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>>;
    postGroupPriority(GroupPriority: PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriorityParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>>;
    patchGroupPriority(GroupPriority: PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriorityId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>>;
    deleteGroupPriority(parent_id: number, id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroupPriority>>;
    getGroups(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup[]>>;
    deleteGroups(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.group.RoutingGatewayGroup[]>>;
    getGateways(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.RoutingGateway[]>>;
    deleteGateways(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.gateway.RoutingGateway[]>>;
}
declare class Routing {
    client: Client;
    gateway: Gateway;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.RoutingApply>>;
    getStaticRoute(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.StaticRoute>>;
    postStaticRoute(StaticRoute: PfsenseAPI.routing.StaticRoute): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.StaticRoute>>;
    patchStaticRoute(StaticRoute: PfsenseAPI.routing.StaticRouteId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.StaticRoute>>;
    deleteStaticRoute(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.StaticRoute>>;
    getStaticRoutes(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.StaticRoute[]>>;
    deleteStaticRoutes(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.routing.StaticRoute[]>>;
}
declare class AcmeCertificate {
    client: Client;
    constructor(client: Client);
    getAction(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateAction>>;
    postAction(Action: PfsenseAPI.services.acme.certificate.ACMECertificateActionParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateAction>>;
    patchAction(Action: PfsenseAPI.services.acme.certificate.ACMECertificateActionId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateAction>>;
    deleteAction(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateAction>>;
    getDomain(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>>;
    postDomain(Domain: PfsenseAPI.services.acme.certificate.ACMECertificateDomainParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>>;
    patchDomain(Domain: PfsenseAPI.services.acme.certificate.ACMECertificateDomainId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>>;
    deleteDomain(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateDomain>>;
    getCertificate(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate>>;
    postCertificate(Certificate: PfsenseAPI.services.acme.certificate.ACMECertificate): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate>>;
    patchCertificate(Certificate: PfsenseAPI.services.acme.certificate.ACMECertificateId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate>>;
    deleteCertificate(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate>>;
    getIssuances(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate[]>>;
    postIssue(certificate: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateIssue>>;
    postRenew(certificate: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateRenew>>;
    getRenewals(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificateRenew[]>>;
    getCertificates(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate[]>>;
    putCertificates(Certificates: PfsenseAPI.services.acme.certificate.ACMECertificate[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate[]>>;
    deleteCertificates(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.certificate.ACMECertificate[]>>;
}
declare class Acme {
    client: Client;
    certificate: AcmeCertificate;
    constructor(client: Client);
    getAccountKey(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKey>>;
    postAccountKey(AccountKey: PfsenseAPI.services.acme.account.ACMEAccountKey): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKey>>;
    patchAccountKey(AccountKey: PfsenseAPI.services.acme.account.ACMEAccountKeyId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKey>>;
    deleteAccountKey(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKey>>;
    postAccountKeyRegister(name: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKeyRegister>>;
    getAccountKeyRegisters(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKeyRegister[]>>;
    getAccountKeys(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKey[]>>;
    putAccountKeys(AccountKeys: PfsenseAPI.services.acme.account.ACMEAccountKey[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKey[]>>;
    deleteAccountKeys(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.account.ACMEAccountKey[]>>;
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.ACMESettings>>;
    patchSettings(Settings: PfsenseAPI.services.acme.ACMESettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.acme.ACMESettings>>;
}
declare class BindAccessList {
    client: Client;
    constructor(client: Client);
    getAccessList(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessList>>;
    postAccessList(AccessList: PfsenseAPI.services.bind.accessList.BINDAccessList): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessList>>;
    patchAccessList(AccessList: PfsenseAPI.services.bind.accessList.BINDAccessListId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessList>>;
    deleteAccessList(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessList>>;
    getEntry(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>>;
    postEntry(Entry: PfsenseAPI.services.bind.accessList.BINDAccessListEntryParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>>;
    patchEntry(Entry: PfsenseAPI.services.bind.accessList.BINDAccessListEntryId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>>;
    deleteEntry(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessListEntry>>;
    getAccessLists(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessList[]>>;
    putAccessLists(AccessLists: PfsenseAPI.services.bind.accessList.BINDAccessList[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessList[]>>;
    deleteAccessLists(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.accessList.BINDAccessList[]>>;
}
declare class BindSync {
    client: Client;
    constructor(client: Client);
    getRemoteHost(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>>;
    postRemoteHost(RemoteHost: PfsenseAPI.services.bind.sync.BINDSyncRemoteHost): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>>;
    patchRemoteHost(RemoteHost: PfsenseAPI.services.bind.sync.BINDSyncRemoteHostId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>>;
    deleteRemoteHost(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost>>;
    getRemoteHosts(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]>>;
    putRemoteHosts(RemoteHosts: PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]>>;
    deleteRemoteHosts(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncRemoteHost[]>>;
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncSettings>>;
    patchSettings(Settings: PfsenseAPI.services.bind.sync.BINDSyncSettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.sync.BINDSyncSettings>>;
}
declare class BindView {
    client: Client;
    constructor(client: Client);
    getView(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.BINDview>>;
    postView(View: PfsenseAPI.services.bind.BINDview): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.BINDview>>;
    patchView(View: PfsenseAPI.services.bind.BINDviewId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.BINDview>>;
    deleteView(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.BINDview>>;
    getViews(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.BINDview[]>>;
    putViews(Views: PfsenseAPI.services.bind.BINDview[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.BINDview[]>>;
    deleteViews(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.BINDview[]>>;
}
declare class BindZone {
    client: Client;
    constructor(client: Client);
    getZone(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZone>>;
    postZone(Zone: PfsenseAPI.services.bind.zone.BINDZone): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZone>>;
    patchZone(Zone: PfsenseAPI.services.bind.zone.BINDZoneId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZone>>;
    deleteZone(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZone>>;
    getRecord(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZoneRecord>>;
    postRecord(Record: PfsenseAPI.services.bind.zone.BINDZoneRecordParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZoneRecord>>;
    patchRecord(Record: PfsenseAPI.services.bind.zone.BINDZoneRecordId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZoneRecord>>;
    deleteRecord(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZoneRecord>>;
    getZones(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZone[]>>;
    putZones(Zones: PfsenseAPI.services.bind.zone.BINDZone[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZone[]>>;
    deleteZones(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.bind.zone.BINDZone[]>>;
}
declare class Bind {
    client: Client;
    accessList: BindAccessList;
    sync: BindSync;
    view: BindView;
    zone: BindZone;
    constructor(client: Client);
}
declare class Cron {
    client: Client;
    constructor(client: Client);
    getJob(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.cron.CronJob>>;
    postJob(Job: PfsenseAPI.services.cron.CronJob): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.cron.CronJob>>;
    patchJob(Job: PfsenseAPI.services.cron.CronJobId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.cron.CronJob>>;
    deleteJob(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.cron.CronJob>>;
    getJobs(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.cron.CronJob[]>>;
    putJobs(Jobs: PfsenseAPI.services.cron.CronJob[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.cron.CronJob[]>>;
    deleteJobs(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.cron.CronJob[]>>;
}
declare class DhcpServer {
    client: Client;
    constructor(client: Client);
    getAddressPool(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>>;
    postAddressPool(AddressPool: PfsenseAPI.services.dhcpServer.DHCPServerAddressPoolParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>>;
    patchAddressPool(AddressPool: PfsenseAPI.services.dhcpServer.DHCPServerAddressPoolId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>>;
    deleteAddressPool(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerAddressPool>>;
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerApply>>;
    patchBackend(dchpbackend: "isc" | "kea"): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerBackend>>;
    getCustomOption(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>>;
    postCustomOption(CustomOption: PfsenseAPI.services.dhcpServer.DHCPServerCustomOptionParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>>;
    patchCustomOption(CustomOption: PfsenseAPI.services.dhcpServer.DHCPServerCustomOptionId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>>;
    deleteCustomOption(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerCustomOption>>;
    getServer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServer>>;
    patchServer(Server: PfsenseAPI.services.dhcpServer.DHCPServerId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServer>>;
    getStaticMapping(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>>;
    postStaticMapping(StaticMapping: PfsenseAPI.services.dhcpServer.DHCPServerStaticMappingParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>>;
    patchStaticMapping(StaticMapping: PfsenseAPI.services.dhcpServer.DHCPServerStaticMappingId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>>;
    deleteStaticMapping(parent_id: number, id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServerStaticMapping>>;
    getServers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServer[]>>;
    putServers(Servers: PfsenseAPI.services.dhcpServer.DHCPServer[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dhcpServer.DHCPServer[]>>;
}
declare class DnsForwarderHostOverride {
    client: Client;
    constructor(client: Client);
    getAlias(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>>;
    postAlias(Alias: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAliasParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>>;
    patchAlias(Alias: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAliasId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>>;
    deleteAlias(parent_id: number, id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideAlias>>;
    getHostOverride(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>>;
    postHostOverride(HostOverride: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>>;
    patchHostOverride(HostOverride: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverrideId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>>;
    deleteHostOverride(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride>>;
    getHostOverrides(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]>>;
    putHostOverrides(HostOverrides: PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]>>;
    deleteHostOverrides(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.hostOverride.DNSForwarderHostOverride[]>>;
}
declare class DnsForwarder {
    client: Client;
    hostOverride: DnsForwarderHostOverride;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsForwarder.DNSForwarderApply>>;
}
declare class DnsResolverAccessList {
    client: Client;
    constructor(client: Client);
    getAccessList(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>>;
    postAccessList(AccessList: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>>;
    patchAccessList(AccessList: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>>;
    deleteAccessList(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList>>;
    getNetwork(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>>;
    postNetwork(Network: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetworkParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>>;
    patchNetwork(Network: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetworkId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>>;
    deleteNetwork(parent_id: number, id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessListNetwork>>;
    getAccessLists(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]>>;
    putAccessLists(AccessLists: PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]>>;
    deleteAccessLists(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.accessList.DNSResolverAccessList[]>>;
}
declare class DnsResolverHostOverride {
    client: Client;
    constructor(client: Client);
    getAlias(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>>;
    postAlias(Alias: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAliasParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>>;
    patchAlias(Alias: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAliasId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>>;
    deleteAlias(parent_id: number, id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideAlias>>;
    getHostOverride(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>>;
    postHostOverride(HostOverride: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>>;
    patchHostOverride(HostOverride: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverrideId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>>;
    deleteHostOverride(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride>>;
    getHostOverrides(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]>>;
    putHostOverrides(HostOverrides: PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]>>;
    deleteHostOverrides(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.hostOverride.DNSResolverHostOverride[]>>;
}
declare class DnsResolver {
    client: Client;
    accessList: DnsResolverAccessList;
    hostOverride: DnsResolverHostOverride;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverApply>>;
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverSettings>>;
    patchSettings(Settings: PfsenseAPI.services.dnsResolver.DNSResolverSettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverSettings>>;
    getDomainOverride(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>>;
    postDomainOverride(DomainOverride: PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>>;
    patchDomainOverride(DomainOverride: PfsenseAPI.services.dnsResolver.DNSResolverDomainOverrideId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>>;
    deleteDomainOverride(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride>>;
    getDomainOverrides(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]>>;
    putDomainOverrides(DomainOverrides: PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]>>;
    deleteDomainOverrides(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.dnsResolver.DNSResolverDomainOverride[]>>;
}
declare class HaProxyBackend {
    client: Client;
    constructor(client: Client);
    getACL(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>>;
    postACL(ACL: PfsenseAPI.services.haProxy.backend.HAProxyBackendACLParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>>;
    patchACL(ACL: PfsenseAPI.services.haProxy.backend.HAProxyBackendACLId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>>;
    deleteACL(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendACL>>;
    getAction(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>>;
    postAction(Action: PfsenseAPI.services.haProxy.backend.HAProxyBackendActionParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>>;
    patchAction(Action: PfsenseAPI.services.haProxy.backend.HAProxyBackendActionId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>>;
    deleteAction(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendAction>>;
    getBackend(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackend>>;
    postBackend(Backend: PfsenseAPI.services.haProxy.backend.HAProxyBackend): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackend>>;
    patchBackend(Backend: PfsenseAPI.services.haProxy.backend.HAProxyBackendId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackend>>;
    deleteBackend(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackend>>;
    getErrorFile(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>>;
    postErrorFile(ErrorFile: PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFileParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>>;
    patchErrorFile(ErrorFile: PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFileId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>>;
    deleteErrorFile(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendErrorFile>>;
    getServer(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>>;
    postServer(Server: PfsenseAPI.services.haProxy.backend.HAProxyBackendServerParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>>;
    patchServer(Server: PfsenseAPI.services.haProxy.backend.HAProxyBackendServerId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>>;
    deleteServer(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackendServer>>;
    getBackends(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackend[]>>;
    putBackends(Backends: PfsenseAPI.services.haProxy.backend.HAProxyBackend[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackend[]>>;
    deleteBackends(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.backend.HAProxyBackend[]>>;
}
declare class HaProxyFrontend {
    client: Client;
    constructor(client: Client);
    getACL(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>>;
    postACL(ACL: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACLParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>>;
    patchACL(ACL: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACLId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>>;
    deleteACL(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendACL>>;
    getAction(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>>;
    postAction(Action: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendActionParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>>;
    patchAction(Action: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendActionId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>>;
    deleteAction(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAction>>;
    getAddress(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>>;
    postAddress(Address: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddressParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>>;
    patchAddress(Address: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddressId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>>;
    deleteAddress(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendAddress>>;
    getFrontend(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>>;
    postFrontend(Frontend: PfsenseAPI.services.haProxy.frontend.HAProxyFrontend): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>>;
    patchFrontend(Frontend: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>>;
    deleteFrontend(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend>>;
    getErrorFile(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>>;
    postErrorFile(ErrorFile: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFileParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>>;
    patchErrorFile(ErrorFile: PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFileId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>>;
    deleteErrorFile(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontendErrorFile>>;
    getFrontends(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]>>;
    putFrontends(Frontends: PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]>>;
    deleteFrontends(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.frontend.HAProxyFrontend[]>>;
}
declare class HaProxySettings {
    client: Client;
    constructor(client: Client);
    getDnsResolver(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>>;
    postDnsResolver(DnsResolver: PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>>;
    patchDnsResolver(DnsResolver: PfsenseAPI.services.haProxy.settings.HAProxyDNSResolverId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>>;
    deleteDnsResolver(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyDNSResolver>>;
    getEmailMailer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>>;
    postEmailMailer(EmailMailer: PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>>;
    patchEmailMailer(EmailMailer: PfsenseAPI.services.haProxy.settings.HAProxyEmailMailerId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>>;
    deleteEmailMailer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxyEmailMailer>>;
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxySettings>>;
    patchSettings(Settings: PfsenseAPI.services.haProxy.settings.HAProxySettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.settings.HAProxySettings>>;
}
declare class HaProxy {
    client: Client;
    backend: HaProxyBackend;
    frontend: HaProxyFrontend;
    settings: HaProxySettings;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyApply>>;
    getFile(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyFile>>;
    postFile(File: PfsenseAPI.services.haProxy.HAProxyFile): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyFile>>;
    patchFile(File: PfsenseAPI.services.haProxy.HAProxyFileId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyFile>>;
    deleteFile(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyFile>>;
    getFiles(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyFile[]>>;
    putFiles(Files: PfsenseAPI.services.haProxy.HAProxyFile[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyFile[]>>;
    deleteFiles(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.haProxy.HAProxyFile[]>>;
}
declare class Ntp {
    client: Client;
    constructor(client: Client);
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPSettings>>;
    patchSettings(Settings: PfsenseAPI.services.ntp.NTPSettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPSettings>>;
    getTimeServer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPTimeServer>>;
    postTimeServer(TimeServer: PfsenseAPI.services.ntp.NTPTimeServer): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPTimeServer>>;
    patchTimeServer(TimeServer: PfsenseAPI.services.ntp.NTPTimeServerId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPTimeServer>>;
    deleteTimeServer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPTimeServer>>;
    getTimeServers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPTimeServer[]>>;
    putTimeServers(TimeServers: PfsenseAPI.services.ntp.NTPTimeServer[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPTimeServer[]>>;
    deleteTimeServers(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ntp.NTPTimeServer[]>>;
}
declare class SSH {
    client: Client;
    constructor(client: Client);
    getSSH(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ssh.SSH>>;
    patchSSH(SSH: PfsenseAPI.services.ssh.SSH): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.ssh.SSH>>;
}
declare class ServiceWatchDog {
    client: Client;
    constructor(client: Client);
    getServiceWatchDog(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.service_watchdog.ServiceWatchdog>>;
    postServiceWatchDog(ServiceWatchDog: PfsenseAPI.services.service_watchdog.ServiceWatchdog): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.service_watchdog.ServiceWatchdog>>;
    patchServiceWatchDog(ServiceWatchDog: PfsenseAPI.services.service_watchdog.ServiceWatchdogId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.service_watchdog.ServiceWatchdog>>;
    deleteServiceWatchDog(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.service_watchdog.ServiceWatchdog>>;
    getServiceWatchDogs(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.service_watchdog.ServiceWatchdog[]>>;
    putServiceWatchDogs(ServiceWatchDogs: PfsenseAPI.services.service_watchdog.ServiceWatchdog[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.service_watchdog.ServiceWatchdog[]>>;
    deleteServiceWatchDogs(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.service_watchdog.ServiceWatchdog[]>>;
}
declare class Services {
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
    constructor(client: Client);
    wakeOnLan(Interface: string, mac_addr: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.services.wakeOnLan.WakeOnLan>>;
}
declare class StatusDhcpServer {
    client: Client;
    constructor(client: Client);
    getLeases(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.dhcpServer.DHCPServerLease>>;
    deleteLeases(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.dhcpServer.DHCPServerLease[]>>;
}
declare class StatusIpsec {
    client: Client;
    constructor(client: Client);
    getChildSA(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.ipsec.IPsecChildSAStatus>>;
    getSas(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.ipsec.IPsecSAStatus[]>>;
}
declare class StatusLog {
    client: Client;
    constructor(client: Client);
    getDhcp(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.logs.DHCPLog>>;
    getFirewall(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.logs.FirewallLog>>;
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.logs.LogSettings>>;
    patchSettings(Settings: PfsenseAPI.status.logs.LogSettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.logs.LogSettings>>;
    getSystem(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.logs.SystemLog>>;
}
declare class StatusOpenVpn {
    client: Client;
    constructor(client: Client);
    getClients(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.openvpn.OpenVPNClientStatus[]>>;
    getServerConnection(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.openvpn.OpenVPNConnectionStatus>>;
    deleteServerConnection(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.openvpn.OpenVPNConnectionStatus>>;
    getServerRoute(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.openvpn.OpenVPNServerRouteStatus>>;
    getServers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.openvpn.OpenVPNServerStatus[]>>;
}
declare class Status {
    client: Client;
    dhcpServer: StatusDhcpServer;
    ipsec: StatusIpsec;
    log: StatusLog;
    openvpn: StatusOpenVpn;
    constructor(client: Client);
    getCarp(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.CARP>>;
    patchCarp(Carp: PfsenseAPI.status.CARP): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.CARP>>;
    getGateways(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.RoutingGatewayStatus[]>>;
    getInterfaces(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.InterfaceStats[]>>;
    postService(name: string, action: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.Service>>;
    getServices(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.Service[]>>;
    getSystem(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.status.SystemStatus>>;
}
declare class SystemCerts {
    client: Client;
    constructor(client: Client);
    getCrl(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationList>>;
    postCrl(Crl: PfsenseAPI.system.crl.CertificateRevocationList): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationList>>;
    patchCrl(Crl: PfsenseAPI.system.crl.CertificateRevocationListId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationList>>;
    deleteCrl(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationList>>;
    getRevokeCertificate(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>>;
    postRevokeCertificate(RevokeCertificate: PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificateParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>>;
    patchRevokeCertificate(RevokeCertificate: PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificateId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>>;
    deleteRevokeCertificate(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationListRevokedCertificate>>;
    getCrls(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationList[]>>;
    deleteCrls(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.crl.CertificateRevocationList[]>>;
    getCertificateAuthorities(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthority[]>>;
    deleteCertificateAuthorities(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthority[]>>;
    getCertificateAuthority(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthority>>;
    postCertificateAuthority(CertificateAuthority: PfsenseAPI.system.certificate_authority.CertificateAuthority): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthority>>;
    patchCertificateAuthority(CertificateAuthority: PfsenseAPI.system.certificate_authority.CertificateAuthorityId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthority>>;
    deleteCertificateAuthority(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthority>>;
    generateCertificate(CertificateRequest: PfsenseAPI.system.certificate_authority.GenerateCertificateRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthorityGenerate>>;
    renewCertificate(RenewCertificateRequest: PfsenseAPI.system.certificate_authority.CertificateAuthorityRenewRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate_authority.CertificateAuthorityRenew>>;
    getCertificate(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate>>;
    postCertificate(Certificate: PfsenseAPI.system.certificate.Certificate): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate>>;
    patchCertificate(Certificate: PfsenseAPI.system.certificate.CertificateId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate>>;
    deleteCertificate(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate>>;
    generateInternalCertificate(CertificateRequest: PfsenseAPI.system.certificate.GenerateInternalCertificateRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate>>;
    exportPKCS12Certificate(ExportPKCS12Request: PfsenseAPI.system.certificate.PKCS12exportRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate>>;
    renewInternalCertificate(RenewCertificateRequest: PfsenseAPI.system.certificate.InternalCertificateRenewRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.CertificateRenew>>;
    signingRequest(CertificateSigningRequest: PfsenseAPI.system.certificate.CertificateSigningRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.CertificateSigningRequest>>;
    signSingingRequest(CertificateSigningRequestSign: PfsenseAPI.system.certificate.CertificateSigningRequestSign): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.CertificateSigningRequestSign>>;
    getCertificates(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate[]>>;
    deleteCertificates(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.certificate.Certificate[]>>;
}
declare class SystemPackage {
    client: Client;
    constructor(client: Client);
    getAvailable(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.Package.AvailablePackage[]>>;
    getPackage(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.Package.Package>>;
    postPackage(name: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.Package.Package>>;
    deletePackage(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.Package.Package>>;
    getPackages(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.Package.Package[]>>;
    deletePackages(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.Package.Package[]>>;
}
declare class SystemRestAPI {
    client: Client;
    constructor(client: Client);
    getAccessList(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]>>;
    putAccessList(AccessList: PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]>>;
    deleteAccessList(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIAccessListEntry[]>>;
    getAccessListEntry(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>>;
    postAccessListEntry(AccessListEntry: PfsenseAPI.system.restapi.RESTAPIAccessListEntry): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>>;
    patchAccessListEntry(AccessListEntry: PfsenseAPI.system.restapi.RESTAPIAccessListEntryId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>>;
    deleteAccessListEntry(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIAccessListEntry>>;
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPISettings>>;
    patchSettings(Settings: PfsenseAPI.system.restapi.RESTAPISettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPISettings>>;
    syncSettings(sync_data: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPISettingsSync>>;
    getVersion(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIVersion>>;
    patchVersion(install_version: string): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.restapi.RESTAPIVersion>>;
}
declare class SystemWebGUI {
    client: Client;
    constructor(client: Client);
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.WebGUISettings>>;
    patchSettings(WebGUISettings: PfsenseAPI.system.WebGUISettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.WebGUISettings>>;
}
declare class System {
    client: Client;
    certificate: SystemCerts;
    package: SystemPackage;
    restapi: SystemRestAPI;
    webgui: SystemWebGUI;
    constructor(client: Client);
    getConsole(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemConsole>>;
    patchConsole(SystemConsole: PfsenseAPI.system.SystemConsole): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemConsole>>;
    getDNS(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemDNS>>;
    patchDNS(SystemDNS: PfsenseAPI.system.SystemDNS): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemDNS>>;
    getHostname(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemHostname>>;
    patchHostname(SystemHostname: PfsenseAPI.system.SystemHostname): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemHostname>>;
    getTunable(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemTunable>>;
    postTunable(SystemTunable: PfsenseAPI.system.SystemTunable): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemTunable>>;
    patchTunable(SystemTunable: PfsenseAPI.system.SystemTunableId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemTunable>>;
    deleteTunable(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemTunable>>;
    getTunables(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemTunable[]>>;
    putTunables(Tunables: PfsenseAPI.system.SystemTunable[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemTunable[]>>;
    deleteTunables(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemTunable[]>>;
    getVersion(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.system.SystemVersion>>;
}
declare class UserAuthServer {
    client: Client;
    constructor(client: Client);
    getAuthServer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.AuthServer>>;
    postAuthServer(AuthServer: PfsenseAPI.user.AuthServer): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.AuthServer>>;
    patchAuthServer(AuthServer: PfsenseAPI.user.AuthServerId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.AuthServer>>;
    deleteAuthServer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.AuthServer>>;
    getAuthServers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.AuthServer[]>>;
    putAuthServers(AuthServers: PfsenseAPI.user.AuthServer[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.AuthServer[]>>;
    deleteAuthServers(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.AuthServer[]>>;
}
declare class UserGroup {
    client: Client;
    constructor(client: Client);
    getGroup(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.UserGroup>>;
    postGroup(Group: PfsenseAPI.user.UserGroup): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.UserGroup>>;
    patchGroup(Group: PfsenseAPI.user.UserGroupId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.UserGroup>>;
    deleteGroup(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.UserGroup>>;
    getGroups(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.UserGroup[]>>;
    putGroups(Groups: PfsenseAPI.user.UserGroup[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.UserGroup[]>>;
    deleteGroups(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.UserGroup[]>>;
}
declare class User {
    client: Client;
    authServer: UserAuthServer;
    group: UserGroup;
    constructor(client: Client);
    getUser(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.User>>;
    postUser(User: PfsenseAPI.user.User): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.User>>;
    patchUser(User: PfsenseAPI.user.UserId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.User>>;
    deleteUser(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.User>>;
    getUsers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.User[]>>;
    deleteUsers(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.user.User[]>>;
}
declare class IPsecPhase1 {
    client: Client;
    constructor(client: Client);
    getPhase1Encryption(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>>;
    postPhase1Encryption(Phase1Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>>;
    patchPhase1Encryption(Phase1Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase1EncryptionId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>>;
    deletePhase1Encryption(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1Encryption>>;
    getPhase1(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1>>;
    postPhase1(Phase1: PfsenseAPI.vpn.ipsec.IPsecPhase1): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1>>;
    patchPhase1(Phase1: PfsenseAPI.vpn.ipsec.IPsecPhase1Id): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1>>;
    deletePhase1(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1>>;
    getPhase1s(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1[]>>;
    putPhase1s(Phase1s: PfsenseAPI.vpn.ipsec.IPsecPhase1[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1[]>>;
    deletePhase1s(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase1[]>>;
}
declare class IPsecPhase2 {
    client: Client;
    constructor(client: Client);
    getPhase2Encryption(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>>;
    postPhase2Encryption(Phase2Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase2EncryptionParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>>;
    patchPhase2Encryption(Phase2Encryption: PfsenseAPI.vpn.ipsec.IPsecPhase2EncryptionId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>>;
    deletePhase2Encryption(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2Encryption>>;
    getPhase2(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2>>;
    postPhase2(Phase2: PfsenseAPI.vpn.ipsec.IPsecPhase2): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2>>;
    patchPhase2(Phase2: PfsenseAPI.vpn.ipsec.IPsecPhase2Id): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2>>;
    deletePhase2(id: number, apply?: boolean): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2>>;
    getPhase2s(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2[]>>;
    putPhase2s(Phase2s: PfsenseAPI.vpn.ipsec.IPsecPhase2[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2[]>>;
    deletePhase2s(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecPhase2[]>>;
}
declare class VPNIpsec {
    client: Client;
    phase1: IPsecPhase1;
    phase2: IPsecPhase2;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.ipsec.IPsecApply>>;
}
declare class OpenVPN {
    client: Client;
    constructor(client: Client);
    getCSO(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>>;
    postCSO(CSO: PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>>;
    patchCSO(CSO: PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverrideId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>>;
    deleteCSO(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride>>;
    getCSOs(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride[]>>;
    deleteCSOs(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClientSpecificOverride[]>>;
    getClient(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClient>>;
    postClient(Client: PfsenseAPI.vpn.openvpn.OpenVPNClient): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClient>>;
    patchClient(Client: PfsenseAPI.vpn.openvpn.OpenVPNClientId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClient>>;
    deleteClient(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClient>>;
    getClients(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClient[]>>;
    deleteClients(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNClient[]>>;
    getServer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNServer>>;
    postServer(Server: PfsenseAPI.vpn.openvpn.OpenVPNServer): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNServer>>;
    patchServer(Server: PfsenseAPI.vpn.openvpn.OpenVPNServerId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNServer>>;
    deleteServer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNServer>>;
    deleteServers(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNServer[]>>;
    getServers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.openvpn.OpenVPNServer[]>>;
}
declare class WireGuard {
    client: Client;
    constructor(client: Client);
    apply(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.WireGuardApply>>;
    getAllowedIps(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>>;
    postAllowedIps(AllowedIps: PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>>;
    patchAllowedIps(AllowedIps: PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIPId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>>;
    deleteAllowedIps(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeerAllowedIP>>;
    getPeer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>>;
    postPeer(Peer: PfsenseAPI.vpn.wireguard.peer.WireGuardPeer): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>>;
    patchPeer(Peer: PfsenseAPI.vpn.wireguard.peer.WireGuardPeerId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>>;
    deletePeer(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer>>;
    getPeers(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]>>;
    putPeers(Peers: PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]>>;
    deletePeers(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.peer.WireGuardPeer[]>>;
    getSettings(): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.WireGuardSettings>>;
    patchSettings(Settings: PfsenseAPI.vpn.wireguard.WireGuardSettings): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.WireGuardSettings>>;
    getTunnelAddress(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>>;
    postTunnelAddress(TunnelAddress: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddressParentId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>>;
    patchTunnelAddress(TunnelAddress: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddressId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>>;
    deleteTunnelAddress(parent_id: number, id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelAddress>>;
    getTunnel(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>>;
    postTunnel(Tunnel: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>>;
    patchTunnel(Tunnel: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnelId): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>>;
    deleteTunnel(id: number): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel>>;
    getTunnels(query: PfsenseAPI.queryRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]>>;
    putTunnels(Tunnels: PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]>>;
    deleteTunnels(query: PfsenseAPI.queryWithoutSortRequest): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<PfsenseAPI.vpn.wireguard.tunnel.WireGuardTunnel[]>>;
}
declare class VPN {
    client: Client;
    ipsec: VPNIpsec;
    openvpn: OpenVPN;
    wireguard: WireGuard;
    constructor(client: Client);
}
declare class Pfsense {
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
    constructor(host: string, api_key: string, { version }?: {
        version: string;
    });
}
export declare namespace PfsenseAPI {
    interface APIResponse<T> {
        code: number;
        status: string;
        response_id: string;
        message: string;
        data: T;
        _links: any;
    }
    interface APIResponseError extends APIResponse<any> {
        code: 400 | 401 | 403 | 404 | 406 | 409 | 415 | 422 | 424 | 500 | 503;
    }
    interface queryRequest {
        limit?: number;
        offset?: number;
        sort_by?: string[];
        sort_order?: "SORT_ASC" | "SORT_DESC";
        query?: Map<any, any>;
    }
    interface queryWithoutSortRequest {
        limit?: number;
        offset?: number;
        query?: Map<any, any>;
    }
    namespace auth {
        enum get {
            keys = "/auth/keys",
            jwt = "/auth/jwt"
        }
        interface keyRequest {
            descr: string;
            hash_algo: string;
            length_bytes: number;
            hash: string;
            key: string;
        }
        interface keyResponse extends keyRequest {
            username: string;
        }
        enum post {
            key = "/auth/key",
            keys = "/auth/keys"
        }
        enum del {
            key = "/auth/key",
            keys = "/auth/keys"
        }
    }
    namespace diagnostics {
        namespace Arp {
            enum get {
                arpTable = "/diagnostics/arp_table",
                arpEntry = "/diagnostics/arp_table/entry"
            }
            interface arpTableResponse {
                hostname: string;
                ip_address: string;
                mac_address: string;
                interface: string;
                type: string;
                permanent: boolean;
                dnsresolve: string;
                expires: string;
            }
            enum del {
                arpTable = "/diagnostics/arp_table",
                arpEntry = "/diagnostics/arp_table/entry"
            }
        }
        namespace config {
            enum get {
                revision = "/diagnostics/config_history/revision",
                revisions = "/diagnostics/config_history/revisions"
            }
            interface ConfigHistoryRevision {
                description: string;
                time: string;
                version: string;
                filesize: number;
                oneOf: any[];
            }
            enum del {
                revision = "/diagnostics/config_history/revision",
                revisions = "/diagnostics/config_history/revision"
            }
        }
        enum post {
            command = "/diagnostics/command_prompt",
            halt = "/diagnostics/halt_system",
            reboot = "/diagnostics/reboot"
        }
        interface CommandResponse {
            output: string;
            result_code: number;
            command: string;
        }
        interface SystemHaltRequest {
            dry_run: boolean;
        }
        interface SystemHaltResponse {
            description: string;
            oneOf: any[];
        }
        interface SystemRebootRequest {
            dry_run: boolean;
        }
        interface SystemRebootResponse {
            description: string;
            oneOf: any[];
        }
    }
    namespace firewall {
        namespace nat {
            namespace onetoone {
                enum get {
                    mapping = "/firewall/nat/one_to_one/mapping",
                    mappings = "/firewall/nat/one_to_one/mappings"
                }
                interface OneToOneMapping {
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
                interface OneToOneMappingId extends OneToOneMapping {
                    id: number;
                }
                enum post {
                    mapping = "/firewall/nat/one_to_one/mapping"
                }
                enum del {
                    mapping = "/firewall/nat/one_to_one/mapping",
                    mappings = "/firewall/nat/one_to_one/mappings"
                }
                enum patch {
                    mapping = "/firewall/nat/one_to_one/mapping"
                }
                enum put {
                    mappings = "/firewall/nat/one_to_one/mappings"
                }
            }
            namespace outbound {
                enum get {
                    mapping = "/firewall/nat/outbound/mapping",
                    mappings = "/firewall/nat/outbound/mappings",
                    mode = "/firewall/nat/outbound/mode"
                }
                interface OutboundNATMode {
                    mode: string;
                }
                interface OutboundNATMapping {
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
                interface OutboundNATMappingId extends OutboundNATMapping {
                    id: number;
                }
                enum post {
                    mapping = "/firewall/nat/outbound/mapping"
                }
                enum del {
                    mapping = "/firewall/nat/outbound/mapping",
                    mappings = "/firewall/nat/outbound/mappings"
                }
                enum patch {
                    mapping = "/firewall/nat/outbound/mapping",
                    mode = "/firewall/nat/outbound/mode"
                }
                enum put {
                    mappings = "/firewall/nat/outbound/mappings"
                }
            }
            enum get {
                portForward = "/firewall/nat/port_forward",
                portForwards = "/firewall/nat/port_forwards"
            }
            interface PortForward {
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
            interface PortForwardId extends PortForward {
                id: number;
            }
            enum post {
                portForward = "/firewall/nat/port_forward"
            }
            enum del {
                portForward = "/firewall/nat/port_forward",
                portForwards = "/firewall/nat/port_forwards"
            }
            enum patch {
                portForward = "/firewall/nat/port_forward"
            }
            enum put {
                portForwards = "/firewall/nat/port_forwards"
            }
        }
        namespace schedule {
            enum get {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
                schedules = "/firewall/schedules"
            }
            interface FirewallSchedule {
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
            interface FirewallScheduleTimeRangeWithParentId extends FirewallScheduleTimeRange {
                parent_id: number;
            }
            interface FirewallScheduleTimeRange {
                position: number;
                month: number;
                day: number;
                hour: string;
                rangedescr: string;
            }
            interface FirewallScheduleId extends FirewallSchedule {
                id: number;
            }
            enum post {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range"
            }
            enum del {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
                schedules = "/firewall/schedules"
            }
            enum patch {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range"
            }
            enum put {
                schedules = "/firewall/schedules"
            }
        }
        namespace state {
            enum get {
                default = "/firewall/states",
                size = "/firewall/states/size"
            }
            interface FirewallState {
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
            interface FirewallStateSize {
                maximumstates: number;
                defaultmaximumstates?: number;
                currentstates?: number;
            }
            interface FirewallStateSizeRequest {
                maximumstates: number;
            }
            enum post {
            }
            enum del {
                default = "/firewall/states"
            }
            enum patch {
                size = "/firewall/states/size"
            }
            enum put {
            }
        }
        namespace trafficShaper {
            namespace limiter {
                enum get {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue",
                    limiters = "/firewall/traffic_shaper/limiters"
                }
                interface TrafficShaperLimiter {
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
                interface TrafficShaperLimiterQueue {
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
                interface TrafficShaperLimiterQueueParentId extends TrafficShaperLimiterQueue {
                    parent_id: number;
                }
                interface TrafficShaperLimiterQueueId extends TrafficShaperLimiterQueueParentId {
                    id: number;
                }
                interface TrafficShaperLimiterId extends TrafficShaperLimiter {
                    id: number;
                }
                interface TrafficShaperLimiterBandwidth {
                    bw: number;
                    bwscale: string;
                    bwsched: string;
                }
                interface TrafficShaperLimiterBandwidthParentId extends TrafficShaperLimiterBandwidth {
                    parent_id: number;
                }
                interface TrafficShaperLimiterBandwidthId extends TrafficShaperLimiterBandwidthParentId {
                    id: number;
                }
                enum post {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue"
                }
                enum del {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue"
                }
                enum patch {
                    default = "/firewall/traffic_shaper/limiter/",
                    bandwidth = "/firewall/traffic_shaper/limiter/bandwidth",
                    queue = "/firewall/traffic_shaper/limiter/queue"
                }
                enum put {
                    limiters = "/firewall/traffic_shaper/limiters"
                }
            }
            enum get {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
                trafficShapers = "/firewall/traffic_shapers"
            }
            interface TrafficShaper {
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
            interface TrafficShaperId extends TrafficShaper {
                id: number;
            }
            interface TrafficShaperQueue {
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
            interface TrafficShaperQueueParentId extends TrafficShaperQueue {
                parent_id: number;
            }
            interface TrafficShaperQueueId extends TrafficShaperQueueParentId {
                id: number;
            }
            enum post {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue"
            }
            enum del {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
                trafficShapers = "/firewall/traffic_shapers"
            }
            enum patch {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue"
            }
            enum put {
                trafficShapers = "/firewall/traffic_shapers"
            }
        }
        namespace virtualIp {
            enum get {
                default = "/firewall/virtual_ip",
                apply = "/firewall/virtual_ip/apply",
                virtualIps = "/firewall/virtual_ips"
            }
            interface VirtualIpRequest {
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
            interface VirtualIpId extends VirtualIpRequest {
                id: number;
            }
            interface VirtualIp {
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
            interface VirtualIpApplied {
                applied: boolean;
            }
            enum post {
                default = "/firewall/virtual_ip",
                apply = "/firewall/virtual_ip/apply"
            }
            enum del {
                default = "/firewall/virtual_ip",
                virtualIps = "/firewall/virtual_ips"
            }
            enum patch {
                default = "/firewall/virtual_ip"
            }
            enum put {
            }
        }
        enum get {
            advancedSettings = "/firewall/advanced_settings",
            alias = "/firewall/alias",
            aliases = "/firewall/aliases",
            apply = "/firewall/apply",
            rule = "/firewall/rule",
            rules = "/firewall/rules"
        }
        interface FirewallRule {
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
        interface FirewallRuleId extends FirewallRule {
            id: number;
        }
        interface FirewallAlias {
            description: string;
            name: string;
            type: string;
            descr: string;
            address: string[];
            detail: string[];
        }
        interface FirewallAdvancedSettings {
            description: string;
            aliasesresolveinterval: number;
            checkaliaseurlcert: boolean;
        }
        enum post {
            alias = "/firewall/alias",
            apply = "/firewall/apply",
            rule = "/firewall/rule"
        }
        interface FirewallApply {
            description: string;
            applied: boolean;
            pending_subsystem: string[];
        }
        enum del {
            alias = "/firewall/alias",
            rule = "/firewall/rule",
            rules = "/firewall/rules",
            aliases = "/firewall/aliases"
        }
        enum put {
            aliases = "/firewall/aliases",
            rules = "/firewall/rules"
        }
        enum patch {
            advancedSettings = "/firewall/advanced_settings",
            alias = "/firewall/alias",
            rule = "/firewall/rule"
        }
        interface AdvancedSettingsRequest {
            aliasesresolveinterval: number;
            checkaliaseurlcert: boolean;
        }
    }
    namespace graphQL {
        enum post {
            default = "/graphql"
        }
        interface GraphQLRequest {
            query: string;
            variables?: any;
        }
        interface GraphQLResponse {
            data: any;
            errors: any;
        }
    }
    namespace Interface {
        enum get {
            default = "/interface",
            interfaces = "/interfaces",
            apply = "/interface/apply",
            available = "/interface/available_interfaces",
            bridge = "/interface/bridge",
            bridges = "/interface/bridges",
            group = "/interface/group",
            groups = "/interface/groups",
            vlan = "/interface/vlan",
            vlans = "/interface/vlans"
        }
        interface InterfaceApply {
            applied: boolean;
            pending_interfaces: string[];
        }
        interface InterfaceAvailable {
            if: string | null;
            mac: string | null;
            dmesg: string | null;
            in_use_by: string | null;
        }
        interface InterfaceBridge {
            members: string[];
            descr: string;
            bridgeif?: string;
        }
        interface InterfaceGroup {
            ifname: string;
            members: string[];
            descr: string;
        }
        interface InterfaceVlan {
            if: string;
            tag: number;
            vlanif: string;
            pcp?: number;
            descr: string;
        }
        interface InterfaceVlanId extends InterfaceVlan {
            id: number;
        }
        interface NetworkInterface {
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
        interface NetworkInterfaceId extends NetworkInterface {
            id: number;
        }
        enum post {
            default = "/interface",
            apply = "/interface/apply",
            bridge = "/interface/bridge",
            group = "/interface/group",
            vlan = "/interface/vlan"
        }
        interface InterfaceGroupRequest {
            ifname: string;
            members: string[];
            descr: string;
        }
        interface InterfaceGroupRequestId {
            id: number;
        }
        interface InterfaceBridgeRequest {
            members: string[];
            descr: string;
        }
        interface InterfaceBridgeRequestId extends InterfaceBridgeRequest {
            id: number;
        }
        enum del {
            default = "/interface",
            interfaces = "/interfaces",
            bridge = "/interface/bridge",
            group = "/interface/group",
            groups = "/interface/groups",
            vlan = "/interface/vlan",
            vlans = "/interface/vlans"
        }
        enum patch {
            default = "/interface",
            bridge = "/interface/bridge",
            group = "/interface/group",
            vlan = "/interface/vlan"
        }
        enum put {
            groups = "/interface/groups"
        }
    }
    namespace routing {
        namespace gateway {
            namespace group {
                enum get {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority",
                    groups = "/routing/gateway/groups"
                }
                interface RoutingGatewayGroup {
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
                interface RoutingGatewayGroupId extends RoutingGatewayGroup {
                    id: number;
                }
                interface RoutingGatewayGroupPriority {
                    gateway: string;
                    tier: number;
                    virtual_ip: string;
                }
                interface RoutingGatewayGroupPriorityParentId extends RoutingGatewayGroupPriority {
                    parent_id: number;
                }
                interface RoutingGatewayGroupPriorityId extends RoutingGatewayGroupPriorityParentId {
                    id: number;
                }
                enum post {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority"
                }
                enum patch {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority"
                }
                enum del {
                    default = "/routing/gateway/group",
                    priority = "/routing/gateway/group/priority",
                    groups = "/routing/gateway/groups"
                }
                enum put {
                }
            }
            enum get {
                default = "/routing/gateway",
                defaultGateway = "/routing/gateway/default",
                gateways = "/routing/gateways"
            }
            interface RoutingGateway {
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
            interface RoutingGatewayId extends RoutingGateway {
                id: number;
            }
            interface DefaultGateway {
                defaultgw4: string;
                defaultgw6: string;
            }
            enum post {
                default = "/routing/gateway"
            }
            enum patch {
                default = "/routing/gateway",
                defaultGateway = "/routing/gateway/default"
            }
            enum del {
                default = "/routing/gateway",
                gateways = "/routing/gateways"
            }
            enum put {
            }
        }
        enum get {
            apply = "/routing/apply",
            staticRoute = "/routing/static_route",
            staticRoutes = "/routing/static_routes"
        }
        interface StaticRoute {
            network: string;
            gateway: string;
            descr: string;
            disabled: boolean;
        }
        interface StaticRouteId extends StaticRoute {
            id: number;
        }
        interface RoutingApply {
            applied: boolean;
        }
        enum post {
            apply = "/routing/apply",
            staticRoute = "/routing/static_route"
        }
        enum patch {
            staticRoute = "/routing/static_route"
        }
        enum del {
            staticRoute = "/routing/static_route",
            staticRoutes = "/routing/static_routes"
        }
        enum put {
        }
    }
    namespace services {
        namespace acme {
            namespace account {
                enum get {
                    key = "/services/acme/account_key",
                    keys = "/services/acme/account_key",
                    registrations = "/services/acme/account_key/registrations"
                }
                interface ACMEAccountKey {
                    name: string;
                    descr: string;
                    email: string;
                    acmeserver: string;
                    accountkey: string;
                }
                interface ACMEAccountKeyId extends ACMEAccountKey {
                    id: number;
                }
                enum post {
                    key = "/services/acme/account_key",
                    register = "/services/acme/account_key/register"
                }
                interface ACMEAccountKeyRegister {
                    name: string;
                    status?: string;
                }
                enum patch {
                    key = "/services/acme/account_key"
                }
                enum del {
                    key = "/services/acme/account_key",
                    keys = "/services/acme/account_key"
                }
                enum put {
                    keys = "/services/acme/account_key"
                }
            }
            namespace certificate {
                enum get {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                    issuances = "/services/acme/certificate/issuances",
                    renewals = "/services/acme/certificate/renewals",
                    certificates = "/services/acme/certificates"
                }
                interface ACMECertificate {
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
                    a_actionlist: {
                        status: "active" | "disabled";
                        command: string;
                        method: "shellcommand" | "php_command" | "servicerestart" | "xmlrpcservicerestart";
                    }[] | ACMECertificateDomain[];
                }
                interface ACMECertificateId extends ACMECertificate {
                    id: number;
                }
                interface ACMECertificateAction {
                    status: "active" | "disabled";
                    command: string;
                    method: "shellcommand" | "php_command" | "servicerestart" | "xmlrpcservicerestart";
                }
                interface ACMECertificateActionParentId extends ACMECertificateAction {
                    parent_id: number;
                }
                interface ACMECertificateActionId extends ACMECertificateActionParentId {
                    id: number;
                }
                interface ACMECertificateDomain {
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
                interface ACMECertificateDomainParentId extends ACMECertificateDomain {
                    parent_id: number;
                }
                interface ACMECertificateDomainId extends ACMECertificateDomainParentId {
                    id: number;
                }
                enum post {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                    issue = "/services/acme/certificate/issue",
                    renew = "/services/acme/certificate/renew"
                }
                interface ACMECertificateIssue {
                    certificate: string;
                    status?: string;
                    last_updated?: number;
                    result_log?: string;
                }
                interface ACMECertificateRenew {
                    certificate: string;
                    status?: string;
                    last_updated?: number;
                    result_log?: string;
                }
                enum patch {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain"
                }
                enum del {
                    default = "/services/acme/certificate",
                    action = "/services/acme/certificate/action",
                    domain = "/services/acme/certificate/domain",
                    certificates = "/services/acme/certificates"
                }
                enum put {
                    certificates = "/services/acme/certificates"
                }
            }
            enum get {
                settings = "/services/acme/settings"
            }
            interface ACMESettings {
                enable: boolean;
                writecerts: boolean;
            }
            enum post {
            }
            enum patch {
                settings = "/services/acme/settings"
            }
            enum del {
            }
            enum put {
            }
        }
        namespace bind {
            enum get {
                settings = "/services/bind/settings",
                view = "/services/bind/view",
                views = "/services/bind/views"
            }
            interface BINDview {
                name: string;
                descr: string;
                recursion: boolean;
                match_clients: string[];
                allow_recursion: string[];
                bind_custom_options: string;
            }
            interface BINDviewId extends BINDview {
                id: number;
            }
            enum post {
                view = "/services/bind/view"
            }
            enum patch {
                settings = "/services/bind/settings",
                view = "/services/bind/view"
            }
            enum del {
                view = "/services/bind/view",
                views = "/services/bind/views",
                zones = "/services/bind/zones"
            }
            enum put {
                views = "/services/bind/views",
                zones = "/services/bind/zones"
            }
            namespace accessList {
                enum get {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry",
                    access_lists = "/services/bind/access_lists"
                }
                interface BINDAccessList {
                    name: string;
                    description: string;
                    entries: {
                        value: string;
                        description: string;
                    }[];
                }
                interface BINDAccessListId extends BINDAccessList {
                    id: number;
                }
                interface BINDAccessListEntry {
                    value: string;
                    description: string;
                }
                interface BINDAccessListEntryParentId extends BINDAccessListEntry {
                    parent_id: number;
                }
                interface BINDAccessListEntryId extends BINDAccessListEntryParentId {
                    id: number;
                }
                enum post {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry"
                }
                enum patch {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry"
                }
                enum del {
                    default = "/services/bind/access_list",
                    entry = "/services/bind/access_list/entry",
                    access_lists = "/services/bind/access_lists"
                }
                enum put {
                    access_lists = "/services/bind/access_lists"
                }
            }
            namespace sync {
                enum get {
                    remoteHost = "/services/bind/sync/remote_host",
                    remoteHosts = "/services/bind/sync/remote_hosts",
                    settings = "/services/bind/sync/settings"
                }
                interface BINDSyncSettings {
                    synconchanges: "disabled" | "manual" | "auto";
                    synctimeout: 30 | 60 | 90 | 120 | 150 | 250;
                    masterip: string;
                }
                interface BINDSyncRemoteHost {
                    syncdestinenable: boolean;
                    syncprotocol: "http" | "https";
                    ipaddress: string;
                    syncport: string;
                    username: string;
                    password: string;
                }
                interface BINDSyncRemoteHostId extends BINDSyncRemoteHost {
                    id: number;
                }
                enum post {
                    remoteHost = "/services/bind/sync/remote_host"
                }
                enum patch {
                    remoteHost = "/services/bind/sync/remote_host",
                    settings = "/services/bind/sync/settings"
                }
                enum del {
                    remoteHost = "/services/bind/sync/remote_host",
                    remoteHosts = "/services/bind/sync/remote_hosts"
                }
                enum put {
                    remoteHosts = "/services/bind/sync/remote_hosts"
                }
            }
            namespace zone {
                enum get {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record",
                    zones = "/services/bind/zones"
                }
                interface BINDZone {
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
                interface BINDZoneId extends BINDZone {
                    id: number;
                }
                interface BINDZoneRecord {
                    name: string;
                    type: "A" | "AAAA" | "CNAME" | "MX" | "NS" | "LOC" | "PTR" | "SRV" | "TXT" | "SPF";
                    rdata: string;
                    priority: number;
                }
                interface BINDZoneRecordParentId extends BINDZoneRecord {
                    parent_id: number;
                }
                interface BINDZoneRecordId extends BINDZoneRecordParentId {
                    id: number;
                }
                enum post {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record"
                }
                enum patch {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record"
                }
                enum del {
                    default = "/services/bind/zone",
                    record = "/services/bind/zone/record",
                    zones = "/services/bind/zones"
                }
                enum put {
                    zones = "/services/bind/zones"
                }
            }
        }
        namespace cron {
            enum get {
                job = "/services/cron/job",
                jobs = "/services/cron/jobs"
            }
            interface CronJob {
                minute: string;
                hour: string;
                mday: string;
                month: string;
                wday: string;
                who: string;
                command: string;
            }
            interface CronJobId extends CronJob {
                id: number;
            }
            enum post {
                job = "/services/cron/job"
            }
            enum patch {
                job = "/services/cron/job"
            }
            enum del {
                job = "/services/cron/job",
                jobs = "/services/cron/jobs"
            }
            enum put {
                jobs = "/services/cron/jobs"
            }
        }
        namespace dhcpServer {
            enum get {
                default = "/services/dhcp_server",
                addressPool = "/services/dhcp_server/address_pool",
                apply = "/services/dhcp_server/apply",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping",
                servers = "/services/dhcp_servers"
            }
            interface DHCPServer {
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
                    type: "text" | "string" | "boolean" | "unsigned integer 8" | "unsigned integer 16" | "unsigned integer 32" | "signed integer 8" | "signed integer 16" | "signed integer 32" | "ip-address";
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
            interface DHCPServerId extends DHCPServer {
                id: number;
            }
            interface DHCPServerCustomOption {
                number: number;
                type: "text" | "string" | "boolean" | "unsigned integer 8" | "unsigned integer 16" | "unsigned integer 32" | "signed integer 8" | "signed integer 16" | "signed integer 32" | "ip-address";
                value: string;
            }
            interface DHCPServerCustomOptionParentId extends DHCPServerCustomOption {
                parent_id: number;
            }
            interface DHCPServerCustomOptionId extends DHCPServerCustomOptionParentId {
                id: number;
            }
            interface DHCPServerAddressPool {
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
            interface DHCPServerAddressPoolParentId {
                parent_id: number;
            }
            interface DHCPServerAddressPoolId extends DHCPServerAddressPoolParentId {
                id: number;
            }
            interface DHCPServerStaticMapping {
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
            interface DHCPServerStaticMappingParentId extends DHCPServerStaticMapping {
                parent_id: number;
            }
            interface DHCPServerStaticMappingId extends DHCPServerStaticMappingParentId {
                id: number;
            }
            enum post {
                addressPool = "/services/dhcp_server/address_pool",
                apply = "/services/dhcp_server/apply",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping"
            }
            interface DHCPServerApply {
                applied: boolean;
            }
            enum patch {
                default = "/services/dhcp_server",
                addressPool = "/services/dhcp_server/address_pool",
                backend = "/services/dhcp_server/backend",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping"
            }
            interface DHCPServerBackend {
                dchpbackend: "isc" | "kea";
            }
            enum del {
                addressPool = "/services/dhcp_server/address_pool",
                customOption = "/services/dhcp_server/custom_option",
                staticMapping = "/services/dhcp_server/static_mapping"
            }
            enum put {
                servers = "/services/dhcp_servers"
            }
        }
        namespace dnsForwarder {
            enum get {
                apply = "/services/dns_forwarder/apply"
            }
            interface DNSForwarderApply {
                applied: boolean;
            }
            enum post {
                apply = "/services/dns_forwarder/apply"
            }
            enum patch {
            }
            enum del {
            }
            enum put {
            }
            namespace hostOverride {
                enum get {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias",
                    overrides = "/services/dns_forwarder/host_overrides"
                }
                interface DNSForwarderHostOverride {
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
                interface DNSForwarderHostOverrideId extends DNSForwarderHostOverride {
                    id: number;
                }
                interface DNSForwarderHostOverrideAlias {
                    host: string;
                    domain: string;
                    description: string;
                }
                interface DNSForwarderHostOverrideAliasParentId extends DNSForwarderHostOverrideAlias {
                    parent_id: number;
                }
                interface DNSForwarderHostOverrideAliasId extends DNSForwarderHostOverrideAliasParentId {
                    id: number;
                }
                enum post {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias"
                }
                enum patch {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias"
                }
                enum del {
                    default = "/services/dns_forwarder/host_override",
                    alias = "/services/dns_forwarder/host_override/alias",
                    overrides = "/services/dns_forwarder/host_overrides"
                }
                enum put {
                    overrides = "/services/dns_forwarder/host_overrides"
                }
            }
        }
        namespace dnsResolver {
            enum get {
                apply = "/services/dns_resolver/apply",
                domainOverride = "/services/dns_resolver/domain_override",
                domainOverrides = "/services/dns_resolver/domain_overrides",
                settings = "/services/dns_resolver/settings"
            }
            interface DNSResolverSettings {
                enable: boolean;
                port: string;
                enablessl: boolean;
                sslcertref: string;
                tlsport: string;
                active_interface: string[];
                outgoing_interface: string[];
                strictout: boolean;
                system_domain_local_zone_type: "deny" | "refuse" | "static" | "transparent" | "typetransparent" | "redirect" | "inform" | "inform_deny" | "nodefault";
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
            interface DNSResolverApply {
                applied: boolean;
            }
            interface DNSResolverDomainOverride {
                domain: string;
                ip: string;
                descr: string;
                forward_tls_upstream: boolean;
                tls_hostname?: string;
            }
            interface DNSResolverDomainOverrideId extends DNSResolverDomainOverride {
                id: number;
            }
            enum post {
                apply = "/services/dns_resolver/apply",
                domainOverride = "/services/dns_resolver/domain_override"
            }
            enum patch {
                domainOverride = "/services/dns_resolver/domain_override",
                settings = "/services/dns_resolver/settings"
            }
            enum del {
                domainOverride = "/services/dns_resolver/domain_override",
                domainOverrides = "/services/dns_resolver/domain_overrides"
            }
            enum put {
                domainOverrides = "/services/dns_resolver/domain_overrides"
            }
            namespace accessList {
                enum get {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network",
                    access_lists = "/services/dns_resolver/access_lists"
                }
                interface DNSResolverAccessListNetwork {
                    network: string;
                    mask: number;
                    description: string;
                }
                interface DNSResolverAccessListNetworkParentId extends DNSResolverAccessListNetwork {
                    parent_id: number;
                }
                interface DNSResolverAccessListNetworkId extends DNSResolverAccessListNetworkParentId {
                    id: number;
                }
                interface DNSResolverAccessList {
                    name: string;
                    action: "allow" | "deny" | "refuse" | "allow snoop" | "deny nonlocal" | "refuse nonlocal";
                    description: string;
                    networks: {
                        network: string;
                        mask: number;
                        description: string;
                    }[];
                }
                interface DNSResolverAccessListId extends DNSResolverAccessList {
                    id: number;
                }
                enum post {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network"
                }
                enum patch {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network"
                }
                enum del {
                    default = "/services/dns_resolver/access_list",
                    network = "/services/dns_resolver/access_list/network",
                    access_lists = "/services/dns_resolver/access_lists"
                }
                enum put {
                    access_lists = "/services/dns_resolver/access_lists"
                }
            }
            namespace hostOverride {
                enum get {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias",
                    overrides = "/services/dns_resolver/host_overrides"
                }
                interface DNSResolverHostOverrideAlias {
                    host: string;
                    domain: string;
                    descr: string;
                }
                interface DNSResolverHostOverrideAliasParentId extends DNSResolverHostOverrideAlias {
                    parent_id: number;
                }
                interface DNSResolverHostOverrideAliasId extends DNSResolverHostOverrideAliasParentId {
                    id: number;
                }
                interface DNSResolverHostOverride {
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
                interface DNSResolverHostOverrideId extends DNSResolverHostOverride {
                    id: number;
                }
                enum post {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias"
                }
                enum patch {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias"
                }
                enum del {
                    default = "/services/dns_resolver/host_override",
                    alias = "/services/dns_resolver/host_override/alias",
                    overrides = "/services/dns_resolver/host_overrides"
                }
                enum put {
                    overrides = "/services/dns_resolver/host_overrides"
                }
            }
        }
        namespace haProxy {
            enum get {
                apply = "/services/haproxy/apply",
                file = "/services/haproxy/file",
                files = "/services/haproxy/files",
                settings = "/services/haproxy/settings"
            }
            interface HAProxyFile {
                name: string;
                type?: "luascript" | "writetodisk" | null;
                content: string;
            }
            interface HAProxyFileId extends HAProxyFile {
                id: number;
            }
            interface HAProxyApply {
                applied: boolean;
            }
            enum post {
                apply = "/services/haproxy/apply",
                file = "/services/haproxy/file"
            }
            enum patch {
                file = "/services/haproxy/file",
                settings = "/services/haproxy/settings"
            }
            enum del {
                file = "/services/haproxy/file",
                files = "/services/haproxy/files"
            }
            enum put {
                files = "/services/haproxy/files"
            }
            namespace backend {
                enum get {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server",
                    backends = "/services/haproxy/backends"
                }
                interface HAProxyBackendACL {
                    name: string;
                    expression: string;
                    value: string;
                    casesensitive: boolean;
                    not: boolean;
                }
                interface HAProxyBackendACLParentId extends HAProxyBackendACL {
                    parent_id: number;
                }
                interface HAProxyBackendACLId extends HAProxyBackendACLParentId {
                    id: number;
                }
                interface HAProxyBackendAction {
                    action: "use_server" | "custom" | "http-request_allow" | "http-request_deny" | "http-request_tarpit" | "http-request_auth" | "http-request_redirect" | "http-request_lua" | "http-request_use-service" | "http-request_add-header" | "http-request_set-header" | "http-request_del-header" | "http-request_replace-header" | "http-request_replace-path" | "http-request_replace-value" | "http-request_set-method" | "http-request_set-path" | "http-request_set-query" | "http-request_set-uri" | "http-response_allow" | "http-response_deny" | "http-response_lua" | "http-response_add-header" | "http-response_set-header" | "http-response_del-header" | "http-response_replace-header" | "http-response_replace-value" | "http-response_set-status" | "http-after-response_add-header" | "http-after-response_set-header" | "http-after-response_del-header" | "http-after-response_replace-header" | "http-after-response_replace-value" | "http-after-response_set-status" | "tcp-request_connection_accept" | "tcp-request_connection_reject" | "tcp-request_content_accept" | "tcp-request_content_reject" | "tcp-request_content_lua" | "tcp-request_content_use-service" | "tcp-response_content_accept" | "tcp-response_content_close" | "tcp-response_content_reject" | "tcp-response_content_lua";
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
                interface HAProxyBackendActionParentId extends HAProxyBackendAction {
                    parent_id: number;
                }
                interface HAProxyBackendActionId extends HAProxyBackendActionParentId {
                    id: number;
                }
                interface HAProxyBackend {
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
                        expression: "host_starts_with" | "host_ends_with" | "host_matches" | "host_regex" | "host_contains" | "path_starts_with" | "path_ends_with" | "path_matches" | "path_regex" | "path_contains" | "path_dir" | "url_parameter" | "ssl_c_verify_code" | "ssl_c_verify" | "ssl_c_ca_commonname" | "source_ip" | "backendservercount" | "traffic_is_http" | "traffic_is_ssl" | "ssl_sni_matches" | "ssl_sni_contains" | "ssl_sni_starts_with" | "ssl_sni_ends_with" | "ssl_sni_regex" | "custom";
                        value: string;
                        casesensitive: boolean;
                        not: boolean;
                    }[];
                    actions: {
                        action: "use_server" | "custom" | "http-request_allow" | "http-request_deny" | "http-request_tarpit" | "http-request_auth" | "http-request_redirect" | "http-request_lua" | "http-request_use-service" | "http-request_add-header" | "http-request_set-header" | "http-request_del-header" | "http-request_replace-header" | "http-request_replace-path" | "http-request_replace-value" | "http-request_set-method" | "http-request_set-path" | "http-request_set-query" | "http-request_set-uri" | "http-response_allow" | "http-response_deny" | "http-response_lua" | "http-response_add-header" | "http-response_set-header" | "http-response_del-header" | "http-response_replace-header" | "http-response_replace-value" | "http-response_set-status" | "http-after-response_add-header" | "http-after-response_set-header" | "http-after-response_del-header" | "http-after-response_replace-header" | "http-after-response_replace-value" | "http-after-response_set-status" | "tcp-request_connection_accept" | "tcp-request_connection_reject" | "tcp-request_content_accept" | "tcp-request_content_reject" | "tcp-request_content_lua" | "tcp-request_content_use-service" | "tcp-response_content_accept" | "tcp-response_content_close" | "tcp-response_content_reject" | "tcp-response_content_lua";
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
                    persist_cookie_mode: "passive" | "passive-silent" | "reset" | "set" | "set-silent" | "insert-only" | "insert-only-silent" | "session-prefix" | "passive-session-prefix";
                    persist_cookie_cachable: boolean;
                    persist_cookie_postonly: boolean;
                    persist_cookie_httponly: boolean;
                    persist_cookie_secure: boolean;
                    haproxy_cookie_maxidle?: number;
                    haproxy_cookie_maxlife?: number;
                    haproxy_cookie_domains: string[];
                    haproxy_cookie_dynamic_cookie_key: string;
                    persist_sticky_type: "none" | "stick_sslsessionid" | "stick_sourceipv4" | "stick_sourceipv6" | "stick_cookie_value" | "stick_rdp_cookie";
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
                interface HAProxyBackendId extends HAProxyBackend {
                    id: number;
                }
                interface HAProxyBackendErrorFile {
                    errorcode: number;
                    errorfile: string;
                }
                interface HAProxyBackendErrorFileParentId extends HAProxyBackendErrorFile {
                    parent_id: number;
                }
                interface HAProxyBackendErrorFileId extends HAProxyBackendErrorFileParentId {
                    id: number;
                }
                interface HAProxyBackendServer {
                    name: string;
                    status: "active" | "backup" | "disabled" | "inactive";
                    address: string;
                    port: string;
                    weight: number;
                    ssl: boolean;
                    sslserververify: boolean;
                    serverid?: number;
                }
                interface HAProxyBackendServerParentId extends HAProxyBackendServer {
                    parent_id: number;
                }
                interface HAProxyBackendServerId extends HAProxyBackendServerParentId {
                    id: number;
                }
                enum post {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server"
                }
                enum patch {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server"
                }
                enum del {
                    default = "/services/haproxy/backend",
                    acl = "/services/haproxy/backend/acl",
                    action = "/services/haproxy/backend/action",
                    errorFile = "/services/haproxy/backend/error_file",
                    server = "/services/haproxy/backend/server",
                    backends = "/services/haproxy/backends"
                }
                enum put {
                    backends = "/services/haproxy/backends"
                }
            }
            namespace frontend {
                enum get {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file",
                    frontends = "/services/haproxy/frontends"
                }
                interface HAProxyFrontend {
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
                        expression: "host_starts_with" | "host_ends_with" | "host_matches" | "host_regex" | "host_contains" | "path_starts_with" | "path_ends_with" | "path_matches" | "path_regex" | "path_contains" | "path_dir" | "url_parameter" | "ssl_c_verify_code" | "ssl_c_verify" | "ssl_c_ca_commonname" | "source_ip" | "backendservercount" | "traffic_is_http" | "traffic_is_ssl" | "ssl_sni_matches" | "ssl_sni_contains" | "ssl_sni_starts_with" | "ssl_sni_ends_with" | "ssl_sni_regex" | "custom";
                        value: string;
                        casesensitive: boolean;
                        not: boolean;
                    }[];
                    a_actionitems: {
                        action: "use_backend" | "custom" | "http-request_allow" | "http-request_deny" | "http-request_tarpit" | "http-request_auth" | "http-request_redirect" | "http-request_lua" | "http-request_use-service" | "http-request_add-header" | "http-request_set-header" | "http-request_del-header" | "http-request_replace-header" | "http-request_replace-path" | "http-request_replace-value" | "http-request_set-method" | "http-request_set-path" | "http-request_set-query" | "http-request_set-uri" | "http-response_allow" | "http-response_deny" | "http-response_lua" | "http-response_add-header" | "http-response_set-header" | "http-response_del-header" | "http-response_replace-header" | "http-response_replace-value" | "http-response_set-status" | "http-after-response_add-header" | "http-after-response_set-header" | "http-after-response_del-header" | "http-after-response_replace-header" | "http-after-response_replace-value" | "http-after-response_set-status" | "tcp-request_connection_accept" | "tcp-request_connection_reject" | "tcp-request_content_accept" | "tcp-request_content_reject" | "tcp-request_content_lua" | "tcp-request_content_use-service" | "tcp-response_content_accept" | "tcp-response_content_close" | "tcp-response_content_reject" | "tcp-response_content_lua";
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
                interface HAProxyFrontendId extends HAProxyFrontend {
                    id: number;
                }
                interface HAProxyFrontendErrorFile {
                    errorcode: number;
                    errorfile: string;
                }
                interface HAProxyFrontendErrorFileParentId extends HAProxyFrontendErrorFile {
                    parent_id: number;
                }
                interface HAProxyFrontendErrorFileId extends HAProxyFrontendErrorFileParentId {
                    id: number;
                }
                interface HAProxyFrontendACL {
                    name: string;
                    expression: "host_starts_with" | "host_ends_with" | "host_matches" | "host_regex" | "host_contains" | "path_starts_with" | "path_ends_with" | "path_matches" | "path_regex" | "path_contains" | "path_dir" | "url_parameter" | "ssl_c_verify_code" | "ssl_c_verify" | "ssl_c_ca_commonname" | "source_ip" | "backendservercount" | "traffic_is_http" | "traffic_is_ssl" | "ssl_sni_matches" | "ssl_sni_contains" | "ssl_sni_starts_with" | "ssl_sni_ends_with" | "ssl_sni_regex" | "custom";
                    value: string;
                    casesensitive: boolean;
                    not: boolean;
                }
                interface HAProxyFrontendACLParentId extends HAProxyFrontendACL {
                    parent_id: number;
                }
                interface HAProxyFrontendACLId extends HAProxyFrontendACLParentId {
                    id: number;
                }
                interface HAProxyFrontendAction {
                    action: "use_backend" | "custom" | "http-request_allow" | "http-request_deny" | "http-request_tarpit" | "http-request_auth" | "http-request_redirect" | "http-request_lua" | "http-request_use-service" | "http-request_add-header" | "http-request_set-header" | "http-request_del-header" | "http-request_replace-header" | "http-request_replace-path" | "http-request_replace-value" | "http-request_set-method" | "http-request_set-path" | "http-request_set-query" | "http-request_set-uri" | "http-response_allow" | "http-response_deny" | "http-response_lua" | "http-response_add-header" | "http-response_set-header" | "http-response_del-header" | "http-response_replace-header" | "http-response_replace-value" | "http-response_set-status" | "http-after-response_add-header" | "http-after-response_set-header" | "http-after-response_del-header" | "http-after-response_replace-header" | "http-after-response_replace-value" | "http-after-response_set-status" | "tcp-request_connection_accept" | "tcp-request_connection_reject" | "tcp-request_content_accept" | "tcp-request_content_reject" | "tcp-request_content_lua" | "tcp-request_content_use-service" | "tcp-response_content_accept" | "tcp-response_content_close" | "tcp-response_content_reject" | "tcp-response_content_lua";
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
                interface HAProxyFrontendActionParentId {
                    parent_id: number;
                }
                interface HAProxyFrontendActionId extends HAProxyFrontendActionParentId {
                    id: number;
                }
                interface HAProxyFrontendAddress {
                    extaddr: "custom" | "any_ipv4" | "any_ipv6" | "localhost_ipv4" | "localhost_ipv6";
                    extaddr_custom: string;
                    extaddr_port?: string;
                    extaddr_ssl: boolean;
                    exaddr_advanced: string;
                }
                interface HAProxyFrontendAddressParentId extends HAProxyFrontendAddress {
                    parent_id: number;
                }
                interface HAProxyFrontendAddressId extends HAProxyFrontendAddressParentId {
                    id: number;
                }
                enum post {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file"
                }
                enum patch {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file"
                }
                enum del {
                    default = "/services/haproxy/frontend",
                    acl = "/services/haproxy/frontend/acl",
                    action = "/services/haproxy/frontend/action",
                    address = "/services/haproxy/frontend/address",
                    errorFile = "/services/haproxy/frontend/error_file",
                    frontends = "/services/haproxy/frontends"
                }
                enum put {
                    frontends = "/services/haproxy/frontends"
                }
            }
            namespace settings {
                enum get {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                    default = "/services/haproxy/settings"
                }
                interface HAProxySettings {
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
                    logfacility: "kern" | "user" | "mail" | "daemon" | "auth" | "syslog" | "lpr" | "news" | "uucp" | "cron" | "auth2" | "ftp" | "ntp" | "audit" | "cron2" | "local0" | "local1" | "local2" | "local3" | "local4" | "local5" | "local6" | "local7";
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
                interface HAProxyDNSResolver {
                    name: string;
                    server: string;
                    port: string;
                }
                interface HAProxyDNSResolverId extends HAProxyDNSResolver {
                    id: number;
                }
                interface HAProxyEmailMailer {
                    name: string;
                    mailserver: string;
                    mailserverport: string;
                }
                interface HAProxyEmailMailerId extends HAProxyEmailMailer {
                    id: number;
                }
                enum post {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer"
                }
                enum patch {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer",
                    default = "/services/haproxy/settings"
                }
                enum del {
                    dns_resolver = "/services/haproxy/settings/dns_resolver",
                    email = "/services/haproxy/settings/email_mailer"
                }
                enum put {
                }
            }
        }
        namespace ntp {
            enum get {
                settings = "/services/ntp/settings",
                time_server = "/services/ntp/time_server",
                time_servers = "/services/ntp/time_servers"
            }
            interface NTPSettings {
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
            interface NTPTimeServer {
                timeserver: string;
                type: "server" | "pool" | "peer";
                prefer: boolean;
                noselect: boolean;
            }
            interface NTPTimeServerId extends NTPTimeServer {
                id: number;
            }
            enum post {
                time_server = "/services/ntp/time_server"
            }
            enum patch {
                settings = "/services/ntp/settings",
                time_server = "/services/ntp/time_server"
            }
            enum del {
                time_server = "/services/ntp/time_server",
                time_servers = "/services/ntp/time_servers"
            }
            enum put {
                time_servers = "/services/ntp/time_servers"
            }
        }
        namespace ssh {
            enum get {
                default = "/services/ssh"
            }
            interface SSH {
                enable: boolean;
                port: string;
                sshdkeyonly?: "enabled" | "both";
                sshdagentforwarding: boolean;
            }
            enum post {
            }
            enum patch {
                default = "/services/ssh"
            }
            enum del {
            }
            enum put {
            }
        }
        namespace service_watchdog {
            enum get {
                default = "/services/service_watchdog",
                watchdogs = "/services/service_watchdogs"
            }
            interface ServiceWatchdog {
                name: string;
                description?: string;
                notify: boolean;
                enabled?: boolean;
            }
            interface ServiceWatchdogId extends ServiceWatchdog {
                id: number;
            }
            enum post {
                default = "/services/service_watchdog"
            }
            enum patch {
                default = "/services/service_watchdog"
            }
            enum del {
                default = "/services/service_watchdog",
                watchdogs = "/services/service_watchdogs"
            }
            enum put {
                watchdogs = "/services/service_watchdogs"
            }
        }
        namespace wakeOnLan {
            enum post {
                send = "/services/wake_on_lan/send"
            }
            interface WakeOnLan {
                interface: string;
                mac_addr: string;
            }
        }
    }
    namespace status {
        enum get {
            carp = "/status/carp",
            gateways = "/status/gateways",
            interfaces = "/status/interfaces",
            services = "/status/services",
            system = "/status/system"
        }
        interface Service {
            name: string;
            description?: string;
            enabled?: boolean;
            status?: boolean;
        }
        interface SystemStatus {
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
        interface InterfaceStats {
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
        interface RoutingGatewayStatus {
            name?: string;
            srcip?: string;
            monitorip?: string;
            delay?: number;
            stddev?: number;
            loss?: number;
            status?: string;
            substatus?: string;
        }
        interface CARP {
            enable: boolean;
            maintenance_mode: boolean;
        }
        enum post {
            service = "/status/service"
        }
        enum patch {
            carp = "/status/carp"
        }
        enum del {
        }
        enum put {
        }
        namespace dhcpServer {
            enum get {
                leases = "/status/dhcp_server/leases"
            }
            interface DHCPServerLease {
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
            enum post {
            }
            enum patch {
            }
            enum del {
                leases = "/status/dhcp_server/leases"
            }
            enum put {
            }
        }
        namespace ipsec {
            enum get {
                child_sa = "/status/ipsec/child_sa",
                sas = "/status/ipsec/sas"
            }
            interface IPsecChildSAStatus {
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
            interface IPsecSAStatus {
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
        namespace logs {
            enum get {
                dhcp = "/status/logs/dhcp",
                firewall = "/status/logs/firewall",
                settings = "/status/logs/settings",
                system = "/status/logs/system"
            }
            interface DHCPLog {
                text: string;
            }
            interface FirewallLog {
                text: string;
            }
            enum patch {
                settings = "/status/logs/settings"
            }
            interface LogSettings {
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
            interface SystemLog {
                text: string;
            }
        }
        namespace openvpn {
            enum get {
                clients = "/status/openvpn/clients",
                servers = "/status/openvpn/servers"
            }
            interface OpenVPNServerStatus {
                name?: string | null;
                mode?: string | null;
                port?: string | null;
                vpnid?: number | null;
                mgmt?: string | null;
                conns?: {
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
                }[] | null;
                routes?: {
                    common_name?: string | null;
                    remote_host?: string | null;
                    virtual_addr?: string | null;
                    last_time?: string | null;
                }[] | null;
            }
            interface OpenVPNServerRouteStatus {
                common_name?: string | null;
                remote_host?: string | null;
                virtual_addr?: string | null;
                last_time?: string | null;
            }
            interface OpenVPNConnectionStatus {
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
            interface OpenVPNClientStatus {
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
            namespace server {
                enum get {
                    connection = "/status/openvpn/server/connection",
                    route = "/status/openvpn/server/route"
                }
                enum post {
                }
                enum patch {
                }
                enum del {
                    connection = "/status/openvpn/server/connection"
                }
                enum put {
                }
            }
        }
    }
    namespace system {
        enum get {
            certificate_authorities = "/system/certificate_authorities",
            console = "/system/console",
            dns = "/system/dns",
            hostname = "/system/hostname",
            email_settings = "/system/notificaitons/email_settings",
            tunable = "/system/tunable",
            tunables = "/system/tunables",
            webgui_settings = "/system/webgui/settings",
            version = "/system/version"
        }
        interface SystemConsole {
            passwd_protect_console: boolean;
        }
        interface SystemDNS {
            dnsallowoverride: boolean;
            dnslocalhost: "local" | "remote" | null;
            dnsserver: string[];
        }
        interface SystemHostname {
            hostname: string;
            domain: string;
        }
        interface SystemTunable {
            tunable: string;
            value: string;
            descr: string;
        }
        interface SystemTunableId extends SystemTunable {
            id: number;
        }
        interface SystemVersion {
            version?: string | null;
            base?: string | null;
            patch?: string | null;
            buildtime?: string | null;
        }
        interface WebGUISettings {
            protocol: "http" | "https";
            port: string;
            sslcertref: string;
        }
        enum post {
            tunable = "/system/tunable"
        }
        enum patch {
            console = "/system/console",
            dns = "/system/dns",
            hostname = "/system/hostname",
            email_settings = "/system/notificaitons/email_settings",
            tunable = "/system/tunable",
            webgui_settings = "/system/webgui/settings"
        }
        enum del {
            certificate_authorities = "/system/certificate_authorities",
            tunable = "/system/tunable",
            tunables = "/system/tunables"
        }
        enum put {
            tunables = "/system/tunables"
        }
        namespace crl {
            enum get {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate",
                crls = "/system/crls"
            }
            interface CertificateRevocationList {
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
            interface CertificateRevocationListId extends CertificateRevocationList {
                id: number;
            }
            enum post {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate"
            }
            interface CertificateRevocationListRevokedCertificate {
                certref: string;
                serial?: string;
                reason: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 9;
                revoke_time: number;
            }
            interface CertificateRevocationListRevokedCertificateParentId extends CertificateRevocationListRevokedCertificate {
                parent_id: number;
            }
            interface CertificateRevocationListRevokedCertificateId extends CertificateRevocationListRevokedCertificateParentId {
                id: number;
            }
            enum patch {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate"
            }
            enum del {
                default = "/system/crl",
                revoke_certificate = "/system/crl/revoke_certificate",
                crls = "/system/crls"
            }
            enum put {
            }
        }
        namespace certificate_authority {
            enum get {
                default = "/system/certificate_authority"
            }
            interface CertificateAuthority {
                descr: string;
                refid?: string;
                trust: boolean;
                randomserial: boolean;
                serial: number;
                crt: string;
                prv: string;
            }
            interface CertificateAuthorityId extends CertificateAuthority {
                id: number;
            }
            interface GenerateCertificateRequest {
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
            interface CertificateAuthorityGenerate {
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
            interface CertificateAuthorityRenewRequest {
                caref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
            }
            interface CertificateAuthorityRenew {
                caref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
                oldserial?: string;
                newserial?: string;
            }
            enum post {
                default = "/system/certificate_authority",
                generate = "/system/certificate_authority/generate",
                renew = "/system/certificate_authority/renew"
            }
            enum patch {
                default = "/system/certificate_authority"
            }
            enum del {
                default = "/system/certificate_authority"
            }
            enum put {
            }
        }
        namespace certificate {
            enum get {
                default = "/system/certificate",
                certificates = "/system/certificates"
            }
            interface Certificate {
                descr: string;
                refid?: string;
                type: "server" | "user";
                csr?: string;
                crt: string;
                prv: string;
            }
            interface CertificateSigningRequestSign {
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
            interface CertificateSigningRequest {
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
            interface CertificateRenew {
                certref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
                oldserial?: string;
                newserial?: string;
            }
            interface GenerateInternalCertificateRequest {
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
            interface CertificateId extends Certificate {
                id: number;
            }
            interface InternalCertificateRenewRequest {
                certref: string;
                reusekey: boolean;
                reuseserial: boolean;
                strictsecurity: boolean;
            }
            enum post {
                default = "/system/certificate",
                renew = "/system/certificate/renew",
                generate = "/system/certificate/generate",
                pkcs12 = "/system/certificate/pkcs12/export",
                signing_request = "/system/certificate/signing_request",
                sign = "/system/certificate/signing_request/sign"
            }
            interface PKCS12exportRequest {
                certref: string;
                encryption: "high" | "low" | "legacy";
                passphrase: string;
            }
            enum patch {
                default = "/system/certificate"
            }
            enum del {
                default = "/system/certificate",
                certificates = "/system/certificates"
            }
            enum put {
            }
        }
        namespace Package {
            enum get {
                available = "/system/package/available",
                default = "/system/package",
                packages = "/system/packages"
            }
            interface Package {
                name: string;
                shortname?: string;
                descr?: string;
                installed_version?: string;
                latest_version?: string;
                update_available?: boolean;
            }
            interface AvailablePackage {
                name: string;
                shortname?: string;
                descr?: string;
                version?: string;
                installed?: boolean;
                deps?: string[];
            }
            enum post {
                default = "/system/package"
            }
            enum patch {
            }
            enum del {
                default = "/system/package",
                packages = "/system/packages"
            }
            enum put {
            }
        }
        namespace restapi {
            enum get {
                access_list = "/system/restapi/access_list",
                entry = "/system/restapi/access_list/entry",
                settings = "/system/restapi/settings",
                version = "/system/restapi/version"
            }
            interface RESTAPIAccessListEntry {
                type: "allow" | "deny";
                weight: number;
                network: string;
                users: string[];
                sched: string;
                descr: string;
            }
            interface RESTAPIAccessListEntryId extends RESTAPIAccessListEntry {
                id: number;
            }
            interface RESTAPISettings {
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
            interface RESTAPISettingsSync {
                sync_data: string;
            }
            interface RESTAPIVersion {
                current_version?: string | null;
                latest_version?: string | null;
                latest_version_release_date?: string | null;
                update_available?: boolean | null;
                available_versions?: string[] | null;
            }
            enum post {
                entry = "/system/restapi/access_list/entry",
                settings_sync = "/system/restapi/settings/sync"
            }
            enum patch {
                entry = "/system/restapi/access_list/entry",
                settings = "/system/restapi/settings",
                version = "/system/restapi/version"
            }
            enum del {
                access_list = "/system/restapi/access_list",
                entry = "/system/restapi/access_list/entry"
            }
            enum put {
                access_list = "/system/restapi/access_list"
            }
        }
    }
    namespace user {
        enum get {
            default = "/user",
            auth_server = "/user/auth_server",
            auth_servers = "/user/auth_servers",
            group = "/user/group",
            groups = "/user/groups",
            users = "/users"
        }
        interface User {
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
        interface UserId extends User {
            id: number;
        }
        interface UserGroup {
            name: string;
            gid?: number;
            scope: "local" | "remote";
            description: string;
            member: string[];
            priv: string[];
        }
        interface UserGroupId extends UserGroup {
            id: number;
        }
        interface AuthServer {
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
        interface AuthServerId extends AuthServer {
            id: number;
        }
        enum post {
            default = "/user",
            auth_server = "/user/auth_server",
            group = "/user/group",
            groups = "/user/groups"
        }
        enum patch {
            default = "/user",
            auth_server = "/user/auth_server",
            group = "/user/group"
        }
        enum del {
            default = "/user",
            auth_server = "/user/auth_server",
            auth_servers = "/user/auth_servers",
            group = "/user/group",
            groups = "/user/groups",
            users = "/users"
        }
        enum put {
            auth_servers = "/user/auth_servers",
            groups = "/user/groups"
        }
    }
    namespace vpn {
        namespace ipsec {
            enum get {
                apply = "/vpn/ipsec/apply",
                phase1s = "/vpn/ipsec/phase1s",
                phase2s = "/vpn/ipsec/phase2s"
            }
            interface IPsecApply {
                applied: boolean;
            }
            interface IPsecPhase1Encryption {
                encryption_algorithm_name: "aes" | "aes128gcm" | "aes192gcm" | "aes256gcm" | "chacha20poly1305";
                encryption_algorithm_keylen: number;
                hash_algorithm: "sha1" | "sha256" | "sha384" | "sha512" | "aesxcbc";
                dhgroup: 1 | 2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32;
                prf_algorithm: "sha1" | "sha256" | "sha384" | "sha512" | "aesxcbc";
            }
            interface IPsecPhase1EncryptionParentId extends IPsecPhase1Encryption {
                parent_id: number;
            }
            interface IPsecPhase1EncryptionId extends IPsecPhase1EncryptionParentId {
                id: number;
            }
            interface IPsecPhase1 {
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
            interface IPsecPhase1Id extends IPsecPhase1 {
                id: number;
            }
            interface IPsecPhase2Encryption {
                name: "aes" | "aes128gcm" | "aes192gcm" | "aes256gcm" | "chacha20poly1305";
                keylen: number;
            }
            interface IPsecPhase2EncryptionParentId extends IPsecPhase2Encryption {
                parent_id: number;
            }
            interface IPsecPhase2EncryptionId extends IPsecPhase2EncryptionParentId {
                id: number;
            }
            interface IPsecPhase2 {
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
            interface IPsecPhase2Id extends IPsecPhase2 {
                id: number;
            }
            enum post {
                apply = "/vpn/ipsec/apply"
            }
            enum patch {
            }
            enum del {
                phase1s = "/vpn/ipsec/phase1s",
                phase2s = "/vpn/ipsec/phase2s"
            }
            enum put {
                phase1s = "/vpn/ipsec/phase1s",
                phase2s = "/vpn/ipsec/phase2s"
            }
            namespace phase1 {
                enum get {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption"
                }
                enum post {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption"
                }
                enum patch {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption"
                }
                enum del {
                    default = "/vpn/ipsec/phase1",
                    encryption = "/vpn/ipsec/phase1/encryption"
                }
                enum put {
                }
            }
            namespace phase2 {
                enum get {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption"
                }
                enum post {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption"
                }
                enum patch {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption"
                }
                enum del {
                    default = "/vpn/ipsec/phase2",
                    encryption = "/vpn/ipsec/phase2/encryption"
                }
                enum put {
                }
            }
        }
        namespace openvpn {
            enum get {
                cso = "/vpn/openvpn/cso",
                csos = "/vpn/openvpn/csos",
                client = "/vpn/openvpn/client",
                clients = "/vpn/openvpn/clients",
                server = "/vpn/openvpn/server",
                servers = "/vpn/openvpn/servers"
            }
            interface OpenVPNClientSpecificOverride {
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
            interface OpenVPNClientSpecificOverrideId extends OpenVPNClientSpecificOverride {
                id: number;
            }
            interface OpenVPNClient {
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
            interface OpenVPNClientId extends OpenVPNClient {
                id: number;
            }
            interface OpenVPNServer {
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
            interface OpenVPNServerId extends OpenVPNServer {
                id: number;
            }
            enum post {
                cso = "/vpn/openvpn/cso",
                client = "/vpn/openvpn/client",
                server = "/vpn/openvpn/server"
            }
            enum patch {
                cso = "/vpn/openvpn/cso",
                client = "/vpn/openvpn/client",
                server = "/vpn/openvpn/server"
            }
            enum del {
                cso = "/vpn/openvpn/cso",
                csos = "/vpn/openvpn/csos",
                client = "/vpn/openvpn/client",
                clients = "/vpn/openvpn/clients",
                server = "/vpn/openvpn/server",
                servers = "/vpn/openvpn/servers"
            }
            enum put {
            }
        }
        namespace wireguard {
            enum get {
                apply = "/vpn/wireguard/apply",
                settings = "/vpn/wireguard/settings"
            }
            interface WireGuardSettings {
                enable: boolean;
                keep_conf: boolean;
                resolve_interval_track: boolean;
                resolve_interval: number;
                interface_group: "all" | "unassigned" | "none";
                hide_secrets: boolean;
                hide_peers: boolean;
            }
            interface WireGuardApply {
                applied: boolean;
            }
            enum post {
                apply = "/vpn/wireguard/apply"
            }
            enum patch {
                settings = "/vpn/wireguard/settings"
            }
            enum del {
            }
            enum put {
            }
            namespace peer {
                enum get {
                    default = "/vpn/wireguard/peer",
                    peers = "/vpn/wireguard/peers",
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips"
                }
                interface WireGuardPeerAllowedIP {
                    address: string;
                    mask: number;
                    descr: string;
                }
                interface WireGuardPeerAllowedIPId extends WireGuardPeerAllowedIP {
                    id: number;
                }
                interface WireGuardPeer {
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
                interface WireGuardPeerId extends WireGuardPeer {
                    id: number;
                }
                enum post {
                    default = "/vpn/wireguard/peer",
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips"
                }
                enum patch {
                    default = "/vpn/wireguard/peer",
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips"
                }
                enum del {
                    default = "/vpn/wireguard/peer",
                    peers = "/vpn/wireguard/peers",
                    allowed_ips = "/vpn/wireguard/peer/allowed_ips"
                }
                enum put {
                    peers = "/vpn/wireguard/peers"
                }
            }
            namespace tunnel {
                enum get {
                    default = "/vpn/wireguard/tunnel",
                    tunnels = "/vpn/wireguard/tunnels",
                    address = "/vpn/wireguard/tunnel/address"
                }
                interface WireGuardTunnel {
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
                interface WireGuardTunnelId extends WireGuardTunnel {
                    id: number;
                }
                interface WireGuardTunnelAddress {
                    address: string;
                    mask: number;
                    descr: string;
                }
                interface WireGuardTunnelAddressParentId extends WireGuardTunnelAddress {
                    parent_id: number;
                }
                interface WireGuardTunnelAddressId extends WireGuardTunnelAddressParentId {
                    id: number;
                }
                enum post {
                    default = "/vpn/wireguard/tunnel",
                    address = "/vpn/wireguard/tunnel/address"
                }
                enum patch {
                    default = "/vpn/wireguard/tunnel",
                    address = "/vpn/wireguard/tunnel/address"
                }
                enum del {
                    default = "/vpn/wireguard/tunnel",
                    tunnels = "/vpn/wireguard/tunnels",
                    address = "/vpn/wireguard/tunnel/address"
                }
                enum put {
                    tunnels = "/vpn/wireguard/tunnels"
                }
            }
        }
    }
}
export default Pfsense;
//# sourceMappingURL=index.d.ts.map