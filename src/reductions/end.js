import request from 'superagent'
function end(state) {
  let name;
  let newState = state.update('gameover', (bool) => true)
  newState = newState.update('isPlaying', (bool) => false)
  const score = newState.get('score')
  submitScore(name, score)
  return newState
}

function submitScore(name='InsertNameHere', score) {
  request
  .post('localhost:4000/api/v1/scores')
  .send({ score: { name: name, score: score }})
  .end((err, res) => {
    console.log('err', err)
  })
}


export default end