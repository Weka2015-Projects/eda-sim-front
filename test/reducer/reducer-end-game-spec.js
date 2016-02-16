import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import sourceState from '../fixtures/test-state.js'
import reducer from '../../src/reducer.js'

describe('END_GAME', () => {
  const action = {
    type: 'END_GAME'
  }
  let initialState = sourceState
  initialState = initialState.update('isPlaying', (value) => true)
  initialState = initialState.update('gameover', (value) => false)
  const nextState = reducer(initialState, action)
  
  it('sets the game to be no longer playing', () => {
    expect(nextState.get('isPlaying')).to.equal(false)
  })
  it('ends the game', () => {
    expect(nextState.get('gameover')).to.equal(true)
    expect(nextState.get('isPlaying')).to.equal(false)
  })
})