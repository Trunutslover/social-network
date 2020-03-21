import React, { FC, ChangeEvent, useState, useEffect } from 'react'
import { withRouter, match } from 'react-router-dom'
import classes from './Profile.module.scss'
import userpic from '../../assets/Userpic.png'
import ProfileEditForm from './ProfileEditForm'
import Preloader from '../common/Preloader/Preloader'
import { IProfile } from '../../types'

interface IProfileProps {
  match: match<{ userId: string }>
  userProfile: IProfile | undefined
  status: string
  myId: number | null
  putMyStatusThunkCreator: (status: string) => void
  putMyPhotoThunkCreator: (photoFile: any, myId: number) => void
  putMyProfileThunkCreator: (profile: IProfile, myId: number) => void
  setUserProfileThunkCreator: (userId: number) => void
  setStatusThunkCreator: (userId: number) => void
}

const Profile: FC<IProfileProps> = ({
  match,
  userProfile,
  status,
  myId,
  putMyStatusThunkCreator,
  putMyPhotoThunkCreator,
  putMyProfileThunkCreator,
  setStatusThunkCreator,
  setUserProfileThunkCreator,
}) => {
  const [editStatus, setEditStatus] = useState(false)
  const [localStatus, setLocalStatus] = useState(status)
  const [editProfile, setEditProfile] = useState(false)

  useEffect(() => {
    if (parseInt(match.params.userId)) {
      setUserProfileThunkCreator(parseInt(match.params.userId))
      setStatusThunkCreator(parseInt(match.params.userId))
    } else if (myId) {
      setUserProfileThunkCreator(myId)
      setStatusThunkCreator(myId)
    }
  }, [myId, match.params.userId])

  useEffect(() => {
    setLocalStatus(status)
  }, [status])

  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalStatus(e.target.value)
  }

  const enableEditStatus = () => {
    setEditStatus(true)
  }

  const disableEditStatus = () => {
    setEditStatus(false)
    putMyStatusThunkCreator(localStatus)
  }

  const updateMyPhoto = (e: ChangeEvent<HTMLInputElement & { files: FileList }>) => {
    if (myId) {
      putMyPhotoThunkCreator(e.target.files[0], myId)
    }
  }

  const contacts = userProfile && Object.keys(userProfile.contacts).map((key: string): any => (
    <div className={classes.contact} key={key}>
      <b>{key}: </b>
      {userProfile.contacts[key]}
    </div>
  ))

  const onSubmitProfile = async (formData: IProfile) => {
    if (myId) {
      await putMyProfileThunkCreator({ ...formData }, myId)
      setEditProfile(false)
    }
  }

  if (!userProfile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile}>
      {editProfile ? (
        <ProfileEditForm userProfile={userProfile} onSubmit={onSubmitProfile} initialValues={userProfile} />
      ) : (
        <div>
          <h2>{userProfile.fullName}</h2>
          <img src={userProfile.photos.large || userpic} alt={`Avatar`} />
          <br />
          {userProfile.userId === myId ? <input type={`file`} onChange={updateMyPhoto} /> : null}
          <div>
            <b>Status: </b>
            {editStatus ? (
              <input value={status} onBlur={disableEditStatus} autoFocus={true} onChange={onChangeStatus} />
            ) : (
              <span onClick={userProfile.userId === myId ? enableEditStatus : undefined}>
                {status || (userProfile.userId === myId ? `Click here to change status` : undefined)}
              </span>
            )}
          </div>
          <div>
            <b>About me: </b> {userProfile.aboutMe}
          </div>
          <div>
            <b>Looking for a job: </b> {userProfile.lookingForAJob ? `yes` : `no`}
          </div>
          <div>
            <b>Looking for a job description: </b> {userProfile.lookingForAJobDescription}
          </div>
          <div>
            <b>Contacts</b>
            {contacts}
          </div>
          {userProfile.userId === myId && (
            <button onClick={() => setEditProfile(true)}>Edit profile</button>
          )}
        </div>
      )}
    </div>
  )
}

export default withRouter<any, any>(Profile)
