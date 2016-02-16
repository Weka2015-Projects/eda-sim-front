import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import sourceState from '../fixtures/test-state.js'
import reducer from '../../src/reducer.js'

describe('ACTIVATE_TASK', () => {
  let initialState = sourceState
  const action = {
    type: 'ACTIVATE_TASK',
    task: 'Pair Programming'
  }
  describe('Activates the task', () => {
    it('sets the active task to be the specified task', () => {
      initialState = initialState.updateIn(['activeTask'], (value) => '')
      const nextState = reducer(initialState, action)
      expect(nextState.get('activeTask')).to.equal('Pair Programming')
    })
    it('does not change task if task is already active', () => {
      initialState = initialState.updateIn(['activeTask'],
        (value) => 'Pair Programming')
      const nextState = reducer(initialState, action)
      expect(nextState.get('activeTask')).to.equal('Pair Programming')
      expect(nextState.getIn(['resources', 'energy'])).to.equal(500)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(100)
    })
  })
  describe('Depletes resouces', () => {
    it('Depletes resources by inital cost of task', () => {
      initialState = initialState.updateIn(['activeTask'], (value) => '')
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(470)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(90)
    })
    it('Does not deplete resources if not enough resources to ask task', () => {
      initialState = initialState.updateIn(['resources', 'energy'],
        (value) => 0)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(0)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(100)
    })
    it('does not deplete resources if task is already active', () => {
      initialState = initialState.updateIn(['activeTask'],
        (value) => 'Pair Programming')
      initialState = initialState.updateIn(['resources', 'energy'],
        (value) => 500)
      initialState = initialState.updateIn(['resources', 'mood'],
        (value) => 100)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(500)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(100)
    })
  })
})