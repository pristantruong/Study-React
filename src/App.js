import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  	var a = 106;
  	var b = 1996;
  	var name = 'sang';
  	//Object
  	var product = {
  		id : 1, 
  		name : 'Iphone X',
  		price : '$1500'
  	}
    return (
 		<div>
 			<nav className="navbar navbar-inverse">
 				<div className="container-fluid">
 					<a className="navbar-brand" href="#">Title</a>
 					<ul className="nav navbar-nav">
 						<li className="active">
 							<a href="#">Home</a>
 						</li>
 						<li>
 							<a href="#">Link</a>
 						</li>
 					</ul>
 				</div>
 			</nav>
 			<h2>
 				a: {a} <br/>
 				b: {b} <br/>
 				a + b = {a + b}
 			</h2>
 			<h3>
 				name : {name}
 			</h3>
 			<h3>
 				id : {product.id} <br/>
 				name: {product.name} <br/>
 				price: {product.price}
 			</h3>
 		</div>
    );
  }
}

export default App;
