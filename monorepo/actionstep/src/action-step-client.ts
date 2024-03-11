import { ActionStepTokenClient } from './types/action-step-auth.type'
import { actionsClient } from './api/actions'
import { actionParticipantsClient } from './api/actionparticipants'
import { participantsClient } from './api'

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
    actionParticipants: actionParticipantsClient(tokenClient),
    participants: participantsClient(tokenClient),
  }
}

export type ActionStepClient = ReturnType<typeof actionStepClient>
