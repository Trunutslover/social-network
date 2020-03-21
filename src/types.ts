export interface IUser {
  id: number
  name: string
  status: string | null
  followed: boolean
  photos: {
    large: string | null
    small: string | null
  }
}

export interface IProfile {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  photos: {
    small: string | null
    large: string | null
  }
  contacts: {
    [key: string]: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
}

export interface IMessage {
  message: string
  author: string
}

export interface IConversation {
  messages: IMessage[]
  avatar: string
  author: string
  status: string
}
