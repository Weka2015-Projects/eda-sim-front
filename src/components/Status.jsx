import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Status extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>Status</div>
    )
  }
}

reactMixin(Status.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const StatusContainer = connect(mapStateToProps, actionCreators)(Status)
