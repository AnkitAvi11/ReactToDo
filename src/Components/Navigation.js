import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logout from './Logout';

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logout_active : false
        }
    }

    toggleLogout = () => {
        this.setState({
            logout_active : !this.state.logout_active
        })
    }

    render() {
        let auth_routes = <React.Fragment>
            <li className="nav-item">
                <NavLink to="/login" className="nav-link" exact>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/signup" className="nav-link btn btn-info" style={{color:"white"}} exact   >Signup</NavLink>
            </li>
        </React.Fragment>

        let after_auth_routes = this.props.user ? <React.Fragment>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hello, {this.props.user.username}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/tasks">Tasks</Link>
                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                <Link className="dropdown-item" to="/profile">Profile settings</Link>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" style={{color:'red', fontWeight:"bolder"}} onClick={this.toggleLogout} style={{cursor:'pointer'}}>Logout</a>
                </div>
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
                {this.state.logout_active ? <div>
                        <Logout change={this.toggleLogout} />
                    </div> : ""}
            </div>  
            </div>
            </nav>
        )
    }
}

export default Navigation;