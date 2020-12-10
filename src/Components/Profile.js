import React, {Component} from 'react';
import {  Route, Switch } from 'react-router-dom';
import PrivateRoute from '../actions/PrivateRoute';
import Userprofile from '../user/Profile';
import Notfound from './Notfound';

const setting = (props) => {
    return <p>Setting</p>
}

class Profile extends Component {

    constructor (props) {
        super(props);
        this.state = {
            token : localStorage.getItem('token'),
            user : JSON.parse(localStorage.getItem('user'))
        }
    }

    render () {
        let url = this.props.match.path
        return (
            <Switch>
                <PrivateRoute loggedin={this.props.loggedin} path={`${url}`} component={Userprofile} exact={true} />

                <PrivateRoute path={`${url}/setting`} component={setting} loggedin={this.props.loggedin} />

                <Route component={Notfound} />

            </Switch>
        )
    }
}

export default Profile;