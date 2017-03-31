import tokenRequest from '../utils/tokenRequest';

export default (dispatch, token) => {
  tokenRequest(token, {
    method: 'get',
    path: 'operator/invite'
  }).then((r) => {
    dispatch({
      type: 'SET_INVITES',
      invites: r.data
    });
  });
};
