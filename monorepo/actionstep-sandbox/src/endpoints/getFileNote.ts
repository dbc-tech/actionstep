import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getFileNote = async (tokenClient: ActionStepTokenClient) => {
  const { fileNotes: client } = actionStepClient(tokenClient)

  const testFileNoteId = 20345299

  const { data, error } = await client.getFileNote(testFileNoteId)
  if (error) console.error('error:', error)
  else {
    console.log('get filenote:', {
      id: data.filenotes.id,
      text: data.filenotes.text,
      enteredBy: data.filenotes.enteredBy,
      links: data.filenotes.links,
    })
  }
}
