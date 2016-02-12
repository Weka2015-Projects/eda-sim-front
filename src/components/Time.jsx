import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Time extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="time">
        <div className="time">
          <div className="setTime">{this.props.quantity}/24</div>
        </div>
      </div>
    )
  }
}

reactMixin(Time.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const TimeContainer = connect(mapStateToProps, actionCreators)(Time)
