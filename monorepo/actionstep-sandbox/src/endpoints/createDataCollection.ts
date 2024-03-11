import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const createDataCollection = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollections: client } = actionStepClient(tokenClient)

  const testActionType = 33

  const { data, error } = await client.createDataCollection({
    datacollections: {
      name: 'TEST01',
      multipleRecords: 'F',
      label: 'Test Label 01',
      description: 'Test Description 01',
      links: {
        actionType: testActionType,
      },
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('created datacollection:', {
      id: data.datacollections.id,
      name: data.datacollections.name,
      description: data.datacollections.description,
    })
  }
}
