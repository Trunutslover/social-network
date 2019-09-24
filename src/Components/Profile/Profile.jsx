import React from 'react';
import classes from './Profile.module.scss';

export default function Profile(props) {

    return (
        <div className={classes.profile}>
            {props.userProfile.fullName}
        </div>
    )
}