import React from 'react'
import ConversationContainer from '../container/ConversationContainer'
import axios from 'axios'
import { saveConversationList } from '../action/conversation'
import search from '../images/search.png'
import {openConversationScreen} from '../action/conversation'


export default class ConversationList extends React.Component{
	constructor (props) {
		super(props)
		this.state = {
			conversationList : [],
			myId: window.localStorage.getItem('id'),
			token: window.localStorage.getItem('token'),
			suggestedUsers : []
			}
			this.handleRequest = this.handleRequest.bind(this)
	  }
	
	componentDidMount() {
		this.handleRequest()
	}

	handleRequest = () => {
		const token = window.localStorage.getItem('token')
		axios.get('https://api.paywith.click/conversation/',{
			params: {
				token : token
					}
				})
		.then(response =>  {
			this.props.dispatch(saveConversationList(response.data.data.conversation_details))
		})
		.catch(error => {
			console.log('error::::',error);
		})
	}

	handleChange(e) {
		
		let fdata = new FormData()
		fdata.append('token',  this.state.token)
		fdata.append('query', e.target.value)
		fdata.append('size', 8)
		axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
		  
		.then((response) => {
			document.getElementById("suggestBox").style.display = "block";
			this.setState({ suggestedUsers: response.data.data.users})
			console.log('response::::',response);
		  })

		.catch((error) => {
			console.log('error::::',error);
		  });
	  }

	openChat(user){

		let fdata = new FormData()
		fdata.append('token',  this.state.token)
		fdata.append('user_id', user.id)
		
		axios.post('https://api.paywith.click/conversation/', fdata)
		  .then((response) => {
			console.log('OpenChatResponse::',response);
			document.getElementById("suggestBox").style.display = "none";
		  })
		  .catch((error) => {
			console.log('error::::',error);
		  });
	}

	render () {
			return (
				<div className='d1'>
				 	<div className="compose">
					 <input 
						className="searchInput" 
						placeholder='Search a usename'
						onChange={ (e)=>{this.handleChange(e)} }
						/>
						<img 
						className="searchIcon" 
						src={search}
						/>
        			</div>
					<div id="suggestBox" className="suggestBox">
						{this.state.suggestedUsers.map((user, index) => {
							return(<p key={index} className="suggestedId" onClick = { ()=>{this.openChat(user)} }>{user.email}</p>)
						})}	
					</div>
				{ this.props.conversationList.map( (conversation, index) => {
					return(
					conversation.users.map((user, idx)=>{
							if(user.id.toString() !== this.state.myId){
									return (
										<ConversationContainer
											key = {index}
											id = {user.id}
											name = {user.email}
											email={user.email}
											date={conversation.latest_message_date.slice(0,10)}
											latestMessage={conversation.latest_message}
											avatar = {user.avatar_url}
											conversationId = {conversation.id}
										/>)
										}
								})
							)
						}
					)
				}

				</div>
			)
	  }
	}
