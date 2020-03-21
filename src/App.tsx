import React, { FC, useEffect } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import MainNav from './Components/MainNav/MainNav'
import FriendsPageContainer from './Components/FriendsPage/FriendsPageContainer'
import MessagesPageContainer from './Components/MessagesPage/MessagesPageContainer'
import UsersPageContainer from './Components/UsersPage/UsersPageContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import Login from './Components/Login/LoginContainer'
import { connect } from 'react-redux'
import { setAuthDataThunkCreator } from './redux/auth-reducer'
import { setInitTrueAC } from './redux/app-reducer'
import Preloader from './Components/common/Preloader/Preloader'
import { IState } from './redux/store'

interface IAppProps {
  initialized: boolean
  setInitTrueAC: () => void
  setAuthDataThunkCreator: () => void
}

const App: FC<IAppProps> = ({ initialized, setInitTrueAC, setAuthDataThunkCreator }) => {
  useEffect(() => {
    setAuthDataThunkCreator()
    setInitTrueAC()
  }, [])

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className={'app'}>
      <HeaderContainer />
      <MainNav />
      <Route path='/friends' render={() => <FriendsPageContainer />} />
      <Route path='/messages' render={() => <MessagesPageContainer />} />
      <Route path='/users' render={() => <UsersPageContainer />} />
      <Route path='/profile/:userId' render={() => <ProfileContainer />} />
      <Route path='/login' render={() => <Login />} />
      <Route path='/myprofile' render={() => <ProfileContainer />} />
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { setAuthDataThunkCreator, setInitTrueAC })(App)
