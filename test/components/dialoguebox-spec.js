import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {DialogueBox} from '../../src/components/DialogueBox.jsx'

describe('<DialogueBox/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<DialogueBox />)
    expect(wrapper).to.be.ok
  })
  it('has a classname of DialogueBox', () => {
    const wrapper = shallow(<DialogueBox />)
    expect(wrapper).to.have.className('DialogueBox')
  })
  it('renders correct teacher name', () => {
    const wrapper = shallow(<DialogueBox giver="Josh"/>)
    expect(wrapper.find('h3')).to.have.text('Josh')
  })
  it('renders correct text', () => {
    const wrapper = shallow(<DialogueBox/>)
    expect(wrapper.find('p')).to.have.text('')
  })
})
