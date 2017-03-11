import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, CounterApp } from '../view'
import Registration from 'src/view/account/Registration'
import Login from 'src/view/account/Login'
import Quotes from 'src/view/Quotes'

export const routes = <Route path="/" component={App}>
  <IndexRoute component={Quotes} />
  <Route path="/registration" component={Registration} />
  <Route path="/login" component={Login} />
</Route>
