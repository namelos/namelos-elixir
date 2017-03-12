import { post } from 'src/lib/httpClient'
import { call, put } from 'redux-saga/effects'
import { createAction } from 'src/lib'

export const LOGIN = {
  Requested: 'login/Requested',
  Succeeded: 'login/Succeeded',
  Failed: 'login/Failed'
}

export const loginActions = {
  requested: createAction(LOGIN.Requested),
  succeeded: createAction(LOGIN.Succeeded),
  failed: createAction(LOGIN.Failed)
}

export const login = session => {
  return post('/api/sessions', { session })
    .then(res => res.data);
}

export function* loginUser(action) {
  try {
    const user = yield call(login, action.payload)
    yield put(loginActions.succeeded(user))
  } catch (error) {
    yield put(loginActions.failed(error))
  }
}
