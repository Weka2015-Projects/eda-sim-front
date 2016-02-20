import { Map, List } from 'immutable'

const questData = Map({
  scripted: List.of(
    Map({
      time: Map({  hour: 7, day: 1, week: 1, phase: 1}),
      quest: Map({
        name: 'No more flying solo!',
        content: 'At Enspiral Sim Academy, we use the buddy system. No more flying solo. You need somebody watching your back - AT ALL TIMES.',
        giver: 'joshua',
        type: 'task',
        progress: 0,
        requirement: 24,
        task: 'Pair Programming',
        reward: Map({
          experience: Map({
            soft: 300,
            tech: 100,
            creative: 100
          })
        })
    })
  }),
  Map({
    time: Map({  hour: 7, day: 1, week: 1, phase: 2}),
    quest: Map({
      name: 'Test-imonials',
      content: 'Need some help? Write some tests instead!  Oh yeah and do it with your group.',
      giver: 'piet',
      type: 'task',
      progress: 0,
      requirement: 20,
      task: 'Doing Group Projects',
      reward: Map({
        experience: Map({
          soft: 300,
          tech: 500,
          creative: 0
        })
      })
  })
}),
Map({
  time: Map({  hour: 7, day: 1, week: 1, phase: 3}),
  quest: Map({
    name: 'Welcome to Thunderdome',
    content: 'Stop using if/else! I want you to refactor everything you\'ve ever done into nested ternary statements.',
    giver: 'simon',
    type: 'task',
    progress: 0,
    requirement: 48,
    task: 'Solo Programming',
    reward: Map({
      experience: Map({
        soft: 300,
        tech: 100,
        creative: 100
      })
    })
})
}),
Map({
  time: Map({  hour: 7, day: 3, week: 2, phase: 1}),
  quest: Map({
    name: 'Mixing it up',
    content: 'You look like you could use a rest!  Take a short nap!',
    giver: 'mix',
    type: 'task',
    progress: 0,
    requirement: 5,
    task: 'Napping',
    reward: Map({
      experience: Map({
        soft: 30,
        tech: 15,
        creative: 15
      })
    })
})
})

  )
})

export default questData
