import authRequest from '../../utils/authRequest';

export default (state, dispatch, lineId, operatorId) => {
  if (!operatorId) throw new Error('operatorId not defined');
  authRequest(state, {
    method: 'post',
    path: 'operator/lines/' + lineId + '/invite',
    data: {
      operatorId
    }
  }).then((r) => {
//
  });
};