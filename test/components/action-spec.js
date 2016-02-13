import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Action} from '../../src/components/Action.jsx'

describe('<Action/>', () => {
  const skills = Map({
      softSkills: 3,
      techSkills: 1
    })
  const resources = Map({
    energy: -10,
    mood: -3
  })
  const initialCosts = Map({
    energy: 30,
    mood: 10
  })
  it('has a classname of resource', () => {
    const wrapper = shallow(<Action skills={skills} resources={resources} initialCosts={initialCosts}/>)
    expect(wrapper).to.have.className('action')
  })
  it('renders task name', () => {
    const wrapper = shallow(<Action name='pair programming' skills={skills} resources={resources} initialCosts={initialCosts}/>)
    expect(wrapper.find('h6')).to.have.text('pair programming')
  })
  it('displays the correct skills', () => {
    const wrapper = shallow(<Action name='pair programming' skills={skills} resources={resources} initialCosts={initialCosts}/>)
    expect(wrapper.find('.action-details').find('.skills').find('.skill').first()).to.have.text('softSkills: +3')
  })
  it('displays the correct costs', () => {
    const wrapper = shallow(<Action name='pair programming' skills={skills} resources={resources} initialCosts={initialCosts}/>)
    expect(wrapper.find('.action-details').find('.cost').find('.resource').first()).to.have.text('energy: -10')
  })
  it('displays the correct initial costs', () => {
    const wrapper = shallow(<Action name='pair programming' skills={skills} resources={resources} initialCosts={initialCosts}/>)
    expect(wrapper.find('.action-details').find('.initial-costs').find('.initial-cost').first()).to.have.text('energy: -30')
  })
})
