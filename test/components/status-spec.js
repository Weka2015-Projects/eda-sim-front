import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Status} from '../../src/components/Status.jsx'

describe('<Status />', () => {
  xit('renders without any props', () => {
    const wrapper = shallow(<Status/>)
    expect(wrapper).to.be.ok
  })
  xit('has a classname of status', () => {
    const wrapper = shallow(<Status />)
    expect(wrapper).to.have.className('status')
  })

})
