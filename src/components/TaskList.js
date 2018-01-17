import React, { Component } from 'react';
import '../../src/App.css';
import TaskItem from './TaskItem';
class TaskList extends Component {
    render() {
        var { tasks } = this.props; // var tasks = this.props.tasks
        var elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task}
                        onUpdateStatus={this.props.onUpdateStatus}
                        //this.props.onDelete là gọi từ thằng App.js (onDelete=....)
                        onDelete={this.props.onDelete}/>
        });
        return (
            <table className="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th className="text-center">Index</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option value="-1">All</option>
                                <option value="0">Invisible</option>
                                <option value="1">Active</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elmTasks }

                </tbody>
            </table>

        );
    }
}

export default TaskList;
