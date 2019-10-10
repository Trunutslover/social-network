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

    const updateMyPhoto = (e) => {
        props.putMyPhoto(e.target.files[0], props.myId);
    };

    return (
        <div className={classes.profile}>
            <h2>{props.userProfile.fullName}</h2>
            <img src={props.userProfile.photos.large || userpic} alt={`Avatar`}/>
            <br/>
            {props.userProfile.userId === props.myId ? <input type={`file`} onChange={updateMyPhoto} /> : null}
            <div>
                <b>Status: </b>
                {editStatus
                    ? <input value={status} onBlur={disableEditStatus} autoFocus={true}
                             onChange={onChangeStatus}/>
                    :
                    <span onClick={props.userProfile.userId === props.myId ? enableEditStatus : undefined}>{props.status || (props.userProfile.userId === props.myId ? `Click here to change status` : undefined)}</span>
                }
            </div>
        </div>
    )
}