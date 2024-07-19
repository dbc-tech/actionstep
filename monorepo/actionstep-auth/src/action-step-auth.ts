import { AccessToken, AuthorizationCode } from 'simple-oauth2'
import { ActionStepAuthConfig } from './types/action-step-auth-config.type'
import { ActionStepAuth } from './types/action-step-auth.type'
import { ActionStepToken } from '@dbc-tech/actionstep'
import { toActionStepToken } from './utils'

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
      try {
        accessToken = await authCode.getToken({
          code,
          redirect_uri,
          scope,
        })
      } catch (error) {
        if (error instanceof Error) {
          logger?.error(
            'Error obtaining token from code:',
            error.message,
            error.stack,
          )
        } else {
          logger?.error('Error obtaining token from code:', error)
        }
        throw error
      }

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
    token: async (forceRefresh?: boolean): Promise<ActionStepToken> => {
      logger?.debug(`Get token (forceRefresh: ${forceRefresh})`)
      if (store) {
        logger?.debug(`Getting token from store`)
        const storedToken = await store.get()
        logger?.debug(`Retrieved token: ${storedToken}`)
        logger?.debug(`Parsed retrieved token: ${JSON.stringify(storedToken)}`)
        accessToken = authCode.createToken(storedToken)
        logger?.debug(`Created access token: ${accessToken}`)
        logger?.debug(`Parsed access token: ${JSON.stringify(accessToken)}`)
      }

      if (accessToken.expired() || forceRefresh) {
        logger?.debug(`Token is expired. Refreshing...`)
        try {
          accessToken = await accessToken.refresh({ scope })
        } catch (error) {
          if (error instanceof Error) {
            logger?.error('Error refreshing token:', error.message, error.stack)
          } else {
            logger?.error('Error refreshing token:', error)
          }
          throw error
        }

        logger?.debug(`Storing refreshed access token ${accessToken}`)
        if (store) {
          const storedToken = toActionStepToken(accessToken.token)
          logger?.debug(`Created token for storage: ${storedToken}`)
          logger?.debug(
            `Parsed token for storage: ${JSON.stringify(storedToken)}`,
          )
          await store.set(storedToken)
        }
        logger?.debug(
          `Successfully stored refreshed access token ${accessToken}`,
        )
      }
      return toActionStepToken(accessToken.token)
    },
    api_url: config.api_url,
  }
}
