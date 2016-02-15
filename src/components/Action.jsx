import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Action extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e) {
    e.preventDefault()
    this.props.startAction(this.props.name)
  }
  render() {
    const skillsArray = this.props.skills.map((skill, index) => {
      return <div className="skill">{index}: +{skill}</div>
    })
    const resourcesArray = this.props.resources.map((resource, index) => {
      return <div className="resource">{index}: {resource}</div>
    })
    const initialCosts = this.props.initialCosts.map((cost, index) => {
      return <div className="initial-cost">{index}: -{cost}</div>
    })
    return (
      <div className="action">
        <div className="header">
          <h6>{this.props.name}</h6>
          <div className="button-wrapper">
            <button disabled={!this.props.disabled} onClick={this.handleClick.bind(this)}>Do This</button>
          </div>
        </div>
        <div className="action-details">
          <div className="skills">{skillsArray}</div>
          <div className="cost">{resourcesArray}</div>
          <div className="initial-costs">{initialCosts}</div>
        </div>
      </div>
    )
  }
}

reactMixin(Action.prototype, PureRenderMixin)
