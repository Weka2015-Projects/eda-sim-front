import questData from '../data/quest-data.js'
import { Map, is } from 'immutable'

function quests(state) {
  return state.get('activeQuest') ? updateQuestProgress(state) : spawnQuest(state)
}

export default quests

function updateQuestProgress(state) {
  if (state.get('activeTask') === state.getIn(['activeQuest', 'task'])) {
    const progress = state.setIn(['activeQuest', 'progress'], state.getIn(['activeQuest', 'progress']) + 1)
    return progress.getIn(['activeQuest', 'progress']) === progress.getIn(['activeQuest', 'requirement']) ? completeQuest(progress) : progress
  } else {
    return state
  }
}

function completeQuest(state) {

  const applyQuestRewards = state.get('skills').map((skill, index) => {
    const skillPostReward = skill.set('exp', state.getIn(['activeQuest', 'reward', 'experience', index]) + skill.get('exp'))
    return skillPostReward.get('exp') > skillPostReward.get('expToLevel') ? levelUp(skillPostReward) : skillPostReward
  })
  return state.set('skills', applyQuestRewards).set('activeQuest', undefined).update('score', (value) => value + 500)
}

function levelUp(skill){
  const leveledUp = skill.set('level', skill.get('level') + 1).set('exp', skill.get('exp') - skill.get('expToLevel'))
  return leveledUp.get('exp') > leveledUp.get('expToLevel') ? levelUp(leveledUp) : leveledUp

}

function spawnQuest(state){
  const time = state.get('time')
  const newQuest = questData.get('scripted').filter((quest) => {
    return is(quest.get('time'), time)
  })
  return newQuest.size > 0 ? state.set('activeQuest', newQuest.get(0).get('quest')).set('newQuest', true).set('isPlaying', false) : state
}
