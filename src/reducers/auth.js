const dummy = (state = {}, action) => {

  switch (action.type) {
    case 'SET_AUTH':
      return Object.assign({}, state, {
        token: action.token
      });
    default:
      return state;
  }

};

export default dummy