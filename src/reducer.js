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
  const nextHour = state.get('time').get('hour') + 1
  return state
}

function nextHour(state) {

}

function nextDay(state) {

}

function nextWeek(state) {

}

function nextPhase(state) {

}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'START_GAME':
      return state
    case 'END_GAME':
      return state
    case 'NEXT':
      return state
    case 'CHANGE_ACTION':
      return state
    case 'BUY_ITEM':
      return state
  }
  return state
}
