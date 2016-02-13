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
    const { time } = this.props
    return (
      <div className="time">
        <div className="hour">{time.get('hour')}:00</div>
        <div className="day">Day: {time.get('day')}</div>
        <div className="week">Week: {time.get('week')}</div>
        <div className="phase">Phase: {time.get('phase')}</div>
      </div>
    )
  }
}

reactMixin(Time.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    time: state.get('time')
  }
}

export const TimeContainer = connect(mapStateToProps, actionCreators)(Time)
