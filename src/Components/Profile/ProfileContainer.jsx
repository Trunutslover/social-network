import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        if(!this.props.userProfile) {
            return <Preloader />
        }

        return (
            <Profile userProfile={this.props.userProfile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profile.userProfile
    }
};

const mapDispatchToProps = {
    setUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));