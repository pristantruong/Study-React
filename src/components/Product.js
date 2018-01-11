import React, {Component} from 'react';

class Product extends Component{
	render(){
		return(
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div className="thumbnail">
					<img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTun8fbtgKtHvBGLnl5hzXnfPEteX6i6vgM4iNbaj2474PwNulo"/>
					<div className="caption">
						<h3>Iphone X</h3>
						<p>
							30.000.000 VNĐ
						</p>
						<p>
							<a  className="btn btn-primary">Mua hàng</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Product;