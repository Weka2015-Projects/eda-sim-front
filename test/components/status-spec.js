import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Status} from '../../src/components/Status.jsx'

describe('<Status />', () => {
it('renders without any props', () => {
    const wrapper = shallow(<Status activeTask=''/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of status', () => {
    const wrapper = shallow(<Status activeTask=''/>)
    expect(wrapper).to.have.className('status')
  })
  it('renders doing nothing when no task is active', () => {
    const wrapper = shallow(<Status activeTask=''/>)
    expect(wrapper).to.have.text('You are doing Nothing')
  })
  it('renders the correct task when specified', () => {
    const wrapper = shallow(<Status activeTask='Pair Programming'/>)
    expect(wrapper).to.have.text('You are Pair Programming')
  })
})
