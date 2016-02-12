import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'

import reducer from '../src/reducer.js'



describe('reducer', () => {
  describe('NEXT', () => {
    describe('hours', () => {
      it('increases the hour', () => {
        const initialState = Map({
          time: Map({
            hour: 7,
            day: 1,
            week: 1,
            phase: 1
          })
        })
        const action = {
          type: 'NEXT'
        }
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(8)
      })
      describe('active actions', () => {
        //TODO write each actions hourly modifier test


      })
    })
    describe('days', () => {
      it('increases the day', () => {
        const initialState = Map({
          time: Map({
            hour: 21,
            day: 1,
            week: 1,
            phase: 1
          })
        })
        const action = {
          type: 'NEXT'
        }
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(2)
      })
      //TODO write day recharge effect tests
    })
    describe('weeks', () => {
      it('increase the week', () => {
        const initialState = Map({
          time: Map({
            hour: 21,
            day: 5,
            week: 1,
            phase: 1
          })
        })
        const action = {
          type: 'NEXT'
        }
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(2)

      })
      //TODO write week recharge effect tests
    })
    describe('phases', () => {
      it('increases the phase', () => {
        const initialState = Map({
          time: Map({
            hour: 21,
            day: 5,
            week: 3,
            phase: 1
          })
        })
        const action = {
          type: 'NEXT'
        }
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(1)
        expect(nextState.getIn(['time', 'phase'])).to.equal(2)
      })
      //TODO write phase recharge effect tests'
      it('ends the game', () => {
        const initialState = Map({
          time: Map({
            hour: 21,
            day: 5,
            week: 3,
            phase: 3
          })
        })
        const action = {
          type: 'NEXT'
        }
        const nextState = reducer(initialState, action)
        expect(nextState.get('gameover')).to.be.true
      })
    })
  })
  describe('CHANGE_ACTION', () => {
    it('changes to...')
    //TODO write unit tests for changing to each action
  })
  describe('BUY_ITEM', () => {
    it('buys...')
    //TODO write unit tests for each items effect
  })
  describe('START_GAME', () => {
    it('starts game')
  })
  describe('END_GAME', () => {
    it('ends game')
  })
})
