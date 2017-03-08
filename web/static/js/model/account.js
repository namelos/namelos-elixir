import axios from 'axios'

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

const registerRequested = () =>
  ({ type: RegisterRequested })
const registerSucceeded = user =>
  ({ type: RegisterSucceeded, user })
const registerFailed = error =>
  ({ type: RegisterFailed, error })

export const register = user => dispatch => {
  dispatch(registerRequested())
  axios.post('/api/users', { user })
    .then(({ data }) => data)
    .then(user => dispatch(registerSucceeded(user)))
    .catch(error => dispatch(registerFailed(error)))
}

window.register = register