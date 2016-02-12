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
      <div className="skill">Skill</div>
    )
  }
}

reactMixin(Skill.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const SkillContainer = connect(mapStateToProps, actionCreators)(Skill)
