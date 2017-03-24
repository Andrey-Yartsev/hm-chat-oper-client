import authRequest from '../../utils/authRequest';

export default (success, error) => {
  return (state, lineId) => {
    authRequest(state, {
      method: 'get',
      path: 'operator/lines/' + lineId + '/messages'
    }).then((r) => {
      success(r.data);
    }).catch((e) => {
      if (e.response.status === 404) {
        error('Что-то не так');
      } else {
        error(e.response.data.message);
      }
    });
  };
};