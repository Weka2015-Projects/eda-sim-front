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
      return <div className="skill">{index}: <span>+{skill}</span></div>
    })
    const resourcesArray = this.props.resources.map((resource, index) => {
      return <div className="resource">{index}: <span>{resource}</span></div>
    })
    const initialCosts = this.props.initialCosts.map((cost, index) => {
      return <div className="initial-cost">{index}: <span>-{cost}</span></div>
    })
    return (
      <div className="action">
        <div className="header">
          <h6>{this.props.name}</h6>
          <div className="button-wrapper">
            <button disabled={!this.props.disabled} onClick={this.handleClick.bind(this)}>Do It</button>
          </div>
        </div>
        <div className="action-details">
          <div className="skills">
            <strong>Experience Per Hour</strong>
            {skillsArray}</div>
          <div className="cost">
            <strong>Cost Per Hour</strong>
            {resourcesArray}
          </div>
          <div className="initial-costs">
            <strong>Cost To Start</strong>
            {initialCosts}</div>
        </div>
      </div>
    )
  }
}

reactMixin(Action.prototype, PureRenderMixin)
