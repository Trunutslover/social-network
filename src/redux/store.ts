import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { friendsReducer, IState as FriendsState } from './friends-reducer'
import { messagesReducer, IState as MessagesState } from './messages-reducer'
import { usersReducer, IState as UsersState } from './users-reducer'
import { profileReducer, IState as ProfileState } from './profile-reducer'
import { authReducer, IState as AuthState } from './auth-reducer'
import { appReducer, IState as AppState } from './app-reducer'

export interface IState {
  friendsPage: FriendsState
  messagesPage: MessagesState
  usersPage: UsersState
  profile: ProfileState
  auth: AuthState
  form: any
  app: AppState
}

const reducers = combineReducers({
  friendsPage: friendsReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store: Store<IState> = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
