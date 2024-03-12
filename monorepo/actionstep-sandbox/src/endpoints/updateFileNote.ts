import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const updateFileNote = async (tokenClient: ActionStepTokenClient) => {
  const { fileNotes: client } = actionStepClient(tokenClient)

  const testFileNoteId = 20345299

  const { data, error } = await client.updateFileNote(testFileNoteId, {
    filenotes: {
      text: 'TEST02',
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('updated filenote:', {
      id: data.filenotes.id,
      text: data.filenotes.text,
      enteredBy: data.filenotes.enteredBy,
      links: data.filenotes.links,
    })
  }
}
