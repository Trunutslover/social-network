import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";

class ProfileContainer extends React.Component{
    componentDidMount() {
        getProfile(this.props.match.params.userId)
            .then(data => {
                this.props.setUserProfile(data)
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