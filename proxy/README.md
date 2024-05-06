# ActionStep Proxy

- Transparent [proxy](https://www.npmjs.com/package/http-proxy) server which uses [bottleneck](https://www.npmjs.com/package/bottleneck) to self-limit ActionStep API requests
- Deployed with [bun](https://bun.sh/) to improve performance, minimise footprint

# Setup

Uses [bun](https://bun.sh/) instead of Node

### Install Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

### Install Packages

```bash
bun install
```

### Run code

```bash
bun start
```

# Usage

Use proxy in the same way as using the ActionStep API endpoint

```bash
curl -X GET -H "Content-Type: application/vnd.api+json" \
  -H "Accept: application/vnd.api+json" \
  -H "Authorization: Bearer <token>" \
  https://my-actionstep-proxy.com/api/rest/users/current
```

## Logging requests

To track all client requests, add an `x-client-id` header eg.

```bash
curl -X GET -H "Content-Type: application/vnd.api+json" \
  -H "Accept: application/vnd.api+json" \
  -H "Authorization: Bearer <token>" \
  -H "x-client-id: my-example-client" \
  https://my-actionstep-proxy.com/api/rest/users/current
```
