import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Loggedin = ({loggedin, component : Component, ...rest}) => {
    return <Route 
    {...rest}
    component={
        (props) => loggedin ? <Redirect to="/tasks" /> : <Component {...props} />
    }
    />
}

export default Loggedin;