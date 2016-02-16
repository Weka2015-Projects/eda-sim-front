import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import initialState from '../fixtures/quest-state.js'
import reducer from '../../src/reducer.js'

describe('quests', () => {

  it('assigns quest on first day')
  it('tracks quest progress', () => {
    const action = {
      type: 'NEXT'
    }
    const nextState = reducer(initialState, action)
    expect(nextState.getIn(['activeQuest', 'progress'])).to.equal(1)
  })
  it('completing quest clears activeQuest on state')
  it('completing quest gives player correct rewards')
})
