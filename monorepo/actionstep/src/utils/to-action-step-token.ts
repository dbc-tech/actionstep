import { ActionStepToken } from '../types/action-step-token.type'

export interface Token {
  [x: string]: unknown
}

export const toActionStepToken = (token: Token): ActionStepToken => {
  return {
    access_token: <string>token['access_token'],
    api_endpoint: <string>token['api_endpoint'],
    expires_at: (<Date>token['expires_at']).toISOString(),
    expires_in: <number>token['expires_in'],
    orgkey: <string>token['orgkey'],
    refresh_token: <string>token['refresh_token'],
    token_type: <string>token['token_type'],
  }
}
