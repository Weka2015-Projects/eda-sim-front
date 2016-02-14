import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { Item } from './item'

export class Items extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const items = this.props.items.map((item, idx) => {
      return <Item name={item.get('name')} money={item.get('money')} resources={item.get('resources')} key={idx}/>
    })
    return (
      <div className="items">
        <h4>items</h4>
        {items}
      </div>
    )
  }
}

reactMixin(Items.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    items: state.get('items')
  }
}

export const ItemsContainer = connect(mapStateToProps, actionCreators)(Items)
