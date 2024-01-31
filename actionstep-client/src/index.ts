import { AuthorizationCode } from 'simple-oauth2'

export type ActionStepClientConfig = {
  client_id: string
  client_secret: string
  authorize_url: string
  token_url: string
  scope?: string | string[] | undefined
  redirect_uri: string
}

export type HandleCallbackOptions = { code: string }

export const ActionStepAuth = (config: ActionStepClientConfig) => {
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

  return {
    authorizeURL: () => {
      return authCode.authorizeURL({
        redirect_uri: config.redirect_uri,
        scope: config.scope,
      })
    },
    handleCallback: async ({ code }: HandleCallbackOptions) => {
      const { token } = await authCode.getToken({
        code,
        redirect_uri: config.redirect_uri,
        scope: config.scope,
      })

      // TODO: Store token

      return token
    },
  }
}
