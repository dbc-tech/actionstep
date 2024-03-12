import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const createTask = async (tokenClient: ActionStepTokenClient) => {
  const { tasks: client } = actionStepClient(tokenClient)

  const testActionId = 68330 // or 84407
  const testAssigneeId = 113702

  const { data, error } = await client.createTask({
    tasks: {
      name: 'TEST01',
      links: {
        assignee: testAssigneeId,
        action: testActionId,
      },
    },
  })
  if (error) console.error('error:', error)
  else {
    console.log('created task:', {
      id: data.tasks.id,
      name: data.tasks.name,
      status: data.tasks.status,
      priority: data.tasks.priority,
      dueTimestamp: data.tasks.dueTimestamp,
      links: data.tasks.links,
    })
  }
}
