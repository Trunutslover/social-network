import React from 'react'
import classes from './UsersPage.module.scss'
import userpic from '../../assets/Userpic.png'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'

export default function UsersPage(props) {
  const userList = props.users.map(value => {
    return (
      <div key={value.id} className={classes.user}>
        <div className={classes.firstCol}>
          <NavLink to={`/profile/${value.id}`}>
            <img
              className={classes.avatar}
              src={value.photos.small || userpic}
              alt='avatar'
              width='40px'
              height='40px'
            />
          </NavLink>
          {value.followed ? (
            <button
              disabled={props.usersFollowing.some(userId => userId === value.id)}
              onClick={() => {
                props.unfollowThunkCreator(value.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.usersFollowing.some(userId => userId === value.id)}
              onClick={() => {
                props.followThunkCreator(value.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div className={classes.secondCol}>
          <h3 className={classes.name}>{value.name}</h3>
          <p>{value.status}</p>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Paginator
        totalCount={props.totalCount}
        count={props.count}
        page={props.page}
        onPageChanged={props.onPageChanged}
      />
      <div className={classes.users}>{userList}</div>
    </div>
  )
}
