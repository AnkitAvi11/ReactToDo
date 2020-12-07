import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from "../actions/auth";
import { withAlert } from "react-alert";
import { history } from "../App";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await this.props.loginUser(this.state.username, this.state.password)
    }

    componentDidUpdate () {
        if(this.props.auth.error!==null) {
            return this.props.alert.show(this.props.auth.error.error, {type: 'error'})
        }
        if(this.props.auth.user!=null) {
            return history.push('/')
        }
    }

    render() {

        document.title = "Login"

        return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5" style={{margin:"auto"}}>
                    <div className="card">
                        <div className="card-body">
                            <form method="POST" onSubmit={this.onSubmit}>
                                <h3>Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control" name="username" placeholder="Enter your username here" autoFocus={true} value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-control" placeholder="Enter your account password" value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    {!this.props.auth.loading ? <button className="btn btn-primary" style={{width : "100%"}}>
                                        Submit
                                    </button> : <button className="btn btn-primary" style={{width : "100%"}}>
                                        Logging in ... 
                                    </button>}
                                </div>
                                <div className="form-group">
                                    <p>
                                        Don't have an account ? <Link to="/signup" className="card-link">Create one</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.login
    }
}

export default withAlert()(connect(mapStateToProps, {loginUser})(Login));