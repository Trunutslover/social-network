import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunkCreator} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.setUserProfileThunkCreator(this.props.match.params.userId || this.props.myId);
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
        userProfile: state.profile.userProfile,
        myId: state.auth.id
    }
};

const mapDispatchToProps = {
    setUserProfileThunkCreator
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer);