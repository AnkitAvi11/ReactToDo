import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Notfound extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-5" style={{margin:"auto", textAlign:"center"}}>
                        <img src={process.env.PUBLIC_URL+"/images/notfound.svg"} alt="not found" style={{width : "100%"}} />
                        <h3 style={{marginTop:"30px"}}>Oops! Error : 404</h3>
                        <p>The page you are looking was not found. <Link to="/">Go back to Home</Link> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notfound;