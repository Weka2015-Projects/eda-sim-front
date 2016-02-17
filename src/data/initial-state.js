import { Map, List } from 'immutable'
import tasks from './task-data'
import items from './item-data'

let initialState = Map({
  isPlaying: false,
  score: 0,
  money: 200,
  gameover: false,
  activeTask: '',
  time: Map({
    hour: 7,
    day: 1,
    week: 1,
    phase: 1
  }),
  resources: Map({
    energy: 100,
    mood: 100,
    health: 100,
    enthusiasm: 100
  }),
  skills: Map({
    soft: Map({
      level: 1,
      exp: 0,
      expToLevel: 250
    }),
    tech: Map({
      level: 1,
      exp: 0,
      expToLevel: 250
    }),
    creative: Map({
      level: 1,
      exp: 0,
      expToLevel: 250
    })
  }),
  items: items,
  tasks: tasks,
  activeQuest: undefined
})

export default initialState
