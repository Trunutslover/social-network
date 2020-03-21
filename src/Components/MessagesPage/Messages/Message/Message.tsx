import React, { FC } from 'react'
import classes from './Message.module.scss'
import avatarPic from '../../../../assets/Userpic.png'

interface IMessageProps {
  self: boolean
  avatar?: string
  message: string
}

const Message: FC<IMessageProps> = ({ self, avatar, message }) => (
  <div
    className={self ? `${classes.messageContainer} ${classes.messageContainerSelf}` : classes.messageContainer}
  >
    <img
      className={self ? `${classes.messageAvatar} ${classes.messageAvatarSelf}` : classes.messageAvatar}
      src={avatar ? avatar : avatarPic}
      width={`40px`}
      height={`40px`}
      alt={`avatar`}
    />
    <p className={self ? `${classes.message} ${classes.messageSelf}` : classes.message}>{message}</p>
  </div>
)

export default Message
