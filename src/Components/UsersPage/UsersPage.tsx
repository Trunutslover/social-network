import React, { FC, useEffect } from 'react'
import classes from './UsersPage.module.scss'
import userpic from '../../assets/Userpic.png'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'
import Preloader from '../common/Preloader/Preloader'
import { IUser } from '../../types'

interface IUsersPageProps {
  isFetching: boolean
  users: IUser[]
  usersFollowing: number[]
  totalCount: number
  count: number
  page: number
  followThunkCreator: (id: number) => void
  unfollowThunkCreator: (id: number) => void
  selectPage: (pageNumber: number) => void
  getUsersThunkCreator: (count: number, pageNumber: number) => void
}

const UsersPage: FC<IUsersPageProps> = ({
  isFetching,
  users,
  usersFollowing,
  totalCount,
  count,
  page,
  followThunkCreator,
  unfollowThunkCreator,
  selectPage,
  getUsersThunkCreator,
}) => {
  useEffect(() => {
    getUsersThunkCreator(count, page)
  }, [])

  const onPageChanged = (pageNumber: number) => {
    selectPage(pageNumber)
    getUsersThunkCreator(count, pageNumber)
  }

  const userList = users.map(user => {
    return (
      <div key={user.id} className={classes.user}>
        <div className={classes.firstCol}>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={classes.avatar}
              src={user.photos.small || userpic}
              alt='avatar'
              width='40px'
              height='40px'
            />
          </NavLink>
          {user.followed ? (
            <button
              disabled={usersFollowing.some(userId => userId === user.id)}
              onClick={() => {
                unfollowThunkCreator(user.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={usersFollowing.some(userId => userId === user.id)}
              onClick={() => {
                followThunkCreator(user.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
        <div className={classes.secondCol}>
          <h3 className={classes.name}>{user.name}</h3>
          <p>{user.status}</p>
        </div>
      </div>
    )
  })

  if (isFetching) {
    return (
      <Preloader />
    )
  }

  return (
    <div>
      <Paginator
        totalCount={totalCount}
        count={count}
        page={page}
        onPageChanged={onPageChanged}
      />
      <div className={classes.users}>{userList}</div>
    </div>
  )
}

export default UsersPage
