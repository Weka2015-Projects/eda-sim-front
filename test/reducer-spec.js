import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'

import reducer from '../src/reducer.js'

describe('reducer', () => {
  describe('NEXT', () => {
    const action = {type: 'NEXT'}
    let initialState = Map({
      activeTask: 'Pair Programming',
      time: Map({
        hour: 7,
        day: 1,
        week: 1,
        phase: 1
      }),
      resources: Map({
        energy: 500,
        mood: 100
      }),
      skills: Map({
        softSkills: Map({
          level: 1,
          exp: 0,
          expToLevel: 250
        }),
        techSkills: Map({
          level: 1,
          exp: 0,
          expToLevel: 250
        })
      }),
      tasks: List([
        Map({
          name: 'Pair Programming',
          resources: Map({
            energy: -10,
            mood: -3
          }),
          skills: Map({
            softSkills: 3,
            techSkills: 1
          }),
          initalCosts: Map({
            energy: 30,
            mood: 10
          })
        })
        ])
    })
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
        it('increases skils if a task is defined', () => {
          initialState = initialState.updateIn(['activeTask'], (value) => 'Pair Programming')
          const nextState = reducer(initialState, action)
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(3)
          expect(nextState.getIn(['skills', 'techSkills', 'exp'])).to.equal(1)
        })
        it('ensures that resources are depleted with every next call', () => {
          const nextState = reducer(initialState, action)
          const furtherState = reducer(nextState, action)
          expect(furtherState.getIn(['skills', 'softSkills', 'exp'])).to.equal(6)
          expect(furtherState.getIn(['skills', 'techSkills', 'exp'])).to.equal(2)
        })
        it('does not deplete if no task is defined', () => {
          initialState = initialState.updateIn(['activeTask'], (value) => '')
          const nextState = reducer(initialState, action)
          expect(nextState.getIn(['skills', 'softSkills', 'exp'])).to.equal(0)
          expect(nextState.getIn(['skills', 'techSkills', 'exp'])).to.equal(0)
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
  let initialState = Map({
    activeTask: 'Pair Programming',
    time: Map({
      hour: 7,
      day: 1,
      week: 1,
      phase: 1
    }),
    resources: Map({
      energy: 500,
      mood: 100
    }),
    skills: Map({
      softSkills: Map({
        level: 1,
        exp: 0,
        expToLevel: 250
      }),
      techSkills: Map({
        level: 1,
        exp: 0,
        expToLevel: 250
      })
    }),
    tasks: List([
      Map({
        name: 'Pair Programming',
        resources: Map({
          energy: -10,
          mood: -3
        }),
        skills: Map({
          softSkills: 3,
          techSkills: 1
        }),
        initalCosts: Map({
          energy: 30,
          mood: 10
        })
      })
      ])
  })
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
  })
})
})