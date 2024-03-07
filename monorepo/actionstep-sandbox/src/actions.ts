import { actionStepTokenClient, actionsClient } from '@dbc-tech/actionstep'

const actionLister = async () => {
  const tokenClient = actionStepTokenClient(
    'https://api.bytherules.au/integrations/v1/actionstep/token',
    'https://ap-southeast-2.actionstep.com/api/rest',
  )
  // const tokenClient = actionStepLegacyTokenClient(
  //   'https://tools.thinkconveyancing.com.au/api/actionstep/key/get',
  //   'https://ap-southeast-2.actionstep.com/api/rest',
  // )
  const client = actionsClient(tokenClient)

  const { actions } = await client.getActions(1, 50)
  for (const action of actions) {
    console.log('id:', action.id)
  }
  const singleAction = await client.getAction(actions[0].id)
  console.log('single id:', singleAction)
}

actionLister()
  .then(() => console.log('done'))
  .catch(console.error)
