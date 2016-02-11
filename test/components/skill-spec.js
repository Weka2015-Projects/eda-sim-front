import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Skill} from '../../src/components/Skill.jsx'

describe('<Skill/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Skill/>)
    expect(wrapper).to.be.ok
  })
  it('has a className of skill', () => {
    const wrapper = shallow(<Skill/>)
    expect(wrapper).to.have.className('skill')
  })
  it('renders resouce name', () => {
    const wrapper = shallow(<Skill name='soft'/>)
    expect(wrapper.find('h6')).to.have.text('soft')
  })
})
