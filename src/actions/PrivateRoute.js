import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({loggedin, component: Component, ...rest}) => {
    return <Route
        {...rest}
        component = {(props) => {
            return loggedin ? <Component {...props} /> : 
            <Redirect to="/login" />
        }}
     />
}

export default PrivateRoute;
