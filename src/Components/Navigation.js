import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    render() {
        let auth_routes = <React.Fragment>
            <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/signup" className="nav-link btn btn-info" style={{color:"white"}}>Signup</NavLink>
            </li>
        </React.Fragment>

        let after_auth_routes = this.props.user ? <React.Fragment>
            <li className="nav-item">
                <NavLink to="/login" className="nav-link">Hello, {this.props.user.username}</NavLink>
            </li>
        </React.Fragment> : "";

        return (
            <nav className="navbar navbar-expand-md bg-white navbar-light" style={{marginBottom : "20px", marginTop : "10px"}}>
            <div className="container">
            <NavLink className="navbar-brand" to="/" style={{fontSize:"25px", color:'darkblue'}}><i className="fas fa-clipboard-check"></i> Todoister</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/features" className="nav-link">Features</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contribute" className="nav-link" target="blank">Contribute</NavLink>
                </li>    
                </ul>

                <ul className="navbar-nav ml-auto">
                    {this.props.loggedin ? after_auth_routes : auth_routes}
                </ul>
            </div>  
            </div>
            </nav>
        )
    }
}

export default Navigation;