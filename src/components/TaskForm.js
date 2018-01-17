import React, { Component } from 'react';
class TaskForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            //name phải trùng với input
            name: '',
            status: true,
        }
    }
    
    onCloseForm = () =>{
        // lấy từ <TaskForm onCloseForm =..../>
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        } 
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) =>{
        //hàm giữ lại biến event không cho load lại trang
        event.preventDefault();
        this.props.onSubmit(this.state);
        
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
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label >Name :</label>
                            <input type="text"
                                className="form-control"
                                //name phải trùng với state
                                name="name" 
                                value={this.state.name}
                                onChange={this.onChange}/>
                        </div>
                        <label>Status</label>
                        <select 
                            className="form-control"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}>
                            <option value={true}>Active</option>
                            <option value={false}>Invisible</option>
                        </select><br />
                        <div className="text-center">
                            {/* button type bằng submit mới hiểu được */}
                            <button type="submit" className="btn btn-success">
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
