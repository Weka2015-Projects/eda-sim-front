import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Item} from '../../src/components/Item.jsx'

describe('<Item/>', () => {
    const item =  Map({
      name: 'Mountain Dew',
      money: 5,
      resources: Map({
        energy: 5,
        mood: 1,
      })
    })
  it('has a classname of item', () => {
    const wrapper = shallow(<Item name={item.get('name')} resources={item.get('resources')} money={item.get('money')}/>)
    expect(wrapper).to.have.className('item')
  })
  it('renders task name', () => {
    const wrapper = shallow(<Item name={item.get('name')} resources={item.get('resources')} money= {item.get('money')}/>)
    expect(wrapper.find('h6')).to.have.text('Mountain Dew')
  })
  it('displays the correct resources increased', () => {
    const wrapper = shallow(<Item name={item.get('name')} resources={item.get('resources')} money= {item.get('money')}/>)
    expect(wrapper.find('.item-details').find('.resources-gained').find('.resource').first()).to.have.text('energy: 5')
  })
  it('displays the correct cost of the good', () => {
    const wrapper = shallow(<Item name={item.get('name')} resources={item.get('resources')} money= {item.get('money')}/>)
    expect(wrapper.find('.item-details').find('.money')).to.have.text(5)
  })
})
