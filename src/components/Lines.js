import LinesHoc from './hoc/LinesHoc';
import LinesWeb from './web/LinesWeb';
import reduxConnect from '../utils/reduxConnect';

export default reduxConnect(LinesHoc(LinesWeb));