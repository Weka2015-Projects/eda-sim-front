import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

class SubmitForm extends Component {
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    var name = this.refs.name.value
    if(!name) return
    this.props.submitScore(name)
  }
  render() {
    return (
        <form className="submit-form" onSubmit={this.handleSubmit.bind(this)}>
          <h1>You just Graduated!</h1>
          <h2>Your Score is {this.props.score || 0}</h2>
          <h2>What's your name?</h2>
          <input type="text" name="name" ref="name" />
          <button type="submit">Submit Score</button>
        </form>
      )
  }
}

reactMixin(SubmitForm.prototype, PureRenderMixin)

export default SubmitForm
