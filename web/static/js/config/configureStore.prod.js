import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from '../model'

export const configureStore = initialState => createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk)
  )
)
