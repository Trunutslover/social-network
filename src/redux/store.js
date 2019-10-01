import {applyMiddleware, combineReducers, createStore} from "redux";
import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    friendsPage: friendsReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;