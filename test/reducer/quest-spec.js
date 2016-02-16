import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import initialState from '../fixtures/quest-state.js'
import reducer from '../../src/reducer.js'

describe('quests', () => {

  it('assigns quest on first day', () => {
    const action = {
      type: 'NEXT'
    }
    const nextState = reducer(initialState.set('activeQuest', undefined), action)
    console.log(nextState)
    expect(nextState.getIn(['activeQuest', 'name'])).to.equal('No more flying solo!')
})
  it('tracks quest progress', () => {
    const action = {
      type: 'NEXT'
    }
    const nextState = reducer(initialState, action)
    expect(nextState.getIn(['activeQuest', 'progress'])).to.equal(1)
  })
  it('completing quest clears activeQuest on state', () => {
    const almostCompletedQuest = initialState.setIn(['activeQuest', 'progress'], 23)
    const action = {
      type: 'NEXT'
    }
    const nextState = reducer(almostCompletedQuest, action)
    expect(nextState.get('activeQuest')).to.be.undefined
    expect(nextState.getIn(['skills', 'soft', 'level'])).to.equal(2)
  })
  it('completing quest gives player correct rewards')
})
