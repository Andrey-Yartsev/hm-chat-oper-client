import DefaultHoc from './hoc/DefaultHoc';
import WrapperWeb from './web/WrapperWeb';
import LinesBarHoc from './hoc/LinesBarHoc';
import LinesWeb from './web/LinesWeb';
import ChatHoc from './hoc/ChatHoc';
import reduxConnect from '../utils/reduxConnect';
import ChatWeb from './web/ChatWeb';
import OperatorsPopupWeb from './web/OperatorsPopupWeb';


export default DefaultHoc(
    WrapperWeb,
    reduxConnect(LinesBarHoc(
        WrapperWeb,
        LinesWeb
    )),
    reduxConnect(ChatHoc(WrapperWeb, ChatWeb, OperatorsPopupWeb))
);