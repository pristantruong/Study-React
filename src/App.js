import React, { Component } from 'react';
import './App.css';

class App extends Component {
	checkActive(product) {
		if (product.status) {
			return <h3>
				id : {product.id} <br />
				name: {product.name} <br />
				price: {product.price}
				status: {product.status ? "Active" : "NoActive"}
			</h3>
		}
	};

	

	render() {
		var a = 106;
		var b = 1996;
		var name = 'sang';
		//Object
		var product = {
			id: 1,
			name: 'Iphone X',
			price: '$1500',
			status: true
		};

		var users = [
			{
				id: 1,
				name: 'Truong',
				age: 22
			},
			{
				id: 2,
				name: 'Tan',
				age: 22
			},
			{
				id: 3,
				name: 'Sang',
				age: 22
			},
		];
		var elements = users.map((test, index) => {
			return <div key={index}>
					<h2>Tên: {test.name}</h2>
					<p>Tuổi: {test.age}</p>
					</div>
		})
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand">Title</a>
						<ul className="nav navbar-nav">
							<li className="active">
								<a>Home</a>
							</li>
							<li>
								<a>Lisnk</a>
							</li>
						</ul>
					</div>
				</nav>
				<h2>
					a: {a} <br />
					b: {b} <br />
					a + b = {a + b}
				</h2>
				<br/>
				<h3>
					name : {name}
				</h3>
				
					{this.checkActive(product)}
				<hr/>
				{ elements }

			</div>

		);
	}
}

export default App;
