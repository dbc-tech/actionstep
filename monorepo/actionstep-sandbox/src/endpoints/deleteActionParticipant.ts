import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const deleteActionParticipant = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { actionParticipants: client } = actionStepClient(tokenClient)

  const testParticipantId = '68330--71--113702'

  const response = await client.deleteActionParticipant(testParticipantId)
  if (response.error) console.error('error:', response.error)
  else {
    console.log(`Status code:${response.response.status}`)
  }
}
