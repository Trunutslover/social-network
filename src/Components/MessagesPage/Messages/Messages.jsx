import React from 'react';
import classes from './Messages.module.scss';
import Message from "./Message/Message";
import myAvatar from '../../../assets/MyAvatar.jpg'

function Messages(props) {
    const messagesList = props.messages.map((value, index) => {
        return (
            <Message
                key={index}
                message={value.message}
                avatar={value.author === props.author ? props.avatar : myAvatar}
                self={value.author === props.author ? false : true} />
            )
    });

    return (
        <div className={classes.messages}>
            {messagesList}
            <div className={classes.sendMessageContainer}>
                <input className={classes.textarea} value={props.newMessage} onChange={props.changeNewMessage.bind(null, props.index)} placeholder="Enter your message"/>
                <button className={classes.sendMessageButton} onClick={props.addMessage.bind(null, props.index)}>Send</button>
            </div>
        </div>
    )
}

export default Messages;