function toggle (state) {
  return state.get('isPlaying') ? state.set('isPlaying', false) : state.set('isPlaying', true)
}

export default toggle
