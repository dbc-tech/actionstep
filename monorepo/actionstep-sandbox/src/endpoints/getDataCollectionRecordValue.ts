import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getDataCollectionRecordValue = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecordValues: client } = actionStepClient(tokenClient)

  const testDataCollectionValueId = '109--Postcode--100019'

  const { data, error } = await client.getDataCollectionRecordValue(
    testDataCollectionValueId,
  )
  if (error) console.error('error:', error)
  else {
    console.log('get datacollectionrecordvalue:', {
      id: data.datacollectionrecordvalues.id,
      stringValue: data.datacollectionrecordvalues.stringValue,
      links: data.datacollectionrecordvalues.links,
    })
  }
}
