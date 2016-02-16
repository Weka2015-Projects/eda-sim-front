import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class PietDialogBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="PietDialogBox">
        <div className="PietImage">
          <img className="Piet" src="../img/piet.jpg"></img>
        </div>
        <div className="PietDialog">
          <p>"your second quest is: sleep"</p>
          <button>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(PietDialogBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const PietDialogContainer = connect(mapStateToProps)(PietDialogBox)
