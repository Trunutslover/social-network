import { connect } from 'react-redux'
import Header from './Header'
import { logoutThunkCreator } from '../../redux/auth-reducer'
import { IState } from '../../redux/store'

interface IMapStateToProps {
  isAuth: boolean
  login: string | undefined
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

const mapDispatchToProps = {
  logoutThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
