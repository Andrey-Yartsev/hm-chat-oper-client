import axios from 'axios';
import config from '../config';

export default (data) => {
  data.url = 'http://' + config.serverHost + ':' + config.serverPort + '/' + data.path;
  return axios(data);
}