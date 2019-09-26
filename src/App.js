import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import MainNav from "./Components/MainNav/MainNav";
import FriendsPageContainer from "./Components/FriendsPage/FriendsPageContainer";
import MessagesPageContainer from "./Components/MessagesPage/MessagesPageContainer";
import UsersPageContainer from "./Components/UsersPage/UsersPageContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";


function App() {
  return (
      <div className={'app'}>
          <HeaderContainer />
          <MainNav />
          <Route path='/friends' render={() => <FriendsPageContainer />} />
          <Route path='/messages' render={() => <MessagesPageContainer />} />
          <Route path='/users' render={() => <UsersPageContainer />} />
          <Route path='/profile/:userId' render={() => <ProfileContainer/>} />
          <Route path='/login' render={() => <Login />} />
      </div>
  );
}

export default App;
