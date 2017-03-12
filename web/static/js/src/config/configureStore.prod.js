import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { saga } from 'src/model'
import { reducer } from 'src/model'
import { client } from './apolloClient.js'

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        client.middleware(),
        sagaMiddleware
      )
    )
  )

  sagaMiddleware.run(saga)

  return store
}
