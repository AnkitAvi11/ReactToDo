import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Signup extends Component {

    onSubmit = (e) => {
        e.preventDefault();
    }

    render () {
        document.title = "Signup"
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-5" style={{margin:"auto"}}>
                        <div className="card">
                            <div className="card-body">
                                <form method="post" onSubmit={this.onSubmit}>
                                    <h3>Signup</h3>
                                    <div className="form-group">
                                        <label htmlFor="fullname">Full Name</label>
                                        <input type="text" name="fname" className="form-control" placeholder="Enter your full name" autoFocus={true} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" className="form-control" placeholder="Enter a username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input className="form-control" name="email" type="email" placeholder="Email address" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" placeholder="Enter a strong password" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-primary" style={{width : "100%"}}>
                                            Signup
                                        </button>
                                    </div>
                                    <div className="form-group">
                                    <p>
                                        Already have an account ? <Link to="/login" className="card-link">Login here</Link>
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

export default Signup;