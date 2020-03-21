import { maxLength, required } from '../../utils/validation'
import React, { FC } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Input from '../common/FormComponents/Input/Input'

const maxLength30 = maxLength(30)

const LoginForm: FC<InjectedFormProps> = ({ error, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Input}
        name='email'
        placeholder='login here'
        label={`Enter your login:`}
        validate={[maxLength30, required]}
      />
      <Field
        component={Input}
        type={'password'}
        name='password'
        placeholder='password here'
        label={`Enter your password:`}
        validate={[maxLength30, required]}
      />
      <Field component={Input} type={'checkbox'} name='rememberMe' label={`remember me`} />
      {error && <div>{error}</div>}
      <button type='submit'>Login</button>
    </form>
  )
}

export default reduxForm<{ email: string, password: string, rememberMe: boolean }>({ form: `login` })(LoginForm)
