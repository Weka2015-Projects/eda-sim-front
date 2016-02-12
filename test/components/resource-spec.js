import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Resource} from '../../src/components/Resource.jsx'

describe('<Resource/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Resource/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of resource', () => {
    const wrapper = shallow(<Resource />)
    expect(wrapper).to.have.className('resource')
  })
  it('renders resource name', () => {
    const wrapper = shallow(<Resource name='energy'/>)
    expect(wrapper.find('h6')).to.have.text('energy')
  })
  it('renders resource bar with correct percentage', () => {
    const wrapper = shallow(<Resource name='energy' quantity='50'/>)
    expect(wrapper.find('.quantity')).to.have.style('width', '50%')
  })
  it('renders out the quantity of the resource in text', () => {
    const wrapper = shallow(<Resource name='energy' quantity='50'/>)
    expect(wrapper.find('.statusNumber')).to.have.text('50/100')
  })
})
