export default (dispatch) => {
  window.localStorage.removeItem('auth');
  dispatch({
    type: 'LOGOUT'
  });
};
