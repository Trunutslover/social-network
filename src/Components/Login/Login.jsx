import React from 'react';
import classes from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {maxLength, required} from "../../utils/validation";
import Input from "../common/FormComponents/Input/Input";

const maxLength30 = maxLength(30);

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Input}
                name="email"
                placeholder="login here"
                label={`Enter your login:`}
                validate={[maxLength30, required]}
            />
            <Field
                component={Input}
                type={"password"}
                name="password"
                placeholder="password here"
                label={`Enter your password:`}
                validate={[maxLength30, required]}
            />
            <Field
                component={Input}
                type={"checkbox"}
                name="rememberMe"
                label={`remember me`}
            />
            {props.error && <div>{props.error}</div>}
            <button type="submit">Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: `login`})(LoginForm);

function Login(props) {
    const myHandleSubmit = (formData) => {
        props.loginThunkCreator(formData);
    };

    if (props.isAuth) {
        return <Redirect to={`/myprofile`}/>
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