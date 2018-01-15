import React, { Component } from 'react';
import './App.css';
class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			products: [
				{
					id: 1,
					name: "Name 1",
					price: 111111,
					image: "http://pakvistatech.com/img/tech/nodejs.png",
					status: true
				},
				{
					id: 2,
					name: "Name 2",
					price: 2222222,
					image: "http://takeupskills.com/wp-content/uploads/2017/02/ReactJS.png",
					status: true
				},
				{
					id: 3,
					name: "Name 3",
					price: 333333,
					image: "https://secure.gravatar.com/avatar/55e6d6691bd939bcd5d735f9aaf47630?d=https://www.gamedev.net/uploads/monthly_2017_08/M.png.dee20e8eb1c60318f45411505f7fb6dc.png",
					status: false
				}
			],
			isActive: true
		};
		//cách 1 thêm đoạn code này
		//this.onSetState = this.onSetState.bind(this);
	}
	//cách 2 sử dụng arrow function(code thay đổi trạng thái(setState))
	onSetState = () =>{
		//=====CÁCH 1======
		// if (this.state.isActive){
		// 	this.setState({
		// 		isActive: false
		// 	});
		// }else{
		// 	this.setState({
		// 		isActive: true
		// 	});
		// }
		//=====Cách 2======
		this.setState({
			isActive: !this.state.isActive
		});
	}
	render() {
		//gọi state
		let elements = this.state.products.map((product, index) => {
			let result = '';
			if (product.status && this.state.isActive === true) {
				result = <tr key={ index }>
								<td>{ index }</td> 
								<td>{ product.name }</td>
								<td>
									<span className="label label-success">{ product.price }</span>
								</td>
						 </tr>
			}
			return result;
		});
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<a className="navbar-brand" >State</a>
				</nav>
				<div className="container">
					<div className="row">
					<div className="row">
						<table className="table table-hover table-bordered">
							<thead>
								<tr>
									<th>Index</th>
									<th>Name</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								{elements}
							</tbody>
						</table>
		
						<button type="button" className="btn btn-success" onClick = {this.onSetState}>
							Active : {this.state.isActive === true ? 'True' : 'False'}
						</button>
						
					</div>
				</div>
				</div>
			</div>




		);
	}
}

export default App;
