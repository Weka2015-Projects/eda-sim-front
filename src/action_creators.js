export function toggleGame() {
  return {
    type: 'TOGGLE_GAME'
  }
}


export function next() {
  return {
    type: 'NEXT'
  }
}


export function startAction(task) {
  return {
    type: 'ACTIVATE_TASK',
    task: task
  }
}

export function buyItem(item) {
  return {
    type: 'BUY_ITEM',
    item: item
  }
}

export function submitScore(name) {
  return {
    type: 'SUBMIT_SCORE',
    name: name
  }
}