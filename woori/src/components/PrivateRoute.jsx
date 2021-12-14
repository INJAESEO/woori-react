import React from 'react';
import {Route, } from 'react-router'
import isLogin from '../hooks/isLogin';
import { useNavigate } from 'react-router-dom'



const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={props => (
        isLogin() ? (
         <Component {...props} />
        ) : (
         navigate("/login")
        )
      )}
    />
  );
}
export default PrivateRoute;