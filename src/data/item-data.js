import { Map, List } from 'immutable'

const items = List([
  Map({
    name: 'Mountain Dew',
    money: 5,
    resources: Map({
      energy: 5,
      mood: 1,
    })
  }),
  Map({
    name: 'Red Bull',
    money: 5,
    resources: Map({
      energy: 30,
      mood: 5,
      health: -5
    })
  }),
  Map({
    name: 'Chicken Curry',
    money: 12,
    resources: Map({
      energy: 30,
      mood: 50,
      health: 20
    })
  })
])

export default items
