import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

class Notfound extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-5" style={{margin:"auto", textAlign:"center"}}>
                        <motion.img src={process.env.PUBLIC_URL+"/images/notfound.svg"} alt="not found" style={{width : "100%"}}
                        initial={{y:"-100vh"}}    
                        animate={{y:0}}
                        transition={{delay:0.3}}
                        />
                        <motion.div
                        initial={{y:"100vh"}}    
                        animate={{y:0}}
                        transition={{delay:0.5}}
                        >
                        <h3 style={{marginTop:"30px"}}>Oops! Error : 404</h3>
                        <p>The page you are looking was not found. <Link to="/">Go back to Home</Link> </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notfound;