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
})
