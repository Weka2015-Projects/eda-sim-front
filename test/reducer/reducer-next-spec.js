import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import sourceState from '../fixtures/test-state.js'
import reducer from '../../src/reducer.js'

describe('NEXT', () => {
  const action = {type: 'NEXT'}
  let initialState = sourceState
  describe('Invalid State', () => {
    it('sets the game to be over', () => {
      initialState = initialState.updateIn(['time', 'hour'], (value) => 32)
      const nextState = reducer(initialState, action)
      expect(nextState.get('gameover')).to.equal(true)
    })
  })
  describe('hours', () => {
    it('increases hour', () => {
      initialState = initialState.updateIn(['time', 'hour'], (value) => 7)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['time', 'hour'])).to.equal(8)
    })
    it('resets hour to 7am if > 9pm', () => {
      initialState = initialState.updateIn(['time', 'hour'], (value) => 22)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['time', 'hour'])).to.equal(7)
      expect(nextState.getIn(['time', 'day'])).to.equal(2)
    })
    describe('active tasks', () => {
      it('depletes resources if a task is defined', () => {
        initialState = initialState.updateIn(['time', 'hour'], (value) => 7)
        initialState = initialState.updateIn(['resources', 'energy'], (value) => 500)
        initialState = initialState.updateIn(['resources', 'mood'], (value) => 100)
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['resources', 'energy'])).to.equal(490)
        expect(nextState.getIn(['resources', 'mood'])).to.equal(97)
      })
      it('ensures that resources are depleted with every next call', () => {
        const nextState = reducer(initialState, action)
        const furtherState = reducer(nextState, action)
        expect(furtherState.getIn(['resources', 'energy'])).to.equal(480)
        expect(furtherState.getIn(['resources', 'mood'])).to.equal(94)
      })
      it('does not deplete if no task is defined', () => {
        initialState = initialState.updateIn(['activeTask'], (value) => '')
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['resources', 'energy'])).to.equal(500)
        expect(nextState.getIn(['resources', 'mood'])).to.equal(100)
      })
      it('increases skils exp if a task is defined', () => {
        initialState = initialState.updateIn(['activeTask'], (value) => 'Pair Programming')
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['skills', 'soft', 'exp'])).to.equal(3)
        expect(nextState.getIn(['skills', 'tech', 'exp'])).to.equal(1)
      })
      it('ensures that skill exp is incresed with every next call', () => {
        const nextState = reducer(initialState, action)
        const furtherState = reducer(nextState, action)
        expect(furtherState.getIn(['skills', 'soft', 'exp'])).to.equal(6)
        expect(furtherState.getIn(['skills', 'tech', 'exp'])).to.equal(2)
      })
      it('does not increase skill exp if no task is defined', () => {
        initialState = initialState.updateIn(['activeTask'], (value) => '')
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['skills', 'soft', 'exp'])).to.equal(0)
        expect(nextState.getIn(['skills', 'tech', 'exp'])).to.equal(0)
      })
      it('increases skill level if experience is greater than exp level', () => {
        initialState = initialState.updateIn(['activeTask'], (value) =>  'Pair Programming')
        initialState = initialState.updateIn(['skills', 'soft', 'exp'], (value) => 247)
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['skills', 'soft', 'level'])).to.equal(2)
        expect(nextState.getIn(['skills', 'soft', 'exp'])).to.equal(0)
      })
      it('enures exp is carried over after levelling', () => {
        initialState = initialState.updateIn(['skills', 'soft', 'exp'], (value) => 280)
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['skills', 'soft', 'level'])).to.equal(2)
        expect(nextState.getIn(['skills', 'soft', 'exp'])).to.equal(33)
      })
      it('allows double levelling', () => {
        initialState = initialState.updateIn(['skills', 'soft', 'exp'], (value) => 580)
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['skills', 'soft', 'level'])).to.equal(3)
        expect(nextState.getIn(['skills', 'soft', 'exp'])).to.equal(83)
      })
      it('enures exp is carried over after double levelling', () => {
        initialState = initialState.updateIn(['skills', 'soft', 'exp'], (value) => 800)
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['skills', 'soft', 'level'])).to.equal(4)
        expect(nextState.getIn(['skills', 'soft', 'exp'])).to.equal(53)
      })
      it('increases score', () => {
      initialState = initialState.update('score',
        (value) => 0)
      const nextState = reducer(initialState, action)
      expect(nextState.get('score')).to.equal(4)
    })
      it('increases score on next run', () => {
        initialState = initialState.update('score',
        (value) => 0)
      const nextState = reducer(initialState, action)
      const furtherState = reducer(nextState, action)
      expect(furtherState.get('score')).to.equal(8)
      })
    })
  })
