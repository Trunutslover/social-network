import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav/MainNav";
import Friends from "./Components/Friends/Friends";
import Messages from "./Components/Messages/Messages";


function App() {
  return (
      <BrowserRouter>
          <div className={'app'}>
              <Header />
              <MainNav />
              <Route path='/friends' component={Friends} />
              <Route path='/messages' component={Messages} />
          </div>
      </BrowserRouter>
  );
}

export default App;
