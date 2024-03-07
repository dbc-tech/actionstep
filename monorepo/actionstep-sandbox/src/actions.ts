import {
  actionStepClient,
  actionStepLegacyTokenClient,
  actionStepTokenClient,
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
  const { actions: actionsClient } = actionStepClient(tokenClient)

  // const { actions } = await actionsClient.getActions(1, 50)
  // for (const action of actions) {
  //   console.log('id:', action.id)
  // }

  const testId1 = 68330
  const testId2 = 84407
  const { data: action, error: getError } =
    await actionsClient.getAction(testId1)
  if (getError) console.error('get error:', getError)
  else
    console.log('get action:', {
      id: action.actions.id,
      name: action.actions.name,
      reference: action.actions.reference,
    })

  const { data: updatedAction, error: updateError } =
    await actionsClient.updateAction(testId1, {
      actions: {
        reference: 'TEST07',
      },
    })
  if (updateError) console.error('update error:', updateError)
  else
    console.log('updated action:', {
      id: updatedAction.actions.id,
      name: updatedAction.actions.name,
      reference: updatedAction.actions.reference,
    })
}

actionLister()
  .then(() => console.log('done'))
  .catch(console.error)
