import React, {Component} from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Notfound from './Components/Notfound';
import Signup from './Components/Signup';
import Home from './Containers/Home';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />

                    <Route component={Notfound} />

                </Switch>
            </Router>
        )
    }
}

export default App;
