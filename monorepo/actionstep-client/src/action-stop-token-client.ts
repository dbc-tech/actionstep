import got from 'got-cjs'
import { ActionStepToken, ActionStepTokenClient } from './types'

export const actionStepTokenClient = (
  tokenUrl: string,
  apiUrl: string,
): ActionStepTokenClient => {
  return {
    token: async () => {
      return await got.get(tokenUrl).json<ActionStepToken>()
    },
    apiapi_url: apiUrl,
  }
}
