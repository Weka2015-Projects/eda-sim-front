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


export function startAction(action) {
  return {
    type: 'CHANGE_ACTION',
    action: action
  }
}

export function buyItem(item) {
  return {
    type: 'BUY_ITEM',
    item: item
  }
}
