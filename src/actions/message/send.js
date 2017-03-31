import authRequest from '../../utils/authRequest';

export default (success, error) => {
  return (state, lineId, text) => {
    authRequest(state, {
      method: 'put',
      path: 'operator/lines/' + lineId + '/messages',
      data: {
        text
      }
    }).then((r) => {
      success(r);
    }).catch((e) => {
      // error();
    });
  }
};
