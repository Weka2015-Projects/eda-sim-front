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
  it('has a classname of quest', () => {
    const wrapper = shallow(<Quest reward={reward} />)
    expect(wrapper).to.have.className('quest')
  })
  it('renders correct quest name', () => {
    const wrapper = shallow(<Quest  reward={reward}/>)
    expect(wrapper.find('h6')).to.have.text('')
  })
  xit('dispays correct task', () => {
    const wrapper = shallow(<Quest reward={reward} />)
    expect(wrapper)
  })
  xit('renders the correct requirments', () => {
    const wrapper = shallow(<Quest reward={reward}/>)
    expect(wrapper)
  })
  it('displays correct quest giver', () => {
    const wrapper = shallow(<Quest giver={giver} reward={reward} />)
    expect(wrapper)
  })

})
