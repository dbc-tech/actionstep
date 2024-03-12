import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const createFileNote = async (tokenClient: ActionStepTokenClient) => {
  const { fileNotes: client } = actionStepClient(tokenClient)

  const testActionId = 68330 // or 84407

  const { data, error } = await client.createFileNote({
    filenotes: {
      text: 'TEST01',
      links: {
        action: testActionId,
      },
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('created filenote:', {
      id: data.filenotes.id,
      text: data.filenotes.text,
      enteredBy: data.filenotes.enteredBy,
      links: data.filenotes.links,
    })
  }
}
