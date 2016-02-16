import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class DialogueBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="JoshDialogueBox">
        <div className="JoshImage">
          <img className="josh" src="../img/josh.jpg"></img>
        </div>
        <div className="JoshDialogue">
          <p className="JoshWords">"Hello welcome to EDA! My name is Josh. Please choose your first challenge."</p>
          <button onClick={this.startGame}>Continue</button>
        </div>
      </div>
      <div className="MixDialogueBox">
        <div className="MixImage">
          <img className="mix" src="../img/mix.png"></img>
        </div>
        <div className="MixDialogue">
          <p>"your third quest is: make a diagram"</p>
          <button>Continue</button>
        </div>
      </div>
      <div className="PietDialogueBox">
        <div className="PietImage">
          <img className="Piet" src="../img/piet.jpg"></img>
        </div>
        <div className="PietDialogue">
          <p>"your second quest is: sleep"</p>
          <button>Continue</button>
        </div>
      </div>
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

reactMixin(DialogueBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const DialogueContainer = connect(mapStateToProps)(DialogueBox)
