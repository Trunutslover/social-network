import React, { FC } from 'react'
import classes from './MainNav.module.scss'
import { NavLink } from 'react-router-dom'

const MainNav: FC = () => (
  <nav className={`app_main_nav ${classes.main_nav}`}>
    <li>
      <NavLink to={'/myprofile'} className={classes.main_nav_link} activeClassName={classes.main_nav_link_active}>
        Profile
      </NavLink>
    </li>
    <li>
      <NavLink to={'/friends'} className={classes.main_nav_link} activeClassName={classes.main_nav_link_active}>
        Friends
      </NavLink>
    </li>
    <li>
      <NavLink to={'/messages'} className={classes.main_nav_link} activeClassName={classes.main_nav_link_active}>
        Messages
      </NavLink>
    </li>
    <li>
      <NavLink to={'/users'} className={classes.main_nav_link} activeClassName={classes.main_nav_link_active}>
        Users
      </NavLink>
    </li>
  </nav>
)

export default MainNav
