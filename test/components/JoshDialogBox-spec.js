import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {JoshDialogBox} from '../../src/components/JoshDialogBox.jsx'

describe('<JoshDialogBox/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<JoshDialogBox />)
    expect(wrapper).to.be.ok
  })
  it('has a classname of JoshDialogBox', () => {
    const wrapper = shallow(<JoshDialogBox />)
    expect(wrapper).to.have.className('JoshDialogBox')
  })
  it('renders the correct text', () => {
    const wrapper = shallow(<JoshDialogBox />)
    expect(wrapper.find('p')).to.have.text('"Hello welcome to EDA! My name is Josh. Please choose your first challenge."')
  })
  it('renders the correct image', () => {
    const wrapper = shallow(<JoshDialogBox />)
    expect(wrapper.find('img')).to.have.className('josh')
  })
})
