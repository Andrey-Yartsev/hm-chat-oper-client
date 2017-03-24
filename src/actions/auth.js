export default (dispatch) => {
  const token = window.localStorage.getItem('token');
  dispatch({
    type: 'SET_AUTH',
    token: token
  });
};