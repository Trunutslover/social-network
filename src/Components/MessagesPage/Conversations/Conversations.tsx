import React, { FC } from 'react'
import classes from './Conversations.module.scss'
import { NavLink } from 'react-router-dom'
import avatar from '../../../assets/Userpic.png'

interface IConversation {
  avatar?: string
  author?: string
  status?: string
}

interface IConversationsProps {
  conversations: IConversation[]
}

const Conversations: FC<IConversationsProps> = ({ conversations }) => {
  let conversationsList = conversations.map((value, index) => {
    return (
      <div key={index} className={classes.conversationsUser}>
        <NavLink className={classes.conversationsUserLink} to={`/messages/${index}`}>
          <img
            className={classes.conversationsAvatar}
            src={value.avatar ? value.avatar : avatar}
            width={`40px`}
            height={`40px`}
            alt={`avatar`}
          />
          <div className={classes.conversationsContainer}>
            <h4 className={classes.conversationsAuthor}>{value.author}</h4>
            <p className={classes.conversationsStatus}>{value.status}</p>
          </div>
        </NavLink>
      </div>
    )
  })

  return <div className={classes.conversations}>{conversationsList}</div>
}

export default Conversations
