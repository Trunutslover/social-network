import { delFollow, getUsers, postFollow } from '../api/api'

const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SELECT_PAGE = 'SELECT_PAGE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

const initialState = {
  users: [],
  totalCount: 0,
  page: 1,
  count: 10,
  isFetching: false,
  usersFollowing: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }

    case SELECT_PAGE:
      return {
        ...state,
        page: action.page
      }

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(value => {
          if (action.user === value.id) {
            return { ...value, followed: true }
          }

          return value
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(value => {
          if (action.user === value.id) {
            return { ...value, followed: false }
          }

          return value
        })
      }

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_FOLLOWING:
      return {
        ...state,
        usersFollowing: action.isFollowing
          ? [...state.usersFollowing, action.userId]
          : state.usersFollowing.filter(userId => userId !== action.userId)
      }

    default:
      return state
  }
}

export default usersReducer

export const setUsers = users => {
  return { type: SET_USERS, users }
}
export const setTotalCount = totalCount => {
  return { type: SET_TOTAL_COUNT, totalCount }
}
export const selectPage = page => {
  return { type: SELECT_PAGE, page }
}
export const follow = user => {
  return { type: FOLLOW, user }
}
export const unfollow = user => {
  return { type: UNFOLLOW, user }
}
export const toggleFetching = isFetching => {
  return { type: TOGGLE_FETCHING, isFetching }
}
export const toggleFollowing = (isFollowing, userId) => {
  return { type: TOGGLE_FOLLOWING, isFollowing, userId }
}

export const getUsersThunkCreator = (count, page) => {
  return dispatch => {
    dispatch(toggleFetching(true))

    getUsers(count, page).then(data => {
      dispatch(toggleFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalCount(data.totalCount))
    })
  }
}

export const followThunkCreator = userId => {
  return dispatch => {
    dispatch(toggleFollowing(true, userId))
    postFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }

      dispatch(toggleFollowing(false, userId))
    })
  }
}

export const unfollowThunkCreator = userId => {
  return dispatch => {
    dispatch(toggleFollowing(true, userId))
    delFollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId))
      }

      dispatch(toggleFollowing(false, userId))
    })
  }
}
