import React from 'react';
import HeaderContainer from '../container/HeaderContainer'
import ChatScreenContainer from '../container/ChatScreenContainer'
import FooterContainer from '../container/FooterContainer'

export default class Chat extends React.Component{
	constructor () {
		super()
		this.state = {
		  newMessage: ''
		}
	  }
	getNewMessage (newMessage) {
		console.log('newMessage::', newMessage)
		this.setState({ newMessage })
	  }
	render(){
		return(
				<div className='d2'>

					<HeaderContainer />
					<ChatScreenContainer newMessage={this.state.newMessage}/>
					<FooterContainer getNewMessage={(newMessage) => this.getNewMessage(newMessage)}/>

				</div>
			)
		}
	
	}
