import React, { Component } from 'react';
class TaskForm extends Component {
    onCloseForm = () =>{
        // lấy từ <TaskForm onCloseForm =..../>
        this.props.onCloseForm();
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Add Task
                                      <span 
                                        className="fa - fa-times-circle text-right"
                                        onClick={this.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label >Name :</label>
                            <input type="text"
                                className="form-control"
                                name="name" />
                        </div>
                        <label>Status</label>
                        <select className="form-control"
                            name="status">
                            <option value={true}>Active</option>
                            <option value={false}>Invisible</option>
                        </select><br />
                        <div className="text-center">

                            <button type="button" className="btn btn-success">
                                <span className="fa fa-plus mr-5"></span>Save
										</button>&nbsp;

										<button type="button" className="btn btn-danger">
                                <span className="fa fa-plus mr-5"></span>Cancel
										</button>
                        </div>
                    </form>

                </div>
            </div>


        );
    }
}

export default TaskForm;
