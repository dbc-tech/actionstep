import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getDataCollections = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollections: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getDataCollections({
    pageSize: 5,
  })
  if (error) console.error('error:', error)
  else {
    const datacollections =
      data.datacollections instanceof Array
        ? data.datacollections
        : [data.datacollections]
    for (const datacollection of datacollections) {
      console.log('get datacollection:', {
        id: datacollection.id,
        name: datacollection.name,
        description: datacollection.description,
      })
    }
  }
}
