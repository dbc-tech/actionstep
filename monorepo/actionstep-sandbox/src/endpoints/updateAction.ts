import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const updateAction = async (tokenClient: ActionStepTokenClient) => {
  const { actions: client } = actionStepClient(tokenClient)

  const testActionId = 68330 // or 84407

  const { data: updatedAction, error } = await client.updateAction(
    testActionId,
    {
      actions: {
        reference: 'TEST07',
      },
    },
  )
  if (error) console.error('error:', error)
  else
    console.log('updated action:', {
      id: updatedAction.actions.id,
      name: updatedAction.actions.name,
      reference: updatedAction.actions.reference,
    })
}
