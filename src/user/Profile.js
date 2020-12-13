import React from 'react';
import { BASE_URL } from '../actions/config';
import {motion} from 'framer-motion';
import Userdetails from './Userdetails';
import Password from './Password';
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
                        <motion.div className="card" 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.1}}
                        >
                            <motion.div className="card-body"
                            initial={{scale:0}}
                            animate={{scale:1}}
                            transition={{delay:0.2}}
                            >
                                <img src={BASE_URL+`${this.state.user.userprofile.profile_pic}`} style={{width:"100%"}} alt="" />
                                <h4 style={{marginTop:"20px"}}>{this.state.user.first_name} {this.state.user.last_name}</h4>
                                <p>{this.state.user.email}</p>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col-sm-8">
                        <Userdetails />
                        <Password />
                    </div>
                </div>
            </div>
        )
    }
}

export default Userprofile;