import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {List, Map} from 'immutable'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Actions} from '../../src/components/Actions.jsx'

describe('<Actions />', () => {
  const actionList = List([
    Map({
      name: 'Pair Programming',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        softSkills: 3,
        techSkills: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    })
    ])
  it('renders a component with the correct class', () => {
    const wrapper = mount(<Actions actions={actionList} />)
    expect(wrapper).to.have.className('actions')
  })
})
