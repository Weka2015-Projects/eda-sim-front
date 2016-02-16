import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class MixDialogBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="MixDialogBox">
        <div className="MixImage">
          <img className="mix" src="../img/mix.png"></img>
        </div>
        <div className="MixDialog">
          <p>"your third quest is: make a diagram"</p>
          <button>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(MixDialogBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const MixDialogContainer = connect(mapStateToProps)(MixDialogBox)
