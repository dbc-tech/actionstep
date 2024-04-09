import { ActionStepTokenStore } from '@dbc-tech/actionstep'
import { Logger } from './logger.type'

export type ActionStepAuthConfig = {
  client_id: string
  client_secret: string
  authorize_url: string
  token_url: string
  scope?: string | undefined
  redirect_uri: string
  api_url: string

  /**
   * Determines if the current access token is definitely expired or not
   * @param expirationWindowSeconds Window of time before the actual expiration to refresh the token. Defaults to 0.
   */
  expirationWindowSeconds?: number
  store?: ActionStepTokenStore
  logger?: Logger
}
