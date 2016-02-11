import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Item extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>Item</div>
    )
  }
}

reactMixin(Item.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const ItemContainer = connect(mapStateToProps, actionCreators)(Item)
