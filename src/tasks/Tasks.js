import React, {Component} from 'react';
import { withAlert } from 'react-alert';
import { NavLink, Route, Switch } from 'react-router-dom';
import FutureTasks from './FutureTasks';
import Missed from './Missed';
import Upcoming from './Upcoming';


class Tasks extends Component {

    constructor(props)  {
        super(props)
        this.state = {
            title : '',
            description : '',
            date : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token')

        let body = new FormData()
        body.append('title', this.state.title)
        body.append('date', this.state.date)
        body.append('description', this.state.description)

        fetch('http://127.0.0.1:8000/tasks/add/',{
            method : 'POST',
            body : body,
            headers : {
                'Authorization' : 'Token '+token
            }
        }).then(res => res.json())
        .then(data => {
            this.props.alert.show('Task added succesfully', {type : 'success'})
            window.location.reload()
        }).catch(err => {
            this.props.alert.show('Some unexpected error occurred', {type : 'error'})
        })
    }

    render () {
        document.title = "Tasks"
        return (
            <div className="tasks container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Add Task</h3>
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.submitForm}>
                                    <div className="form-group">
                                        <label  htmlFor="title">Task title</label>
                                        <input type="text" name="title" className="form-control" id="title" required="required" autoFocus={true} value={this.state.title} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Completion date</label>
                                        <input type="date" name="date" className="form-control" id="date" required="required" value={this.state.date} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea className="form-control" placeholder="Task details ..." name='description' value={this.state.description} onChange={this.handleChange} ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-success">Add task</button>
                                    </div>
                                </form>    
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <h3>Your Tasks</h3>
                        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tasks" exact>Today</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tasks/upcoming" exact>Upcoming</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tasks/missed">Missed</NavLink>
                        </li>
                        </ul>
                        <Switch>
                            <Route path={`${this.props.match.path}`} component={Upcoming} exact />

                            <Route path={`${this.props.match.path}/upcoming`} component={FutureTasks} exact />

                            <Route path={`${this.props.match.path}/missed`} component={Missed} />
                        </Switch>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withAlert()(Tasks);