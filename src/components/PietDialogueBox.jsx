import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class PietDialogueBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="PietDialogueBox">
        <div className="PietImage">
          <img className="Piet" src="../img/piet.jpg"></img>
        </div>
        <div className="PietDialogue">
          <p>"your second quest is: sleep"</p>
          <button>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(PietDialogueBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const PietDialogueContainer = connect(mapStateToProps)(PietDialogueBox)
