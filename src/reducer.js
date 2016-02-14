import { List, Map, fromJS} from 'immutable'
import initialState  from './reductions/initial-state'
import next from './reductions/next'
import {activateTask } from './reductions/tasks'
import buy from './reductions/buy'


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'START_GAME':
    return state.set('isPlaying', true)
    case 'END_GAME':
    return state
    case 'NEXT':
    return next(state)
    case 'ACTIVATE_TASK':
    return activateTask(state, action.task)
    case 'BUY_ITEM':
    return buy(state, action.item)
  }
  return state
}


export default reducer
