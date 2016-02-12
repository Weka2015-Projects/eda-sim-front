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
        <div  className="experience">
          <div className="amountOfExp" style={{width: this.props.quantity + '%'}}></div>
          <div className="expNumber">{this.props.quantity}/100</div>
        </div>
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
