import React from 'react'
import axios from 'axios'
import {openConversationScreen} from '../action/conversation'

export default class Conversation extends React.Component{
	constructor (props) {
		super(props)
		this.state = {
			token: window.localStorage.getItem('token')
			}
	  }

	startChat() {

		document.getElementById("welcome").style.display= "none";
		let newDate =  Math.ceil(new Date().getTime() / 1000)
		let chatData = new FormData()
		chatData.append('token', this.state.token )
		chatData.append('conversation_id', this.props.conversationId)
		chatData.append('size', 10)
		chatData.append('date', newDate)
		axios.post('https://api.paywith.click/conversation/details/', chatData)
		  
		.then((response) => {
			console.log('startChat::',response);
			this.props.dispatch(openConversationScreen(
				this.props.email,
				response.data.data.messages,
				this.props.avatar,
				this.props.conversationId))
		  })

		.catch((error) => {
			console.log('error::::',error);
		  });
	}
	render(){
		return(
				
					<div className='conv' onClick={()=>{this.startChat()}}>
						<div className="profileContainer">
							<img className="Pic" src={this.props.avatar}/>
						</div>
						<div className="contentContainer">
							<div className="info">
								<span>{this.props.email}</span>
								<span className="dateInfo">{this.props.date}</span>
							</div>
						 	<div className="info">
								<span className="lastMsg">{this.props.latestMessage}</span>
								{/* <span>{this.props.unseenMessages}</span> */}
							</div> 
						</div>

					</div>
			
			)
		
		}
	
	}
