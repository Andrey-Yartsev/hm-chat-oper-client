export default (state = {}, action) => {
  let newState, currentMessages;
  switch (action.type) {
    case 'INIT_MESSAGES':
      return Object.assign({}, state, {
        messages: {}
      });
    case 'SET_MESSAGES':
      newState = Object.assign({}, state);
      newState.messages[action.lineId] = action.messages;
      return newState;
    case 'NEW_MESSAGE':
      if (state.lastMessageId &&
        state.lastMessageId === action.message._id) {
        return state;
      }
      newState = Object.assign({}, state);
      if (newState.messages[action.message.line]) {
        currentMessages = newState.messages[action.message.line];
      } else {
        currentMessages = [];
      }
      newState.lastMessageId = action.message._id;
      newState.messages[action.message.line] =
        [action.message].concat(currentMessages);
      return newState;
    default:
      return state;
  }
};