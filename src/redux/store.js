import {combineReducers, createStore} from "redux";
import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);

export const dispatch = (action) => {
    store.getState().friendsPage = friendsReducer(store.getState().friendsPage, action);
    store.getState().messagesPage = messagesReducer(store.getState().messagesPage, action);
    store.getState().usersPage = usersReducer(store.getState().usersPage, action);
};

export default store;