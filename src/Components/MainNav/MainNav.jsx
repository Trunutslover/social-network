import React from 'react';
import classes from './MainNav.module.scss';
import {NavLink} from "react-router-dom";

function MainNav(props) {
    return (
        <nav className={`app_main_nav ${classes.main_nav}`}>
            <li><NavLink to={'/friends'}>Friends</NavLink></li>
            <li><NavLink to={'/messages'}>Messages</NavLink></li>
        </nav>
    )
}

export default MainNav;