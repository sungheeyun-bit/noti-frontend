import client from './client';

export const addToAlarm = (body) => client.post('/api/alarm/addToAlarm', body);

export const listAlarms = () => client.get('/api/alarm/listAlarms');

export const removeFormAlarm = (id) =>
  client.delete(`/api/alarm/removeFromAlarm/${id}`);

export const changeFromAlarm = (body) =>
  client.patch('/api/alarm/changeFromAlarm', body);
