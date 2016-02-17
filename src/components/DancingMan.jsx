import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class DancingMan extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="stickMan">
        <svg height="2000" width="2000">
          <g transform="translate(20,55) rotate(10)">
            <line id="armOne" x1="20" y1="90" x2="100" y2="20" stroke="black" strokeWidth="3"/>
            <line id="armTwo" x1="200" y1="90" x2="100" y2="20" stroke="black" strokeWidth="3"/>
            <line id="torso" x1="130" y1="100" x2="100" y2="20" stroke="black" strokeWidth="3"/>
          </g>
          <circle id="face" cx="120" cy="60" r="30" fill="white" stroke="black" strokeWidth="3"/>
          <circle id="eyeOne" cx="100" cy="60" r="5" fill="white" stroke="black" strokeWidth="3"/>
          <circle id="eyeTwo" cx="130" cy="60" r="5" fill="white" stroke="black" strokeWidth="3"/>
          <g transform="translate(25,135) rotate(10)">
            <line id="legOne" x1="20" y1="90" x2="110" y2="20" stroke="black" strokeWidth="3"/>
            <line id="legTwo" x1="200" y1="90" x2="110" y2="20" stroke="black" strokeWidth="3"/>
          </g>
          <circle id="swissball" cx="400" cy="200" r="80" fill="white" stroke="black" fill="#3399ff" strokeWidth="1"/>
        </svg>
      </div>
    )
  }
}

reactMixin(DancingMan.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const DancingManContainer = connect(mapStateToProps)(DancingMan)
