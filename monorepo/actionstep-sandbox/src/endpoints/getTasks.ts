import { ActionStepTokenClient, actionStepClient } from '@dbc-tech/actionstep'

export const getTasks = async (tokenClient: ActionStepTokenClient) => {
  const { tasks: client } = actionStepClient(tokenClient)

  const { data, error } = await client.getTasks({
    page: 1,
    pageSize: 10,
  })
  if (error) console.error('error:', error)
  else {
    for (const task of data.tasks) {
      console.log('get task:', {
        id: task.id,
        name: task.name,
        status: task.status,
        priority: task.priority,
        links: task.links,
      })
    }
  }
}
