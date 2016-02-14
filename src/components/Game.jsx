import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { TimeContainer } from './Time'
import { ResourcesContainer } from './Resources'
import { InteractionsContainer } from './Interactions'
import { SkillsContainer } from './Skills'
import { StatusContainer } from './Status'

export class Game extends Component {
  constructor(props) {
    super(props)
  }
  startGame(e){
    e.preventDefault()
    this.props.startGame()

  }
  componentDidUpdate() {
    if(!this.interval && this.props.isPlaying) {
      this.interval = setInterval(this.props.next, 1000)
    }
  }
  render() {
    return (
      <div className="game">
        <div className="row">
          <div className="col-lg-3">
            <TimeContainer />
            <ResourcesContainer />
            <SkillsContainer />
          </div>
          <div className="col-lg-6">
            <StatusContainer />
            <div className="start">
              <button onClick={this.startGame.bind(this)}>Start Game</button>
            </div>
          </div>
          <div className="col-lg-3">
            <InteractionsContainer />
          </div>
        </div>

      </div>
    )
  }
}

reactMixin(Game.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    isPlaying: state.get('isPlaying'),
    gameover: state.get('gameover')
  }
}

export const GameContainer = connect(mapStateToProps, actionCreators)(Game)
