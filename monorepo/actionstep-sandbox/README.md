# actionstep-sandbox

Test ActionStep endpoints

## Getting Started

Buid monorepo

```
cd monorepo
npm i
npm run build
```

Copy `.env.example` and edit to suit

```
cd actionstep-sandbox
cp .env.example .env
```

Edit `.env` file and set value for `ACTIONSTEP_TOKEN_URL` which is the endpoint which returns the stored ActionStep token.

Determine if token service is considered current or legacy and edit `runner.ts` and use the appropriate `actionStepTokenClient` or `actionStepLegacyTokenClient`.

A token service should return tokens in the following format:

```json
{
  "access_token": "...",
  "api_endpoint": "https://ap-southeast-2.actionstep.com/api/",
  "expires_at": "2024-03-08T09:04:49.747Z",
  "expires_in": 28800,
  "orgkey": "...",
  "refresh_token": "...",
  "token_type": "bearer"
}
```

A legacy token service should return tokens in the following format:

```json
{
  "status": 200,
  "message": "OK",
  "data": {
    "actionstep": {
      "id": "1",
      "access_token": "...",
      "token_type": "bearer",
      "expires_in": "28800",
      "api_endpoint": "https://ap-southeast-2.actionstep.com/api/",
      "orgkey": "...",
      "refresh_token": "...",
      "generated": "2024-03-08 11:40:25",
      "date_expiry": "2024-03-08 19:40:25"
    }
  }
}
```

Test endpoints by passing endpoint name to the runner eg. `getActions`

```
npm run runner getActions
```
