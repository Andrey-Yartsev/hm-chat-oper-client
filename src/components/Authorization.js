import AuthorizationHoc from './hoc/AuthorizationHoc';
import AuthorizationWeb from './web/AuthorizationWeb';
import reduxConnect from '../utils/reduxConnect';

let Authorization = reduxConnect(AuthorizationHoc(AuthorizationWeb));
export default Authorization;