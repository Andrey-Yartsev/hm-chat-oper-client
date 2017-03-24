import authRequest from '../../utils/authRequest';

export default (success, error) => {
  return (state, id) => {
    authRequest(state, {
      method: 'post',
      path: 'operator/lines/' + id + '/drop'
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