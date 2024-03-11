import {
  actionParticipantsClient,
  actionsClient,
  dataCollectionRecordValuesClient,
  dataCollectionRecordsClient,
  dataCollectionsClient,
  participantsClient,
} from './api'
import { ActionStepTokenClient } from './types/action-step-auth.type'

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
    actionParticipants: actionParticipantsClient(tokenClient),
    dataCollections: dataCollectionsClient(tokenClient),
    dataCollectionRecords: dataCollectionRecordsClient(tokenClient),
    dataCollectionRecordValues: dataCollectionRecordValuesClient(tokenClient),
    participants: participantsClient(tokenClient),
  }
}

export type ActionStepClient = ReturnType<typeof actionStepClient>
