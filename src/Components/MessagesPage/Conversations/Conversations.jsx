import React from 'react';
import classes from './Conversations.module.scss';
import {NavLink} from "react-router-dom";

function Conversations(props) {
    let conversationsList = props.conversations.map((value, index) => <div key={index} className={classes.conversationsUser}><NavLink className={classes.conversationsUserLink} to={`/messages/${index}`} >{value.author}</NavLink></div>);

    return (
        <div className={classes.conversations}>
            {conversationsList}
        </div>
    )
}

export default Conversations;