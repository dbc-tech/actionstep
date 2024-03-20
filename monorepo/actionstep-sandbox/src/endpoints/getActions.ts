import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getActions = async (tokenClient: ActionStepTokenClient) => {
  const { actions: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getActions({
    page: 1,
    pageSize: 10,
    filter: "status ilike '%active%'",
  })
  if (error) console.error('error:', error)
  else {
    const actions =
      data.actions instanceof Array ? data.actions : [data.actions]
    for (const action of actions) {
      console.log('get action:', {
        id: action.id,
        name: action.name,
        reference: action.reference,
      })
    }
  }
}
