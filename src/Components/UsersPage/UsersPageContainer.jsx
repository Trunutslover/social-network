import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {followAC, selectPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";

class UsersPageContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        this.props.selectPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <UsersPage
                count={this.props.count}
                totalCount={this.props.totalCount}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        selectPage: (page) => dispatch(selectPageAC(page)),
        follow: (user) => dispatch(followAC(user)),
        unfollow: (user) => dispatch(unfollowAC(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);