import React, { FC } from 'react'
import classes from './Header.module.scss'
import logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'

interface IHeaderProps {
  isAuth: boolean
  login?: string
  logoutThunkCreator: () => void
}

const Header: FC<IHeaderProps> = ({ isAuth, login, logoutThunkCreator }) => {
  return (
    <header className={`app_header ${classes.header}`}>
      <img className={classes.headerLogo} src={logo} width={37} height={21} alt='Logo' />
      <input className={classes.headerSearch} type='search' placeholder='Search' />
      <div className={classes.headerMenuItem}>People</div>
      <div className={classes.headerMenuItem}>Games</div>
      <div className={classes.headerMenuItem}>Music</div>
      <div className={classes.headerMenuItem}>Help</div>
      <div>
        {isAuth ? (
          <div>
            {`${login} `}
            <button onClick={() => logoutThunkCreator()}>Logout</button>
          </div>
        ) : (
          <NavLink to={`/login`}>Click to login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
