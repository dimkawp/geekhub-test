import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            if (localStorage.getItem('UserToken') === 'false' || !localStorage.getItem('UserToken')) {
                return (
                    <Component {...matchProps} />
                );
            }
            else {
                return (
                    <Redirect to="/" />
                );
            }
        }} />
    )
};

export default UserLayout;