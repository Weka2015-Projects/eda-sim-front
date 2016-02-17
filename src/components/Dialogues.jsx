import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'


export class Dialogues extends Component {
  constructor(props) {
    super(props)
  }
  toggleGame(e) {
    e.preventDefault()
    this.props.toggleGame()
  }
  render() {
    const { quest } = this.props
    return (
      <div className="dialogue">
          <div className="image-wrapper">
            <img className="img" src={`../img/${quest.get('giver')}.jpg`}></img>
          </div>
        <div className="info">
          <h3>{quest.get('giver')}</h3>
          <p className="text">{quest.get('content')}</p>
          <button onClick={this.toggleGame.bind(this)}>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(Dialogues.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    quest: state.get('activeQuest')
  }
}

export const DialoguesContainer = connect(mapStateToProps, actionCreators)(Dialogues)
