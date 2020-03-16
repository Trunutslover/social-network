import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logoutThunkCreator } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutThunkCreator} />
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

const mapDispatchToProps = {
  logoutThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
