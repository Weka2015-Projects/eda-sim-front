function end(state) {
  let newState = state.update('gameover', (bool) => true)
  newState = newState.update('isPlaying', (bool) => false)
  return newState
}

export default end