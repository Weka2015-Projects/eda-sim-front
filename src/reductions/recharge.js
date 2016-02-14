function recharge (state, increment) {
  let newState = state
  const resources = state.toJS().resources
  const keys = Object.keys(state.toJS().resources)
  for (let i = 0; i < keys.length; i++) {
    if (increment === 'day') {
      newState = newState.updateIn(['resources', keys[i]], (value) => value+5)
    } else if (increment === 'week') {
      newState = newState.updateIn(['resources', keys[i]], (value) => value+15)
    } else if (increment === 'phase') {
      newState = newState.updateIn(['resources', keys[i]], (value) => value+50)
    } 
  }
  return newState
}

export default recharge