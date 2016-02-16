import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { TimeContainer } from './Time'
import { ResourcesContainer } from './Resources'
import { SkillsContainer } from './Skills'
import { StatusContainer } from './Status'
import { ItemsContainer } from './Items'
import { ActionsContainer } from './Actions'
import { SubmitContainer } from './Submit'

export class Game extends Component {
  constructor(props) {
    super(props)
  }
  toggleGame(e){
    e.preventDefault()
    this.props.toggleGame()
  }
  componentDidUpdate() {
    if(!this.interval && this.props.isPlaying) {
      this.interval = setInterval(this.props.next, 1000)
    } else {
      clearInterval(this.interval)
      this.interval = undefined
    }
  }
  render() {
    return (
      <div className="game">
        <div className="row">
          <div className="col-md-3">
            <TimeContainer />
            <ResourcesContainer />
            <SkillsContainer />
          </div>
          <div className="col-md-6">
            {this.props.gameover ? '': <StatusContainer />}
            <div className="start">
              {this.props.gameover ? <SubmitContainer /> : <button onClick={this.toggleGame.bind(this)}>{this.props.isPlaying ? 'Pause Game' : 'Start Game' }</button>}
            </div>
            {this.props.gameOver ? <SubmitScore /> : ''}
            {this.props.newQuest ? <QuestDialog /> : ''}
          </div>
          <div className="col-md-3">
            <ActionsContainer />
            <ItemsContainer />
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
