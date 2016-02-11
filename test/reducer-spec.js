import { expect } from 'chai'
import { List, Map, fromJS } from 'immutable'

import reducer from '../src/reducer.js'

describe('reducer', () => {
  describe('NEXT', () => {
    describe('hours', () => {
      it('increases the hour by 1')
      describe('active actions', () => {
        //TODO write each actions hourly modifier test
      })
    })
    describe('days', () => {
      it('increases the day by 1')
      //TODO write day recharge effect tests
    })
    describe('weeks', () => {
      it('increase the week by 1')
      //TODO write week recharge effect tests
    })
    describe('phases', () => {
      it('increases the phase by 1')
      //TODO write phase recharge effect tests
    })
  })
  describe('CHANGE_ACTION', () => {
    it('changes to...')
    //TODO write unit tests for changing to each action
  })
  describe('BUY_ITEM', () => {
    it('buys...')
    //TODO write unit tests for each items effect
  })
  describe('START_GAME', () => {
    it('starts game')
  })
  describe('END_GAME', () => {
    it('ends game')
  })
})
