import React from 'react'
import { createStore } from 'redux'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'
import { reducer } from 'src/model'
import { client } from 'src/config/client'
import { routes } from 'src/config/routes'

const store = createStore(reducer)

export default () => <ApolloProvider store={store} client={client}>
  <Router history={browserHistory} routes={routes} />
</ApolloProvider>
