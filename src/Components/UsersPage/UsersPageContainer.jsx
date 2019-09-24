import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {
    follow,
    selectPage,
    setTotalCount,
    setUsers,
    toggleFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersPageContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.selectPage(pageNumber);

        getUsers(this.props.count, pageNumber)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
            })
    };

    componentDidMount() {
        this.props.toggleFetching(true);

        getUsers(this.props.count, this.props.page)
            .then(data => {
                this.props.toggleFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            })
            .catch(error => console.log(error))
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
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        page={this.props.page}
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

const mapDispatchToProps = {
    setUsers,
    setTotalCount,
    selectPage,
    follow,
    unfollow,
    toggleFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);