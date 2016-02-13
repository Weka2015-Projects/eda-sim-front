function buy(state, item) {
  const itemId = state.toJS().items.findIndex(
    (indexes) => indexes.name === item)
  return hasEnoughMoney(state, itemId) ?
  undergoTransaction(state, item, itemId) :  state
}

function hasEnoughMoney(state, item){
  const cost = state.toJS().items[item].money
  const cash = state.toJS().money
  return cash >= cost 
}

function undergoTransaction(state, item, itemId) {
 let newState = state
 const cost = state.toJS().items[itemId].money
 newState = newState.updateIn(['money'], (value) => value-cost)
 const resources = state.toJS().items[itemId].resources
 for (let i =0; i < Object.keys(resources).length;  i++) {
  const increment = resources[Object.keys(resources)[i]]
  newState = newState.updateIn(['resources', Object.keys(resources)[i]],
    (value) => value+increment)
  }
 return newState
}

export default buy
