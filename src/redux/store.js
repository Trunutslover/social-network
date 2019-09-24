import {combineReducers, createStore} from "redux";
import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    profile: profileReducer,
    auth: authReducer
});

const store = createStore(reducers);

export const dispatch = (action) => {
    store.getState().friendsPage = friendsReducer(store.getState().friendsPage, action);
    store.getState().messagesPage = messagesReducer(store.getState().messagesPage, action);
    store.getState().usersPage = usersReducer(store.getState().usersPage, action);
    store.getState().profile = profileReducer(store.getState().profile, action);
    store.getState().auth = authReducer(store.getState().auth, action);
};

export default store;