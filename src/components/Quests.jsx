import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { Quest } from './Quest'

export class Quests extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="quests widget">
        <div className="header">
          <h4>quests</h4>
        </div>
      </div>
    )
  }
}

reactMixin(Quests.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const QuestsContainer = connect(mapStateToProps, actionCreators)(Quests)
