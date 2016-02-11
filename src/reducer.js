import { List, Map } from 'immutable'

const initialState = Map({
  time: Map({
    hour: 7,
    day: 1,
    week: 1,
    phase: 1
  })
})

function next(state) {
  return nextHour(state)
}

function nextHour(state) {
  const nextTime = state.getIn(['time', 'hour']) + 1
  return nextTime === 22 ?
    nextDay(state.setIn(['time', 'hour'], 7)) :
    state.setIn(['time', 'hour'], nextTime)
}

function nextDay(state) {
  const nextTime = state.getIn(['time', 'day']) + 1
  return nextTime === 6 ?
     nextWeek(state.setIn(['time', 'day'], 1)) :
     state.setIn(['time', 'day'], nextTime)
}

function nextWeek(state) {
  const nextTime = state.getIn(['time', 'week']) + 1
  return nextTime === 4 ?
     nextPhase(state.setIn(['time', 'week'], 1)) :
     state.setIn(['time', 'week'], nextTime)
}

function nextPhase(state) {
  const nextTime = state.getIn(['time', 'phase']) + 1
  return nextTime === 4 ?
    state.set('gameover', true) :
     state.setIn(['time', 'phase'], nextTime)
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'START_GAME':
      return state
    case 'END_GAME':
      return state
    case 'NEXT':
      return next(state)
    case 'CHANGE_ACTION':
      return state
    case 'BUY_ITEM':
      return state
  }
  return state
}
