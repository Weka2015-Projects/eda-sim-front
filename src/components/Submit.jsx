import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import SubmitForm from './SubmitForm'

export class Submit extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="submit">
        <SubmitForm score={this.props.score} submitScore={this.props.submitScore.bind(this)} />
      </div>
    )
  }
}

reactMixin(Submit.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    score: state.get('score')
  }
}

export const SubmitContainer = connect(mapStateToProps, actionCreators)(Submit)