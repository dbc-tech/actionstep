import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const deleteFileNote = async (tokenClient: ActionStepTokenClient) => {
  const { fileNotes: client } = actionStepClient(tokenClient)

  const testFileNoteId = 20345299

  const response = await client.deleteFileNote(testFileNoteId)
  if (response.error) console.error('error:', response.error)
  else {
    console.log(`Status code:${response.response.status}`)
  }
}
