import React, { Component } from 'react';


class Product extends Component {
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
							<p>
								<a className="btn btn-primary">Action</a>
								<a className="btn btn-default">Action</a>
							</p>
						</div>
					</div>
				</div>



			</div>
		);
	}
}

export default Product;
