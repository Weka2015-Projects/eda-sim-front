import questData from '../data/quest-data.js'


function quests(state) {
  return state.get('activeQuest') ? updateQuestProgress(state) : spawnQuest(state)
}

export default quests

function updateQuestProgress(state) {
  if(state.get('activeTask') === state.getIn(['activeQuest', 'task'])){
    const progress = state.setIn(['activeQuest', 'progress'], state.getIn(['activeQuest', 'progress']) + 1)
    if(progress.getIn(['activeQuest', 'progress']) === progress.getIn(['activeQuest', 'requirement'])) {
      return completeQuest(progress)
    } else {
      return progress
    }
  } else {
    return state
  }
}

function completeQuest(state) {
  const applyQuestRewards = state.get('skills').map((skill, index) => {
    const skillPostReward = skill.set('exp', state.getIn(['activeQuest', 'reward', 'experience', index]) + skill.get('exp'))
    return skillPostReward.get('exp') > skillPostReward.get('expToLevel') ? levelUp(skillPostReward) : skillPostReward
  })
  return state.set('skills', applyQuestRewards).set('activeQuest', undefined)
}

function levelUp(skill){
  return skill.set('level', skill.get('level') + 1).set('exp', skill.get('exp') - skill.get('expToLevel'))
}

function spawnQuest(state){
  // switch (state.getIn(['time', 'phase'])) {
  //   case 1:
  //     return state.set('activeQuest', questData.getIn(['scripted', 0]))
  // }
  // return state
  //Else trys to randomly spawn event
}



function randomSpawn(state) {
  //Randomly decides whether a quest should be given to the user.
  //Randomly selects a quest from the unscripted quest
}
