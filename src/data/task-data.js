import { Map, List } from 'immutable'

const tasks = List([
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
      soft: 3,
      tech: 1
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

export default tasks
