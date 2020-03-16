import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
  putMyPhotoThunkCreator,
  putMyProfileThunkCreator,
  putMyStatusThunkCreator,
  setStatusThunkCreator,
  setUserProfileThunkCreator
} from '../../redux/profile-reducer'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfileThunkCreator(this.props.match.params.userId || this.props.myId)
    this.props.setStatusThunkCreator(this.props.match.params.userId || this.props.myId)
  }

  render() {
    if (!this.props.userProfile) {
      return <Preloader />
    }

    return (
      <Profile
        userProfile={this.props.userProfile}
        status={this.props.status}
        myId={this.props.myId}
        putMyStatus={this.props.putMyStatusThunkCreator}
        putMyPhoto={this.props.putMyPhotoThunkCreator}
        putMyProfile={this.props.putMyProfileThunkCreator}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.profile.userProfile,
    myId: state.auth.id,
    status: state.profile.status
  }
}

const mapDispatchToProps = {
  setUserProfileThunkCreator,
  setStatusThunkCreator,
  putMyStatusThunkCreator,
  putMyPhotoThunkCreator,
  putMyProfileThunkCreator
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps), withRouter)(ProfileContainer)
