import React, {Component} from 'react';
import { withAlert } from 'react-alert';
import { BASE_URL } from '../actions/config';
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
        let formData = new FormData();
        formData.append('email', this.state.email)
        formData.append('fname', this.state.fname)
        formData.append('lname', this.state.lname)
        fetch(BASE_URL+"/api/auth/updateuser/", {
            method : "POST",
            headers : {
                "Authorization" : "Token "+localStorage.getItem('token')
            },
            body : formData
        }).then(res => res.json())
        .then(data => {
            if (data.error) {
                return this.props.alert.show('Something went wrong!', {type:'error'})
            }
            this.setState({
                disabled:true
            })
            return this.props.alert.show('Profile updated successfully', {type:'success'})
            
        }).catch(err => {
            console.log(err)
        })

    }

    componentDidMount () {
        let user = JSON.parse(localStorage.getItem('user'))
        
        this.setState({
            'user' : user,
            username : user.username,
            fname : user.first_name,
            lname : user.last_name,
            email : user.email
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
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
            <div>
                <h3>Profile setting</h3>
                <div>
                    <form onSubmit={this.onformSubmit}>
                        <div className="form-row form-group">
                            <div className="col-sm-4">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" type="text" name="username" disabled="disabled" value={this.state.username} title="You can not change your username." onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-8">
                                <label htmlFor="email">Email address</label>
                                <input type='email' name='email' value={this.state.email} className="form-control" onChange={this.handleChange} disabled={this.state.disabled} />
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-6">
                                <label htmlFor="fname">First name</label>
                                <input type="fname" name="fname" className="form-control" value={this.state.fname} onChange={this.handleChange} disabled={this.state.disabled} />
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lname">Last name</label>
                                <input type="text" className="form-control" value={this.state.lname} onChange={this.handleChange} name='lname' disabled={this.state.disabled} />
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="btn btn-outline-secondary" onClick={this.enableForm}>{this.state.disabled ? 'Edit' : 'Cancel'}</span>&nbsp;&nbsp;
                            <button className="btn btn-success" disabled={this.state.disabled}>Save</button> 
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default withAlert()(Userdetails);