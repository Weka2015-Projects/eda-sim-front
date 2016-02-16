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
          <g transform="translate(200,55) rotate(10)">
            <line id="armOne" x1="20" y1="90" x2="100" y2="20" stroke="black" strokeWidth="4"/>
            <line id="armTwo" x1="200" y1="90" x2="100" y2="20" stroke="black" strokeWidth="4"/>
            <line id="torso" x1="130" y1="100" x2="100" y2="20" stroke="black" strokeWidth="4"/>
          </g>
          <circle id="face" cx="300" cy="60" r="30" fill="white" stroke="black" strokeWidth="4"/>
          <circle id="eyeOne" cx="280" cy="60" r="5" fill="white" stroke="black" strokeWidth="4"/>
          <circle id="eyeTwo" cx="310" cy="60" r="5" fill="white" stroke="black" strokeWidth="4"/>
          <g transform="translate(200,140) rotate(10)">
            <line id="legOne" x1="20" y1="90" x2="110" y2="20" stroke="black" strokeWidth="4"/>
            <line id="legTwo" x1="200" y1="90" x2="110" y2="20" stroke="black" strokeWidth="4"/>
          </g>
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
