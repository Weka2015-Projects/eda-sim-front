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
      return <Action startAction={this.clickToStart.bind(this)} name={action.get('name')} skills={action.get('skills')} resources={action.get('resources')} initialCosts={action.get('initialCosts')} key={idx} />
    })
    return (
      <div className="actions">
        <h4>Actions</h4>
        {actions}
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
