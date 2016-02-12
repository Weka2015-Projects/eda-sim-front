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
})
