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
      <div className="status">You are {this.props.activeTask.length > 1 ? this.props.activeTask : 'doing Nothing'}</div>
    )
  }
}

reactMixin(Status.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    activeTask: state.get('activeTask')
  }
}

export const StatusContainer = connect(mapStateToProps, actionCreators)(Status)
