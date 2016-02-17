import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Map } from 'immutable'
chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import {Resources} from '../../src/components/Resources.jsx'
