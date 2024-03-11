import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const updateDataCollectionRecordValue = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecordValues: client } = actionStepClient(tokenClient)

  const testDataCollectionRecordValueId = 629

  const { data, error } = await client.updateDataCollectionRecordValue(
    testDataCollectionRecordValueId,
    {
      datacollectionrecordvalues: {
        stringValue: 'TEST02',
      },
    },
  )
  if (error) console.error('error:', error)
  else {
    console.log('updated datacollectionrecordvalue:', {
      id: data.datacollectionrecordvalues.id,
      stringValue: data.datacollectionrecordvalues.stringValue,
      links: data.datacollectionrecordvalues.links,
    })
  }
}
