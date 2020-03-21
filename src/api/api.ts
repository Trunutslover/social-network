import axios from 'axios'
import { IProfile } from '../types'

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '16aedc44-935d-40d8-a8b8-3857bd3be2f3'
  }
})

export enum StatusCodes {
  Success = 0,
  SuccessRequest = 200,
  Error = 1
}

export enum CaptchaStatusCode {
  CaptchaIsRequired = 10
}

interface IUser {
  id: number
  name: string
  status: string | null
  followed: boolean
  photos: {
    small: string | null
    large: string | null
  }
}

interface IAPIGetUsersData {
  items: IUser[]
  totalCount: number
  error: string | null
}

export const getUsers = async (count: number = 10, pageNumber: number = 1) => {
  return await instance.get<IAPIGetUsersData>(`users?count=${count}&page=${pageNumber}`)
}

export const getProfile = async (userId: number) => {
  return await instance.get<IProfile>(`profile/${userId}`)
}

interface IAPIGetAuthData {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: StatusCodes
  messages: string[]
}

export const getAuth = async () => {
  return await instance.get<IAPIGetAuthData>(`auth/me`)
}

interface IAPIPostFollowData {
  resultCode: StatusCodes
  messages: string[]
  data: {}
}

export const postFollow = async (userId: number) => {
  return await instance.post<IAPIPostFollowData>(`follow/${userId}`)
}

interface IAPIDelFollowData {
  resultCode: StatusCodes
  messages: string[]
  data: {}
}

export const delFollow = async (userId: number) => {
  return await instance.delete<IAPIDelFollowData>(`follow/${userId}`)
}

interface IAPIGetStatusData {
  data: string
}

export const getStatus = async (userId: number) => {
  return await instance.get<IAPIGetStatusData>(`profile/status/${userId}`)
}

interface IAPIPutMyStatusData {
  resultCode: StatusCodes
  messages: string[]
  data: {}
}

export const putMyStatus = async (status: string) => {
  return await instance.put<IAPIPutMyStatusData>(`profile/status`, { status })
}

interface IAPIPostLoginData {
  resultCode: StatusCodes
  messages: string[],
  data: {
    userId: number
  }
}

export const postLogin = async (email: string, password: string, rememberMe: boolean) => {
  return await instance.post<IAPIPostLoginData>(`auth/login`, { email, password, rememberMe })
}

interface IAPIDelLoginData {
  resultCode: StatusCodes
  messages: string[]
  data: {}
}

export const delLogin = async () => {
  return await instance.delete<IAPIDelLoginData>(`auth/login`)
}

interface IAPIPutPhotoData {
  resultCode: StatusCodes
  messages: string[]
  data: {
    photos: {
      large: string
      small: string
    }
  }
}

export const putPhoto = async (photo: any) => {
  const formData = new FormData()
  formData.append(`image`, photo)

  return await instance.put<IAPIPutPhotoData>(`profile/photo`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

interface IAPIPutProfileData {
  resultCode: StatusCodes
  messages: string[]
  data: {}
}

export const putProfile = async (profile: IProfile) => {
  return await instance.put<IAPIPutProfileData>(`profile`, profile)
}
