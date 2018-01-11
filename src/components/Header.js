import React, { Component } from 'react';

class Header extends Component{
	render(){
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<a className="navbar-brand">Component</a>
						<ul className="nav navbar-nav">
							<li className="active">
								<a>Trang chủ</a>
							</li>
							<li>
								<a>Danh mục sản phẩm</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;