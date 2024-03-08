import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getAction = async (tokenClient: ActionStepTokenClient) => {
  const { actions: client } = actionStepClient(tokenClient)

  const testActionId = 68330 // or 84407

  const { data: action, error } = await client.getAction(testActionId)
  if (error) console.error('error:', error)
  else
    console.log('get action:', {
      id: action.actions.id,
      name: action.actions.name,
      reference: action.actions.reference,
    })
}
