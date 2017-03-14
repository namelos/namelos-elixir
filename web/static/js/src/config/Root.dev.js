import React from 'react'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo'
import { DevTools } from 'src/config/DevTools'
import { routes } from 'src/config/routes'
import { client } from './apolloClient.js'
import { configureStore } from 'src/config/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

window.store = store

export default () => <ApolloProvider store={store} client={client}>
  <div>
    <Router history={history} routes={routes} />
    <DevTools />
  </div>
</ApolloProvider>