import axios from 'axios';
import config from '../config';

export default (state, data) => {
  if (!state.auth.token) {
    throw new Error('not authorized');
  }
  data.headers = {'Authorization': 'Bearer ' + state.auth.token},
  data.url = 'http://' + config.serverHost + ':' + config.serverPort + '/' + data.path;
  return axios(data);
}