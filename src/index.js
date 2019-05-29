import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

	var name = 'zahra'
	var name2 = 'nika'
	const greeting =
		<div>
		<p>hello {name}</p>
		<p>hello {name2}</p>
		</div>
		


	function Welcome(props){
		console.log('props:::',props)
		return(
			<div>
				<h1>hello {props.firstname} {props.lastname}!</h1>
			</div>
			)
	}
		
	function ParentComponent(){
		
		return(
			<div>
				<Welcome firstname = 'rezvan' lastname = 'habibi' />
			</div>
		
		)
		
		
	}
	
	class ParentClass extends React.Component {
		
		 render(){
			console.log('this::::',this)
			return(
				<div>
					<h1>salam {this.props.name}!</h1>
				</div>
			
			
			)
			
		}
		
	}	
	
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
