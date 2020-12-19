import React, {Component} from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Upcoming from './Upcoming';

const complete = () => {
    return <p>Completed</p>
}

const missed = () => {
    return <p>Missed</p>
}

class Tasks extends Component {
    render () {
        document.title = "Tasks"
        return (
            <div className="tasks container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Add Task</h3>
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label  htmlFor="title">Task title</label>
                                        <input type="text" name="title" className="form-control" id="title" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date">Completion date</label>
                                        <input type="date" name="date" className="form-control" id="date" required="required" />
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
                            <NavLink className="nav-link" to="/tasks" exact>Upcoming</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tasks/completed">Completed</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tasks/missed">Missed</NavLink>
                        </li>
                        </ul>
                        <Switch>
                            <Route path={`${this.props.match.path}`} component={Upcoming} exact />

                            <Route path={`${this.props.match.path}/completed`} component={complete} />

                            <Route path={`${this.props.match.path}/missed`} component={missed} />
                        </Switch>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Tasks;