import { AccessToken, AuthorizationCode, Token } from 'simple-oauth2'

export type ActionStepClientConfig = {
  client_id: string
  client_secret: string
  authorize_url: string
  token_url: string
  scope?: string | string[] | undefined
  redirect_uri: string
  store?: TokenStore
}

export type TokenStore = {
  get: () => Promise<Token>
  set: (token: Token) => Promise<void>
}

export const ActionStepAuth = (config: ActionStepClientConfig) => {
  const authorizeURL = new URL(config.authorize_url)
  const tokenURL = new URL(config.token_url)
  let accessToken: AccessToken

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
    authorizeUrl: (): string => {
      return authCode.authorizeURL({
        redirect_uri: config.redirect_uri,
        scope: config.scope,
      })
    },
    callback: async (code: string): Promise<Token> => {
      accessToken = await authCode.getToken({
        code,
        redirect_uri: config.redirect_uri,
        scope: config.scope,
      })

      if (config.store) await config.store.set(accessToken.token)

      return accessToken.token
    },
    token: async (): Promise<Token> => {
      if (config.store) {
        accessToken = authCode.createToken(await config.store.get())
      }

      if (accessToken.expired()) {
        accessToken = await accessToken.refresh()
        if (config.store) await config.store.set(accessToken.token)
      }

      return accessToken.token
    },
  }
}
