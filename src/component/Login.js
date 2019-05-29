import React from 'react';
import chat from '../images/chat.png';
//import validate from '../validation/validateFunction.js';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'

class Login extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			
			Email:'',
			Password:'',
			clicked:false,
			error: {
				email : null,
				password : null
				}

			}
		
		}
		
	handleChange(e){

		var name = e.target.name
		this.setState({[name] : e.target.value})
		
		}

		handleClick () {

			console.log('states:::', this.state)
			let data = {
				email: this.state.Email,
				password: this.state.Password
			}
			var headers = {
				'Content-Type': 'application/json',
			}
			axios.post('https://api.paywith.click/auth/signin/', data)
			.then(function (response) {
				console.log('response::::',response);
				window.localStorage.setItem('token', response.data.data.token)
				window.localStorage.setItem('id', response.data.data.profile.id)
			})
			.catch(function (error) {
				console.log('error::::',error);
			});
		}
		
	render(){
	return (
    <div className="App">
		<div className="container">
			<img className="chat" src={chat} alt="person"/>
			<input 
			name='Email' 
			className="my-input" 
			placeholder='Email' 
			onChange={(e) => this.handleChange(e)}
			/>
			{this.state.error.email !== null && <p className='errorMsg'>{this.state.error.email}</p>}
			<input 
			name='Password'
			type = 'password'  
			className="my-input" 
			placeholder='Password' 
			onChange={(e) => this.handleChange(e)}
			/>
			{this.state.error.password !== null && <p className='errorMsg'>{this.state.error.password}</p>}
			<button
			name='submit' 
			className="submit"
			onClick={() => this.handleClick()}>
				Login
			</button>
			
			<p className="pLink">Not registered? 
				<a href="./SignUp">Create an account</a> 
			</p>
		</div>
    </div>
	);
	}
}

export default Login;