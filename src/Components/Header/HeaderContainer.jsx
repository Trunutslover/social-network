import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthData} from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                if(response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data);
                }
            })
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

const mapDispatchToProps = {
    setAuthData
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);