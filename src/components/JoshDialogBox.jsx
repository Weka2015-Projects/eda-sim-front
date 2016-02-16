import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class DialogBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="DialogBox">
        <div className="teacherImage">
          <img className="josh" src="../img/josh.jpg"></img>
        </div>
        <div className="dialog">
          <p>"Hello welcome to EDA! My name is Josh. Please choose your first challenge."</p>
          <button onClick={this.startGame}>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(DialogBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const DialogContainer = connect(mapStateToProps)(DialogBox)
