import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {JoshDialogueBox} from '../../src/components/JoshDialogueBox.jsx'

describe('<JoshDialogueBox/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<JoshDialogueBox />)
    expect(wrapper).to.be.ok
  })
  it('has a classname of JoshDialogueBox', () => {
    const wrapper = shallow(<JoshDialogueBox />)
    expect(wrapper).to.have.className('JoshDialogueBox')
  })
  it('renders the correct text', () => {
    const wrapper = shallow(<JoshDialogueBox />)
    expect(wrapper.find('p')).to.have.text('"Hello welcome to EDA! My name is Josh. Please choose your first challenge."')
  })
  it('renders the correct image', () => {
    const wrapper = shallow(<JoshDialogueBox />)
    expect(wrapper.find('img')).to.have.className('josh')
  })
})
