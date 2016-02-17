function toggle (state) {
  return state.set('isPlaying', !state.get('isPlaying')).set('newQuest', false)
}

export default toggle
