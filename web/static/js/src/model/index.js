import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { takeEvery } from 'redux-saga/effects'
import { createAction } from 'src/lib'
import { counter } from 'src/model/counter'
import { account, registerUser, REGISTER } from './account'

export const any = createAction('ANY')()

export function* saga() {
  yield [
    takeEvery(REGISTER.Requested, registerUser)
  ]
}

export const reducer = combineReducers({ counter, account, form })
