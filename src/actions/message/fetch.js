import authRequest from '../../utils/authRequest';

export default (success, error) => {
  return (dispatch, state, lineId) => {
    authRequest(state, {
      method: 'get',
      path: 'operator/lines/' + lineId + '/messages'
    }).then((r) => {
      dispatch({
        type: 'SET_MESSAGES',
        lineId,
        messages: r.data
      });
      success(r.data);
    });
  };
};