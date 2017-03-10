import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { DevTools } from 'src/config/DevTools'
import { routes } from 'src/config/routes'
import { configureStore } from 'src/config/configureStore'

const store = configureStore()

window.store = store

export default () => <Provider store={store}>
  <div>
    <Router history={browserHistory} routes={routes} />
    <DevTools />
  </div>
</Provider>