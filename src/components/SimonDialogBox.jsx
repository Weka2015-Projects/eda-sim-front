import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class SimonDialogBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="SimonDialogBox">
        <div className="SimonImage">
          <img className="Simon" src="../img/simon.jpg"></img>
        </div>
        <div className="SimonDialog">
          <p>"your first quest is: cry"</p>
          <button>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(SimonDialogBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const SimonDialogContainer = connect(mapStateToProps)(SimonDialogBox)
