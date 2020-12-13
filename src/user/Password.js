import React, {Component} from 'react';
import {motion} from 'framer-motion';
import { withAlert } from 'react-alert';
import { changePassword } from '../actions/auth';
import { BASE_URL } from '../actions/config';
import Loader from '../Components/Loader';

class Password extends Component {
    constructor (props) {
        super(props)
        this.state = {
            password : '',
            password1 : '',
            password2 : '',
            loading : false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = async (e) => {
        e.preventDefault();
        let form = new FormData()
        this.setState({loading:true})
        form.append('password', this.state.password)
        form.append('password1', this.state.password1)
        form.append('password2', this.state.password2)
        fetch(BASE_URL+"/api/auth/change_password/", {
            method : "POST",
            headers : {
                'Authorization' : 'Token '+localStorage.getItem('token')
            },
            body : form
        }).then(res => res.json())
        .then(data => {
            this.setState({loading:false})
            if(data.error) {
                return this.props.alert.show(data.error, {type:'error'})
            }
            return this.props.alert.show(data.messgae, {type:'success'})
        }).catch(err => {
            return this.props.alert.show(err, {type:'error'})
        });
    }

    render () { 

        if(this.state.loading) 
        return <Loader />

        return (
            <motion.div style={{marginTop:"30px"}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.3}}
            >
                <h3>Password change</h3>
                <form onSubmit={this.submitForm}>
                    <div className="form-group form-row">
                        <label htmlFor="password">Current password</label>
                        <input type="password" name="password" className="form-control" required="required" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">New password</label>
                        <input type="password" name="password1" className="form-control" required="required"  value={this.state.password1} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm password</label>
                        <input type="password" name="password2" className="form-control" required="required"  value={this.state.password2} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger">Change password</button>
                    </div>
                </form>
            </motion.div>
        )
    };
}

export default withAlert()(Password);