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
            tech: 500
          })
        })
    })
  }),
  Map({
    time: Map({  hour: 7, day: 1, week: 1, phase: 2}),
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
          tech: 500
        })
      })
  })
})

  )
})

export default questData
