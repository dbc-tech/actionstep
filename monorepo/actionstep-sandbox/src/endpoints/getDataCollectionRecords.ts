import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getDataCollectionRecords = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { dataCollectionRecords: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getDataCollectionRecords({
    pageSize: 5,
  })
  if (error) console.error('error:', error)
  else {
    const datacollectionrecords =
      data.datacollectionrecords instanceof Array
        ? data.datacollectionrecords
        : [data.datacollectionrecords]
    for (const datacollectionrecord of datacollectionrecords) {
      console.log('get datacollectionrecord:', {
        id: datacollectionrecord.id,
        links: datacollectionrecord.links,
      })
    }
  }
}
