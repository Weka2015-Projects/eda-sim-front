// import React from 'react'
// import chai, { expect } from 'chai'
// import chaiEnzyme from 'chai-enzyme'
// import { Map } from 'immutable'
// chai.use(chaiEnzyme())

// import { mount, render, shallow } from 'enzyme'
// import {Resources} from '../../src/components/Resources.jsx'

// describe('<Resources />', () => {
//   const resourceData = Map({
//      energy: 50,
//      mood: 70
//    })
//   it('has a className of resources', () => {
//     const wrapper = shallow(<Resources resources={resourceData}/>)
//     expect(wrapper).to.have.className('resources')
//   })
//   it('renders two individual <Resource /> components', () => {
//     const wrapper = mount(<Resources resources={resourceData} />)
//     expect(wrapper.find('.resource').length).to.equal(2)
//     })
//   it('renders <Resource components correctly', () => {
//     const wrapper = mount(<Resources resources={resourceData} />)
//     expect(wrapper.find('.resource').first().find('h6')).to.have.text('energy')
//     expect(wrapper.find('.resource').last().find('h6')).to.have.text('mood')
//   })
// })
