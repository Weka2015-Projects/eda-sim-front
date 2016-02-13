function hasEnoughResources(state, task){
  const costs = state.toJS().tasks[task].initalCosts
  for (let j =0; j < Object.keys(costs).length;  j++) {
    const cost = costs[Object.keys(costs)[j]]
    const resource = state.toJS().resources[Object.keys(costs)[j]]
    if (resource <= cost) return false
  }
  return true
}

function activateTask(state, task) {
  if (task === state.get('activeTask')) return state
  const taskId = state.toJS().tasks.findIndex(
    (indexes) => indexes.name === task)
  return hasEnoughResources(state, taskId) ?
  depleteResources(state, task, taskId) : state
}

function continueTask (state, task) {
  if (task === '') return state
  const taskId = state.toJS().tasks.findIndex(
    (indexes) => indexes.name === task)
  return hasEnoughResources(state, taskId) ? undergoTask(state, task, taskId) :
  state
}

function depleteResources (state, task, taskId) {
  let newState = state
  const costs = state.toJS().tasks[taskId].initalCosts
  for (let i =0; i < Object.keys(costs).length;  i++) {
    const cost = costs[Object.keys(costs)[i]]
    const resource = state.toJS().resources[Object.keys(costs)[i]]
    newState = newState.updateIn(['resources', Object.keys(costs)[i]],
      (resource) => resource-cost)
  }
  newState = newState.update('activeTask', (value) => value = `${task}`)
  return newState
}

function undergoTask(state, task, taskId) {
  let newState = state
  const costs = state.toJS().tasks[taskId].resources
  for (let i =0; i < Object.keys(costs).length;  i++) {
    const cost = costs[Object.keys(costs)[i]]
    const resource = state.toJS().resources[Object.keys(costs)[i]]
    newState = newState.updateIn(['resources', Object.keys(costs)[i]],
      (resource) => resource+cost)
  }
  const gains = state.toJS().tasks[taskId].skills
  for (let i =0; i < Object.keys(gains).length;  i++) {
    const gain = gains[Object.keys(gains)[i]]
    const skill = state.toJS().skills[Object.keys(gains)[i]]
    newState = newState.updateIn(['skills', Object.keys(gains)[i], 'exp'],
      (skill) => skill+gain)
  }
  for (let i =0; i < Object.keys(gains).length;  i++) {
    const exp = newState.toJS().skills[Object.keys(gains)[i]].exp
    const expToLevel = newState.toJS().skills[Object.keys(gains)[i]].expToLevel
    const levelIncrement = Math.floor((exp /expToLevel))
    const remainder = exp % expToLevel
    if (exp >= expToLevel) {
      newState = newState.updateIn(['skills', Object.keys(gains)[i], 'level'],
      (level) => level+levelIncrement)
      newState = newState.updateIn(['skills', Object.keys(gains)[i], 'exp'],
      (skill) => remainder)
    }
  }
  return newState
}

export {activateTask, continueTask}
