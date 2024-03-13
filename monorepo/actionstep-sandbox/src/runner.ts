import { actionStepLegacyTokenClient } from '@dbc-tech/actionstep'
import * as dotenv from 'dotenv'
import { getActions } from './endpoints/getActions'
import { getAction } from './endpoints/getAction'
import { updateAction } from './endpoints/updateAction'
import { getActionParticipants } from './endpoints/getActionParticipants'
import { getActionParticipant } from './endpoints/getActionParticipant'
import { createActionParticipant } from './endpoints/createActionParticipant'
import { deleteActionParticipant } from './endpoints/deleteActionParticipant'
import { getParticipants } from './endpoints/getParticipants'
import { getParticipant } from './endpoints/getParticipant'
import { updateParticipant } from './endpoints/updateParticipant'
import { createParticipant } from './endpoints/createParticipant'
import { getDataCollections } from './endpoints/getDataCollections'
import { getDataCollection } from './endpoints/getDataCollection'
import { createDataCollection } from './endpoints/createDataCollection'
import { updateDataCollection } from './endpoints/updateDataCollection'
import { deleteDataCollection } from './endpoints/deleteDataCollection'
import { getDataCollectionRecords } from './endpoints/getDataCollectionRecords'
import { getDataCollectionRecord } from './endpoints/getDataCollectionRecord'
import { createDataCollectionRecord } from './endpoints/createDataCollectionRecord'
import { deleteDataCollectionRecord } from './endpoints/deleteDataCollectionRecord'
import { getDataCollectionRecordValues } from './endpoints/getDataCollectionRecordValues'
import { getDataCollectionRecordValue } from './endpoints/getDataCollectionRecordValue'
import { createDataCollectionRecordValue } from './endpoints/createDataCollectionRecordValue'
import { updateDataCollectionRecordValue } from './endpoints/updateDataCollectionRecordValue'
import { getTasks } from './endpoints/getTasks'
import { getTask } from './endpoints/getTask'
import { createTask } from './endpoints/createTask'
import { updateTask } from './endpoints/updateTask'
import { deleteTask } from './endpoints/deleteTask'
import { getFileNotes } from './endpoints/getFileNotes'
import { getFileNote } from './endpoints/getFileNote'
import { createFileNote } from './endpoints/createFileNote'
import { updateFileNote } from './endpoints/updateFileNote'
import { deleteFileNote } from './endpoints/deleteFileNote'
import { createFile } from './endpoints/createFile'
import { getStepMessages } from './endpoints/getStepMessages'
import { getStepMessage } from './endpoints/getStepMessage'
dotenv.config()

const runner = async (endpointName: string) => {
  console.log('running:', endpointName)

  // const tokenClient = actionStepTokenClient(
  //   process.env.ACTIONSTEP_TOKEN_URL,
  //   process.env.ACTIONSTEP_API_URL,
  // )
  const tokenClient = actionStepLegacyTokenClient(
    process.env.ACTIONSTEP_TOKEN_URL,
    process.env.ACTIONSTEP_API_URL,
  )

  switch (endpointName) {
    case 'getActions':
      return getActions(tokenClient)
    case 'getAction':
      return getAction(tokenClient)
    case 'updateAction':
      return updateAction(tokenClient)
    case 'getActionParticipants':
      return getActionParticipants(tokenClient)
    case 'getActionParticipant':
      return getActionParticipant(tokenClient)
    case 'createActionParticipant':
      return createActionParticipant(tokenClient)
    case 'deleteActionParticipant':
      return deleteActionParticipant(tokenClient)
    case 'getParticipants':
      return getParticipants(tokenClient)
    case 'getParticipant':
      return getParticipant(tokenClient)
    case 'updateParticipant':
      return updateParticipant(tokenClient)
    case 'createParticipant':
      return createParticipant(tokenClient)
    case 'getDataCollections':
      return getDataCollections(tokenClient)
    case 'getDataCollection':
      return getDataCollection(tokenClient)
    case 'createDataCollection':
      return createDataCollection(tokenClient)
    case 'updateDataCollection':
      return updateDataCollection(tokenClient)
    case 'deleteDataCollection':
      return deleteDataCollection(tokenClient)
    case 'getDataCollectionRecords':
      return getDataCollectionRecords(tokenClient)
    case 'getDataCollectionRecord':
      return getDataCollectionRecord(tokenClient)
    case 'createDataCollectionRecord':
      return createDataCollectionRecord(tokenClient)
    case 'deleteDataCollectionRecord':
      return deleteDataCollectionRecord(tokenClient)
    case 'getDataCollectionRecordValues':
      return getDataCollectionRecordValues(tokenClient)
    case 'getDataCollectionRecordValue':
      return getDataCollectionRecordValue(tokenClient)
    case 'createDataCollectionRecordValue':
      return createDataCollectionRecordValue(tokenClient)
    case 'updateDataCollectionRecordValue':
      return updateDataCollectionRecordValue(tokenClient)
    case 'getTasks':
      return getTasks(tokenClient)
    case 'getTask':
      return getTask(tokenClient)
    case 'createTask':
      return createTask(tokenClient)
    case 'updateTask':
      return updateTask(tokenClient)
    case 'deleteTask':
      return deleteTask(tokenClient)
    case 'getFileNotes':
      return getFileNotes(tokenClient)
    case 'getFileNote':
      return getFileNote(tokenClient)
    case 'createFileNote':
      return createFileNote(tokenClient)
    case 'updateFileNote':
      return updateFileNote(tokenClient)
    case 'deleteFileNote':
      return deleteFileNote(tokenClient)
    case 'createFile':
      return createFile(tokenClient)
    case 'getStepMessages':
      return getStepMessages(tokenClient)
    case 'getStepMessage':
      return getStepMessage(tokenClient)
  }
}

runner(process.argv[2])
  .then(() => console.log('done'))
  .catch(console.error)
