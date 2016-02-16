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
      <div className="DialogueBox">
          <div className="Image">
            <img className="img" src={`../img/${this.props.giver}`}></img>
          </div>
        <div className="Dialogue">
          <h3>{this.props.giver}</h3>
          <p className="Text">{this.props.content}</p>
          <button onClick={this.startGame}>Continue</button>
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
