import test from 'ava'
import { any } from 'src/model'
import { account, register, registerActions, registerUser } from 'src/model/account'
import { put, call } from 'redux-saga/effects'

const validUser = { email: 'john@example.com', password: 'secret' }
const validResponse = { id: 1, email: 'john@example.com' }
const errorResponse = { message: 'anyway it just failed' }

const initialState = account(undefined, any)
test('account should be an empty user in the beginning', t => {
  t.is(initialState.user.id, null)
  t.is(initialState.user.email, null)
})

const requestedState = account(initialState, registerActions.requested(validUser))
test('isFetching should be true after register is requested', t => {
  t.is(requestedState.user.id, null)
  t.is(requestedState.user.email, null)
  t.is(requestedState.isFetching, true)
})

const succeededState = account(initialState, registerActions.succeeded(validResponse))
test('isFetching should be false after resolve registration', t =>
  t.is(succeededState.isFetching, false))
test('should set user id and email after resolve registration', t =>
  t.deepEqual(succeededState.user, validResponse))

const failedState = account(initialState, registerActions.failed(errorResponse))
test('isFetching should be false after request failed', t =>
  t.is(succeededState.isFetching, false))
test('should store exception after request failed', t =>
  t.deepEqual(failedState.error, errorResponse))

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
