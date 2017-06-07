import authRequest from '../../utils/authRequest';

export default (success, error) => {
    return (dispatch, state, lineId) => {
        dispatch({
            type: 'UPDATE_CHAT',
            lineId
        });
        authRequest(state, {
            method: 'get',
            path: 'operator/lines/' + lineId + '/messages'
        }).then((r) => {
            dispatch({
                type: 'SET_MESSAGES',
                lineId,
                messages: r.data
            });
            dispatch({
                type: 'CHAT_LOADED'
            });
            success(r.data);
        });
    };
};