import { IState } from '../../redux/store'
import { ILoginData, loginThunkCreator } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import Login from './Login'

interface IMapStateToProps {
  isAuth: boolean
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return {
    isAuth: state.auth.isAuth
  }
}

interface IMapDispatchToProps {
  loginThunkCreator: (loginData: ILoginData) => void
}

const mapDispatchToProps: IMapDispatchToProps = {
  loginThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
