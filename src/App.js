import React, {Component} from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Notfound from './Components/Notfound';
import Signup from './Components/Signup';
import Home from './Containers/Home';

import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import Loggedin from './Components/Loggedin';

export const history = createHistory();

class App extends Component {

    render() {
        
        return (
            <Router history={history}>
                <Navigation loggedin={this.props.loggedin} />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Loggedin path="/login" component={Login} loggedin={this.props.loggedin} />
                    <Loggedin path="/signup" component={Signup} loggedin={this.props.loggedin} />

                    <Route component={Notfound} />

                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedin : localStorage.getItem('token') ? true : false
    }
}

export default connect(mapStateToProps, {})(App);
