import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index'
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
    // componentWillMount(){
    //     // nhận từ task trong TaskForm ở App.js
    //     if (this.props.task){
    //         this.setState({
    //             id : this.props.task.id,
    //             name : this.props.task.name,
    //             status : this.props.task.status
    //         });
    //         //console.log(this.state);
    //     }
    // }

    
    componentWillMount() {
        if (this.props.itemEditing && this.props.itemEditing.id != null){
            console.log(this.props.itemEditing);
            
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            });
        }else{
            this.onClear();
        }
    }
    

    // vẫn chạy ngay khi form đã hiển thị 
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps);
    //     ;
        
    //     if (nextProps && nextProps.task){
    //         this.setState({
    //             id: nextProps.task.id,
    //             name: nextProps.task.name,
    //             status: nextProps.task.status
    //         });
    //     }else if (!nextProps.task){
    //         this.setState({
    //             id: '',
    //             name: '',
    //             status: true,
    //         });
    //     }
    // }

    componentWillReceiveProps(nextProps) { 
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            });
        } else {
            this.onClear();
        }
    }

    onCloseForm = () =>{
        // lấy từ <TaskForm onCloseForm =..../>
        // this.props.onCloseForm();
        this.props.onCloseForm(); //lấy từ store
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

    // onSubmit = (event) =>{
    //     //hàm giữ lại biến event không cho load lại trang
    //     event.preventDefault();
    //     // this.props.onSubmit(this.state); do sử dụng redux
    //     this.props.onAddTask(this.state);
    //     //hủy bỏ và close form
    //     this.onClear();
    //     this.onCloseForm(); 
    // }

    onSubmit = (event) => {
        //hàm giữ lại biến event không cho load lại trang
        event.preventDefault();
        // this.props.onSubmit(this.state); do sử dụng redux
        this.props.onSaveTask(this.state);
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
        if (!this.props.isDisplayForm) return null; 
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

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm, // lấy từ isDisplay form trong reducers
        itemEditing : state.itemEditing
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
