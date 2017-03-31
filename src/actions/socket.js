import config from '../config';
import fetchInvites from './fetchInvites';
import initLines from './lines/init';

export default (dispatch, operToken) => {
  const socket = require('socket.io-client')('http://' + config.serverHost + ':' + config.socketPort);
  socket.on('connect', function () {
    console.log('socket connected');
    console.log('emit operConnect ' + operToken);
    socket.emit('operConnect', {
      token: operToken
    });
  });
  socket.on('newMessage', function (message) {
    dispatch({
      type: 'NEW_MESSAGE',
      message
    });
    dispatch({
      type: 'ADD_LINE_NEW_MESSAGES_COUNT',
      lineId: message.line
    });
  });
  socket.on('lineDropped', function (r) {
    initLines(operToken, dispatch);
  });
  socket.on('linePicked', function (r) {
    initLines(operToken, dispatch);
  });
  socket.on('newInvite', function (r) {
    fetchInvites(dispatch, operToken);
  });
  socket.on('disconnect', function () {
    console.log('disconnect');
  });
};