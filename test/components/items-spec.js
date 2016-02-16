import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {List, Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Items} from '../../src/components/Items.jsx'

describe('<Items />', () => {
  const items =  List([
    Map({
      name: 'Mountain Dew',
      money: 5,
      resources: Map({
        energy: 5,
        mood: 1,
      })
    })
    ])
  it('renders a component with the correct class', () => {
    const wrapper = mount(<Items items={items} />)
    expect(wrapper).to.have.className('items')
  })
  it('renders 1 <Item/> components', () => {
    const wrapper = mount(<Items items={items} />)
    expect(wrapper.find('.item').length).to.equal(1)
    })
})
