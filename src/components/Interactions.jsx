import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { ItemsContainer } from './Items'
import { ActionsContainer } from './Actions'

export class Interactions extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="interactions">Interactions
        <ActionsContainer />
        <ItemsContainer />
      </div>
    )
  }
}

reactMixin(Interactions.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const InteractionsContainer = connect(mapStateToProps, actionCreators)(Interactions)
