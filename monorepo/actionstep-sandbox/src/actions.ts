import {
  actionStepLegacyTokenClient,
  actionStepTokenClient,
  actionsClient,
} from '@dbc-tech/actionstep'
import * as dotenv from 'dotenv'
dotenv.config()

const actionLister = async () => {
  // const tokenClient = actionStepTokenClient(
  //   process.env.ACTIONSTEP_TOKEN_URL,
  //   process.env.ACTIONSTEP_API_URL,
  // )
  const tokenClient = actionStepLegacyTokenClient(
    process.env.ACTIONSTEP_TOKEN_URL,
    process.env.ACTIONSTEP_API_URL,
  )
  const client = actionsClient(tokenClient)

  // const { actions } = await client.getActions(1, 50)
  // for (const action of actions) {
  //   console.log('id:', action.id)
  // }

  const testId1 = 68330
  const testId2 = 84407
  const { actions: action } = await client.getAction(testId1)
  console.log('action:', JSON.stringify(action))

  const { actions: updatedAction } = await client.updateAction(testId1, {
    actions: {
      reference: 'TEST04',
    },
  })
  console.log('updated action.reference:', updatedAction.reference)
}

actionLister()
  .then(() => console.log('done'))
  .catch(console.error)
