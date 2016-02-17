'use strict'
import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Quest} from '../../src/components/Quest.jsx'

describe('<Quest/>', () => {
  const  Map({
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
  it('has a classname of quest', () => {
    const wrapper = shallow(<Quest quests={quests} rewards={rewards} />)
    expect(wrapper).to.have.className('quest')
  })
  it('renders correct quest name', () => {
    const wrapper = shallow(<Quest quests={quests} rewards={rewards} />)
    expect(wrapper.find('h6')).to.have.text('')
  })
  it('dispays correct task', () => {
    const wrapper = shallow(<Quest quests={quests} rewards={rewards} />)
    expect(wrapper)
  })
  it('renders the correct requirments', () => {
    const wrapper = shallow(<Quest/>)
    expect(wrapper)
  })
  it('displays correct quest giver', () => {
    const wrapper = shallow(<Quest quests={quests} rewards={rewards} />)
    expect(wrapper)
  })
  it('renders the correct reward/experience' () => {
    const wrapper = shallow(<Quest/>)
    expect(wrapper)
  })
})
