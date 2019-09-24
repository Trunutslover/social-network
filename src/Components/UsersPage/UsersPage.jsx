import React from 'react';
import classes from './UsersPage.module.scss';
import userpic from '../../assets/Userpic.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

export default function UsersPage(props) {
    const pagesCount = Math.ceil(props.totalCount / props.count);

    const buttons = [];

    for (let i = 1; i <= pagesCount; i++) {
        buttons.push(i);
    }

    const buttonsList = buttons.map((value, index) => {
        return <button key={index} className={`${classes.pageButton} ${value === props.page && classes.activePage}`}
                       onClick={() => {
                           props.onPageChanged(value)
                       }}>{value}</button>
    });

    const userList = props.users.map((value) => {
        return (
            <div key={value.id} className={classes.user}>
                <div className={classes.firstCol}>
                    <NavLink to={`/profile/${value.id}`}>
                        <img className={classes.avatar} src={value.photos.small || userpic} alt="avatar" width="40px"
                             height="40px"/>
                    </NavLink>
                    {value.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${value.id}`, {
                                withCredentials: true,
                                headers: {"API-KEY": "16aedc44-935d-40d8-a8b8-3857bd3be2f3"}
                            })
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(value.id)
                                    }
                                });
                        }}>
                            Unfollow
                        </button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${value.id}`, {}, {
                                withCredentials: true,
                                headers: {"API-KEY": "16aedc44-935d-40d8-a8b8-3857bd3be2f3"}
                            })
                                .then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(value.id)
                                    }
                                });
                        }}>
                            Follow
                        </button>
                    }
                </div>
                <div className={classes.secondCol}>
                    <h3 className={classes.name}>{value.name}</h3>
                    <p>{value.status}</p>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className={classes.pagination}>{buttonsList}</div>
            <div className={classes.users}>{userList}</div>
        </div>
    )
}