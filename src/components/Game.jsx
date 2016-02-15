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
            <StatusContainer />
            <div className="start">
              <button onClick={this.toggleGame.bind(this)} >{this.props.isPlaying ? 'Pause Game' : 'Start Game' }</button>
            </div>
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
