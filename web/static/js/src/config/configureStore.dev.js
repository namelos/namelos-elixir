import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { saga } from 'src/model'
import { reducer } from 'src/model'
import { DevTools } from 'src/config/DevTools'
import { client } from 'src/config/client'

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()

  const store =  createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        client.middleware(),
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
