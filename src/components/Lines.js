import LinesHoc from './hoc/LinesHoc';
import LinesWeb from './web/LinesWeb';
import WrapperWeb from './web/WrapperWeb';
import OperatorsPopupWeb from './web/OperatorsPopupWeb';
import reduxConnect from '../utils/reduxConnect';

export default reduxConnect(LinesHoc(
  LinesWeb,
  OperatorsPopupWeb,
  WrapperWeb
));