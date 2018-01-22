import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {

    onUpdateStatus = () =>{
        // this.props.onUpdateStatus(this.props.task.id) do sử dụng redux
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        // this.props.onDelete(this.props.task.id) do sử dụng redux
        this.props.onDeleteTask(this.props.task.id); // dispatch(actions.deleteTask)
    }        

    onUpdate = () => {
        // this.props.onUpdate(this.props.task.id) do sử dụng redux
        this.props.onOpenForm(); //dispatch(actions.openForm)
        this.props.onEditTask(this.props.task);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status === true ? "label label-success" : "label label-danger"}
                        onClick={this.onUpdateStatus}>
                        {task.status === true ? "Active" : "Invisible"}
                                                </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5"></span>Edit
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

// tạo kết nối để lấy state từ store về biến state đc khai báo lấy từ store
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = (dispatch, props) => { //dispatch giúp thực thi 1 hành độg và props
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id)); 
        },

        onDeleteTask: (id) => {  //onDeleteTask là tự đặt
            dispatch(actions.deleteTask(id));
        },

        onCloseForm: () => {
            dispatch(actions.closeForm())
        },

        onOpenForm: () => {
            dispatch(actions.openForm())
        },

        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
