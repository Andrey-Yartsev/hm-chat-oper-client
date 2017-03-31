import tokenRequest from '../../utils/tokenRequest';

export default (success, error) => {
  return (token, isNew) => {
    tokenRequest(token, {
      method: 'get',
      path: 'operator/lines' + (isNew ? '/new' : '')
    }).then((r) => {
      success(r.data);
    });
  };
};