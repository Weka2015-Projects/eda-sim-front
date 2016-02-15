import { Map, List } from 'immutable'
let initialState = Map({
  isPlaying: false,
  money: 200,
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
  items: List([
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
  ]),
  tasks: List([
    Map({
      name: 'Pair Programming',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        soft: 3,
        tech: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    }),
    Map({
      name: 'Solo Programming',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        softSkills: 3,
        techSkills: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    }),
    Map({
      name: 'Doing Group Projects',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        soft: 3,
        tech: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    }),
    Map({
      name: 'Napping',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        soft: 3,
        tech: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    })
  ])
})

export default initialState
