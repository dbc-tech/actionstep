import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const updateAction = async (tokenClient: ActionStepTokenClient) => {
  const { actions: client } = actionStepClient(tokenClient)

  const testActionId = 68330 // or 84407

  const { data, error } = await client.updateAction(testActionId, {
    actions: {
      reference: 'TEST07',
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('updated action:', {
      id: data.actions.id,
      name: data.actions.name,
      reference: data.actions.reference,
    })
  }
}
