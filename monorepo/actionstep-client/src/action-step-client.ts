import { ActionStepTokenClient } from './types/action-step-auth.type'

export const actionStepClient = (auth: ActionStepTokenClient) => {
  return {
    // TODO: Create an internal HTTP client which handles auth / refresh (on 404) by calling auth.token()
    getAction: async (): Promise<void> => {
      // TODO: Implement
      const token = await auth.token()
      console.log(token)
    },
    createFile: async (): Promise<void> => {
      // TODO: Implement
      const token = await auth.token()
      console.log(token)
    },
  }
}
