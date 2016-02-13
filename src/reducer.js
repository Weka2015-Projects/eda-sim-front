import { List, Map, fromJS} from 'immutable'
import _ from 'lodash'
import { initialState } from './reductions/initial-state'
import next from './reductions/next'
import {activateTask } from './reductions/tasks'


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
