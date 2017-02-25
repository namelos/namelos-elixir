import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import { reducer } from '../model'
import { DevTools } from './DevTools'

export const configureStore = initialState => createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(createLogger()),
    DevTools.instrument()
  )
)
