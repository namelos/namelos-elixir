import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { saga } from '../model'
import { reducer } from '../model'
import { DevTools } from './DevTools'

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()

  const store =  createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        createLogger()
      ),
      DevTools.instrument()
    )
  )

  window.store = store

  sagaMiddleware.run(saga)

  return store
}
