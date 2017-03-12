import React from 'react'
import { Router, browserHistory } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import { DevTools } from 'src/config/DevTools'
import { routes } from 'src/config/routes'
import { client } from './apolloClient.js'
import { configureStore } from 'src/config/configureStore'

const store = configureStore()

window.store = store

export default () => <ApolloProvider store={store} client={client}>
  <div>
    <Router history={browserHistory} routes={routes} />
    <DevTools />
  </div>
</ApolloProvider>