import React from 'react';
import {connect} from 'react-redux';

export default componentClass => {
  componentClass.contextTypes = {
    store: React.PropTypes.object
  };
  const mapStateToProps = state => (state);
  componentClass = connect(
    mapStateToProps
  )(componentClass);
  return componentClass;
}