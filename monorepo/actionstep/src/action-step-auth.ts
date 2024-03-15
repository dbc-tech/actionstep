import { AccessToken, AuthorizationCode } from 'simple-oauth2'
import { ActionStepAuthConfig } from './types/action-step-auth-config.type'
import { ActionStepAuth } from './types/action-step-auth.type'
import { ActionStepToken } from './types/action-step-token.type'
import { toActionStepToken } from './utils/to-action-step-token'

export const actionStepAuth = (
  config: ActionStepAuthConfig,
): ActionStepAuth => {
  const {
    client_id,
    client_secret,
    authorize_url,
    token_url,
    redirect_uri,
    store,
    logger,
  } = config
  const authorizeURL = new URL(authorize_url)
  const tokenURL = new URL(token_url)
  const scope = config.scope || ''
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
      logger?.debug('Callback with code:', code)
      accessToken = await authCode.getToken({
        code,
        redirect_uri,
        scope,
      })
      logger?.debug('Got accessToken:', accessToken)

      const actionStepToken = toActionStepToken(accessToken.token)
      logger?.debug('Converted to actionStepToken:', actionStepToken)
      if (store) {
        await store.set(actionStepToken)
        logger?.debug('Successfully stored token')
      } else {
        logger?.debug('Skipped token storage')
      }

      return actionStepToken
    },
    token: async (): Promise<ActionStepToken> => {
      if (store) {
        accessToken = authCode.createToken(await store.get())
      }

      if (accessToken.expired()) {
        accessToken = await accessToken.refresh({ scope })
        if (store) await store.set(toActionStepToken(accessToken.token))
      }

      return toActionStepToken(accessToken.token)
    },
    api_url: config.api_url,
  }
}
