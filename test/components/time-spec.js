import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Time} from '../../src/components/Time.jsx'
import initialState from '../fixtures/test-state.js'

describe('<Time/>', () => {
  it('has a classname of time', () => {
    const wrapper = shallow(<Time time={initialState.get('time')}/>)
    expect(wrapper).to.have.className('time')
  })
  it('renders the correct hour', () => {
    const wrapper = shallow(<Time time={initialState.get('time')}/>)
    expect(wrapper.find('.hour')).to.have.text('7:00')
  })
  it('renders the correct day', () => {
    const wrapper = shallow(<Time time={initialState.get('time')}/>)
    expect(wrapper.find('.day')).to.have.text('Day: 1')

  })
  it('renders the correct week', () => {
    const wrapper = shallow(<Time time={initialState.get('time')}/>)
    expect(wrapper.find('.week')).to.have.text('Week: 1')

  })
  it('renders the correct phase', () => {
    const wrapper = shallow(<Time time={initialState.get('time')}/>)
    expect(wrapper.find('.phase')).to.have.text('Phase: 1')

  })
})
