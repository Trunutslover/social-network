import React, { FC } from 'react'
import classes from './Messages.module.scss'
import Message from './Message/Message'
import myAvatar from '../../../assets/MyAvatar.jpg'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { IMessage } from '../../../types'

interface IMessagesProps {
  messages: IMessage[]
  author: string
  avatar: string
  index: number
  addMessage: (index: number, message: string) => void
}

const Messages: FC<IMessagesProps> = ({
  messages,
  author,
  avatar,
  index,
  addMessage,
}) => {
  const messagesList = messages.map((value, index) => {
    return (
      <Message
        key={index}
        message={value.message}
        avatar={value.author === author ? avatar : myAvatar}
        self={value.author !== author}
      />
    )
  })

  const MessageForm: FC<InjectedFormProps> = ({ handleSubmit }) => {
    return (
      <form className={classes.sendMessageContainer} onSubmit={handleSubmit}>
        <Field component={`input`} className={classes.textarea} name={`newMessage`} placeholder='Enter your message' />
        <button type={`submit`} className={classes.sendMessageButton}>
          Send
        </button>
      </form>
    )
  }

  const MessageReduxForm = reduxForm<{ newMessage: string }>({ form: `message${index}` })(MessageForm)

  const onAddMessage = (formData: { newMessage: string }) => {
    addMessage(index, formData.newMessage)
  }

  return (
    <div className={classes.messages}>
      {messagesList}
      <MessageReduxForm onSubmit={onAddMessage} />
    </div>
  )
}

export default Messages
