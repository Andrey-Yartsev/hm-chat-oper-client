import DefaultHoc from './hoc/DefaultHoc';
import WrapperWeb from './web/WrapperWeb';
import LinesBarHoc from './hoc/LinesBarHoc';
import LinesWeb from './web/LinesWeb';
import HomeWeb from './web/HomeWeb';
import reduxConnect from '../utils/reduxConnect';

export default DefaultHoc(
    WrapperWeb,
    reduxConnect(LinesBarHoc(
        WrapperWeb,
        LinesWeb
    )),
    HomeWeb
);