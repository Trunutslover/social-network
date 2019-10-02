import React, {useState} from 'react';
import classes from './Profile.module.scss';
import userpic from '../../assets/Userpic.png';

export default function Profile(props) {
    const [editStatus, setEditStatus] = useState(false);
    const [status, setStatus] = useState(props.status);

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    };

    const enableEditStatus = () => {
        setEditStatus(true)
    };

    const disableEditStatus = () => {
        setEditStatus(false);
        props.putMyStatus(status);
    };

    return (
        <div className={classes.profile}>
            <h2>{props.userProfile.fullName}</h2>
            <img src={props.userProfile.photos.large || userpic} alt={`Avatar`}/>
            <div>
                {editStatus
                    ? <input value={status} onBlur={disableEditStatus} autoFocus={true}
                             onChange={onChangeStatus}/>
                    :
                    <p onClick={props.userProfile.userId === props.myId && enableEditStatus}>{props.status || (props.userProfile.userId === props.myId && `Click here to change status`)}</p>
                }
            </div>
        </div>
    )
}