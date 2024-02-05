import ky from 'ky'
import { ActionStepToken, ActionStepTokenClient } from './types'

export const actionStepTokenClient = (
  tokenUrl: string,
  apiUrl: string,
): ActionStepTokenClient => {
  return {
    token: async () => {
      return await ky.get(tokenUrl).json<ActionStepToken>()
    },
    apiapi_url: apiUrl,
  }
}
