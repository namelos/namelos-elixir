import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { reducer } from 'src/model'
import { routes } from 'src/config/routes'

const store = createStore(reducer)

export default () => <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
</Provider>
