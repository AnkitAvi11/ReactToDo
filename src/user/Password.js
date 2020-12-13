import React, {Component} from 'react';

class Password extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div style={{marginTop:"30px"}}>
                <h3>Password change</h3>
                <form>
                    <div className="form-group form-row">
                        <label htmlFor="password">Current password</label>
                        <input type="password" name="password" className="form-control" required="required" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">New password</label>
                        <input type="password" name="password1" className="form-control" required="required" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="password2">Confirm password</label>
                        <input type="password" name="password2" className="form-control" required="required" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger">Change password</button>
                    </div>
                </form>
            </div>
        )
    };
}

export default Password;