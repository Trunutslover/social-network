import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav/MainNav";
import FriendsPageContainer from "./Components/FriendsPage/FriendsPageContainer";
import MessagesPageContainer from "./Components/MessagesPage/MessagesPageContainer";


function App(props) {
  return (
      <div className={'app'}>
          <Header />
          <MainNav />
          <Route path='/friends' render={() => <FriendsPageContainer />} />
          <Route path='/messages' render={() => <MessagesPageContainer />} />
      </div>
  );
}

export default App;
