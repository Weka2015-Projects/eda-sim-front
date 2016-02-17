import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'
chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Resources} from '../../src/components/Resources.jsx'

describe('renders', () => {
  const quests = Map({
    name: 'No more flying solo!',
    content: 'At Enspiral Sim Academy, we use the buddy system. No more flying solo. You need somebody watching your back - AT ALL TIMES.',
    giver: 'joshua',
    type: 'task',
    progress: 0,
    requirement: 24,
    task: 'Pair Programming',
    reward: Map({
      experience: Map({
        soft: 300,
        tech: 400
      })
    })
  })
})
