import {
  actionParticipantsClient,
  actionsClient,
  dataCollectionRecordValuesClient,
  dataCollectionRecordsClient,
  dataCollectionsClient,
  fileNotesClient,
  participantsClient,
  tasksClient,
} from './api'
import { ActionStepTokenClient } from './types/action-step-auth.type'

export const actionStepClient = (tokenClient: ActionStepTokenClient) => {
  return {
    actions: actionsClient(tokenClient),
    actionParticipants: actionParticipantsClient(tokenClient),
    dataCollections: dataCollectionsClient(tokenClient),
    dataCollectionRecords: dataCollectionRecordsClient(tokenClient),
    dataCollectionRecordValues: dataCollectionRecordValuesClient(tokenClient),
    fileNotes: fileNotesClient(tokenClient),
    participants: participantsClient(tokenClient),
    tasks: tasksClient(tokenClient),
  }
}

export type ActionStepClient = ReturnType<typeof actionStepClient>
