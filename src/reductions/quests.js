function quests(state) {
  return state.get('activeQuest') ? updateQuestProgress(state) : spawnQuest(state)
}

export default quests

function updateQuestProgress(state) {
  if(state.get('activeTask') === state.getIn(['activeQuest', 'task'])){
    const progress = state.setIn(['activeQuest', 'progress'], state.getIn(['activeQuest', 'progress']) + 1)
    if(progress.getIn(['activeQuest', 'progress']) === progress.getIn(['activeQuest', 'requirement'])) {
      completeQuest(progress)
    } else {
      return progress
    }
  } else {
    return state
  }
}

function completeQuest(state) {
  //Updates Resources and XP based on quest rewards

}

function spawnQuest(state){
  //Checks for scripted events and spawns any that apply
  //Else trys to randomly spawn event
}

function scriptedSpawn(state) {

}

function randomSpawn(state) {
  //Randomly decides whether a quest should be given to the user.
  //Randomly selects a quest from the unscripted quest
}
