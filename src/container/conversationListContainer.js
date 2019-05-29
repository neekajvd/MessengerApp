import { connect } from 'react-redux'
import ConversationList from '../component/ConversationList'


const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
  })

const mapStateToProps = state =>{
  console.log(state)
  return {
    conversationList : state.conversationList
  }
}

const ConversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList)

export default ConversationListContainer