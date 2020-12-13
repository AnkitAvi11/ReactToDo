import React, {Component} from 'react';
import Loader from '../Components/Loader';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import { changePassword } from '../actions/auth';

class Password extends Component {
    constructor (props) {
        super(props)
        this.state = {
            password : '',
            password1 : '',
            password2 : ''
        }
    }

    componentDidMount () {
        if (this.props.password.error!==null) {
            return this.props.alert.show(this.props.password.error, {type : 'error'})
        }

        if (this.props.password.message!==null) {
            return this.props.alert.show(this.props.password.message, {type : 'success'})
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        if(this.state.password==='' || this.state.password1 === '' || this.state.password2 === '' || this.state.password1!==this.state.password2) {
            return this.props.alert.show('Fill the form properly', {type : 'error'})
        }

        this.props.changePassword(this.state.password, this.state.password1, this.state.password2);
    }

    render () {       
        
        if(this.props.password.loading) 
        return <Loader />

        return (
            <div style={{marginTop:"30px"}}>
                <h3>Password change</h3>
                <form onSubmit={this.submitForm}>
                    <div className="form-group form-row">
                        <label htmlFor="password">Current password</label>
                        <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">New password</label>
                        <input type="password" name="password1" className="form-control"  value={this.state.password1} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm password</label>
                        <input type="password" name="password2" className="form-control"  value={this.state.password2} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger">{this.props.password.loading ? 'Changing password ....' : 'Change password'}</button>
                    </div>
                </form>
            </div>
        )
    };
}

const mapStateToProps = state => {      
    return {
        password : state.updatepassword
    }
}

export default withAlert()(connect(
    mapStateToProps,
    {changePassword}
)(Password));