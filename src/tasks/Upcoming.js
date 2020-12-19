import React, {Component} from 'react';
import Loader from '../Components/Loader';

class Upcoming extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : []
        }
    }

    componentDidMount = () => {
        let token = localStorage.getItem('token');
        fetch('http://127.0.0.1:8000/tasks/', {
            method : 'GET',
            headers : {
                'Authorization' : 'Token ' + token
            }
        }).then(res => res.json())
        .then(data => {
            this.setState({
                tasks : data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        if (this.state.tasks.length <= 0) {
            return <Loader />
        }

        let tasks = this.state.tasks.map(task => {
            return <React.Fragment key={task.id} >
                <div className="card" style={{marginBottom : "10px"}}>
                    <div className="card-body">
                        <h4>{task.title}</h4>
                        <p style={{color:"grey"}}>{task.description}</p>

                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{color:"grey"}}><i className="far fa-clock"></i> {task.completion_date}</span>
                            <button className="btn btn-outline-success">Mark as complete</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        })

        return(
            <div style={{marginTop : "20px"}}>
                {tasks}
            </div>
        )
    }
}

export default Upcoming;