import { ActionStepTokenClient } from './types/action-step-auth.type'
import {
  actionParticipantsClient,
  actionsClient,
  dataCollectionRecordsClient,
  dataCollectionsClient,
  participantsClient,
} from './api'

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
    actionParticipants: actionParticipantsClient(tokenClient),
    dataCollections: dataCollectionsClient(tokenClient),
    dataCollectionRecords: dataCollectionRecordsClient(tokenClient),
    participants: participantsClient(tokenClient),
  }
}

export type ActionStepClient = ReturnType<typeof actionStepClient>
