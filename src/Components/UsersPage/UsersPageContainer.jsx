import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {
    followThunkCreator, getUsersThunkCreator,
    selectPage,
    toggleFollowing,
    unfollowThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersPageContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        this.props.selectPage(pageNumber);
        this.props.getUsersThunkCreator(this.props.count, pageNumber);
    };

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.count, this.props.page)
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <UsersPage
                        count={this.props.count}
                        totalCount={this.props.totalCount}
                        users={this.props.users}
                        page={this.props.page}
                        onPageChanged={this.onPageChanged}
                        usersFollowing={this.props.usersFollowing}
                        followThunkCreator={this.props.followThunkCreator}
                        unfollowThunkCreator={this.props.unfollowThunkCreator}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        usersFollowing: state.usersPage.usersFollowing,
    }
};

const mapDispatchToProps = {
    selectPage,
    toggleFollowing,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);