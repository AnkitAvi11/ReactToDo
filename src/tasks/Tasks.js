import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Tasks extends Component {
    render () {
        return (
            <div className="tasks container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Add Task</h3>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Tasks;