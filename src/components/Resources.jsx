import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { Resource } from './Resource'
import { Money } from './Money'
export class Resources extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const {resources} = this.props
    const resourceArray = resources.map((r, idx) => {
      return <Resource name={idx} quantity={r} />
    })
    return (
      <div className="resources widget">
        <div className="header">
          <h4>Resources</h4>
        </div>
        <div className="resources-container">
          {resourceArray}
          <Money amount={this.props.money}/>
        </div>
      </div>
    )
  }
}

reactMixin(Resources.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    money: state.get('money'),
    resources: state.get('resources')
  }
}

export const ResourcesContainer = connect(mapStateToProps)(Resources)
