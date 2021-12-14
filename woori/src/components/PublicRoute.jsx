import React from 'react';
import {Route, useNavigate} from 'react-router-dom'
import isLogin from '../hooks/isLogin';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    
    const navigate = useNavigate();
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                navigate("/")
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;