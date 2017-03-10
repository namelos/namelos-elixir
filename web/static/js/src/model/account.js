import axios from 'axios'
import { call, put } from 'redux-saga/effects'

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
    case REGISTER.Succeeded:  return { ...state, user: action.user, isFetching: false }
    case REGISTER.Failed:     return { ...state, error: action.error, isFetching: false }
    default:                  return state
  }
}

export const registerRequested = user => ({ type: REGISTER.Requested, user })
const registerSucceeded = user => ({ type: REGISTER.Succeeded, user })
const registerFailed = error => ({ type: REGISTER.Failed, error })

const register = user =>
  axios.post('/api/users', { user })
    .then(res => res.data)

export function* registerUser(action) {
  try {
    const user = yield call(register, action.user)
    yield put(registerSucceeded(user))
  } catch (error) {
    yield put(registerFailed(error))
  }
}

