import React from 'react';
import Login from './component/Login.js';
import Signup from './component/SignUp.js';
import Massenger from './component/Massenger.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './reducer/conversation'

const store = createStore(conversation)

class App extends React.Component {
	render(){
		return (
			<Provider store = {store}>
				<Router>

					<Route exact path="/" component={Login} />
					<Route path="/SignUp" component={Signup} />
					<Route path="/Massenger" component={Massenger}/>

				</Router>
			</Provider>
		
		)}
		
	
}

export default App;
