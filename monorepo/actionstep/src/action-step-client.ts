import { ActionStepTokenClient } from './types/action-step-auth.type'
import { actionsClient } from './api/actions'
import { actionParticipantsClient } from './api/actionparticipants'

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
    actionParticipants: actionParticipantsClient(tokenClient),
  }
}
