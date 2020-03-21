import Profile from './Profile'
import { connect } from 'react-redux'
import {
  putMyPhotoThunkCreator,
  putMyProfileThunkCreator,
  putMyStatusThunkCreator,
  setStatusThunkCreator,
  setUserProfileThunkCreator
} from '../../redux/profile-reducer'
import { IState } from '../../redux/store'
import { IProfile } from '../../types'

interface IMapStateToProps {
  userProfile: IProfile | undefined
  myId: number | null
  status: string
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return {
    userProfile: state.profile.userProfile,
    myId: state.auth.id,
    status: state.profile.status
  }
}

interface IDispatchToProps {
  putMyStatusThunkCreator: (status: string) => void
  putMyPhotoThunkCreator: (photoFile: any, myId: number) => void
  putMyProfileThunkCreator: (profile: IProfile, myId: number) => void
  setUserProfileThunkCreator: (userId: number) => void
  setStatusThunkCreator: (userId: number) => void
}

const mapDispatchToProps: IDispatchToProps = {
  setUserProfileThunkCreator,
  setStatusThunkCreator,
  putMyStatusThunkCreator,
  putMyPhotoThunkCreator,
  putMyProfileThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
