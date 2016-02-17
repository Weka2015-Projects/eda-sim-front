import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'
chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Quests} from '../../src/components/Quests.jsx'

describe('renders', () => {
  const quests = Map({
    name: 'No more flying solo!',
    content: 'At Enspiral Sim Academy, we use the buddy system. No more flying solo. You need somebody watching your back - AT ALL TIMES.',
    giver: 'joshua',
    type: 'task',
    progress: 0,
    requirement: 24,
    task: 'Pair Programming',
    reward: Map({
      experience: Map({
        soft: 300,
        tech: 400
      })
    })
  })
  it('renders the quest', () => {
    const wrapper = mount(<Quests quest={quests}/>)
    expect(wrapper.find('.quest').length).to.equal(1)
  })
})
