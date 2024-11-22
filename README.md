# Pfsense-api

This npm package is designed to interact with the Pfsense API, inspired by the work done in [jaredhendrickson13/pfsense-api](https://github.com/jaredhendrickson13/pfsense-api).

## Installation

To install the package, run:

```bash
npm install pfsense-api
```

## Usage

Here is a basic example of how to use the package:

```javascript
const Pfsense = require("pfsense-api");

const pf = new Pfsense("https://hosturl", "api_key");

const version = await pf.system.getVersion();
```

Implements all endpoints from [pfrest](https://pfrest.org/api-docs/#/)

## Features

-   Easy interaction with Pfsense API
-   Supports multiple endpoints
-   Handles authentication

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

# Disclaimers

Caution

Just like the RESTAPI, This package is not affiliated or supported by Netgate or the pfSense team. This package is developed and maintained by the community.

## License

This project is licensed under the Apache-2.0 License.
