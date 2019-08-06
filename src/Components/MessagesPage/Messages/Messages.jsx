import React from 'react';
import classes from './Messages.module.scss';
import Message from "./Message/Message";

function Messages(props) {
    const messagesList = props.messages.map((value, index) => <Message key={index} message={value} />);

    return (
        <div className={classes.messages}>
            {messagesList}
            <div className={classes.sendMessageContainer}>
                <textarea className={classes.textarea} value={props.newMessage} onChange={props.changeNewMessage.bind(null, props.index)} placeholder="Enter your message"/>
                <button className={classes.sendMessageButton} onClick={props.addMessage.bind(null, props.index)}>Send message</button>
            </div>
        </div>
    )
}

export default Messages;