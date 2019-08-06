import React from 'react';
import classes from './Message.module.scss';

export default function Message(props) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}