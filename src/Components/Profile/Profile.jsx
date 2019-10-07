import React, {useState, useEffect} from 'react';
import classes from './Profile.module.scss';
import userpic from '../../assets/Userpic.png';

export default function Profile(props) {
    const [editStatus, setEditStatus] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },
        [props.status]);

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
                    <p onClick={props.userProfile.userId === props.myId ? enableEditStatus : undefined}>{props.status || (props.userProfile.userId === props.myId ? `Click here to change status` : undefined)}</p>
                }
            </div>
        </div>
    )
}