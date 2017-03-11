import test from 'ava'
import { any } from 'src/model'
import { account, register, registerActions, registerUser } from 'src/model/account'
import { put, call } from 'redux-saga/effects'

const validUser = { email: 'john@example.com', password: 'secret' }
const validResponse = { id: 1, email: 'john@example.com' }
const errorResponse = { message: 'anyway it just failed' }

test('account reducer on registration', t => {
  const initialState = account(undefined, any)

  t.is(initialState.user.id, null, 'should have id')
  t.is(initialState.user.email, null, 'should have email')

  const requestedState = account(initialState, registerActions.requested(validUser))

  t.is(requestedState.user.id, null, 'should not have user id when not resolved')
  t.is(requestedState.user.email, null, 'should not have user email when not resolved')
  t.is(requestedState.isFetching, true, 'isFetching should be true when fetching')

  const succeededState = account(initialState, registerActions.succeeded(validResponse))
  t.is(succeededState.isFetching, false, 'isFetching should be false when resolved')
  t.deepEqual(succeededState.user, validResponse, 'should set user in state after resolved')

  const failedState = account(initialState, registerActions.failed(errorResponse))
  t.is(succeededState.isFetching, false, 'isFetching should be false when error')
  t.deepEqual(failedState.error, errorResponse, 'should set error in state after fetching fails')
})

test('register user', t => {
  const generator = registerUser(registerActions.requested(validUser))

  t.deepEqual(
    generator.next().value,
    call(register, validUser),
    'should call register api')

  t.deepEqual(
    generator.next(validResponse).value,
    put(registerActions.succeeded(validResponse)),
    'should dispatch succeeded action after')

  t.deepEqual(
    generator.throw(errorResponse).value,
    put(registerActions.failed(errorResponse)),
    'should dispatch failed action if an exception was thrown')
})
