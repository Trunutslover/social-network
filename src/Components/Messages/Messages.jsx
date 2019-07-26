import React from 'react';
import classes from './Messages.module.scss';

function Messages(props) {
    return (
        <div className={`app_content ${classes.messages}`}>
            Messages
        </div>
    )
}

export default Messages;