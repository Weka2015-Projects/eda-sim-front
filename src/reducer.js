import { List, Map} from 'immutable'

const initialState = Map({
  time: Map({
    hour: 7,
    day: 1,
    week: 1,
    phase: 1
  }),
  resources: Map({
    energy: 5,
    mood: 100
  }),
  skills: Map({
    softSkills: 0,
    techSkills: 0
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
        energy: 10,
        mood: 3
      })
    })
  ])
})

function hasEnoughResources(state){ 
  for (let i =0; i < state.toJS().tasks.length; i++) {
    const costs = state.toJS().tasks[i].initalCosts
    for (let j =0; j < Object.keys(costs).length;  j++) {
      const cost = costs[Object.keys(costs)[j]]
      const resource = state.toJS().resources[Object.keys(costs)[j]]
      if (resource <= cost) {
        return false
      }
    }
  }
  return true
}

function task(state) {
  return hasEnoughResources(state) ? undergoTask(state) : state.set('gameover', true)
}

function undergoTask(state) {
  let newState
  for (let i =0; i < state.toJS().tasks.length; i++) {
    const costs = state.toJS().tasks[i].resources
    for (let j =0; j < Object.keys(costs).length;  j++) {
      const cost = costs[Object.keys(costs)[j]]
      const resource = state.toJS().resources[Object.keys(costs)[j]]
      newState = state.updateIn(['resources', Object.keys(costs)[j]], (resource) => resource+cost)
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
  return (nextHour > 21) ? nextDay(state.setIn(['time', 'hour'], 7)) : 
  state.setIn(['time', 'hour'], nextHour)
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
    case 'CHANGE_ACTION':
    return task(state)
    case 'BUY_ACTION':
    return state
  }
  return state
}

export default reducer