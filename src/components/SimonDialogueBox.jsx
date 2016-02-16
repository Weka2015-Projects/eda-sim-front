import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class SimonDialogueBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="SimonDialogueBox">
        <div className="SimonImage">
          <img className="Simon" src="../img/simon.jpg"></img>
        </div>
        <div className="SimonDialogue">
          <p>"your first quest is: cry"</p>
          <button>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(SimonDialogueBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const SimonDialogueContainer = connect(mapStateToProps)(SimonDialogueBox)
