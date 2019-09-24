import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthData} from "../../redux/auth-reducer";
import {getAuth} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        getAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    this.props.setAuthData(data.data);
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