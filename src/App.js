import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchSort from './components/SearchSort';
import TaskList from './components/TaskList';
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: [] //id: không trùng
		}
	}
	// được gọi khi component được gắn vào, sẽ được gọi khi refesh
	componentWillMount() {
		if (localStorage && localStorage.getItem('tasks')) {
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks: tasks
			})
		}
		console.log('test willmount');
		
	}

	onGenerateData = () => {
		// sử dụng random string 
		var tasks = [
			{
				id: this.generateID(),
				name: 'NodeJS',
				status: true
			},
			{
				id: this.generateID(),
				name: 'React',
				status: true
			},
			{
				id: this.generateID(),
				name: 'ReactJS',
				status: false
			}
		];
		this.setState({
			tasks: tasks
		});
		//Lưu vào localStorage và chuyển sang kiểu string
		localStorage.setItem('tasks', JSON.stringify(tasks));

	}

	// hàm random chuỗi
	randomstring() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	generateID() {
		// Tạo càng nhiều càng khó trùng
		return this.randomstring() + this.randomstring() + '-' + this.randomstring() + '-' + this.randomstring();
	}

	render() {
		var { tasks } = this.state; // var task = this.state.tasks
		return (
			<div className="container">
				<div className="text-center">
					<h1>Task Manager</h1><hr />
				</div>
				<div className="row">

					<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						{/* Form */}
						<TaskForm />
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

						<button type="button" className="btn btn-primary">
							<span className="fa fa-plus mr-5"></span>Add Task</button>
						<button type="button"
							className="btn btn-success ml-5"
							onClick={this.onGenerateData}>
							<span className="fa fa-plus mr-5"></span>Add Data</button>
						{/* Search and Sort */}

						{/* Search */}
						<SearchSort />
						
						<TaskList tasks={tasks} />
						
					</div>

				</div>
			</div>

		);
	}
}

export default App;
