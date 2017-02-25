import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, CounterApp } from '../view'

export const routes = <Route path="/" component={App}>
  <IndexRoute component={CounterApp} />
</Route>
