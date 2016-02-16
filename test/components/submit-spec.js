import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Submit} from '../../src/components/Submit.jsx'

describe('<Submit />', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Submit score=''/>)
    expect(wrapper).to.be.ok
  })
  it('has a classname of status', () => {
    const wrapper = shallow(<Submit score=''/>)
    expect(wrapper).to.have.className('submit')
  })
  it('renders the SubmitForm component via shallow rendering', () => {
    const wrapper = shallow(<Submit score=''/>)
    expect(wrapper).to.have.text('<SubmitForm />')
  })
  it('renders nothing if score is not given', () => {
    const wrapper = mount(<Submit score=''/>)
    expect(wrapper.find('h2').first()).to.have.text('Your Score is 0')
  })
  it('renders the correct score when specified', () => {
    const wrapper = mount(<Submit score='3000'/>)
    expect(wrapper.find('h2').first()).to.have.text('Your Score is 3000')
  })
})
