export default (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch({
    type: 'LOGOUT'
  });
};
