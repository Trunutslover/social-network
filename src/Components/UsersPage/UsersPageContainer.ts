import { connect } from 'react-redux'
import UsersPage from './UsersPage'
import {
  followThunkCreator,
  getUsersThunkCreator,
  selectPage,
  unfollowThunkCreator
} from '../../redux/users-reducer'
import { IState } from '../../redux/store'
import { IUser } from '../../types'

interface IMapStateToProps {
  users: IUser[]
  page: number
  count: number
  totalCount: number
  isFetching: boolean
  usersFollowing: number[]
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return {
    users: state.usersPage.users,
    page: state.usersPage.page,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
    usersFollowing: state.usersPage.usersFollowing
  }
}

interface IMapDispatchToProps {
  followThunkCreator: (id: number) => void
  unfollowThunkCreator: (id: number) => void
  selectPage: (pageNumber: number) => void
  getUsersThunkCreator: (count: number, pageNumber: number) => void
}

const mapDispatchToProps: IMapDispatchToProps = {
  selectPage,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
