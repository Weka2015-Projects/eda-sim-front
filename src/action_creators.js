export function startGame() {
  return {
    type: 'START_GAME'
  }
}

export function endGame() {
  return {
    type: 'END_GAME'
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
