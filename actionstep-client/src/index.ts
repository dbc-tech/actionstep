import { AuthorizationCode } from 'simple-oauth2'

export type ActionStepClientConfig = {
  client_id: string
  client_secret: string
  authorize_url: string
  token_url: string
}

export const createAuthorizationCode = (config: ActionStepClientConfig) => {
  const authorizeURL = new URL(config.authorize_url)
  const tokenURL = new URL(config.token_url)

  const authCode = new AuthorizationCode({
    client: {
      id: config.client_id,
      secret: config.client_secret,
    },
    auth: {
      authorizeHost: authorizeURL.origin,
      authorizePath: authorizeURL.pathname,
      tokenHost: tokenURL.origin,
      tokenPath: tokenURL.pathname,
    },
    http: { json: 'force' },
  })

  return authCode
}
