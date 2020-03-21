/*Импорты*/
import { getProfile, getStatus, putMyStatus, putPhoto, putProfile, StatusCodes } from '../api/api'
import { stopSubmit } from 'redux-form'
import { Dispatch } from 'redux'
import { IProfile } from '../types'

/* Константы экшенов */
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

/* Инишиал стейт */
export interface IState {
  userProfile: IProfile | undefined
  status: string
}

const initialState: IState = {
  userProfile: undefined,
  status: ``
}

/* Редьюсер */
export const profileReducer = (state = initialState, action: ISetUserProfileAC | ISetStatusAC): IState => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state
  }
}

/* Экшен криэйторы */
interface ISetUserProfileAC {
  type: typeof SET_USER_PROFILE
  userProfile: IProfile
}

export const setUserProfile = (userProfile: IProfile): ISetUserProfileAC => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
}

interface ISetStatusAC {
  type: typeof SET_STATUS
  status: string
}

export const setStatus = (status: string): ISetStatusAC => {
  return {
    type: SET_STATUS,
    status
  }
}

/* Санк криэйторы */
export const setUserProfileThunkCreator = (userId: number) => {
  return async (dispatch: Dispatch) => {
    const { status, data } = await getProfile(userId)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(setUserProfile(data))
    }
  }
}

export const setStatusThunkCreator = (userId: number) => {
  return async (dispatch: Dispatch) => {
    const { data } = await getStatus(userId)

    if (data) {
      dispatch(setStatus(data.data))
    }
  }
}

export const putMyStatusThunkCreator = (newStatus: string) => {
  return async (dispatch: Dispatch) => {
    const { status } = await putMyStatus(newStatus)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(setStatus(newStatus))
    }
  }
}

export const putMyPhotoThunkCreator = (photo: string, myId: number) => {
  return async (dispatch: any) => {
    const { status } = await putPhoto(photo)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(setUserProfileThunkCreator(myId))
    }
  }
}

export const putMyProfileThunkCreator = (profile: IProfile, myId: number) => {
  return async (dispatch: any) => {
    const { status, data } = await putProfile(profile)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(setUserProfileThunkCreator(myId))
    } else {
      dispatch(stopSubmit(`profileEditForm`, { _error: data.messages[0] }))
      return Promise.reject(data.messages[0])
    }
  }
}
