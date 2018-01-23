import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchSort from './components/TaskSearchSort';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// tasks: [], k cần sử dụng do đã dùng redux
			// isDisplayForm: false, //id: không trùng (do dùng redux)
			// taskEditing: null, do sử dụng redux
			filter: {
				name: '',
				status: -1
			},
			keyword: '',
			sortBy: 'name',
			sortValue: 1
		}
	}
	// chỉ gọi 1 lần, không cần sử dụng do đã gọi redux 
	// componentWillMount() {
	// 	if (localStorage && localStorage.getItem('tasks')) {
	// 		var tasks = JSON.parse(localStorage.getItem('tasks'));
	// 		this.setState({
	// 			tasks: tasks
	// 		})
	// 	}
	// }

	// onGenerateData = () => {
	// 	// sử dụng random string 
	// 	var tasks = [
	// 		{
	// 			id: this.generateID(),
	// 			name: 'NodeJS',
	// 			status: true
	// 		},
	// 		{
	// 			id: this.generateID(),
	// 			name: 'React',
	// 			status: true
	// 		},
	// 		{
	// 			id: this.generateID(),
	// 			name: 'ReactJS',
	// 			status: false
	// 		}
	// 	];
	// 	this.setState({
	// 		tasks: tasks
	// 	});
	// 	//Lưu vào localStorage và chuyển sang kiểu string
	// 	localStorage.setItem('tasks', JSON.stringify(tasks));

	// }

	// // hàm random chuỗi -- do sử dụng redux
	// randomstring() {
	// 	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	// }

	// generateID() {
	// 	// Tạo càng nhiều càng khó trùng
	// 	return this.randomstring() + this.randomstring() + '-' + this.randomstring() + '-' + this.randomstring();
	// }

	// Hiện form và xử lý thêm task
	onToggleForm = () => {
		// if (this.state.isDisplayForm && this.state.taskEditing !== null) {
		// 	this.setState({
		// 		isDisplayForm: true,
		// 		taskEditing: null
		// 	})
		// } else {
		// 	this.setState({
		// 		isDisplayForm: !this.state.isDisplayForm,
		// 		taskEditing: null
		// 	})
		// }
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

	onShowForm = () => {
		this.setState({
			isDisplayForm: true
		})
	}

	// onCloseForm = () => { //do sủ dụng redux
	// 	this.setState({
	// 		isDisplayForm: false
	// 	})
	// }

	//nhận lại state từ TaskForm truyền ra (biến data tự đặt)
	// onSubmit = (data) => {
	// 	//lấy ds các tasks ở trong state phần constructor
	// 	var { tasks } = this.state;
	// 	//kiểm tra edit hay add
	// 	if (data.id === '') {
	// 		data.id = this.generateID();
	// 		// lấy giá trị nhận được từ TaskForm gán vào task để hiển thị ở table
	// 		tasks.push(data);
	// 	} else {
	// 		var index = this.findIndex(data.id);
	// 		tasks[index] = data;
	// 	}

	// 	this.setState({
	// 		tasks: tasks,
	// 		taskEditing: null
	// 	});
	// 	//Lưu vào localStorage có key đã lưu trước đó
	// 	localStorage.setItem('tasks', JSON.stringify(tasks))
	// }

	//nhận từ TaskList -> TaskItem
	// onUpdateStatus = (id) => {
	// 	var { tasks } = this.state;
	// 	var index = this.findIndex(id);
	// 	if (index !== -1) {
	// 		tasks[index].status = !tasks[index].status;
	// 		this.setState({
	// 			tasks: tasks
	// 		});
	// 		localStorage.setItem('tasks', JSON.stringify(tasks))
	// 	}
	// }

	//kiểm tra id có trùng với đt nhận đc k
	// findIndex = (id) => { //do sử dụng redux
	// 	var { tasks } = this.state;
	// 	var result = -1;
	// 	tasks.forEach((task, index) => {
	// 		if (task.id === id)
	// 			result = index;
	// 	});
	// 	return result;
	// }

	//id do taskitem truyền cho tasklist và tasklist truyền ra app.js
	// onDelete = (id) => { //do sử dụng redux
	// 	var { tasks } = this.state;
	// 	var index = this.findIndex(id);
	// 	if (index !== -1) {
	// 		tasks.splice(index, 1);
	// 		this.setState({
	// 			tasks: tasks
	// 		});
	// 		localStorage.setItem('tasks', JSON.stringify(tasks))
	// 	}
	// 	this.onCloseForm();
	// }

	// onUpdate = (id) => {
	// 	var { tasks } = this.state;
	// 	var index = this.findIndex(id);
	// 	var taskEditing = tasks[index];
	// 	this.setState({
	// 		//taskEditing đầu là taskEditing được khai báo trong state
	// 		//taskEditing thứ 2 là taskEditing mới vừa tạo trong onUpdate 
	// 		taskEditing: taskEditing,
	// 	})
	// 	this.onShowForm();
	// }

	onFilter = (filterName, filterStatus) => {
		//ép sang kiểu int
		filterStatus = parseInt(filterStatus, 10);
		this.setState({
			filter: {
				name: filterName.toLowerCase(),
				status: filterStatus,
			}
		})
	}

	onSearch = (keyword) => {
		this.setState({
			keyword: keyword
		})
	}

	onSort = (sortBy, sortValue) => {
		var { tasks } = this.state;
		this.setState({
			sort: {
				sortBy: sortBy,
				sortValue: sortValue
			}
		})
		if (sortBy) {
			tasks.sort((a, b) => {
				if (a.name > b.name) return sortValue;
				else if (a.name < b.name) return -sortValue;
				else return 0;
			})
		} else {
			tasks.sort((a, b) => {
				if (a.status > b.status) return -sortValue;
				else if (a.status < b.status) return sortValue;
				else return 0;
			})
		}

	}
	render() {
		//khai báo theo kiểu es6
		// var {
		// tasks, (do đã dùng redux)
		// isDisplayForm, (do đã dùng redux)
		// taskEditing, do đã sử dụng redux
		// filter, (do đã dùng redux)
		// keyword, (do đã dùng redux)
		//  } = this.state; // var task = this.state.tasks
		//Filter (do đã dùng redux)
		// if (filter) {
		// 	//filter name
		// 	if (filter.name) {
		// 		tasks = tasks.filter((task) => {
		// 			return task.name.toLowerCase().indexOf(filter.name) !== -1;
		// 		});
		// 	}
		// 	//filter status
		// 	tasks = tasks.filter((task) => {
		// 		if (filter.status === -1) {
		// 			return task;
		// 		} else {
		// 			return task.status === (filter.status === 1 ? true : false)
		// 		}
		// 	});
		// }
		//search with keyword (do đã dùng redux)
		// if (keyword) {
		// 	tasks = tasks.filter((task) => {
		// 		return task.name.toLowerCase().indexOf(keyword) !== -1;
		// 	});
		// }
		// //console.log(sortBy, "test", sortValue);

		var { isDisplayForm } = this.props; //do state đã chuyển thành props lấy đc từ mapStateToProps

		// var elmTaskForm = isDisplayForm // do sử dụng redux
		// 	? <TaskForm
		// 		// onSubmit={this.onSubmit} do sử dụng redux
		// 		// onCloseForm={this.onCloseForm} do sử dụng redux
		// 		task={taskEditing} />
		// 	: '';
		return (
			<div className="container">
				<div className="text-center">
					<h1>Task Manager</h1><hr />
				</div>
				<div className="row">

					<div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
						{/* Form */}
						<TaskForm
						// onSubmit={this.onSubmit} do sử dụng redux
						// onCloseForm={this.onCloseForm} do sử dụng redux
						// task={taskEditing} do sử dụng redux
						/>
					</div>
					<div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

						<button
							type="button"
							className="btn btn-primary"
							onClick={this.onToggleForm}>
							<span className="fa fa-plus mr-5"></span>Add Task</button>
						{/* <button type="button"
							className="btn btn-success ml-5"
							onClick={this.onGenerateData}>
							<span className="fa fa-plus mr-5"></span>Add Data</button> */}
						{/* Search and Sort */}

						{/* Search */}
						<SearchSort
							onSearch={this.onSearch}
							onSort={this.onSort}
							sortBy={this.state.sortBy}
							sortValue={this.state.sortValue} />
						{/* truyền props vào TaskList hứng lại function từ con truyền ra cha*/}
						<TaskList
							// onUpdateStatus={this.onUpdateStatus} do sử dụng redux
							// onDelete={this.onDelete} do sử dụng redux
							// onUpdate={this.onUpdate} do sử dụng redux
							onFilter={this.onFilter}
						/>
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
