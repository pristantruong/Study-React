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
			isDisplayForm: false //id: không trùng
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

	onToggleForm = () =>{
		this.setState({
			isDisplayForm : !this.state.isDisplayForm
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
		var {tasks} = this.state;
		data.id = this.generateID();
		// lấy giá trị nhận được từ TaskForm gán vào task để hiển thị ở table
		tasks.push(data);
		this.setState({
			tasks: tasks
		});
		//Lưu vào localStorage có key đã lưu trước đó
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}
	//nhận từ TaskList -> TaskItem
	onUpdateStatus = (id) =>{
		var {tasks} = this.state;
		var index = this.findIndex(id);
		console.log(index);
		if (index !== -1){
			tasks[index].status = !tasks[index].status; 
			this.setState({
				tasks : tasks
			});
			localStorage.setItem('tasks', JSON.stringify(tasks))
		}
		
	}
	//kiểm tra id có trùng với đt nhận đc k
	findIndex = (id) => {
		var {tasks} = this.state;
		var result = -1; 
		tasks.forEach((task, index) => {
			if (task.id === id)
				result = index;
		});
		return result;
	}

	//id do taskitem truyền cho tasklist và tasklist truyền ra app.js
	onDelete = (id) =>{
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
	render() {
		var { tasks, isDisplayForm } = this.state; // var task = this.state.tasks
		var elmTaskForm = isDisplayForm 
			? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> 
			: '';
		return (
			<div className="container">
				<div className="text-center">
					<h1>Task Manager</h1><hr />
				</div>
				<div className="row">

					<div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
						{/* Form */}
						{ elmTaskForm }
					</div>
					<div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

						<button 
							type="button" 
							className="btn btn-primary"
							onClick = {this.onToggleForm}>
							<span className="fa fa-plus mr-5"></span>Add Task</button>
						{/* <button type="button"
							className="btn btn-success ml-5"
							onClick={this.onGenerateData}>
							<span className="fa fa-plus mr-5"></span>Add Data</button> */}
						{/* Search and Sort */}

						{/* Search */}
						<SearchSort />
						{/* truyền props vào TaskList hứng lại function từ con truyền ra cha*/}
						<TaskList 
							tasks={tasks} 
							onUpdateStatus={this.onUpdateStatus}
							onDelete={this.onDelete}
						/>
						
					</div>

				</div>
			</div>

		);
	}
}

export default App;
