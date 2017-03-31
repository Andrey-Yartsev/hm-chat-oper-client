import socket from './socket';
import fetchInvites from './fetchInvites';

export default (dispatch, success) => {
  let auth = window.localStorage.getItem('auth');
  if (!auth) return;
  auth = JSON.parse(auth);
  if (!auth.token) {
    throw new Error('Storage data format error');
  }
  socket(dispatch, auth.token);
  auth.type = 'SET_AUTH';
  fetchInvites(dispatch, auth.token);
  if (success) success(auth.token);
  dispatch(auth);
};