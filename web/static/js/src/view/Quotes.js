import React, { Component } from 'react'
import { compose } from 'redux'
import { gql, graphql } from 'react-apollo'
import { Field, reduxForm } from 'redux-form'

const quotesQuery = gql`
  query {
    quotes {
      id
      content
    }
  }
`
const quoteMutation = gql`
  mutation addQuote($content: String!) {
    quote(content: $content) {
      id
      content
    }
  }
`

const QuotesApp = ({ data, mutate }) => {
  const handleSubmit = value => mutate({
    variables: { content: value.quote }
  }).then(() => data.refetch())

  return <div>
    { data.quotes && <Quotes quotes={data.quotes}/> }
    <QuoteForm onSubmit={handleSubmit} />
  </div>;
}

const Quotes = ({ quotes }) => <ul>
  { quotes && quotes.map(
    quote => <Quote quote={quote} key={quote.id}/>) }
</ul>

const Quote = ({ quote }) => <li>{ quote.content }</li>

let QuoteForm = ({ handleSubmit }) => <form onSubmit={handleSubmit}>
  <Field name="quote" component="input" />
  <button type="submit">Submit</button>
</form>

QuoteForm = reduxForm({ form: 'quote' })(QuoteForm)

export default compose(
  graphql(quotesQuery),
  graphql(quoteMutation)
)(QuotesApp)
