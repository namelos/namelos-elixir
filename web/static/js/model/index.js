import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
export { increment, decrement } from './counter'
import { counter } from './counter'
import { account } from './account'

export const reducer = combineReducers({ counter, account, form })
