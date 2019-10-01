import React from 'react';
import classes from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Enter your login:
                <br/>
                <Field component={`input`} name="email" placeholder="login here" />
            </label>
            <br/>
            <label>
                Enter your password:
                <br/>
                <Field component={`input`} type={"password"} name="password" placeholder="password here" />
            </label>
            <br/>
            <label>
                <Field component={`input`} type={"checkbox"} name="rememberMe" />
                remember me
            </label>
            <br/>
            <button type="submit">Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: `login`})(LoginForm);

function Login(props) {
    const myHandleSubmit = (formData) => {
        props.loginThunkCreator(formData);
    };

    if(props.isAuth) {
        return <Redirect to={`/myprofile`} />
    }

    return (
        <div className={classes.loginPage}>
            <h2>Log in to your account</h2>
            <LoginReduxForm onSubmit={myHandleSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = {
        loginThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);