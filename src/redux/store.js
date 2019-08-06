import {combineReducers, createStore} from "redux";
import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";

const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer
});

const store = createStore(reducers);

export const dispatch = (action) => {
    store.getState().friendsPage = friendsReducer(store.getState().friendsPage, action);
    store.getState().messagesPage = messagesReducer(store.getState().messagesPage, action);
};

export default store;