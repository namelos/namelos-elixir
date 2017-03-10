import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { registerRequested } from 'src/model/account'

const mapState = ({ account }) => ({ user: account.user })
const mapDispatch = dispatch => bindActionCreators({ registerRequested }, dispatch)

let RegistrationForm = ({ handleSubmit, registerRequested }) =>
  <form onSubmit={handleSubmit}>
    <p>Registration</p>

    <label htmlFor="email">Email</label>
    <Field name="email" component="input"/>

    <label htmlFor="password">Password</label>
    <Field name="password" component="input" type="password"/>

    <button type="submit">Submit</button>
  </form>

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm)

const Registration = ({ registerRequested }) => {
  const handleSubmit = user => registerRequested(user)
  return <RegistrationForm onSubmit={handleSubmit} />
}

export default connect(mapState, mapDispatch)(Registration)