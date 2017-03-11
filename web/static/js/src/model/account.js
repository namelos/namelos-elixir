import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { createAction, createReducer } from 'src/lib'

export const REGISTER = {
  Requested: 'register/Register_Requested',
  Succeeded: 'register/Register_Succeeded',
  Failed: 'register/Register_Failed'
}

export const registerActions = {
  requested: createAction(REGISTER.Requested),
  succeeded: createAction(REGISTER.Succeeded),
  failed: createAction(REGISTER.Failed)
}

const initialState = {
  user: {
    id: null,
    email: null
  }
}

export const account = createReducer(initialState, {
  [REGISTER.Requested]: state =>
    ({ ...state, isFetching: true }),
  [REGISTER.Succeeded]: (state, user) =>
    ({ ...state, user, isFetching: false }),
  [REGISTER.Failed]:    (state, error) =>
    ({ ...state, error, isFetching: false })
})

const register = user =>
  axios.post('/api/users', { user })
    .then(res => res.data)

export function* registerUser(action) {
  try {
    const user = yield call(register, action.payload)
    yield put(registerActions.succeeded(user))
  } catch (error) {
    yield put(registerActions.failed(error))
  }
}