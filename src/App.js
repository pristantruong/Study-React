import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchSort from './components/TaskSearchSort';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
	onToggleForm = () => {
		var { itemEditing } = this.props;
		if (itemEditing && itemEditing.id !==  '') {
			this.props.onOpenForm(); //gọi từ mapDispatchToProps 
		} else {
			this.props.onToggleForm();
		}
		this.props.onClearTask({
			id: '',
			name: '',
			status: true
		});
	}
	render() {
		var { isDisplayForm } = this.props; //do state đã chuyển thành props lấy đc từ mapStateToProps
		return (
			<div className="container">
				<div className="text-center">
					<h1>Task Manager</h1><hr />
				</div>
				<div className="row">

					<div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
						{/* Form */}
						<TaskForm/>
					</div>
					<div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

						<button
							type="button"
							className="btn btn-primary"
							onClick={this.onToggleForm}>
							<span className="fa fa-plus mr-5"></span>Add Task</button>
						{/* Search */}
						<SearchSort/>
						<TaskList/>
					</div>
				</div>
			</div>
		);
	}
}
// tạo kết nối để lấy state từ store về biến state đc khai báo lấy từ store
const mapStateToProps = state => {
	return {
		isDisplayForm: state.isDisplayForm,
		itemEditing: state.itemEditing
	};
};

const mapDispatchToProps = (dispatch, props) => { //dispatch giúp thực thi 1 hành độg và props
	return {
		onToggleForm: () => {
			dispatch(actions.toggleForm())
		},
		onClearTask: (task) => {
			dispatch(actions.editTask(task))
		},
		onOpenForm: () => {
			dispatch(actions.openForm())
		},

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
