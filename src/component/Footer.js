import React from 'react'
import send from '../images/send.png'
import { addNewMessage } from '../action/conversation'
import axios from 'axios'

export default class Footer extends React.Component {
    constructor() {
      super()
      this.state = {
        newMessage : '',
        token: window.localStorage.getItem('token'),
      }
      this.sendNewMessage = this.sendNewMessage.bind(this)

    }

    onChangeText(e) {
      this.setState({newMessage: e.target.value})
    }

    sendNewMessage(newMessage) {
      console.log('convID:::',this.props.conversationId)
      this.props.dispatch(addNewMessage(this.state.newMessage))
      let fdata = new FormData()
      fdata.append('token', this.state.token)
      fdata.append('conversation_id', this.props.conversationId)
      fdata.append('text', this.state.newMessage )
      
      axios.post('https://api.paywith.click/conversation/create/', fdata)
      
      .then((response) => {
        
        console.log('sendNewMessage::',response);
        this.setState({newMessage:''})
        })
      .catch((error) => {
        console.log('error::::',error);
        });
    }

  render () {
    return (
        <div className='footer'>
          <input
			      className ="chatInput"
            placeholder='write a message...'
            value = {this.state.newMessage}
            onChange = {(e) => this.onChangeText(e)} />
          <img
            className="sendIcon"
            src={send}
            onClick = {(newMessage) => this.sendNewMessage(newMessage) }
            />
        </div>
    )
  }
}