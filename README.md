# actionstep

ActionStep TypeScript API Client

## Installation

### Client SDK

For accessing ActionStep data:

```
npm install @dbc-tech/actionstep
```

### Azure Functions Token Service

For implementing a persistent token store using Azure Functions:

```
npm install @dbc-tech/actionstep-auth-function
```

## Using Client SDK

To use the SDK, an access token is required and because this is short-lived, a token client is created which is passed to the SDK so that each request can obtain a new (or refreshed) token.

Two token clients are provided: `actionStepTokenClient` and `actionStepLegacyTokenClient`. `actionStepTokenClient` is typically used when hosting your token service on Azure, using the `@dbc-tech/actionstep-auth-function` package and `actionStepLegacyTokenClient` is used for previous-generation token services which return the token in a slightly different shape. You can of course create your own implementation of `ActionStepTokenClient` to obtain a token by other means.

Either way, create an instance of your token client and pass in the url of the service which is providing the token, and the ActionStep API URL:

```ts
import { actionStepTokenClient } from '@dbc-tech/actionstep'

const tokenClient = actionStepTokenClient(
  process.env.ACTIONSTEP_TOKEN_URL,
  process.env.ACTIONSTEP_API_URL,
)
```

**Important**: ActionStep has some inconsistencies with API urls and paths found in their OpenAPI specs. An example spec path would be `/actions/{id}`. However, this endpoint is actually served up through `https://ap-southeast-2.actionstep.com/api/rest/actions/{id}`. Therefore, the API url should be: `https://ap-southeast-2.actionstep.com/api/rest` and not `https://ap-southeast-2.actionstep.com/api` which is often returned in the access token. **Be sure your API url ends with `/rest`.**

With the token client you can now create an instance of the `actionStepClient`:

```ts
import { actionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

const client = actionStepClient(tokenClient)
```

ActionStep APIs are split over multiple endpoint groups. Each group is accessed through the client and can be destructured for convenience. For example, to access the `actions` endpoint group:

```ts
const { actions: actionsClient } = actionStepClient(tokenClient)
```

### Example

`get actions` reads all actions one page at a time. Specify the page number, and number of items per page.

```ts
const { data, error } = await actionsClient.getActions(1, 50)
if (error) console.error('error:', error)
else {
  for (const action of data.actions) {
    console.log('get action:', {
      id: action.id,
      name: action.name,
      reference: action.reference,
    })
  }
}
```

As a response could contain an error, it is important first to check the error status. **Note:** `data` and `error` are mutually exclusive. If there is no error then the data shape will match that described in the API documentation. In this case an array of actions is found under the `actions` property.

### Testing endpoints

A sandbox project is available to test individual endpoints. See [readme](monorepo/actionstep-sandbox/README.md) for more information.

## Building Source

1. Install or update [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
    > nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

2. Open the shell and change to the `monorepo` workspace root directory.
    ```sh
    cd monorepo
    ```

3. Install and activate the indicated Node.js version in `.nvmrc`
    ```sh    
    nvm install
    ```

4. Switch to the Node.js version specified in `.nvmrc` in the current shell. You should run this every time you open a new shell.
    ```sh
    nvm use
    node -v
    ```

5. To avoid running `nvm use` for each shell, you can set the system default Node.js version as indicated in the `.nvmrc`. Run the following and restart your shell
    ```sh
    nvm alias default "$(<.nvmrc)"
    ```

8. Install packages
    ```sh
    npm install
    ```

9. Build
    ```sh
    npm run build
    ```

10. To run the unit tests
    ```sh
    npm test
    ```
