import config from '../config';
import fetchInvites from './fetchInvites';
import initLines from './lines/init';
import newMessage from './message/newMessage';

export default (store, operToken) => {
    const socket = require('socket.io-client')('http://' + config.serverHost + ':' + config.socketPort);
    const dispatch = store.dispatch;
    socket.on('connect', function () {
        socket.emit('operConnect', {
            token: operToken
        });
    });
    socket.on('newMessage', function (message) {
        newMessage(operToken, store.getState(), dispatch, message);
    });
    socket.on('lineDropped', function (r) {
        initLines(operToken, dispatch);
    });
    socket.on('linePicked', function (r) {
        initLines(operToken, dispatch);
    });
    socket.on('linesChanged', function (r) {
        initLines(operToken, dispatch);
    });
    socket.on('newInvite', function (r) {
        fetchInvites(dispatch, operToken);
        const notification = new Notification('Новое приглашение в чат', {
                body: 'Нажмите, что бы открыть',
                icon: '/icon.png'
            }
        );
        notification.onclick = () => {
            window.location = '/';
            notification.close();
        }

    });
    socket.on('disconnect', function () {
        console.log('disconnect');
    });
};