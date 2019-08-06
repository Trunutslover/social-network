import React from 'react';
import classes from './MessagesPage.module.scss';
import Conversations from './Conversations/Conversations';
import Messages from "./Messages/Messages";
import {Route} from "react-router-dom";

function MessagesPage(props) {
    const listOfMessages = props.conversations.map((value, index) => {
        return <Route key={index} path={`/messages/${index}`} render={() => <Messages
            messages={props.conversations[index].messages}
            index={index}
            newMessage={props.conversations[index].newMessage}
            changeNewMessage={props.changeNewMessage}
            addMessage={props.addMessage}
             />} />
    });

    return (
        <div className={`app_content ${classes.messagesPage}`}>
            <Conversations conversations={props.conversations} />
            {listOfMessages}
        </div>
    )
}

export default MessagesPage;