import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getAction = async (tokenClient: ActionStepTokenClient) => {
  const { actions: client } = actionStepClient(tokenClient)

  const testActionId = 68330 // or 84407

  const { data, error } = await client.getAction(testActionId)
  if (error) console.error('error:', error)
  else {
    console.log('get action:', {
      id: data.actions.id,
      name: data.actions.name,
      reference: data.actions.reference,
    })
  }
}
