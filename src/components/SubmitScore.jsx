import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

class SubmitScore extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return () 
  }
}

reactMixin(SubmitScore.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const Container = connect(mapStateToProps, actionCreators)()
