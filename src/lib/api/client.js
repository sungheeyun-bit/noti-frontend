import axios from 'axios';

const client = axios.create();

client.defaults.baseURL =
  'https://port-0-noti-backend-1jx7m2gldfqxa36.gksl2.cloudtype.app/';

client.defaults.withCredentials = true;

export default client;
