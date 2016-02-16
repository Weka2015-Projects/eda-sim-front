import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class quest extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="quest">
        <div className="header">
          <h6>{this.props.name}</h6>
        </div>
      </div>
    )
  }
}

reactMixin(quest.prototype, PureRenderMixin)
