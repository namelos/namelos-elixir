import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

const quotesQuery = gql`
  query {
    quotes {
      id
      content
    }
  }
`

const Quotes = ({ data }) => <ul>
  { data.quotes && data.quotes.map(
    quote => <Quote quote={quote} key={quote.id}/>) }
</ul>

const Quote = ({ quote }) => <li>{ quote.content }</li>

export default graphql(quotesQuery)(Quotes)
