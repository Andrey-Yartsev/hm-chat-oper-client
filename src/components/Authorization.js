import AuthorizationHoc from './hoc/AuthorizationHoc';
import AuthorizationWeb from './web/AuthorizationWeb';

let Authorization = AuthorizationHoc(AuthorizationWeb);

// -------
import React from 'react';
import {connect} from 'react-redux';
Authorization.contextTypes = {
  store: React.PropTypes.object
};
const mapStateToProps = state => (state);
Authorization = connect(
  mapStateToProps
)(Authorization);
// -------

export default Authorization;