import client from './client';

export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

export const googleLogin = ({ email }) =>
  client.post('/api/auth/googleLogin', { email });

export const register = ({ email, password }) =>
  client.post('/api/auth/register', { email, password });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
