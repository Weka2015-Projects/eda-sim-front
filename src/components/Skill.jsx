import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Skill extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="skill">
        <h6>{this.props.name}</h6>
        <div className="experience">
          <div className="amountOfExp" style={{width: parseInt(this.props.exp/this.props.expToLevel * 100) + '%'}}></div>
          <div className="expNumber">{this.props.exp}/{this.props.expToLevel}</div>
        </div>
        <div className="level">{this.props.level}</div>
      </div>
    )
  }
}

reactMixin(Skill.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const SkillContainer = connect(mapStateToProps, actionCreators)(Skill)