describe('days', () => {
  it('increases the day', () => {
    initialState = initialState.updateIn(['time', 'hour'], (value) => 21)
    const nextState = reducer(initialState, action)
    expect(nextState.getIn(['time', 'hour'])).to.equal(7)
    expect(nextState.getIn(['time', 'day'])).to.equal(2)
  })
  it('resets day to 1 if > 5', () => {
    initialState = initialState.updateIn(['time', 'day'], (value) => 5)
    const nextState = reducer(initialState, action)
    expect(nextState.getIn(['time', 'day'])).to.equal(1)
    expect(nextState.getIn(['time', 'week'])).to.equal(2)
  })
  describe('recharges resources', () => {
    it('recharges resources at the end of the day', () => {
      initialState = initialState.updateIn(['time', 'hour'], (value) => 22)
      initialState = initialState.updateIn(['time', 'day'], (value) => 1)
      initialState = initialState.updateIn(['resources', 'energy'], (value) => 500)
      initialState = initialState.updateIn(['resources', 'mood'], (value) => 100)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(495)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(102)
    })
  })
})
describe('weeks', () => {
  it('increases week', () => {
    initialState = initialState.updateIn(['time', 'hour'], (value) => 21)
    initialState = initialState.updateIn(['time', 'day'], (value) => 5)
    const nextState = reducer(initialState, action)
    expect(nextState.getIn(['time', 'week'])).to.equal(2)
  })
  it('resets week to 1 if > 3', () => {
    initialState = initialState.updateIn(['time', 'week'], (value) => 3)
    const nextState = reducer(initialState, action)
    expect(nextState.getIn(['time', 'week'])).to.equal(1)
    expect(nextState.getIn(['time', 'phase'])).to.equal(2)
  })
  describe('recharges resources', () => {
    it('recharges resources at the end of the week', () => {
      initialState = initialState.updateIn(['time', 'hour'], (value) => 21)
      initialState = initialState.updateIn(['time', 'day'], (value) => 5)
      initialState = initialState.updateIn(['time', 'week'], (value) => 1)
      initialState = initialState.updateIn(['resources', 'energy'], (value) => 500)
      initialState = initialState.updateIn(['resources', 'mood'], (value) => 100)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(510)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(117)
    })
  })
})
describe('phases', () => {
  it('increases phase', () => {
    initialState = initialState.updateIn(['time', 'hour'], (value) => 21)
    initialState = initialState.updateIn(['time', 'day'], (value) => 5)
    initialState = initialState.updateIn(['time', 'week'], (value) => 3)
    const nextState = reducer(initialState, action)
    expect(nextState.getIn(['time', 'phase'])).to.equal(2)
  })
  it('resets week to 1 if > 3', () => {
    initialState = initialState.updateIn(['time', 'phase'], (value) => 3)
    const nextState = reducer(initialState, action)
    expect(nextState.get('gameover')).to.be.true
  })
  describe('recharges resources', () => {
    it('recharges resources at the end of the phase', () => {
      initialState = initialState.updateIn(['time', 'hour'], (value) => 21)
      initialState = initialState.updateIn(['time', 'day'], (value) => 5)
      initialState = initialState.updateIn(['time', 'week'], (value) => 3)
      initialState = initialState.updateIn(['time', 'phase'], (value) => 1)
      initialState = initialState.updateIn(['resources', 'energy'], (value) => 500)
      initialState = initialState.updateIn(['resources', 'mood'], (value) => 100)
      const nextState = reducer(initialState, action)
      expect(nextState.getIn(['resources', 'energy'])).to.equal(560)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(167)
    })
  })
})
})