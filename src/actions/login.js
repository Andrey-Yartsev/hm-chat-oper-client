import request from '../utils/request';
import fetchInvites from './fetchInvites';

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
                profileId: r.data.profileId,
                login
            }));
            dispatch({
                type: 'SET_AUTH',
                token: r.data.token,
                profileId: r.data.profileId,
                login
            });
            fetchInvites(dispatch, r.data.token);
            if (success) success(r.data.token);
        }).catch((e) => {
            if (e.response && e.response.status === 404) {
                error('Не верный логин или пароль');
            } else {
                error('Проблемы подключения к серверу');
            }
        });
    }
}