import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { registerActions } from 'src/model/account'

const mapState = ({ account }) => ({ user: account.user })

let RegistrationForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <p>Registration</p>

    <label htmlFor="email">Email</label>
    <Field name="email" component="input"/>

    <label htmlFor="password">Password</label>
    <Field name="password" component="input" type="password"/>

    <button type="submit">Submit</button>
  </form>

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm)

const Registration = ({ dispatch }) => {
  const handleSubmit = user => dispatch(registerActions.requested(user))
  return <RegistrationForm onSubmit={handleSubmit} />
}

export default connect(mapState)(Registration)