import { post } from 'src/lib/httpClient'
import { call, put } from 'redux-saga/effects'
import { createAction } from 'src/lib'

export const REGISTER = {
  Requested: 'register/Requested',
  Succeeded: 'register/Succeeded',
  Failed: 'register/Failed'
}

export const registerActions = {
  requested: createAction(REGISTER.Requested),
  succeeded: createAction(REGISTER.Succeeded),
  failed: createAction(REGISTER.Failed)
}

export const register = user =>
  post('/api/users', { user })
    .then(res => res.data)

export function* registerUser(action) {
  try {
    const user = yield call(register, action.payload)
    yield put(registerActions.succeeded(user))
  } catch (error) {
    yield put(registerActions.failed(error))
  }
}
