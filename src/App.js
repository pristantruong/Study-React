import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// state phải trùng với name trong ô input
			txtUsername: '',
			txtPassword: '',
			txtDesc: '',
			sltGender: 0,
			rdLang: 'en',
			chkbStatus: false
		}
		this.onHanldeChange = this.onHanldeChange.bind(this)
		this.onHanldeSubmit = this.onHanldeSubmit.bind(this)
	}
	//event là biến tự đặt
	onHanldeChange(event) {
		var target = event.target;
		var name = target.name;
		// xử lý lấy giá trị các ô input 
		// ==> var value = target.value;
		// xử lý lấy giá trị ô checkbox khác với những giá trị còn lại
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	}

	onHanldeSubmit(event) {
		// chặn sự kiện submit load lại trang
		event.preventDefault();
		// lấy dữ liệu từ ô input
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<a className="navbar-brand">Form</a>
					<ul className="nav navbar-nav">
						<li className="active">
							<a>Home</a>
						</li>
						<li>
							<a>Link</a>
						</li>
					</ul>
				</nav>

				<div className="container">

					<div className="row">

						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

							<div className="panel panel-primary">
								<div className="panel-heading">
									<h3 className="panel-title">Form</h3>
								</div>
								<div className="panel-body">
									{/* bắt sự kiện cho form */}
									<form onSubmit={this.onHanldeSubmit}>

										<div className="form-group">
											<label>User:</label>
											<input
												type="text"
												className="form-control"
												name="txtUsername"
												// onChange là sự kiện có sẵn
												onChange={this.onHanldeChange}
												value={this.state.txtUsername}
											/>
											<label>Password:</label>
											<input
												type="password"
												className="form-control"
												name="txtPassword"
												// onChange là sự kiện có sẵn
												onChange={this.onHanldeChange}
												value={this.state.txtPassword}
											/>

											<label>Mô tả:</label>
											<textarea
												// số hàng hiển thị
												rows="3"
												className="form-control"
												name="txtDesc"
												// onChange là sự kiện có sẵn
												onChange={this.onHanldeChange}
												value={this.state.txtDesc}
											/>

											<label>Gender:</label>
											<select
												name="sltGender"
												className="form-control"
												value={this.state.sltGender}
												onChange={this.onHanldeChange}
											>
												{/* đã set value và onChange trong thẻ select nên k cần selected */}
												<option value={0}>Male</option>
												<option value={1}>Female</option>
											</select>

											<label>Language:</label>
											<div className="radio">
												<label>
													<input type="radio"
														name="rdLang"
														value="en"
														onChange={this.onHanldeChange}
														checked={this.state.rdLang === "en"} />
													English
												</label><br />
												<label>
													<input type="radio"
														name="rdLang"
														value="vi"
														onChange={this.onHanldeChange}
														checked={this.state.rdLang === "vi"} />
													Vietnamese
												</label>
											</div>

											<div className="checkbox">
												<label>
													<input
														type="checkbox"
														value={true}
														name="chkbStatus"
														onChange={this.onHanldeChange}
														checked={this.state.chkbStatus === true} />
													Status
												</label>
											</div>

										</div>
										<button type="submit" className="btn btn-primary">Save</button>&nbsp;
										<button type="reset" className="btn btn-default">Delete</button>
									</form>

								</div>
							</div>

						</div>

					</div>

				</div>
			</div>
		);
	}
}

export default App;
