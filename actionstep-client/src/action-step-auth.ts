import { AccessToken, AuthorizationCode } from 'simple-oauth2'
import { ActionStepClientConfig } from './types/action-step-client-config.type'
import { ActionStepAuth } from './types/action-step-auth.type'
import { ActionStepToken } from './types/action-step-token.type'
import { toActionStepToken } from './utils/to-action-step-token'

export const actionStepAuth = (
  config: ActionStepClientConfig,
): ActionStepAuth => {
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
    callback: async (code: string): Promise<ActionStepToken> => {
      accessToken = await authCode.getToken({
        code,
        redirect_uri,
        scope,
      })

      const actionStepToken = toActionStepToken(accessToken.token)
      if (store) await store.set(actionStepToken)

      return actionStepToken
    },
    token: async (): Promise<ActionStepToken> => {
      if (store) {
        accessToken = authCode.createToken(await store.get())
      }

      if (accessToken.expired()) {
        accessToken = await accessToken.refresh()
        if (store) await store.set(toActionStepToken(accessToken.token))
      }

      return toActionStepToken(accessToken.token)
    },
  }
}
