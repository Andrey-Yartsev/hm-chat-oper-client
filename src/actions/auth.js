export default (dispatch) => {
  let auth = window.localStorage.getItem('auth');
  if (!auth) return;
  auth = JSON.parse(auth);
  auth.type = 'SET_AUTH';
  dispatch(auth);
};