import React from 'react';
import classes from './Message.module.scss';
import avatar from '../../../../assets/Userpic.png';

export default function Message(props) {
    debugger;
    return (
        <div className={props.self ? `${classes.messageContainer} ${classes.messageContainerSelf}` : classes.messageContainer}>
            <img className={props.self ? `${classes.messageAvatar} ${classes.messageAvatarSelf}` : classes.messageAvatar} src={props.avatar ? props.avatar : avatar} width={`40px`} height={`40px`} alt={`avatar`} />
            <p className={props.self ? `${classes.message} ${classes.messageSelf}` : classes.message}>{props.message}</p>
        </div>
    )
}