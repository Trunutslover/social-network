import React, { FC } from 'react'
import classes from './MessagesPage.module.scss'
import Conversations from './Conversations/Conversations'
import Messages from './Messages/Messages'
import { Route } from 'react-router-dom'
import { IConversation } from '../../types'

interface IMessagesPageProps {
  conversations: IConversation[]
  addMessage: (index: number, message: string) => void
}

const MessagesPage: FC<IMessagesPageProps> = ({ conversations, addMessage }) => {
  const listOfMessages = conversations.map((conversation, index) => {
    return (
      <Route
        key={index}
        path={`/messages/${index}`}
        render={() => {
          return (
            <Messages
              messages={conversation.messages}
              index={index}
              avatar={conversation.avatar}
              author={conversation.author}
              addMessage={addMessage}
            />
          )
        }}
      />
    )
  })

  return (
    <div className={`app_content ${classes.messagesPage}`}>
      <Conversations conversations={conversations} />
      {listOfMessages}
    </div>
  )
}

export default MessagesPage
