import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Action} from '../../src/components/Action.jsx'

describe('<Action/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Action/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of resource', () => {
    const wrapper = shallow(<Action/>)
    expect(wrapper).to.have.className('action')
  })
  it('renders task name', () => {
    const wrapper = shallow(<Action name='pair programming'/>)
    expect(wrapper.find('h6')).to.have.text('pair programming')
  })
})

Map({
  name: 'Pair Programming',
  resources: Map({
    energy: -10,
    mood: -3
  }),
  skills: Map({
    softSkills: 3,
    techSkills: 1
  }),
  initalCosts: Map({
    energy: 30,
    mood: 10
  })
})
