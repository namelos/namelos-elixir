import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { saga } from 'src/model'
import { reducer } from 'src/model'

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware
      )
    )
  )

  sagaMiddleware.run(saga)

  return store
}
