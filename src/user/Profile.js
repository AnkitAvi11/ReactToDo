import React from 'react';
import { BASE_URL } from '../actions/config';

class Userprofile extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            token : localStorage.getItem('token'),
            user : JSON.parse(localStorage.getItem('user'))
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img src={BASE_URL+`${this.state.user.userprofile.profile_pic}`} style={{width:"100%"}} />
                                <h4 style={{marginTop:"20px"}}>{this.state.user.first_name} {this.state.user.last_name}</h4>
                                <p>{this.state.user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Userprofile;