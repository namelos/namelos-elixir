import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { createAction } from 'src/lib'

export const REGISTER = {
  Requested: 'register/Register_Requested',
  Succeeded: 'register/Register_Succeeded',
  Failed: 'register/Register_Failed'
}

const initialState = {
  user: {
    id: null,
    email: null
  }
}

export const account = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER.Requested:  return { ...state, isFetching: true }
    case REGISTER.Succeeded:  return { ...state, user: action.payload, isFetching: false }
    case REGISTER.Failed:     return { ...state, error: action.payload, isFetching: false }
    default:                  return state
  }
}

export const registerActions = {
  requested: createAction(REGISTER.Requested),
  succeeded: createAction(REGISTER.Succeeded),
  failed: createAction(REGISTER.Failed)
}

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