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
  render() {
    return (
      <div className="game">
        Game
        <StatusContainer />
        <TimeContainer />
        <ResourcesContainer />
        <SkillsContainer />
        <InteractionsContainer />
      </div>
    )
  }
}

reactMixin(Game.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const GameContainer = connect(mapStateToProps, actionCreators)(Game)
