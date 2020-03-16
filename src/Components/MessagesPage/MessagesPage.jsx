import React from 'react'
import classes from './MessagesPage.module.scss'
import Conversations from './Conversations/Conversations'
import Messages from './Messages/Messages'
import { Route } from 'react-router-dom'

function MessagesPage(props) {
  const listOfMessages = props.conversations.map((value, index) => {
    return (
      <Route
        key={index}
        path={`/messages/${index}`}
        render={() => {
          return (
            <Messages
              messages={props.conversations[index].messages}
              index={index}
              avatar={props.conversations[index].avatar}
              author={props.conversations[index].author}
              addMessage={props.addMessage}
            />
          )
        }}
      />
    )
  })

  return (
    <div className={`app_content ${classes.messagesPage}`}>
      <Conversations conversations={props.conversations} />
      {listOfMessages}
    </div>
  )
}

export default MessagesPage
