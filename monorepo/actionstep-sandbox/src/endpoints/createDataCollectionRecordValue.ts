import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const createDataCollectionRecordValue = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecordValues: client } = actionStepClient(tokenClient)

  const testActionId = 68330
  // Run createDataCollection and obtain id
  const testDataCollectionId = 695
  const testDataCollectionField = '109--Postcode'
  // Edit createDataCollectionRecord and replace collection id with above and run it to obtain id
  const testDataCollectionRecordId = 416631

  const { data, error } = await client.createDataCollectionRecordValues({
    datacollectionrecordvalues: {
      stringValue: 'TEST01',
      links: {
        action: testActionId,
        dataCollection: testDataCollectionId,
        dataCollectionField: testDataCollectionField,
        dataCollectionRecord: testDataCollectionRecordId,
      },
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('created datacollectionrecordvalue:', {
      id: data.datacollectionrecordvalues.id,
      stringValue: data.datacollectionrecordvalues.stringValue,
      links: data.datacollectionrecordvalues.links,
    })
  }
}
