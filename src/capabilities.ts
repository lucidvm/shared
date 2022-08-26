export enum GatewayCap {
    // request upgrade to json
    JSONTunnel = "upgrade:json",
    // request upgrade to msgpack
    LECTunnel = "upgrade:lec",

    // declare support for simple password-only auth
    LegacyAuth = "auth:legacy",
    // declare support for username/password auth
    LocalAuth = "auth:local",

    // declare general support for auth
    Auth = "auth",
    // declare support for instance information
    Instance = "instance",
    // declare support for route declaration
    Routes = "routes",

    // disables serverside sanitization
    DontSanitize = "mode:nostrip",

    // request a "quote of the day" from the server
    QOTD = "lucid:qotd",
    // declare support for hurl streams
    Hurl = "lucid:hurl",

    // poison cap
    Poison = "lucid:poison"
}