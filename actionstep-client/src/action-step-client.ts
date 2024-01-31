import { ActionStepAuth } from './types/action-step-auth.type'

export const actionStepClient = (auth: ActionStepAuth) => {
  return {
    get: async (): Promise<void> => {
      const token = await auth.token()
      console.log(token)
    },
  }
}
