import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const deleteDataCollection = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollections: client } = actionStepClient(tokenClient)

  const testDataCollectionId = 629

  const response = await client.deleteDataCollection(testDataCollectionId)
  if (response.error) console.error('error:', response.error)
  else {
    console.log(`Status code:${response.response.status}`)
  }
}
