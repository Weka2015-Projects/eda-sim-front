import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class MixDialogueBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="MixDialogueBox">
        <div className="MixImage">
          <img className="mix" src="../img/mix.png"></img>
        </div>
        <div className="MixDialogue">
          <p>"your third quest is: make a diagram"</p>
          <button>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(MixDialogueBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const MixDialogueContainer = connect(mapStateToProps)(MixDialogueBox)
