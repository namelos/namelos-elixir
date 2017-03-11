import { createReducer } from 'src/lib'
import { REGISTER } from './account'
export { REGISTER, registerUser, registerActions } from './account'

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

