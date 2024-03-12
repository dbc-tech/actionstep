import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getFileNotes = async (tokenClient: ActionStepTokenClient) => {
  const { fileNotes: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getFileNotes({
    page: 1,
    pageSize: 10,
  })
  if (error) console.error('error:', error)
  else {
    for (const filenote of data.filenotes) {
      console.log('get filenote:', {
        id: filenote.id,
        text: filenote.text,
        enteredBy: filenote.enteredBy,
        links: filenote.links,
      })
    }
  }
}
