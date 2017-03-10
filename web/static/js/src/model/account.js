import axios from 'axios'
import { call, put } from 'redux-saga/effects'

export const RegisterRequested = 'counter/Register_Requested'
export const RegisterSucceeded = 'counter/Register_Succeeded'
export const RegisterFailed = 'counter/Register_Failed'

const initialState = {
  user: {
    id: null,
    email: null
  }
}

export const account = (state = initialState, action) => {
  switch(action.type) {
    case RegisterRequested: return { ...state, isFetching: true }
    case RegisterSucceeded: return { ...state, user: action.user, isFetching: false }
    case RegisterFailed:    return { ...state, error: action.error, isFetching: false }
    default:                return state
  }
}

export const registerRequested = user => ({ type: RegisterRequested, user })
const registerSucceeded = user => ({ type: RegisterSucceeded, user })
const registerFailed = error => ({ type: RegisterFailed, error })

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

