import React from 'react';

import {motion} from 'framer-motion';

class Logout extends React.Component {

    toggleChange = () => {
        this.props.change();
    }

    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = "/"
    }

    render() {
        return (
            <motion.div className="modal" tabIndex="-1"
            style={{display:"block", background : "rgba(1,1,1, .6)"}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            >
            <motion.div className="modal-dialog"
            initial={{y : "-100vh"}}
            animate={{y:0}}
            >
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" style={{color:'red'}}>Confirm</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleChange}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Do you wish to logout from the application ?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.toggleChange}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={this.logout}>Yes, logout</button>
                </div>
                </div>
            </motion.div>
        </motion.div>
        )
    }
}

export default Logout;