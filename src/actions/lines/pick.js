import authRequest from '../../utils/authRequest';

export default (success, error) => {
  return (state, id) => {
    authRequest(state, {
      method: 'post',
      path: 'operator/lines/' + id + '/pick'
    }).then((r) => {
      success(r.data);
    });
  };
};