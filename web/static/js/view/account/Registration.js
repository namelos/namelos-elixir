import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { register } from '../../model/account'

const mapState = ({ account }) => ({ user: account.user })
const mapDispatch = dispatch => bindActionCreators({ register }, dispatch)

let RegistrationForm = ({ handleSubmit, register }) =>
  <form onSubmit={handleSubmit}>
    <p>Registration</p>

    <label htmlFor="email">Email</label>
    <Field name="email" component="input"/>

    <label htmlFor="password">Email</label>
    <Field name="password" component="input"/>

    <button type="submit">Submit</button>
  </form>

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm)

const Registration = ({ register }) => {
  const handleSubmit = user => register(user)
  return <RegistrationForm onSubmit={handleSubmit} />
}

export default connect(mapState, mapDispatch)(Registration)