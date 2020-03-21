import React, { FC } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import classes from './Profile.module.scss'
import { IProfile } from '../../types'

interface IProfileEditFormProps {
  userProfile: IProfile
}

const ProfileEditForm: FC<InjectedFormProps & IProfileEditFormProps> = ({ userProfile, handleSubmit, error }) => {
  const contacts = Object.keys(userProfile).map((key) => (
    <div className={classes.contact} key={key}>
      <b>{key}: </b> <Field component={`input`} name={`contacts.${key}`} placeholder={userProfile.contacts[key]} />
    </div>
  ))

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Full name: <Field component={`input`} name={`fullName`} placeholder={userProfile.fullName} />
      </h2>
      <div>
        <b>About me: </b> <Field component={`input`} name={`aboutMe`} />
      </div>
      <div>
        <b>Looking for a job: </b> <Field component={`input`} type={`checkbox`} name={`lookingForAJob`} />
      </div>
      <div>
        <b>Looking for a job description: </b>{' '}
        <Field
          component={`textarea`}
          name={`lookingForAJobDescription`}
          placeholder={userProfile.lookingForAJobDescription}
        />
      </div>
      <div>
        <b>Contacts</b>
        {contacts}
      </div>
      <button>Save profile</button>
      {error && <div>{error}</div>}
    </form>
  )
}

export default reduxForm<IProfile, { userProfile: IProfile }>({ form: `profileEditForm` })(ProfileEditForm)
