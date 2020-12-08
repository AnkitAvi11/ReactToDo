import React, {Component} from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import styles from './signup.module.css';
import { signupUser } from "../actions/auth";
import {history} from '../App'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname : '',
            username : '',
            email : '',
            password : ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.signupUser(this.state.fname, this.state.username, this.state.email, this.state.password)
    }

    componentDidUpdate = () => {
        if (this.props.auth.error) {
            return this.props.alert.show(this.props.auth.error, {type : 'error'})
        }
        if(this.props.auth.user != null) {
            this.props.alert.show('Registeration successful. You can continue to login.', {type : 'success'})
            return history.push('/login')
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    render () {
        document.title = "Signup"
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-5" style={{margin:"auto"}}>
                        <div className="card">
                            <div className="card-body">
                                <form method="post" onSubmit={this.onSubmit} className={styles.label} >
                                    <h3>Signup</h3>
                                    <div className="form-group">
                                        <label htmlFor="fullname">Full Name</label>
                                        <input type="text" name="fname" className="form-control" placeholder="Enter your full name" autoFocus={true} value={this.state.fname} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" className="form-control" placeholder="Enter a username" value={this.state.username} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input className="form-control" name="email" type="email" placeholder="Email address" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" placeholder="Enter a strong password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group">
                                        {this.props.auth.loading ? <button className="btn btn-primary" style={{width : "100%"}}>
                                            Registering user ...
                                        </button>:<button className="btn btn-primary" style={{width : "100%"}}>
                                            Signup
                                        </button>}
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

const mapStateToProps = (state) => {
    return {
        auth : state.signup
    }
}

export default withAlert()(connect(mapStateToProps, {signupUser})(Signup));