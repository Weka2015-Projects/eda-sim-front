'use strict'
import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import {Map} from 'immutable'
import { mount, render, shallow } from 'enzyme'
import {Quest} from '../../src/components/Quest.jsx'

describe('<Quest/>', () => {
  const reward = Map({
    experience: Map({
      soft: 300,
      tech: 100,
      creative: 100
    })
  })
  const giver = 'simon'
  const requirement = '24'
  const name = 'nilu sends emails'
  const task = 'pair-programming'
  it('has a classname of quest', () => {
    const wrapper = shallow(<Quest reward={reward} />)
    expect(wrapper).to.have.className('quest')
  })
  it('renders the correct header with the quest name', () => {
    const wrapper = shallow(<Quest reward={reward} name={name} giver={giver} task={task}/>)
    expect(wrapper.find('h6')).to.have.text('nilu sends emails')
  })
  it('dispays correct task', () => {
    const wrapper = shallow(<Quest reward={reward} giver={giver} requirement={requirement} task={task}/>)
    expect(wrapper.find('.requirements')).have.text('pair-programming for 24 hours')
  })
  it('displays correct quest giver', () => {
    const wrapper = shallow(<Quest giver={giver} reward={reward} />)
    expect(wrapper.find('.giver')).to.have.text('simon')
  })
})
