import axios from 'axios';
import config from '../config';

export default (token, data) => {
  data.headers = {'Authorization': 'Bearer ' + token};
  data.url = 'http://' + config.serverHost + ':' + config.serverPort + '/' + data.path;
  return axios(data);
}