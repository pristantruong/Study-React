import React, { Component } from 'react';
class TaskForm extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: '',
            //name phải trùng với input
            name: '',
            status: true,
        }
    }
    //khi form hiển thị life cycle sẽ được gọi
    componentWillMount(){
        // nhận từ task trong TaskForm ở App.js
        if (this.props.task){
            this.setState({
                id : this.props.task.id,
                name : this.props.task.name,
                status : this.props.task.status
            });
            //console.log(this.state);
        }
    }

    // vẫn chạy ngay khi form đã hiển thị 
    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        }else if (!nextProps.task){
            this.setState({
                id: '',
                name: '',
                status: true,
            });
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
        //hủy bỏ và close form
        this.onClear();
        this.onCloseForm(); 
    }

    onClear = () =>{
        // setState về giá trị ban đầu
        this.setState({
            name: '',
            status: true
        })
    }
    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id !== '' ? 'Edit Task' : 'Add Task' }
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
                            <button 
                                type="button"   
                                className="btn btn-danger" 
                                onClick={this.onClear}>
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
