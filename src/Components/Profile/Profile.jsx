import React from 'react';
import classes from './Profile.module.scss';
import userpic from '../../assets/Userpic.png';

export default class Profile extends React.Component {
    state = {
        editStatus: false,
        status: this.props.status
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    };

    enableEditStatus = () => {
        this.setState({
            editStatus: true
        })
    };

    disableEditStatus = () => {
        this.setState({
            editStatus: false
        });
        this.props.putMyStatus(this.state.status);
    };

    render() {
        return (
            <div className={classes.profile}>
                <h2>{this.props.userProfile.fullName}</h2>
                <img src={this.props.userProfile.photos.large || userpic} alt={`Avatar`}/>
                <div>
                    {this.state.editStatus
                        ? <input value={this.state.status} onBlur={this.disableEditStatus} autoFocus={true} onChange={this.onChangeStatus}/>
                        : <p onClick={this.props.userProfile.userId === this.props.myId && this.enableEditStatus}>{this.props.status || (this.props.userProfile.userId === this.props.myId && `Click here to change status`)}</p>
                    }
                </div>
            </div>
        )
    }
}