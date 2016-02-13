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
    console.log(this.props.resources)
    const skillsArray = this.props.skills.map((s, index) => {
      return <div className="skill">{index}: +{s}</div>
    })
    const resourcesArray = this.props.resources.map((r, index) => {

      return <div className="resource">{index}: {r}</div>
    })
    return (
      <div className="action">
        <h6>{this.props.name}</h6>
        <div className="action-details">
          <div className="skills">{skillsArray}</div>
          <div className="cost">{resourcesArray}</div>
          <div className="initial-cost"></div>
        </div>
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
