import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Skills} from '../../src/components/Skills.jsx'

describe('<Skills/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Skills/>)
    expect(wrapper).to.be.ok
  })
  it('has a className of skills', () => {
    const wrapper = shallow(<Skills/>)
    expect(wrapper).to.have.className('skills')
  })
  it('renders resource name technical', () => {
    const wrapper = shallow(<Skills name='technical'/>)
    expect(wrapper.find('h6')).to.have.text('technical')
  })
  it('renders resource name soft', () => {
    const wrapper = shallow(<Skills name='soft'/>)
    expect(wrapper.find('h6')).to.have.text('soft')
  })
  it('renders resource name creativity', () => {
    const wrapper = shallow(<Skills name='creativity'/>)
    expect(wrapper.find('h6')).to.have.text('creativity')
  })
  it('renders resource bar with the correct percentage', () => {
    const wrapper = shallow(<Skills name='technical' quantity='125'/>)
    expect(wrapper.find('.quantityOf')).to.have.style('width', '125xp')
  })
})
