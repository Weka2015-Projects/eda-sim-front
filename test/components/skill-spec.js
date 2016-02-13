// import React from 'react'

// import chai, { expect } from 'chai'
// import chaiEnzyme from 'chai-enzyme'

// chai.use(chaiEnzyme())

// import { mount, render, shallow } from 'enzyme'
// import {Skill} from '../../src/components/Skill.jsx'

// describe('<Skill/>', () => {
//   it('renders without any props', () => {
//     const wrapper = shallow(<Skill/>)
//     expect(wrapper).to.be.ok
//   })
//   it('has a className of skill', () => {
//     const wrapper = shallow(<Skill/>)
//     expect(wrapper).to.have.className('skill')
//   })
//   it('renders resouce name', () => {
//     const wrapper = shallow(<Skill name='soft'/>)
//     expect(wrapper.find('h6')).to.have.text('soft')
//   })
//   it('renders bar with correct percentage', () => {
//     const wrapper = shallow(<Skill level='1' name='soft' exp='50' expToLevel='100'/>)
//     expect(wrapper.find('.amountOfExp')).to.have.style('width', '50%')
//   })
//   it('renders out the exp of the experience in text', () => {
//     const wrapper = shallow(<Skill level='1' name='soft' exp='50' expToLevel='100'/>)
//     expect(wrapper.find('.expNumber')).to.have.text('50/100')
//   })
//   it('renders the correct level of the skill in text', () => {
//     const wrapper = shallow(<Skill level='1' name='soft' exp='50' expToLevel='100'/>)
//     expect(wrapper.find('.level')).to.have.text('1')
//   })

// })
