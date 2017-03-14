import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as routing, routerActions } from 'react-router-redux'
import { takeEvery } from 'redux-saga/effects'
import { client } from 'src/config/apolloClient.js'
import { createAction } from 'src/lib'
import { counter } from 'src/model/counter'
import { account, registerUser, REGISTER, loginUser, LOGIN } from './account'

export const any = createAction('ANY')()

export function* saga() {
  yield [
    takeEvery(LOGIN.Requested, loginUser),
    takeEvery(REGISTER.Requested, registerUser),
  ]
}

export const reducer = combineReducers({
  counter,
  account,
  form,
  routing,
  apollo: client.reducer()
})
