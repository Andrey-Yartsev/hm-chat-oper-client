import fetchLines from './fetch';

export default (token, dispatch) => {
  fetchLines((lines) => {
    dispatch({
      type: 'SET_NEW_LINES',
      lines
    });
  }, (error) => {
    alert(error);
  })(token, true);
  fetchLines((lines) => {
    dispatch({
      type: 'SET_LINES',
      lines
    });
  }, (error) => {
    alert(error);
  })(token);
};