import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import sourceState from '../fixtures/test-state.js'
import reducer from '../../src/reducer.js'

describe('BUY_ITEM', () => {
  let initialState = sourceState
  const action = {
    type: 'BUY_ITEM',
    item: 'Mountain Dew'
  }
  describe('Handles Money', () => {
    it('does not deplete money if funds < cost ', () => {
      initialState = initialState.updateIn(['money'], (value) => 0)
      const nextState = reducer(initialState, action)
      expect(nextState.get('money')).to.equal(0)
    })
    it('depletes money on purchase', () => {
      initialState = initialState.updateIn(['money'], (value) => 15)
      const nextState = reducer(initialState, action)
      expect(nextState.get('money')).to.equal(10)
    })
    it('depletes money on subsequent purchase', () => {
      initialState = initialState.updateIn(['money'], (value) => 15)
      const nextState = reducer(initialState, action)
      const furtherState = reducer(nextState, action)
      expect(furtherState.get('money')).to.equal(5)
    })
  })
  describe('Handles Resouces', () => {
    it('Does not increase resources if funds < cost', () => {
      initialState = initialState.updateIn(['money'], (value) => 0)
      initialState = initialState.updateIn(['resources', 'energy'],
        (value) => 500)
      initialState = initialState.updateIn(['resources', 'mood'],
        (value) => 100)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(500)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(100)
    })
    it('increases resources on purchase', () => {
      initialState = initialState.updateIn(['money'], (value) => 15)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(505)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(101)
    })
    it('increases resources on subsequent purchase', () => {
      initialState = initialState.updateIn(['money'], (value) => 15)
      initialState = initialState.updateIn(['resources', 'energy'],
        (value) => 500)
      initialState = initialState.updateIn(['resources', 'mood'],
        (value) => 100)
      const nextState = reducer(initialState, action)
      const furtherState = reducer(nextState, action)
      expect(furtherState.getIn(['resources', 'energy'])).to.equal(510)
      expect(furtherState.getIn(['resources', 'mood'])).to.equal(102)
    })
  })
})