import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'
class App extends Component {
	render() {
		var products = [
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
		];
		let elements = products.map((product, index) => {
			let result = '';
			if (product.status) {
				result = <Product
					key={product.id}
					price={product.price}
					image={product.image}
				>
					{product.name}
				</Product>
			}
			return result;
		})
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<a className="navbar-brand" >Title</a>
				</nav>
				<div className="container">

					<div className="row">

						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							{elements}
						</div>

					</div>


				</div>
			</div>




		);
	}
}

export default App;
