import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { Skill } from './Skill'

export class Skills extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="skills">
        <h6>{this.props.name}</h6>
        <div className="statusBars" >
          <div className="quantityOf" style={{width: this.props.quantity + 'xp'}}></div>
          <div className="statusNumbers">{this.props.quantity}/100</div>
        </div>
        <Skill />
      </div>
    )
  }
}

reactMixin(Skills.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const SkillsContainer = connect(mapStateToProps, actionCreators)(Skills)
