import { createReducer } from 'src/lib'
import { REGISTER } from './register'
export { REGISTER, register, registerUser, registerActions } from './register'
import { LOGIN } from './login'
export { LOGIN, login, loginUser, loginActions } from './login'

const initialState = {
  user: {
    id: null,
    email: null
  },
  isFetching: false
}

export const account = createReducer(initialState, {
  [REGISTER.Requested]: state =>
    ({ ...state, isFetching: true }),
  [REGISTER.Succeeded]: (state, user) =>
    ({ ...state, user, isFetching: false }),
  [REGISTER.Failed]:    (state, error) =>
    ({ ...state, error, isFetching: false }),
  [LOGIN.Requested]:    state =>
    ({ ...state, isFetching: true }),
  [LOGIN.Succeeded]:    (state, user) =>
    ({ ...state, user, isFetching: false }),
  [LOGIN.Failed]:       (state, error) =>
    ({ ...state, error, isFetching: false })
})
