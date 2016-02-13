import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'

import reducer from '../src/reducer.js'

describe('reducer', () => {
  describe('NEXT', () => {
    const action = {
      type: 'NEXT'
    }
    describe('Invalid State', () => {
      it('sets the game to be over', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 6634,
            day: 1,
            week: 1,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.get('gameover')).to.equal(true)
      })
    })
    describe('hours', () => {
      it('increases the hour', () => {
        const initialState = Map({
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
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(8)
      })
      it('resets the hour to 7 am if the time is over 9pm', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 22,
            day: 1,
            week: 1,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(2)
      })
      describe('active tasks', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 22,
            day: 1,
            week: 1,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const initalStateNoTask = Map({
          activeTask: '',
          time: Map({
            hour: 22,
            day: 1,
            week: 1,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        const furtherState = reducer(nextState, action)
        const nextStateNoTask = reducer(initalStateNoTask, action)
        it('depletes resources if a task is defined', () => {
          expect(nextState.getIn(['resources', 'energy'])).to.equal(490)
          expect(nextState.getIn(['resources', 'mood'])).to.equal(97)
        })
        it('ensures that resources are depleted with every next call', () => {
          expect(furtherState.getIn(['resources', 'energy'])).to.equal(480)
          expect(furtherState.getIn(['resources', 'mood'])).to.equal(94)
        })
        it('does not deplete if no task is defined', () => {
          expect(nextStateNoTask.getIn(['resources', 'energy'])).to.equal(500)
          expect(nextStateNoTask.getIn(['resources', 'mood'])).to.equal(100)
        })
        it('increases skils if a task is defined', () => {
          expect(nextState.getIn(['skills', 'softSkills'])).to.equal(3)
          expect(nextState.getIn(['skills', 'techSkills'])).to.equal(1)
        })
        it('ensures that resources are depleted with every next call', () => {
          expect(furtherState.getIn(['skills', 'softSkills'])).to.equal(6)
          expect(furtherState.getIn(['skills', 'techSkills'])).to.equal(2)
        })
        it('does not deplete if no task is defined', () => {
          expect(nextStateNoTask.getIn(['skills', 'softSkills'])).to.equal(0)
          expect(nextStateNoTask.getIn(['skills', 'techSkills'])).to.equal(0)
        })
      })
    })
    describe('days', () => {
      it('increases the day', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 21,
            day: 1,
            week: 1,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(2)
      })
      it('resets the day to 1 if the day is over 5', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 21,
            day: 5,
            week: 1,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(2)
      })
    })
    describe('weeks', () => {
      it('increase the week', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 21,
            day: 5,
            week: 1,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(2)
      })
      it('correctly resets the week to 1 if greater than 3', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 21,
            day: 5,
            week: 3,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'week'])).to.equal(1)
      })
    })
    describe('phases', () => {
      it('increases the phase', () => {
        const initialState = Map({
          activeTask: 'Pair Programming',
          time: Map({
            hour: 21,
            day: 5,
            week: 3,
            phase: 1
          }),
          resources: Map({
            energy: 500,
            mood: 100
          }),
          skills: Map({
            softSkills: 0,
            techSkills: 0
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
                energy: 10,
                mood: 3
              })
            })
            ])
        })
        const nextState = reducer(initialState, action)
        expect(nextState.getIn(['time', 'hour'])).to.equal(7)
        expect(nextState.getIn(['time', 'day'])).to.equal(1)
        expect(nextState.getIn(['time', 'week'])).to.equal(1)
        expect(nextState.getIn(['time', 'phase'])).to.equal(2)
      })
      it('ends the game', () => {
       const initialState = Map({
        activeTask: 'Pair Programming',
        time: Map({
          hour: 21,
          day: 5,
          week: 3,
          phase: 3
        }),
        resources: Map({
          energy: 500,
          mood: 100
        }),
        skills: Map({
          softSkills: 0,
          techSkills: 0
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
              energy: 10,
              mood: 3
            })
          })
          ])
      })
       const nextState = reducer(initialState, action)
       expect(nextState.get('gameover')).to.be.true
     })
    })
  })
describe('ACTIVATE_TASK', () => {
  const initialState = Map({
    activeTask: '',
    time: Map({
      hour: 7,
      day: 1,
      week: 1,
      phase: 1
    }),
    resources: Map({
      energy: 100,
      mood: 100
    }),
    skills: Map({
      softSkills: 0,
      techSkills: 0
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
  const initialStateNoResources = Map({
    activeTask: 'Pair Programming',
    time: Map({
      hour: 7,
      day: 1,
      week: 1,
      phase: 1
    }),
    resources: Map({
      energy: 0,
      mood: 100
    }),
    skills: Map({
      softSkills: 0,
      techSkills: 0
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
          energy: 10,
          mood: 3
        })
      })
      ])
  })

  const initialStateActive = Map({
    activeTask: 'Pair Programming',
    time: Map({
      hour: 7,
      day: 1,
      week: 1,
      phase: 1
    }),
    resources: Map({
      energy: 100,
      mood: 100
    }),
    skills: Map({
      softSkills: 0,
      techSkills: 0
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
          energy: 10,
          mood: 3
        })
      })
      ])
  })
  const action = {
    type: 'ACTIVATE_TASK',
    task: 'Pair Programming'
  }
  const nextState = reducer(initialState, action)
  const nextStateNoResources = reducer(initialStateNoResources, action)
  const nextStateActive = reducer(initialStateActive, action)

  describe('Activates the task', () => {
    it('sets the active task to be the specified task', () => {
      expect(nextState.get('activeTask')).to.equal('Pair Programming')
    })
    it('doesn not change task if task is already active', () => {
      expect(nextStateActive.get('activeTask')).to.equal('Pair Programming')
      expect(nextStateActive.getIn(['resources', 'energy'])).to.equal(100)
      expect(nextStateActive.getIn(['resources', 'mood'])).to.equal(100)
    })
  })
  describe('Depletes resouces', () => {
    it('Depletes resources by inital cost of task', () => {
      expect(nextState.getIn(['resources', 'energy'])).to.equal(70)
      expect(nextState.getIn(['resources', 'mood'])).to.equal(90)
    })
    it('Does not deplete resources if not enough resources to ask task', () => {
      expect(nextStateNoResources.getIn(['resources', 'energy'])).to.equal(0)
      expect(nextStateNoResources.getIn(['resources', 'mood'])).to.equal(100)
    })
  })
})
})