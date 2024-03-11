import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const updateDataCollection = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollections: client } = actionStepClient(tokenClient)

  const testDataCollectionId = 629

  const { data, error } = await client.updateDataCollection(
    testDataCollectionId,
    {
      datacollections: {
        name: 'TEST02',
      },
    },
  )
  if (error) console.error('error:', error)
  else {
    console.log('updated datacollection:', {
      id: data.datacollections.id,
      name: data.datacollections.name,
      description: data.datacollections.description,
    })
  }
}
