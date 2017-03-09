import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { takeEvery } from 'redux-saga/effects'
export { increment, decrement } from './counter'
import { counter } from './counter'
import { account, registerUser, RegisterRequested } from './account'

export function* saga() {
  yield [
    takeEvery(RegisterRequested, registerUser)
  ]
}

export const reducer = combineReducers({ counter, account, form })
