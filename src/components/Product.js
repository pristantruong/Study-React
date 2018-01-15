import React, { Component } from 'react';


class Product extends Component {

	constructor(props){
		super(props)
		this.onAddToCart = this.onAddToCart.bind(this)
	}

	onAddToCart(){
		alert(this.props.children);
		console.log(this.props.children);
	}

	onAddToCart2 = () => {
		alert(this.props.children + '-' + this.props.price)
	}

	render() {
		return (

			<div>

				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<div className="thumbnail">
						<img alt={this.props.name} src={this.props.image} />
						<div className="caption">
							<h3>
								{this.props.children}
							</h3>
							<p>
								{this.props.price} VNĐ
							</p>
							{/* Sử dụng constructor */}
							<p>
								<a className="btn btn-primary" onClick={this.onAddToCart} >Action</a>
							{/* Sử dụng arrow function */}
								<a className="btn btn-primary" onClick={this.onAddToCart2} >Action2</a>
							</p>
							
						</div>
					</div>
				</div>



			</div>
		);
	}
}

export default Product;
