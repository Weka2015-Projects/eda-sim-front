import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Item} from '../../src/components/Item.jsx'

describe('<Item />', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Item/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of item', () => {
    const wrapper = shallow(<Item />)
    expect(wrapper).to.have.className('item')
  })
})
