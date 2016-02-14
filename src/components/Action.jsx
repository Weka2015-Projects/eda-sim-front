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
        <h6>{this.props.name}</h6>
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
