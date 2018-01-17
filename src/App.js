import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchSort from './components/SearchSort';
import TaskList from './components/TaskList';
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			isDisplayForm: false, //id: không trùng
			taskEditing: null,
			filter: {
				name: '',
				status: -1
			},
			keyword: '',
		}
	}
	// chỉ gọi 1 lần 
	componentWillMount() {
		if (localStorage && localStorage.getItem('tasks')) {
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks: tasks
			})
		}
	}

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

	// hàm random chuỗi
	randomstring() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	generateID() {
		// Tạo càng nhiều càng khó trùng
		return this.randomstring() + this.randomstring() + '-' + this.randomstring() + '-' + this.randomstring();
	}

	// Hiện form và xử lý thêm task
	onToggleForm = () => {
		if (this.state.isDisplayForm && this.state.taskEditing !== null) {
			this.setState({
				isDisplayForm: true,
				taskEditing: null
			})
		} else {
			this.setState({
				isDisplayForm: !this.state.isDisplayForm,
				taskEditing: null
			})
		}
	}

	onShowForm = () => {
		this.setState({
			isDisplayForm: true
		})
	}

	onCloseForm = () => {
		this.setState({
			isDisplayForm: false
		})
	}

	//nhận lại state từ TaskForm truyền ra (biến data tự đặt)
	onSubmit = (data) => {
		//lấy ds các tasks ở trong state phần constructor
		var { tasks } = this.state;
		//kiểm tra edit hay add
		if (data.id === '') {
			data.id = this.generateID();
			// lấy giá trị nhận được từ TaskForm gán vào task để hiển thị ở table
			tasks.push(data);
		} else {
			var index = this.findIndex(data.id);
			tasks[index] = data;
		}

		this.setState({
			tasks: tasks,
			taskEditing: null
		});
		//Lưu vào localStorage có key đã lưu trước đó
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}
	//nhận từ TaskList -> TaskItem
	onUpdateStatus = (id) => {
		var { tasks } = this.state;
		var index = this.findIndex(id);
		console.log(index);
		if (index !== -1) {
			tasks[index].status = !tasks[index].status;
			this.setState({
				tasks: tasks
			});
			localStorage.setItem('tasks', JSON.stringify(tasks))
		}

	}
	//kiểm tra id có trùng với đt nhận đc k
	findIndex = (id) => {
		var { tasks } = this.state;
		var result = -1;
		tasks.forEach((task, index) => {
			if (task.id === id)
				result = index;
		});
		return result;
	}

	//id do taskitem truyền cho tasklist và tasklist truyền ra app.js
	onDelete = (id) => {
		var { tasks } = this.state;
		var index = this.findIndex(id);
		if (index !== -1) {
			tasks.splice(index, 1);
			this.setState({
				tasks: tasks
			});
			localStorage.setItem('tasks', JSON.stringify(tasks))
		}
		this.onCloseForm();
	}

	onUpdate = (id) => {
		var { tasks } = this.state;
		var index = this.findIndex(id);
		var taskEditing = tasks[index];
		this.setState({
			//taskEditing đầu là taskEditing được khai báo trong state
			//taskEditing thứ 2 là taskEditing mới vừa tạo trong onUpdate 
			taskEditing: taskEditing,
		})
		this.onShowForm();
	}

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
	render() {
		//khai báo theo kiểu es6
		var { tasks, isDisplayForm, taskEditing, filter, keyword } = this.state; // var task = this.state.tasks
		//Filter
		if (filter) {
			//filter name
			if (filter.name) {
				tasks = tasks.filter((task) => {
					return task.name.toLowerCase().indexOf(filter.name) !== -1;
				});
			}
			//filter status
			tasks = tasks.filter((task) => {
				if (filter.status === -1) {
					return task;
				} else {
					return task.status === (filter.status === 1 ? true : false)
				}
			});
		}
		//search with keyword
		if (keyword) {
			tasks = tasks.filter((task) => {
				return task.name.toLowerCase().indexOf(keyword) !== -1;
			});
		}
		var elmTaskForm = isDisplayForm
			? <TaskForm
				onSubmit={this.onSubmit}
				onCloseForm={this.onCloseForm}
				task={taskEditing} />
			: '';
		return (
			<div className="container">
				<div className="text-center">
					<h1>Task Manager</h1><hr />
				</div>
				<div className="row">

					<div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
						{/* Form */}
						{elmTaskForm}
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
						<SearchSort onSearch={this.onSearch} />
						{/* truyền props vào TaskList hứng lại function từ con truyền ra cha*/}
						<TaskList
							tasks={tasks}
							onUpdateStatus={this.onUpdateStatus}
							onDelete={this.onDelete}
							onUpdate={this.onUpdate}
							onFilter={this.onFilter}
						/>

					</div>

				</div>
			</div>

		);
	}
}

export default App;
