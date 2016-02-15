import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Money extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="money">
        ${this.props.amount}
      </div>
    )
  }
}

reactMixin(Money.prototype, PureRenderMixin)
