import { AccessToken, AuthorizationCode, Token } from 'simple-oauth2'
import { ActionStepClientConfig } from './types/action-step-client-config.type'

export const ActionStepAuth = (config: ActionStepClientConfig) => {
  const {
    client_id,
    client_secret,
    authorize_url,
    token_url,
    scope,
    redirect_uri,
    store,
  } = config
  const authorizeURL = new URL(authorize_url)
  const tokenURL = new URL(token_url)
  let accessToken: AccessToken

  const authCode = new AuthorizationCode({
    client: {
      id: client_id,
      secret: client_secret,
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
        redirect_uri,
        scope,
      })
    },
    callback: async (code: string): Promise<Token> => {
      accessToken = await authCode.getToken({
        code,
        redirect_uri,
        scope,
      })

      if (store) await store.set(accessToken.token)

      return accessToken.token
    },
    token: async (): Promise<Token> => {
      if (store) {
        accessToken = authCode.createToken(await store.get())
      }

      if (accessToken.expired()) {
        accessToken = await accessToken.refresh()
        if (store) await store.set(accessToken.token)
      }

      return accessToken.token
    },
  }
}
