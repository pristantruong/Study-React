import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import NavBar from './components/NavBar';
class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color: 'red',
			fontSize: 12
		};
		//this.onSetColor = this.onSetColor.bind(this);
	}

	onSetColor = (params) =>{
		this.setState({
			color: params
		})
	}

	onChangeSize = (value) =>{
		//console.log(value);
		// 8 <= size <= 36
		if (this.state.fontSize + value >= 8 && this.state.fontSize + value <=36){
			this.setState({
				fontSize : this.state.fontSize + value // +2 -2
			})
		}else{
			this.setState({
				fontSize: this.state.fontSize
			})
		}
		// có thể viết gọn hơn theo toán tử 3 ngôi
		// this.setState({
		// 	fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize
		// })
	}

	onSettingDefault = (value) =>{
		if (value){
			this.setState({
				color: 'red',
				fontSize: 12
			})
		}
		
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<div className="row">
						{/* color từ state khai báo phía trên */}
						<ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<SizeSetting 
								fontSize = {this.state.fontSize}
								onChangeSize = {this.onChangeSize}
							/>
							<Reset onSettingDefault={this.onSettingDefault}/>
						</div>
						<Result color={this.state.color} fontSize={this.state.fontSize}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
