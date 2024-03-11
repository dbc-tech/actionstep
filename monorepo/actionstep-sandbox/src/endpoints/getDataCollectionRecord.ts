import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getDataCollectionRecord = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecords: client } = actionStepClient(tokenClient)

  const testDataCollectionId = 302

  const { data, error } =
    await client.getDataCollectionRecord(testDataCollectionId)
  if (error) console.error('error:', error)
  else {
    console.log('get datacollectionrecord:', {
      id: data.datacollectionrecords.id,
      links: data.datacollectionrecords.links,
    })
  }
}
