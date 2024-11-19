import axios from "axios";

class Pfsense {
    version: string;
    defaultEndpoint: string;
    host: string;
    key: string;
    full_endpoint: string;
    constructor(host: string, api_key: string, { version } = { version: "v2" }) {
        this.version = version;
        this.defaultEndpoint = "/api/" + this.version + "/";
        this.host = host;
        this.key = api_key;
        this.full_endpoint = this.host + this.defaultEndpoint;
    }
    private getUrl(endpoint: string) {
        return this.full_endpoint + endpoint;
    }
    async init() {
        axios.post(this.getUrl(PfsenseAPI.auth.post.key));
    }
}

namespace PfsenseAPI {
    export namespace auth {
        export enum get {
            keys = "/auth/keys",
            jwt = "/auth/jwt",
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
    }
    export namespace firewall {
        export namespace nat {
            export namespace onetoone {
                export enum get {
                    mapping = "/firewall/nat/one_to_one/mapping",
                    mappings = "/firewall/nat/one_to_one/mappings",
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
            }
            export enum post {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
            }
            export enum del {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
            }
            export enum patch {
                default = "/firewall/schedule",
                time_range = "/firewall/schedule/time_range",
            }
            export enum put {}
        }
        export namespace schedules {
            export enum get {
                default = "/firewall/schedules",
            }
            export enum post {}
            export enum del {
                default = "/firewall/schedules",
            }
            export enum patch {}
            export enum put {
                default = "/firewall/schedules",
            }
        }
        export namespace spaces {
            export enum get {
                default = "/firewall/states",
                size = "/firewall/states/size",
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
                export enum put {}
            }
            export namespace limiters {
                export enum get {
                    default = "/firewall/traffic_shaper/limiters",
                }
                export enum post {
                    default = "/firewall/traffic_shaper/limiters",
                }
                export enum del {}
                export enum patch {}
                export enum put {}
            }
            export enum get {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
            }
            export enum post {
                queue = "/firewall/traffic_shaper/queue",
            }
            export enum del {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
            }
            export enum patch {
                default = "/firewall/traffic_shaper",
                queue = "/firewall/traffic_shaper/queue",
            }
            export enum put {}
        }
        export namespace trafficShapers {
            export enum get {
                default = "/firewall/traffic_shapers",
            }
            export enum post {}
            export enum del {
                default = "/firewall/traffic_shapers",
            }
            export enum patch {}
            export enum put {
                default = "/firewall/traffic_shapers",
            }
        }
        export namespace virtualIp {
            export enum get {
                default = "/firewall/virtual_ip",
                apply = "/firewall/virtual_ip/apply",
            }
            export enum post {
                default = "/firewall/virtual_ip",
                apply = "/firewall/virtual_ip/apply",
            }
            export enum del {
                default = "/firewall/virtual_ip",
            }
            export enum patch {
                default = "/firewall/virtual_ip",
            }
            export enum put {}
        }
        export namespace virtualIps {
            export enum get {
                default = "/firewall/virtual_ips",
            }
            export enum post {}
            export enum del {
                default = "/firewall/virtual_ips",
            }
            export enum patch {}
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
        export enum post {
            alias = "/firewall/alias",
            apply = "/firewall/apply",
            rule = "/firewall/rule",
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
