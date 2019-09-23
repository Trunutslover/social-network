const initialState = {
    conversations: [
        {
            author: `Vasiliy Pukin`,
            status: `Nice day!`,
            avatar: `https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/176506_1439783277.jpg`,
            messages: [
                {message: `Yo man!`, author: `Vasiliy Pukin`},
                {message: `How are you?`, author: `Vasiliy Pukin`},
                {message: `What about tomorrow?`, author: `Vasiliy Pukin`}
            ],
            newMessage: ``
        },
        {
            author: `Kolya Zveno`,
            status: `Hi, it's me`,
            avatar: `https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/168329_1454258715.jpg`,
            messages: [
                {message: `Hey!`, author: `Kolya Zveno`},
                {message: `What's up?`, author: `Kolya Zveno`}
            ],
            newMessage: ``
        },
        {
            author: `Tasya Kenko`,
            status: `I'm so pretty)`,
            avatar: `https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/41_1440786690.jpg`,
            messages: [
                {message: `Hello, my friend`, author: `Tasya Kenko`},
                {message: `I am so tired`, author: `Tasya Kenko`},
            ],
            newMessage: ``
        },
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case `CHANGE-NEW-MESSAGE`:
            return  {
                ...state,
                conversations: state.conversations.map((value, index) => {
                        if (index === action.index) {
                            return {...value, newMessage: action.message}
                        }

                        return value;
                    }
                )
            };

        case `ADD-MESSAGE`:
            return  {
                ...state,
                conversations: state.conversations.map((value, index) => {
                    if(index === action.index) {
                        return {
                            ...value,
                            messages: [
                                ...value.messages,
                                {message: value.newMessage, author: `Alex Ivanenko`}
                                ],
                            newMessage: ``
                        }
                    }

                    return value;
                })
            };

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