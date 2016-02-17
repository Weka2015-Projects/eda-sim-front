import { Map, List } from 'immutable'

const tasks = List([
  Map({
    name: 'Pair Programming',
    resources: Map({
      energy: -3,
      mood: -3,
      enthusiasm: -2

    }),
    skills: Map({
      soft: 3,
      tech: 1
    }),
    initialCosts: Map({
      energy: 15,
      mood: 5
    })
  }),
  Map({
    name: 'Solo Programming',
    resources: Map({
      energy: -2,
      mood: -1,
      health: -2,
      enthusiasm: 2
    }),
    skills: Map({
      soft: 0,
      tech: 3,
      creative: 3
    }),
    initialCosts: Map({
      energy: 10,
      mood: 10
    })
  }),
  Map({
    name: 'Doing Group Projects',
    resources: Map({
      energy: -2,
      mood: -4,
      health: -1,
      enthusiasm: -5
    }),
    skills: Map({
      soft: 3,
      creative: 1
    }),
    initialCosts: Map({
      energy: 10,
      mood: 10,
    })
  }),
  Map({
    name: 'Napping',
    resources: Map({
      energy: 3,
      mood: 1,
      health: 1,
      enthusiasm: 1
    }),
    skills: Map({
      soft: 0
    }),
    initialCosts: Map({
      enthusiasm: 10
    })
  })
])

export default tasks
