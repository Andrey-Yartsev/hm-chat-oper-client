import OperatorsHoc from './hoc/OperatorsHoc';
import OperatorsWeb from './web/OperatorsWeb';
import reduxConnect from '../utils/reduxConnect';

export default reduxConnect(OperatorsHoc(OperatorsWeb));