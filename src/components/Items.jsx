import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import {ItemContainer} from './Item'

export class Items extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        Items
        <ItemContainer />
      </div>
    )
  }
}

reactMixin(Items.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const ItemsContainer = connect(mapStateToProps, actionCreators)(Items)
