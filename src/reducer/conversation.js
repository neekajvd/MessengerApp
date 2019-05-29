const INIT = {
  newMessage: '',
  messages: [],
  conversationList: [],
  user: '',
  conversationId:''
}
var myId = window.localStorage.getItem('id')
function conversation(state = INIT, action) {
  switch(action.type) {
    case 'SAVE_NEW_MESSAGE':
      return {
        ...state, 
        newMessage: action.payload ,
        messages:
        [...state.messages,
          {
            sender: {
              id: myId
            },
            text: action.payload
          }
        ]
      }
    case 'SAVE_CONVERSATION_LIST':
      return{
        ...state,
        conversationList: action.payload
      }
    case 'OPEN_CONVERSATION':
      return{
        ...state,
        user: action.user,
        messages: action.payload,
        avatar: action.avatar,
        conversationId: action.conversationId
      }
    default:
      return state
  }

}

export default conversation