import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav/MainNav";
import FriendsPageContainer from "./Components/FriendsPage/FriendsPageContainer";
import MessagesPageContainer from "./Components/MessagesPage/MessagesPageContainer";
import UsersPageContainer from "./Components/UsersPage/UsersPageContainer";


function App() {
  return (
      <div className={'app'}>
          <Header />
          <MainNav />
          <Route path='/friends' render={() => <FriendsPageContainer />} />
          <Route path='/messages' render={() => <MessagesPageContainer />} />
          <Route path='/users' render={() => <UsersPageContainer />}/>
      </div>
  );
}

export default App;
