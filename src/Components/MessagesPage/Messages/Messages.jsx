import React from 'react'
import classes from './Messages.module.scss'
import Message from './Message/Message'
import myAvatar from '../../../assets/MyAvatar.jpg'
import { Field, reduxForm } from 'redux-form'

function Messages(props) {
  const messagesList = props.messages.map((value, index) => {
    return (
      <Message
        key={index}
        message={value.message}
        avatar={value.author === props.author ? props.avatar : myAvatar}
        self={value.author === props.author ? false : true}
      />
    )
  })

  const MessageForm = props => {
    return (
      <form className={classes.sendMessageContainer} onSubmit={props.handleSubmit}>
        <Field component={`input`} className={classes.textarea} name={`newMessage`} placeholder='Enter your message' />
        <button type={`submit`} className={classes.sendMessageButton}>
          Send
        </button>
      </form>
    )
  }

  const MessageReduxForm = reduxForm({ form: `message${props.index}` })(MessageForm)

  const addMessage = formData => {
    props.addMessage(props.index, formData.newMessage)
  }

  return (
    <div className={classes.messages}>
      {messagesList}
      <MessageReduxForm onSubmit={addMessage} />
    </div>
  )
}

export default Messages
