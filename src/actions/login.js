import request from '../utils/request';

export default (success, error) => {
  return (dispatch, login, password) => {
    request({
      method: 'post',
      path: 'operator/authorize',
      data: {
        login: login,
        password: password
      }
    }).then((r) => {
      if (!r.data.token) {
        error('NO_TOKEN');
        return;
      }
      window.localStorage.setItem('auth', JSON.stringify({
        token: r.data.token,
        login
      }));
      dispatch({
        type: 'SET_AUTH',
        token: r.data.token,
        login
      });
      if (success) success(r.data.token);
    }).catch((e) => {
      if (e.response.status === 404) {
        error('Не верный логин или пароль');
      } else {
        error(e.response.data.message);
      }
    });
  }
}