import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Quest extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="quest">
        <div className="header">
          <h6>{this.props.name}</h6>
          <div className="requirements">
            {this.props.task} for {this.props.requirements} 24 hours
          </div>
        </div>
        <div className="quest-details">
          <div className="giver">
            {this.props.giver}
          </div>
          <div className="content">
            {this.props.content}
          </div>
          <div className="rewards">
            <strong>Rewards</strong>
            {this.props.reward.get('experience').map((r, index) => {
              return <div className="reward"><span>{index} skills</span>: {r} exp</div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

reactMixin(Quest.prototype, PureRenderMixin)
