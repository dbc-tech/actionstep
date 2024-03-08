import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getActionParticipant = async (
  tokenClient: ActionStepTokenClient,
) => {
  const { actionParticipants: client } = actionStepClient(tokenClient)

  const testParticipantId = '113702'

  const { data: actionParticipant, error } =
    await client.getActionParticipant(testParticipantId)
  if (error) console.error('error:', error)
  else {
    console.log('get action participant:', {
      id: actionParticipant.actionparticipants.id,
      number: actionParticipant.actionparticipants.participantNumber,
    })
  }
}
