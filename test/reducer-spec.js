import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'

import reducer from '../src/reducer.js'

describe('reducer', () => {
  describe('NEXT', () => {
    const action = {
      type: 'NEXT'
    }
    describe('Invalid State', () => {
      it('sets the game to true', () => {
        const initialState = Map({time: Map({hour: 6634, day: 1, week: 1,
          phase: 1})})
        const nextState = reducer(initialState, action)
        expect(nextState.get('gameover')).to.equal(true)
      })
    })
    describe('hours', () => {
      it('increases the hour', () => {
        const initialState = Map({time: Map({hour: 7, day: 1, week: 1,
         phase: 1})})
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(8)
      })
      it('resets the hour to 7 am if the time is over 9pm', () => {
        const initialState = Map({time: Map({hour: 22, day: 1, week: 1,
         phase: 1 })})
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(2)
      })
      describe('active actions', () => {
      })
    })
    describe('days', () => {
      it('increases the day', () => {
        const initialState = Map({time: Map({hour: 21, day: 1, week: 1, 
          phase: 1})})
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(2)
      })
      it('resets the day to 1 if the day is over 5', () => {
        const initialState = Map({time: Map({hour: 22, day: 5, week: 1, 
          phase: 1})})
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(2)
      })
    })
    describe('weeks', () => {
      it('increase the week', () => {
        const initialState = Map({time: Map({hour: 22, day: 5, week: 1, 
          phase: 1})
      })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(2)
      })
      it('correctly resets the week to 1 if greater than 3', () => {
        const initialState = Map({time: Map({hour: 22, day: 5,week: 3, 
          phase: 1})})
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'week'])).to.equal(1)
      })
    })
    describe('phases', () => {
      it('increases the phase', () => {
        const initialState = Map({time: Map({hour: 21, day: 5, week: 3, 
          phase: 1})})
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(1)
        expect(nextState.getIn(['time', 'phase'])).to.equal(2)
      })
      it('ends the game', () => {
        const initialState = Map({time: Map({hour: 21, day: 5, week: 3,
          phase: 3})})
        const nextState = reducer(initialState, action)
        expect(nextState.get('gameover')).to.be.true
      })
    })
  })
})