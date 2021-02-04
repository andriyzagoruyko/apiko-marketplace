/* eslint-disable no-undef */
import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

export const Auth = {
  _token: null,

  getToken() {
    return this._token;
  },

  setToken(token) {
    this._token = token;
    window.localStorage.setItem('___token', token);
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    return axios.post('/api/auth/login', { email, password });
  },

  logout() {
    this._token = null;
    window.localStorage.removeItem('___token');
    axios.defaults.headers.common.authorization = undefined;
  },

  register({ email, password, fullName }) {
    return axios.post('/api/auth/register', {
      email,
      password,
      fullName,
    });
  },
};

export const User = {
  getAccount() {
    return axios.get('/api/account');
  },
  save({ fullName, phone, location, avatar }) {
    return axios.put('/api/account', {
      fullName,
      phone,
      location,
      avatar,
    });
  },
};
