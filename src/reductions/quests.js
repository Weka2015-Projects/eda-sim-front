function quests(state) {
  //Checks for active quest
  //If active then it updates questProgress
  //Else try to randomly spawn a quest
  return state
}

export default quests

function updateQuestProgress(state) {
  //Check type of quest
  //Function for that type of quest is called to update progress and check for completion
  //If complete calls the complete quest function
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
