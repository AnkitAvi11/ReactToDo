import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
            <div className="container"  style={{marginTop : "70px"}}>
                <div className="row">
                    <div className="col-sm-6" style={{marginTop : "40px"}}>
                        <h4>Hello there! </h4>
                        <p><b>Todoister</b> is a todo application developed using React and RESTFUL APIs based on Django Framework.</p>
                        <p>
                            <Link to={this.props.loggedin ? '/profile' : '/signup'} className="card-link btn btn-info">{this.props.loggedin ? 'Go to your account ...' : 'Get started'}</Link>
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img src={process.env.PUBLIC_URL + "/images/check.svg"} alt="check" style={{width:"100%"}} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        loggedin : localStorage.getItem('token') ? true : false
    }
}

export default connect(mapStatetoProps, {})(Home);