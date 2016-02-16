function toggle (state) {
  return state.set('isPlaying', !state.get('isPlaying'))
}

export default toggle
