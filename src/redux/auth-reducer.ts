import { delLogin, getAuth, postLogin, StatusCodes } from '../api/api'
import { stopSubmit } from 'redux-form'
import { Dispatch } from 'redux'

const SET_AUTH_DATA = `SET_AUTH_DATA`

export interface IState {
  id: number | null
  email: string | null
  login: string | undefined
  isAuth: boolean
}

const initialState: IState = {
  id: null,
  email: null,
  login: undefined,
  isAuth: false
}

export const authReducer = (state = initialState, action: ISetAuthDataAC): IState => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth
      }

    default:
      return state
  }
}

interface ISetAuthDataAC {
  type: typeof SET_AUTH_DATA
  id: number | null
  email: string | null
  login: string | undefined
  isAuth: boolean
}

interface IData {
  id: number | null
  email: string | null
  login: string | undefined
}

export const setAuthData = (data: IData, isAuth: boolean): ISetAuthDataAC => ({ type: SET_AUTH_DATA, ...data, isAuth })

export const setAuthDataThunkCreator = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await getAuth()

    if (data.resultCode === StatusCodes.Success) {
      dispatch(setAuthData(data.data, true))
    } else {
      dispatch(setAuthData({ id: null, email: null, login: undefined }, false))
    }
  }
}

export interface ILoginData {
  email: string
  password: string
  rememberMe: boolean
}

export const loginThunkCreator = (loginData: ILoginData) => {
  return async (dispatch: any) => {
    const { status, data } = await postLogin(loginData.email, loginData.password, loginData.rememberMe = false)

    if (status === StatusCodes.SuccessRequest) {
      dispatch(setAuthDataThunkCreator())
    } else {
      dispatch(stopSubmit(`login`, { _error: data.messages[0] }))
    }
  }
}

export const logoutThunkCreator = () => {
  return async (dispatch: any) => {
    const { status } = await delLogin()

    if (status === StatusCodes.SuccessRequest) {
      dispatch(setAuthDataThunkCreator())
    }
  }
}
