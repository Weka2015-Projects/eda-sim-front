function buy(state, item) {
  const itemId= state.get('items').findIndex(
    (index) => index.get('name') === item)
  return hasEnoughMoney(state, itemId) ?
  undergoTransaction(state, item, itemId) :  state
}

function hasEnoughMoney(state, item){
  const cost = state.getIn(['items',item,'money'])
  const cash = state.get('money')
  return cash >= cost 
}

function undergoTransaction(state, item, itemId) {
 let newState = state
 const cost = state.getIn(['items', itemId, 'money'])
 newState = newState.updateIn(['money'], (value) => value-cost)
 const resources = state.getIn(['items', itemId, 'resources'])
 resources.map((value, key) => newState = newState.updateIn(['resources', key],
    (stateValue) => stateValue+value))
 return newState
}

export default buy
