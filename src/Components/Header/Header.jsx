import React from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/Logo.png'

function Header(props) {
    return (
        <header className={`app_header ${classes.header}`}>
            <img className={classes.headerLogo} src={logo} width={37} height={21} alt="Logo"/>
            <input className={classes.headerSearch} type="search" placeholder="Search" />
            <div className={classes.headerMenuItem}>People</div>
            <div className={classes.headerMenuItem}>Games</div>
            <div className={classes.headerMenuItem}>Music</div>
            <div className={classes.headerMenuItem}>Help</div>
            <div>{props.isAuth ? props.login : `Click to login`}</div>
        </header>
    )
}

export default Header;