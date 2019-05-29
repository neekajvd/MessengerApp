import React from 'react';
import chat from '../images/chat.png';
import axios from 'axios';

class Signup extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			Email: '',
			Password: '',
			reTypePassword: '',
			error: {
				email: '',
				password: ''
			}
		};
	}
	handleChange(e) {
		var name = e.target.name;
		this.setState({ [name]: e.target.value });
	}

	handleClick() {
		console.log('passs',this.state.Password,this.state.reTypePassword)
		if(this.state.Password === this.state.reTypePassword){
			console.log('in if?',this.state)
			let data = {
				email: this.state.Email,
				password: this.state.Password
				}
			axios.post('https://api.paywith.click/auth/signup/', data)
				.then(function (response) {
					console.log('response:', response);
					window.localStorage.setItem('token', response.data.token);
					window.localStorage.setItem('id', response.data.id);
				})
				.catch(function (error) {
					console.log('error:', error);
				});
			} 
			else{
			this.setState({error:'passwords does not match!'})
			}
	}
	render() {
		return (
		<div className="App">
			<div className="container">
				<img 
				className="chat" 
				src={chat} alt="person" />
				<input 
				name='Email' 
				className="my-input" 
				placeholder='Email' 
				onChange={(e) => this.handleChange(e)} 
				/>
				{this.state.error.email !== null && <p className='errorMsg'>{this.state.error.email}</p>}

				<input 
				name='Password' 
				className="my-input" 
				placeholder='Password' 
				onChange={(e) => this.handleChange(e)} 
				/>
				{this.state.error.password !== null && <p className='errorMsg'>{this.state.error.password}</p>}

				<input 
				name='reTypePassword' 
				className="my-input" 
				placeholder='Re-enter Password' onChange={(e) => this.handleChange(e)} 
				/>
				{this.state.Password !== this.state.reTypePassword && <p className='errorMsg'>Passwords are not match</p>}

				<button 
				className="signUp" 
				onClick={() => this.handleClick()}>
					Sign Up
				</button>
			</div>
		</div>);
	}
}
export default Signup;