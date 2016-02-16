import { Map, List } from 'immutable'

const questData = Map(){
  scripted: List(
    Map({
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
  )
})

export default questData
