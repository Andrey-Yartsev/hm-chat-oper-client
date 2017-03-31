export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_INVITES':
      return Object.assign({}, state, {
        invites: action.invites
      });
    default:
      return state;
  }
};