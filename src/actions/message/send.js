import authRequest from '../../utils/authRequest';

export default () => {
  return (state, text) => {
    authRequest(state, {
      method: 'put',
      path: 'operator/lines/123/messages',
      text: text
    }).then((r) => {
      alert('ok');
      //success();
    }).catch((e) => {
      alert('not');
      //error();
      // e.response.status
      // e.response.data.message
    });
  }
};
