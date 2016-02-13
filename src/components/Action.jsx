import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Action extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="action">
        <h6>{this.props.name}</h6>
      </div>
    )
  }
}

reactMixin(Action.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const ActionContainer = connect(mapStateToProps, actionCreators)(Action)
