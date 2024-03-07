import { ActionStepTokenClient } from './types/action-step-auth.type'
import { actionsClient } from './api/actions'

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
  }
}
