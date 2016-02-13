import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Status} from '../../src/components/Status.jsx'

describe('<Status />', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Status/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of items', () => {
    const wrapper = shallow(<Status />)
    expect(wrapper).to.have.className('status')
  })
  
})
