import { continueTask } from './tasks'
import recharge from './recharge'
import quests from './quests'
import {toJS} from 'immutable'
function next(state) {
  return validState(state) ? nextHour(state) : state.set('gameover', true)
}

function nextHour(state) {
  const nextHour =  state.getIn(['time', 'hour']) + 1
  const nextStateTask = continueTask(state, state.get('activeTask'))
  const nextStateQuest = quests(nextStateTask)
  return (nextHour > 21) ? nextDay(nextStateQuest.setIn(['time', 'hour'], 7)) :
  nextStateQuest.setIn(['time', 'hour'], nextHour)
}

function nextDay (state) {
  const nextDay = state.getIn(['time', 'day']) + 1
  const nextState = recharge(state, 'day')
  return nextDay > 5 ? nextWeek(nextState.setIn(['time', 'day'], 1)) :
  nextState.setIn(['time', 'day'], nextDay)
}

function nextWeek (state) {
  const nextWeek = state.getIn(['time', 'week']) + 1
  const nextState = recharge(state, 'week')
  return nextWeek > 3 ? nextPhase(nextState.setIn(['time', 'week'], 1)) :
  nextState.setIn(['time', 'week'], nextWeek)
}

function nextPhase (state) {
  const nextPhase = state.getIn(['time', 'phase']) + 1
  const nextState = recharge(state, 'phase')
  return nextPhase > 3 ? nextState.set('gameover', true) :
  nextState.setIn(['time', 'phase'], nextPhase)
}

function validState(state) {
  const hour = state.getIn(['time', 'hour'])
  const day = state.getIn(['time', 'day'])
  const week = state.getIn(['time', 'week'])
  const phase = state.getIn(['time', 'phase'])
  return !(hour> 22 || hour < 7 || day > 6 ||  day < 1 ||
    week > 4 || week < 1 || phase > 4 || phase < 0)
}

export default next
