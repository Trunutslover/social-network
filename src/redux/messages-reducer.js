const initialState = {
    conversations: [
        {
            author: `Vasiliy Pukin`,
            messages: [
                `Yo man!`,
                `How are you?`,
                `What about tomorrow?`
            ],
            newMessage: ``
        },
        {
            author: `Kolya Zveno`,
            messages: [
                `Hey!`,
                `What's up?`
            ],
            newMessage: ``
        },
        {
            author: `Tasya Kenko`,
            messages: [
                `Hello, my friend`,
                `I am so tired`
            ],
            newMessage: ``
        },
    ]
};

const messagesReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case `CHANGE-NEW-MESSAGE`:
            stateCopy = {
                ...state,
                conversations: [...state.conversations]
            };
            stateCopy.conversations[action.index].newMessage = action.message;
            return stateCopy;
        case `ADD-MESSAGE`:
            stateCopy = {
                ...state,
                conversations: [...state.conversations]
            };
            stateCopy.conversations[action.index].messages = [...state.conversations[action.index].messages, state.conversations[action.index].newMessage];
            stateCopy.conversations[action.index].newMessage = ``;
            return stateCopy;
        default:
            return state;
    }
};

export const changeNewMessageActionCreator = (index, event) => {
    return {type: `CHANGE-NEW-MESSAGE`, message: event.target.value, index: index}
};

export const addMessageActionCreator = (index) => {
    return {type: `ADD-MESSAGE`, index: index}
};

export default messagesReducer;