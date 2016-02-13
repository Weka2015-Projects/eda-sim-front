import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'
import sourceState from '../../src/reductions/initial-state.js'
import reducer from '../../src/reducer.js'

describe.only('reducer', () => {
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
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(3)
          expect(nextState.getIn(['skills', 'techSkills', 'exp'])).to.equal(1)
        })
        it('ensures that skill exp is incresed with every next call', () => {
          const nextState = reducer(initialState, action)
          const furtherState = reducer(nextState, action)
          expect(furtherState.getIn(['skills', 'softSkills', 'exp'])).to.equal(6)
          expect(furtherState.getIn(['skills', 'techSkills', 'exp'])).to.equal(2)
        })
        it('does not increase skill exp if no task is defined', () => {
          initialState = initialState.updateIn(['activeTask'], (value) => '')
          const nextState = reducer(initialState, action)
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(0)
          expect(nextState.getIn(['skills', 'techSkills', 'exp'])).to.equal(0)
        })
        it('increases skill level if experience is greater than exp level', () => {
          initialState = initialState.updateIn(['activeTask'], (value) => 'Pair Programming')
          initialState = initialState.updateIn(['skills', 'softSkills', 'exp'], (value) => 247)
          const nextState = reducer(initialState, action)
          expect(nextState.getIn(['skills', 'softSkills', 'level'])).to.equal(2)
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(0)
        })
        it('enures exp is carried over after levelling', () => {
          initialState = initialState.updateIn(['skills', 'softSkills', 'exp'], (value) => 280)
          const nextState = reducer(initialState, action)
          expect(nextState.getIn(['skills', 'softSkills', 'level'])).to.equal(2)
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(33)
        })
        it('allows double levelling', () => {
          initialState = initialState.updateIn(['skills', 'softSkills', 'exp'], (value) => 580)
          const nextState = reducer(initialState, action)
          expect(nextState.getIn(['skills', 'softSkills', 'level'])).to.equal(3)
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(83)
        })
        it('enures exp is carried over after double levelling', () => {
          initialState = initialState.updateIn(['skills', 'softSkills', 'exp'], (value) => 800)
          const nextState = reducer(initialState, action)
          expect(nextState.getIn(['skills', 'softSkills', 'level'])).to.equal(4)
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(53)
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
    })
  })
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
})