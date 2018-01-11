import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
