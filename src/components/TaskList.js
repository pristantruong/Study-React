import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1 //all -1, active: 1, invisible: 0
        }
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        )
        this.setState({
            [name]: value
        })
    }

    render() {
        var { tasks } = this.props; // var tasks = this.props.tasks
        var { filterName, filterStatus} = this.state;  
        var elmTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id} 
                        index={index} 
                        task={task}
                        // onUpdateStatus={this.props.onUpdateStatus} do sử dụng redux
                        //this.props.onDelete là gọi từ thằng App.js (onDelete=....)
                        // onDelete={this.props.onDelete} do sử dụng redux
                        onUpdate={this.props.onUpdate}/>
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
                            <input 
                                type="text"
                                className="form-control" 
                                name="filterName"
                                value={ filterName}
                                onChange={this.onChange}/>
                        </td>
                        <td>
                            <select 
                                className="form-control" 
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}>
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

//các state của store bên redux sẽ chuyển thành các props
const mapStateToProps = (state) =>{ //state là của store truyền qua
    return {
        tasks: state.tasks
    }
};

export default connect(mapStateToProps, null)(TaskList);
