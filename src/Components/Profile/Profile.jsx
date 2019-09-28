import React from 'react';
import classes from './Profile.module.scss';
import userpic from '../../assets/Userpic.png';

export default class Profile extends React.Component {
    state = {
        editStatus: false,
        status: `I'm a react developer!`
    };

    toggleEditStatus = () => {
        this.setState({
            editStatus: !this.state.editStatus
        })
    };

    render() {
        return (
            <div className={classes.profile}>
                <h2>{this.props.userProfile.fullName}</h2>
                <img src={this.props.userProfile.photos.large || userpic} alt={`Avatar`}/>
                <div>
                    {this.state.editStatus
                        ? <input value={this.state.status} onBlur={this.toggleEditStatus} autoFocus={true}/>
                        : <p onClick={this.toggleEditStatus}>{this.state.status}</p>
                    }
                </div>
            </div>
        )
    }
}