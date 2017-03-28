const dummy = (state = {}, action) => {

  switch (action.type) {
    case 'SET_AUTH':
      delete action.type;
      return Object.assign({}, state, action);
    case 'LOGOUT':
      let _state = Object.assign({}, state);
      delete _state.token;
      return _state;
    default:
      return state;
  }

};

export default dummy