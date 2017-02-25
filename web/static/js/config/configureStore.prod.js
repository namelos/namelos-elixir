import { createStore } from 'redux'
import { reducer } from '../model'

export const configureStore = initialState => createStore(
  reducer,
  initialState
)
