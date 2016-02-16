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
  clickToStart(action){
    this.props.startAction(action)
  }
  render() {
    const actions = this.props.actions.map((action, idx) => {
      return <Action disabled={this.props.disabled} startAction={this.clickToStart.bind(this)} name={action.get('name')} skills={action.get('skills')} resources={action.get('resources')} initialCosts={action.get('initialCosts')} key={idx} />
    })
    return (
      <div className="actions widget">
        <div className="header">
          <h4>actions</h4>
        </div>
        {actions}
      </div>
    )
  }
}

reactMixin(Actions.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    disabled: state.get('isPlaying'),
    actions: state.get('tasks')
  }
}

export const ActionsContainer = connect(mapStateToProps, actionCreators)(Actions)
