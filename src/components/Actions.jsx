import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { Action } from './Action'

export class Actions extends Component {
  constructor(props) {
    super(props)

  }
  render() {
  
    return (
      <div className="actions">
      </div>
    )
  }
}

reactMixin(Actions.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    actions: state.get('tasks')
  }
}

export const ActionsContainer = connect(mapStateToProps, actionCreators)(Actions)
