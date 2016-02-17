function hasEnoughResources(state, task){
  let enough = true;
  const costs = state.getIn(['tasks', task, 'initialCosts'])
  .forEach((cost, key) => {
    enough = enough && state.getIn(['resources',key]) >= cost
  })
  return enough
}

function activateTask(state, task) {
  if (task === state.get('activeTask')) return state
    const taskId = state.get('tasks').findIndex(
      (index) => index.get('name') === task)
  return hasEnoughResources(state, taskId) ?
  depleteResources(state, task, taskId) : state
}

function continueTask (state, task) {
  if (task === '') return state
    const taskId = state.get('tasks').findIndex(
      (index) => index.get('name') === task)
  return undergoTask(state, task, taskId)
}

function depleteResources (state, task, taskId) {
  let newState = state
  const costs = state.getIn(['tasks', taskId, 'initialCosts'])
  costs.map((value, key) => {
    const cost = value
    const resource = newState.getIn(['resources', key])
    newState = newState.updateIn(['resources', key],
      (value) => value-cost)
  })
  newState = newState.update('activeTask', (value) => `${task}`)
  return newState
}

function undergoTask(state, task, taskId) {
  let newState = state
  const costs = state.getIn(['tasks', taskId, 'resources'])
  const resources = state.get('resources')
  const resourcesUsed = state.get('resources').keySeq().sort((a, b) => 
    resources.get(a) - resources.get(b)).filter((value) => 
    costs.keySeq().indexOf(value) !== -1)

    for (let i = 0; i < costs.keySeq().size; i++) {
      const sortedKey = resourcesUsed.get(i)
      const cost = costs.getIn([sortedKey])
      const resource = state.getIn(['resources', sortedKey])
      if (resource < Math.abs(cost)) {
        newState = newState.update('activeTask', (value) => '')
        return newState
      }
      newState = newState.updateIn(['resources', sortedKey],
        (resource) => resource+cost)
    }

    const gains = state.getIn(['tasks', taskId, 'skills'])

    for (let i =0; i < Object.keys(gains).length;  i++) {
      const skill = state.getIn('skills', gains.keySeq().get(i))
      const gain = gains.get(skill)
      newState = newState.updateIn(['skills', skill, 'exp'],
        (exp) => exp+gain)
      const exp = newState.getIn(['skills', skill, 'exp'])
      const expToLevel = newState.getIn(['skills', skill, 'expToLevel'])
      const levelIncrement = Math.floor((exp / expToLevel))
      const remainder = exp % expToLevel
      if (exp >= expToLevel) {
        newState = newState.updateIn(['skills', skill, 'level'],
          (level) => level+levelIncrement)
        newState = newState.updateIn(['skills', skill, 'exp'],
          (skill) => remainder)
      }
    }
    return newState
  }

  export {activateTask, continueTask}
