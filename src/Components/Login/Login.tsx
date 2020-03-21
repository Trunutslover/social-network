import React, { FC } from 'react'
import classes from './Login.module.scss'
import { ILoginData } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import LoginReduxForm from './LoginReduxForm'

interface ILoginProps {
  isAuth: boolean
  loginThunkCreator: (formData: ILoginData) => void
}

const Login: FC<ILoginProps> = ({ isAuth, loginThunkCreator }) => {
  const myHandleSubmit = (formData: ILoginData) => {
    loginThunkCreator(formData)
  }

  if (isAuth) {
    return <Redirect to={`/myprofile`} />
  }

  return (
    <div className={classes.loginPage}>
      <h2>Log in to your account</h2>
      <LoginReduxForm onSubmit={myHandleSubmit} />
    </div>
  )
}

export default Login
