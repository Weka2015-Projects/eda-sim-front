import { List, Map, fromJS} from 'immutable'
import initialState  from './data/initial-state'
import next from './reductions/next'
import {activateTask } from './reductions/tasks'
import buy from './reductions/buy'
import toggle from './reductions/toggle'
import end from './reductions/end'


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_GAME':
      return toggle(state)
    case 'END_GAME':
      return end(state)
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
