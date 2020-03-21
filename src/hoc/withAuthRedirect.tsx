import React, { FC, ReactNode } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { IState } from '../redux/store'

interface IRedirectComponentProps {
  isAuth: boolean
}

const mapStateToProps = (state: IState): IRedirectComponentProps => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any): ReactNode => {
  const RedirectComponent: FC<IRedirectComponentProps> = ({ isAuth }) => {
    if (!isAuth) return <Redirect to={`/login`} />

    return <Component />
  }

  return connect(mapStateToProps)(RedirectComponent)
}
