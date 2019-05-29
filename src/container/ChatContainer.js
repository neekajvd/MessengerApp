import { connect } from 'react-redux'
import Chat from '../component/Chat'


const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
  })

const mapStateToProps = state =>{
    return {
      email: state.email,
      messages: state.messages,
      conversationId: state.conversationId
    }
  }
const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  
)(Chat)

export default ChatContainer