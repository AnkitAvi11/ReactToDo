import React, {Component} from 'react';
import { withAlert } from 'react-alert';

class FutureTasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : []
        }
    }

    componentDidMount = () => {
        let token = localStorage.getItem('token');
        fetch('http://127.0.0.1:8000/tasks/upcoming/', {
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

    completeTask = (task_id) => {
        let token = localStorage.getItem('token')
        let headers = {
            'Authorization' : 'Token ' + token
        }
        fetch('http://127.0.0.1:8000/tasks/complete/'+task_id+'/', {
            headers : headers
        }).then(res => res.json())
        .then(async data => {
            this.props.alert.show('Mark as completed', {type : 'success'})
            fetch('http://127.0.0.1:8000/tasks/upcoming/', {
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
            
        }).catch(err => {
            this.props.alert.show('Something went wrong', {type : 'error'})
        });
        
    }

    render() {

        if (this.state.tasks.length === 0) {
            return <div className="card" style={{marginTop:"20px", textAlign:"center"}}>
                <div className="card-body">
                    <h5>You are all caught up for today !</h5>
                </div>
            </div>
        }

        let tasks = this.state.tasks.map(task => {
            return <React.Fragment key={task.id} >
                <div className="card" style={{marginBottom : "10px"}}>
                    <div className="card-body">
                        <h4>{task.title}</h4>
                        <p style={{color:"grey"}}>{task.description}</p>

                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{color:"grey"}}><i className="far fa-clock"></i> {task.completion_date}</span>
                            <button className="btn btn-outline-danger" onClick={()=>{this.completeTask(task.id)}}>Mark as complete</button>
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

export default withAlert()(FutureTasks);