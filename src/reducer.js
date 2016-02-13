import { List, Map, fromJS} from 'immutable'
import _ from 'lodash'

let initialState = Map({
    activeTask: 'Pair Programming',
    time: Map({
      hour: 7,
      day: 1,
      week: 1,
      phase: 1
    }),
    resources: Map({
      energy: 500,
      mood: 100
    }),
    skills: Map({
      softSkills: Map({
        level: 1,
        exp: 0,
        expToLevel: 250
      }),
      techSkills: Map({
        level: 1,
        exp: 0,
        expToLevel: 250
      })
    }),
    tasks: List([
      Map({
        name: 'Pair Programming',
        resources: Map({
          energy: -10,
          mood: -3
        }),
        skills: Map({
          softSkills: 3,
          techSkills: 1
        }),
        initalCosts: Map({
          energy: 30,
          mood: 10
        })
      })
      ])
  })

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

function validState(state) { 
  const hour = state.getIn(['time', 'hour'])
  const day = state.getIn(['time', 'day'])
  const week = state.getIn(['time', 'week'])
  const phase = state.getIn(['time', 'phase'])
  return (hour> 22 || hour < 7 || day > 6 ||  day < 1 || 
    week > 4 || week < 1 || phase > 4 || phase < 0) ? false : true
}

function next(state) {
  return validState(state) ? nextHour(state) : state.set('gameover', true)
}


function nextHour(state) {
  const nextHour =  state.getIn(['time', 'hour']) + 1 
  const nextState = continueTask(state, state.get('activeTask'))
  return (nextHour > 21) ? nextDay(nextState.setIn(['time', 'hour'], 7)) :
  nextState.setIn(['time', 'hour'], nextHour)
}

function nextDay (state) {
  const nextDay = state.getIn(['time', 'day']) + 1 
  return nextDay > 5 ? nextWeek(state.setIn(['time', 'day'], 1)) : 
  state.setIn(['time', 'day'], nextDay)
}

function nextWeek (state) {
  const nextWeek = state.getIn(['time', 'week']) + 1 
  return nextWeek > 3 ? nextPhase(state.setIn(['time', 'week'], 1)) : 
  state.setIn(['time', 'week'], nextWeek)
}

function nextPhase (state) {
  const nextPhase = state.getIn(['time', 'phase']) + 1 
  return nextPhase > 3 ? state.set('gameover', true) : 
  state.setIn(['time', 'phase'], nextPhase)
}


function reducer(state=initialState, action) {
  switch (action.type) {
    case 'START_GAME':
    return state
    case 'END_GAME':
    return state
    case 'NEXT':
    return next(state)
    case 'ACTIVATE_TASK':
    return activateTask(state, action.task)
    case 'BUY_ACTION':
    return state
  }
  return state
}


export default reducer