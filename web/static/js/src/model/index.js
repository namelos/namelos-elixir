import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { takeEvery } from 'redux-saga/effects'
import { counter } from 'src/model/counter'
import { account, registerUser, REGISTER } from 'src/model/account'

export function* saga() {
  yield [
    takeEvery(REGISTER.Requested, registerUser)
  ]
}

export const reducer = combineReducers({ counter, account, form })
