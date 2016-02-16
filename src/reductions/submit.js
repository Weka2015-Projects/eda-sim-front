import request from 'superagent'

function submitScore(state, name='InsertNameHere') {
  request
  .post('http://localhost:4000/api/v1/scores')
  .send({ score: { name: name, score: state.get('score') }})
  .end()
  const newState = state.update('gameover', (bool) => false)
  return newState
}


export default submitScore