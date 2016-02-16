import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import sourceState from '../fixtures/test-state.js'
import reducer from '../../src/reducer.js'


describe('TOGGLE_GAME', () => {
  let initialState = sourceState
  const action = {
    type: 'TOGGLE_GAME'
  }
  it('starts the game if not playing', () => {
    initialState = initialState.update('isPlaying', (value) => false)
    const nextState = reducer(initialState, action)
    expect(nextState.get('isPlaying')).to.equal(true)
  })
  it('pauses the game if playing', () => {
    initialState = initialState.update('isPlaying', (value) => true)
    const nextState = reducer(initialState, action)
    expect(nextState.get('isPlaying')).to.equal(false)
  })
})