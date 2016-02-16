import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import SubmitForm from '../../src/components/SubmitForm.jsx'

describe('<SubmitForm />', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<SubmitForm />)
    expect(wrapper).to.be.ok
  })
  it('renders a form', () => {
    const wrapper = shallow(<SubmitForm />)
    expect(wrapper.find('form')).to.be.ok
  })
  it('said form has a class of submt-form', () => {
    const wrapper = shallow(<SubmitForm />)
    expect(wrapper.find('form')).to.have.className('submit-form')
  })
  it('renders a h1 tag', () => {
    const wrapper = shallow(<SubmitForm />)
     expect(wrapper.find('h1')).to.be.ok
  })
  it('said h1 has a text of You just Graduated!', () => {
    const wrapper = shallow(<SubmitForm />)
    expect(wrapper.find('h1').first()).to.have.text('You just Graduated!')
  })
  it('renders two h2 tags', () => {
    const wrapper = shallow(<SubmitForm />)
    expect(wrapper.find('h2').length).to.equal(2)
  })
  it('renders two h2 tags', () => {
    const wrapper = shallow(<SubmitForm />)
    expect(wrapper.find('h2').length).to.equal(2)
  })
  it('Score renders correctly if not specified', () => {
    const wrapper = shallow(<SubmitForm />)
    expect(wrapper.find('h2').first()).to.have.text('Your Score is 0')
  })
  it('Score renders correctly if specified', () => {
    const wrapper = shallow(<SubmitForm score="342" />)
    expect(wrapper.find('h2').first()).to.have.text('Your Score is 342')
  })
  it('renders an input field', () => {
    const wrapper = shallow(<SubmitForm score="342" />)
    expect(wrapper.find('input')).to.be.ok
  })
  it('renders a button', () => {
    const wrapper = shallow(<SubmitForm score="342" />)
    expect(wrapper.find('button')).to.be.ok
  })
})
