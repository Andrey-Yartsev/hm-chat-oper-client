import {combineReducers} from 'redux';
import auth from './auth';
import messages from './messages';
import lines from './lines';
import invites from './invites';
import chat from './chat';

export default combineReducers({
    auth,
    messages,
    lines,
    invites,
    chat
})