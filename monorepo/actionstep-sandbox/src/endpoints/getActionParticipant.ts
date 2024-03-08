import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getActionParticipant = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { actionParticipants: client } = actionStepClient(tokenClient)

  const testParticipantId = '113702'

  const { data, error } = await client.getActionParticipant(testParticipantId)
  if (error) console.error('error:', error)
  else {
    console.log('get action participant:', {
      id: data.actionparticipants.id,
      number: data.actionparticipants.participantNumber,
    })
  }
}
