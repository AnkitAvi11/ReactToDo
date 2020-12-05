import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Notfound from './Components/Notfound';
import Signup from './Components/Signup';
import Home from './Containers/Home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />

                    <Route component={Notfound} />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
