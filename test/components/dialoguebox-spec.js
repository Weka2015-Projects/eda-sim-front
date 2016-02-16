import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Dialogues} from '../../src/components/Dialogues.jsx'
import questState from '../fixtures/quest-state.js'

describe('<Dialogues/>', () => {

  it('has a classname of Dialogues', () => {
    const wrapper = shallow(<Dialogues quest={questState.get('activeQuest')}/>)
    expect(wrapper).to.have.className('dialogue')
  })
  it('renders correct teacher name', () => {
    const wrapper = shallow(<Dialogues quest={questState.get('activeQuest')}/>)
    expect(wrapper.find('h3')).to.have.text('joshua')
  })
})
