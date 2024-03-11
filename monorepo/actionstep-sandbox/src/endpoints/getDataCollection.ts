import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getDataCollection = async (tokenClient: ActionStepTokenClient) => {
  const { dataCollections: client } = actionStepClient(tokenClient)

  const testDataCollectionId = 17

  const { data, error } = await client.getDataCollection(testDataCollectionId)
  if (error) console.error('error:', error)
  else {
    console.log('get datacollection:', {
      id: data.datacollections.id,
      name: data.datacollections.name,
      description: data.datacollections.description,
    })
  }
}
