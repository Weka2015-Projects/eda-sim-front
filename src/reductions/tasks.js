function hasEnoughResources(state, task){
  let enough = true;
  const costs = state.getIn(['tasks', task, 'initialCosts'])
  .forEach((cost, key) => {
    enough = enough && state.getIn(['resources',key]) >= cost
  })
  console.log(costs)
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
  return hasEnoughResources(state, taskId) ? performTask(state, task, taskId) : state
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

function performTask(state, task, taskId) {
  let newState = state
  const costs = state.getIn(['tasks', taskId, 'resources'])
  const resourcesUsed = state.get('resources').keySeq()
  .sort((a, b) => state.getIn(['resources',a]) - state.get(['resources', b]))
  .filter((value) => costs.keySeq().indexOf(value) !== -1)
    console.log(resourcesUsed)

  if(!hasEnoughResources(state, taskId)) return state.update('activeTask', (value) => '')
    costs.keySeq().forEach(function(key) {
      const cost = costs.get(key)
      const resource = state.getIn(['resources', key])
      newState = newState.updateIn(['resources', key],
        (resource) => resource+cost)
    })
  const gains = state.getIn(['tasks', taskId, 'skills'])
  gains.keySeq().forEach(function(key) {
    newState = applyRewards(newState, key, gains)
  })
  return newState
}

function applyRewards(state, key, parent) {
  let newState = state
  const skill = state.getIn('skills', key)
  const gain = parent.get(skill)
  newState = newState.updateIn(['skills', skill, 'exp'],
    (exp) => exp+gain)
  const exp = newState.getIn(['skills', skill, 'exp'])
  const expToLevel = newState.getIn(['skills', skill, 'expToLevel'])
  if (exp >= expToLevel) {
    newState = newState.updateIn(['skills', skill, 'level'],
      (level) => level+Math.floor((exp / expToLevel)))
    newState = newState.updateIn(['skills', skill, 'exp'],
      (skill) => exp % expToLevel)
  }
  newState = newState.update('score', (resource) => resource+gain)
  return newState
}

export {activateTask, continueTask}
