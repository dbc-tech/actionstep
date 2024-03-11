import { ActionStepTokenClient } from './types/action-step-auth.type'
import {
  actionParticipantsClient,
  actionsClient,
  dataCollectionsClient,
  participantsClient,
} from './api'

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
    actionParticipants: actionParticipantsClient(tokenClient),
    dataCollections: dataCollectionsClient(tokenClient),
    participants: participantsClient(tokenClient),
  }
}

export type ActionStepClient = ReturnType<typeof actionStepClient>
