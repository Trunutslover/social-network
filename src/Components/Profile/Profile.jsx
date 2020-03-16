import React, { useState, useEffect } from 'react'
import classes from './Profile.module.scss'
import userpic from '../../assets/Userpic.png'
import ProfileEditForm from './ProfileEditForm'

export default function Profile(props) {
  const [editStatus, setEditStatus] = useState(false)
  const [status, setStatus] = useState(props.status)
  const [editProfile, setEditProfile] = useState(false)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const onChangeStatus = e => {
    setStatus(e.target.value)
  }

  const enableEditStatus = () => {
    setEditStatus(true)
  }

  const disableEditStatus = () => {
    setEditStatus(false)
    props.putMyStatus(status)
  }

  const updateMyPhoto = e => {
    props.putMyPhoto(e.target.files[0], props.myId)
  }

  const contacts = []
  for (let key in props.userProfile.contacts) {
    contacts.push(
      <div className={classes.contact} key={key}>
        <b>{key}: </b>
        {props.userProfile.contacts[key]}
      </div>
    )
  }

  const onSubmitProfile = async formData => {
    await props.putMyProfile({ ...formData }, props.myId)
    setEditProfile(false)
  }

  return (
    <div className={classes.profile}>
      {editProfile ? (
        <ProfileEditForm userProfile={props.userProfile} onSubmit={onSubmitProfile} initialValues={props.userProfile} />
      ) : (
        <div>
          <h2>{props.userProfile.fullName}</h2>
          <img src={props.userProfile.photos.large || userpic} alt={`Avatar`} />
          <br />
          {props.userProfile.userId === props.myId ? <input type={`file`} onChange={updateMyPhoto} /> : null}
          <div>
            <b>Status: </b>
            {editStatus ? (
              <input value={status} onBlur={disableEditStatus} autoFocus={true} onChange={onChangeStatus} />
            ) : (
              <span onClick={props.userProfile.userId === props.myId ? enableEditStatus : undefined}>
                {props.status || (props.userProfile.userId === props.myId ? `Click here to change status` : undefined)}
              </span>
            )}
          </div>
          <div>
            <b>About me: </b> {props.userProfile.aboutMe}
          </div>
          <div>
            <b>Looking for a job: </b> {props.userProfile.lookingForAJob ? `yes` : `no`}
          </div>
          <div>
            <b>Looking for a job description: </b> {props.userProfile.lookingForAJobDescription}
          </div>
          <div>
            <b>Contacts</b>
            {contacts}
          </div>
          {props.userProfile.userId === props.myId && (
            <button onClick={() => setEditProfile(true)}>Edit profile</button>
          )}
        </div>
      )}
    </div>
  )
}
