import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { ResourceContainer } from './Resource'

export class Resources extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>Resources
        <ResourceContainer />
      </div>
    )
  }
}

reactMixin(Resources.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const ResourcesContainer = connect(mapStateToProps, actionCreators)(Resources)
