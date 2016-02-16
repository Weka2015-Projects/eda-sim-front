import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'
import { Quest } from './Quest'

export class Quests extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { quest } = this.props
    return (
      <div className="quests widget">
        <div className="header">
          <h4>quests</h4>
        </div>
        {quest ? <Quest giver={quest.get('giver')} content={quest.get('content')} name={quest.get('name')} requirement={quest.get('requirement')} task={quest.get('task')} /> : <div className="empty">No Quests</div> }
      </div>
    )
  }
}

reactMixin(Quests.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {
    quest: state.get('activeQuest')
  }
}

export const QuestsContainer = connect(mapStateToProps)(Quests)
