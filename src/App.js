import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Navigation from './Components/Navigation';
import Signup from './Components/Signup';

const home = () => {
    return <p> Home </p>
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route path="/" component={home} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
