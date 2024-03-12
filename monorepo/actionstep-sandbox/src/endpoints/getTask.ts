import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getTask = async (tokenClient: ActionStepTokenClient) => {
  const { tasks: client } = actionStepClient(tokenClient)

  const testTaskId = 10

  const { data, error } = await client.getTask(testTaskId)
  if (error) console.error('error:', error)
  else {
    console.log('get task:', {
      id: data.tasks.id,
      name: data.tasks.name,
      status: data.tasks.status,
      priority: data.tasks.priority,
      dueTimestamp: data.tasks.dueTimestamp,
      links: data.tasks.links,
    })
  }
}
