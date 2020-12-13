import React, {Component} from 'react';

import {motion} from 'framer-motion';
import Loader from '../Components/Loader';

class Userdetails extends Component {

    constructor (props) {
        super(props);
        this.state = {
            user : null,
            username : '',
            fname : '',
            lname : '',
            email : '',
            disabled : true
        }
    }

    onformSubmit = (e) => {
        e.preventDefault();
    }

    componentDidMount () {
        let user = localStorage.getItem('user')
        this.setState({
            'user' : JSON.parse(user)
        })
    }

    handleChange = (e) => {

    }

    enableForm = () => {
        this.setState({
            disabled : !this.state.disabled
        })
    }

    render() {

        if(this.state.user === null) {
            return <Loader />
        }

        return (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3}}
            >
                <h3>Profile setting</h3>
                <div>
                    <form onSubmit={this.onformSubmit}>
                        <div className="form-row form-group">
                            <div className="col-sm-4">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" type="text" name="username" disabled="disabled" value={this.state.user.username} title="You can not change your username." onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-8">
                                <label htmlFor="email">Email address</label>
                                <input type='email' name='email' value={this.state.user.email} className="form-control" onChange={this.handleChange} disabled={this.state.disabled} />
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-6">
                                <label htmlFor="fname">First name</label>
                                <input type="fname" name="fname" className="form-control" value={this.state.user.first_name} onChange={this.handleChange} disabled={this.state.disabled} />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lname">Last name</label>
                                <input type="text" className="form-control" value={this.state.user.last_name} onChange={this.handleChange} name='lname' disabled={this.state.disabled} />
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-secondary" onClick={this.enableForm}>{this.state.disabled ? 'Edit' : 'Cancel'}</button>&nbsp;&nbsp;
                            <button className="btn btn-success" disabled={this.state.disabled}>Save</button> 
                        </div>
                    </form>
                </div>
            </motion.div>
        );
    }
}

export default Userdetails;