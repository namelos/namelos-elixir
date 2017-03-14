import React from 'react'
import { createStore } from 'redux'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { reducer } from 'src/model'
import { client } from './apolloClient.js'
import { routes } from 'src/config/routes'

const store = createStore(reducer)
const history = syncHistoryWithStore(browserHistory, store)

export default () => <ApolloProvider store={store} client={client}>
  <Router history={history} routes={routes} />
</ApolloProvider>
