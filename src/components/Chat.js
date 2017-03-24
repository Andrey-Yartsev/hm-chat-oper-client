import ChatHoc from './hoc/ChatHoc';
import ChatWeb from './web/ChatWeb';
import reduxConnect from '../utils/reduxConnect';

export default reduxConnect(ChatHoc(ChatWeb));