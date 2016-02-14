import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Item extends Component {
  constructor(props) {
    super(props)
  }
  handleClick(e){
    e.preventDefault()
    this.props.buyItem(this.props.name)
  }
  render() {
    const resourcesArray = this.props.resources.map((resource, index) => {
      return <div className="resource">{index}: {resource}</div>
    })
    return (
      <div className="item">
        <h6>{this.props.name}</h6>
        <button onClick={this.handleClick.bind(this)}>Buy</button>
        <div className="item-details">
          <div className="money">{this.props.money}</div>
          <div className="resources-gained">Resources Gained: {resourcesArray}</div>
        </div>
      </div>
    )
  }
}

reactMixin(Item.prototype, PureRenderMixin)
