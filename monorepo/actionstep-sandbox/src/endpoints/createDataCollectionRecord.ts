import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const createDataCollectionRecord = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecords: client } = actionStepClient(tokenClient)

  const testActionId = 68330
  const testDataCollectionId = 695

  const { data, error } = await client.createDataCollectionRecord({
    datacollectionrecords: {
      links: {
        action: testActionId,
        dataCollection: testDataCollectionId,
      },
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('created dataCollectionRecord:', {
      id: data.datacollectionrecords.id,
      links: data.datacollectionrecords.links,
    })
  }
}
