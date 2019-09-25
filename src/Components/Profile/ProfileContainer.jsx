import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.setUserProfileThunkCreator(this.props.match.params.userId);
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
    setUserProfileThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));