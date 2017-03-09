import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const Registration = ({ handleSubmit }) => <form>
  <p>Registration</p>
  <label htmlFor="email">Email</label>
  <Field name="email" component="input" />
  <label htmlFor="password">Email</label>
  <Field name="password" component="input" />
</form>

export default reduxForm({
  form: 'registration'
})(Registration)