import React from 'react';
import chat from '../images/chat.png';
import validate from '../validation/validateFunction.js';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom'
import { withRouter } from "react-router";

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

			var emailError = validate('email',this.state.Email)
			var passwordError = validate('password',this.state.Password)

			let data = {
				email: this.state.Email,
				password: this.state.Password
			}

			if(emailError || passwordError) {
				this.setState({error: 'something went wrong'})
			}
			else{

				axios.post('https://api.paywith.click/auth/signin/', data)
				.then( (response) => {
					console.log('response::::',response);
					window.localStorage.setItem('token', response.data.data.token)
					window.localStorage.setItem('id', response.data.data.profile.id)
					this.props.history.push('./Massenger')
				})
	
				.catch( (error) => {
				console.log('error::::',error);
			});
		}
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
					<Link
						className='submit-link'
						to='./signup'>
						Create an account
					</Link>
					
				</p>
			</div>
			</div>
		)
	}
}

export default withRouter(Login)