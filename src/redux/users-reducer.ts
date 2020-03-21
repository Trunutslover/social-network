import { delFollow, getUsers, postFollow, StatusCodes } from '../api/api'
import { IUser } from '../types'

const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SELECT_PAGE = 'SELECT_PAGE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

export interface IState {
  users: IUser[]
  totalCount: number
  page: number
  count: number
  isFetching: boolean
  usersFollowing: number[]
}

const initialState: IState = {
  users: [],
  totalCount: 0,
  page: 1,
  count: 10,
  isFetching: false,
  usersFollowing: []
}

export const usersReducer = (
  state = initialState,
  action:
    | ISetUsersAC
    | ISetTotalCountAC
    | ISelectPageAC
    | IFollowAC
    | IUnfollowAC
    | IToggleFetchingAC
    | IToggleFollowingAC
): IState => {
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

interface ISetUsersAC {
  type: typeof SET_USERS
  users: IUser[]
}

export const setUsers = (users: IUser[]): ISetUsersAC => {
  return { type: SET_USERS, users }
}

interface ISetTotalCountAC {
  type: typeof SET_TOTAL_COUNT
  totalCount: number
}

export const setTotalCount = (totalCount: number): ISetTotalCountAC => {
  return { type: SET_TOTAL_COUNT, totalCount }
}

interface ISelectPageAC {
  type: typeof SELECT_PAGE
  page: number
}

export const selectPage = (page: number): ISelectPageAC => {
  return { type: SELECT_PAGE, page }
}

interface IFollowAC {
  type: typeof FOLLOW
  user: number
}

export const follow = (user: number): IFollowAC => {
  return { type: FOLLOW, user }
}

interface IUnfollowAC {
  type: typeof UNFOLLOW
  user: number
}

export const unfollow = (user: number): IUnfollowAC => {
  return { type: UNFOLLOW, user }
}

interface IToggleFetchingAC {
  type: typeof TOGGLE_FETCHING
  isFetching: boolean
}

export const toggleFetching = (isFetching: boolean): IToggleFetchingAC => {
  return { type: TOGGLE_FETCHING, isFetching }
}

interface IToggleFollowingAC {
  type: typeof TOGGLE_FOLLOWING
  isFollowing: boolean
  userId: number
}

export const toggleFollowing = (isFollowing: boolean, userId: number): IToggleFollowingAC => {
  return { type: TOGGLE_FOLLOWING, isFollowing, userId }
}

export const getUsersThunkCreator = (count: number, page: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFetching(true))

    const { status, data } = await getUsers(count, page)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(toggleFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalCount(data.totalCount))
    }
  }
}

export const followThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowing(true, userId))

    const { status } = await postFollow(userId)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(follow(userId))
    }

    dispatch(toggleFollowing(false, userId))
  }
}

export const unfollowThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowing(true, userId))

    const { status } = await delFollow(userId)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(unfollow(userId))
    }

    dispatch(toggleFollowing(false, userId))
  }
}
