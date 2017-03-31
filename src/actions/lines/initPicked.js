import fetchLines from './fetch';

export default (state, dispatch) => {
  fetchLines((lines) => {
    dispatch({
      type: 'SET_LINES',
      lines
    });
  }, (error) => {
    alert(error);
  })(state.auth.token);
};