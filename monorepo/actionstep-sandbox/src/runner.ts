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
  }
}

runner(process.argv[2])
  .then(() => console.log('done'))
  .catch(console.error)
