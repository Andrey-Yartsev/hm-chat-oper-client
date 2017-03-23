const dummy = (state = {}, action) => {

  switch (action.type) {
    case 'CHANGE_LOGIN':
      return Object.assign({}, state, {
        login: action.login
      });
    case 'CHANGE_PASSWORD':
      return Object.assign({}, state, {
        password: action.password
      });
    default:
      return state;
  }

};

export default dummy