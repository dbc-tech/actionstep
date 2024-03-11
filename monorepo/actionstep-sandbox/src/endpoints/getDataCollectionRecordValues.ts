import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getDataCollectionRecordValues = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecordValues: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getDataCollectionRecordValues({
    pageSize: 5,
  })
  if (error) console.error('error:', error)
  else {
    for (const datacollectionrecordvalue of data.datacollectionrecordvalues) {
      console.log('get datacollectionrecordvalue:', {
        id: datacollectionrecordvalue.id,
        stringValue: datacollectionrecordvalue.stringValue,
        links: datacollectionrecordvalue.links,
      })
    }
  }
}
