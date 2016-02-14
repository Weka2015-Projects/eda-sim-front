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
      <div className="resources">
        {resourceArray}
        <Money amount={this.props.money}/>
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

export const ResourcesContainer = connect(mapStateToProps, actionCreators)(Resources)
