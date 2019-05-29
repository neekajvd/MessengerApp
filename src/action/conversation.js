
export const addNewMessage = (newMessage) => (
  {
    type : 'SAVE_NEW_MESSAGE',
    payload: newMessage
  }
)

export const saveConversationList = (conversationList) => (
  {
    type : 'SAVE_CONVERSATION_LIST',
    payload: conversationList
  }
)

export const openConversationScreen = (user,messages,avatar,conversationId) => (
  {
    type: 'OPEN_CONVERSATION',
    user: user,
    payload: messages,
    avatar: avatar,
    conversationId: conversationId
  }
)