import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Time} from '../../src/components/Time.jsx'

describe('<Time/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Time/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of time', () => {
    const wrapper = shallow(<Time/>)
    expect(wrapper).to.have.className('time')
  })
})
