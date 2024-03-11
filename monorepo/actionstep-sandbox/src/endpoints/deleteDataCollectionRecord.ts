import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const deleteDataCollectionRecord = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecords: client } = actionStepClient(tokenClient)

  const testDataCollectionRecordId = 416586

  const response = await client.deleteDataCollectionRecord(
    testDataCollectionRecordId,
  )
  if (response.error) console.error('error:', response.error)
  else {
    console.log(`Status code:${response.response.status}`)
  }
}
