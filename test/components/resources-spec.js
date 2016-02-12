import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Resources} from '../../src/components/Resources.jsx'

describe('<Resources />', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Resources/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of items', () => {
    const wrapper = shallow(<Resources />)
    expect(wrapper).to.have.className('resources')
  })
  it('renders resource name', () => {
    const wrapper = shallow(<Resources name='energy'/>)
    expect(wrapper.find('h6')).to.have.text('energy')
  })
  // it('renders resources bar with correct percentage', () => {
  //   const wrapper = shallow(<Resources name='energy' quantities='50'/>)
  //   expect(wrapper.find('.quantities')).to.have.style('width', '50%')
  // })
  // it('renders out the quantity of the resources in text', () => {
  //   const wrapper = shallow(<Resources name='energy' quantities='50'/>)
  //   expect(wrapper.find('.statusNumbers')).to.have.text('50/100')
  // })
})
