import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Items} from '../../src/components/Items.jsx'

describe('<Items />', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Items/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of items', () => {
    const wrapper = shallow(<Items />)
    expect(wrapper).to.have.className('items')
  })
})
