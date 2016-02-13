// import React from 'react'
// import chai, { expect } from 'chai'
// import chaiEnzyme from 'chai-enzyme'
// import { Map } from 'immutable'

// chai.use(chaiEnzyme())

// import { mount, render, shallow } from 'enzyme'
// import {Skills} from '../../src/components/Skills.jsx'

// describe('<Skills/>', () => {
//   const skillArray = Map({
//     'soft': Map({
//       lvl: 1,
//       exp: 200,
//       expToLevel: 250
//     }),
//     'creativity': Map({
//       lvl: 2,
//       exp: 200,
//       expToLevel: 350
//     }),
//     'technical': Map({
//       lvl: 1,
//       exp: 200,
//       expToLevel: 250
//     })
//   })


//   it('has a className of skills', () => {
//     const wrapper = shallow(<Skills skills={skillArray}/>)
//     expect(wrapper).to.have.className('skills')
//   })
//   it('renders three individual <Skill/> components', () => {
//     const wrapper = mount(<Skills skills={skillArray} />)
//     expect(wrapper.find('.skill').length).to.equal(3)
//     })
// })
