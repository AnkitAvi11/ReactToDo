import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
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
                                    <input className="form-control" name="username" placeholder="Enter your username here" autoFocus={true} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-control" placeholder="Enter your account password" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" style={{width : "100%"}}>
                                        Submit
                                    </button>
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

export default Login;