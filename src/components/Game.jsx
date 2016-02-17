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
import { DancingManContainer } from './DancingMan'
import { SubmitContainer } from './Submit'
import { QuestsContainer } from './Quests'
import { DialoguesContainer } from './Dialogues'

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
<<<<<<< HEAD
            {this.props.gameover ? '': <StatusContainer />}
            <div className="start">
              {this.props.gameover ? <SubmitContainer /> : <button onClick={this.toggleGame.bind(this)}>{this.props.isPlaying ? 'Pause Game' : 'Start Game' }</button>}
            </div>
            <DancingManContainer />
            {this.props.gameOver ? <SubmitScore /> : ''}
            {this.props.newQuest ? <QuestDialog /> : ''}
            {this.props.gameover ? <SubmitScore /> : <StatusContainer />}
            {this.props.newQuest ? <DialoguesContainer/> : <div className="start"><button onClick={this.toggleGame.bind(this)}>{this.props.isPlaying ? 'Pause Game' : 'Start Game' }</button></div>}
=======
            {this.props.gameover ? <SubmitContainer /> :
              this.props.newQuest ? <DialoguesContainer/> :
              <div className="general"><StatusContainer /><div className="start"><button onClick={this.toggleGame.bind(this)}>{this.props.isPlaying ? 'Pause Game' : 'Start Game' }</button></div></div>}
>>>>>>> 9c473f58181cbbba8a86cefbf6bab44e7babe742
          </div>
          <div className="col-md-3">
            <QuestsContainer />
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
    gameover: state.get('gameover'),
    newQuest: state.get('newQuest')
  }
}

export const GameContainer = connect(mapStateToProps, actionCreators)(Game)
