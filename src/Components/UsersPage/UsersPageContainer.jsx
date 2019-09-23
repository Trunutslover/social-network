import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {
    followAC,
    selectPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersPageContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.selectPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${pageNumber}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <>
            {this.props.isFetching
                    ? <Preloader />
                    : <UsersPage
                        count={this.props.count}
                        totalCount={this.props.totalCount}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
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
        isFetching: state.usersPage.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        selectPage: (page) => dispatch(selectPageAC(page)),
        follow: (user) => dispatch(followAC(user)),
        unfollow: (user) => dispatch(unfollowAC(user)),
        toggleFetching: (isFetching) => dispatch(toggleFetchingAC(isFetching))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);