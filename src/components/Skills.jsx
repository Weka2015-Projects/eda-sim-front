import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { Skill } from './Skill'
import { toJS } from 'immutable'

export class Skills extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const { skills } = this.props
    const skillArray = []
    skills.map((s, idx) => {
      skillArray.push(<Skill key={idx} name={idx} level={s.get('level')} exp={s.get('exp')} expToLevel={s.get('expToLevel')}/>)
    })
    return (
      <div className="skills">
        <h4>Skills</h4>
        <div className="skills-container">
          {skillArray}
        </div>
      </div>
    )
  }
}

reactMixin(Skills.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    skills: state.get('skills')
  }
}

export const SkillsContainer = connect(mapStateToProps, actionCreators)(Skills)
