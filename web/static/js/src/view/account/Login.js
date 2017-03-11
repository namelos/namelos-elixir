import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { loginActions } from 'src/model/account/login'

const mapState = ({ account }) => ({ user: account.user })

let LoginForm = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <p>Login</p>

    <label htmlFor="email">Email</label>
    <Field name="email" component="input"/>

    <label htmlFor="password">Password</label>
    <Field name="password" component="input" type="password"/>

    <button type="submit">Submit</button>
  </form>

LoginForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ dispatch }) => {
  const handleSubmit = user => dispatch(loginActions.requested(user))
  return <LoginForm onSubmit={handleSubmit} />
}

export default connect(mapState)(Login)
