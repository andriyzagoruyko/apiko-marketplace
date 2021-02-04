import { getRoot, types } from 'mobx-state-tree';
import Api from '../../api';
import { asyncModel } from '../utils';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(loginFlow),
    register: asyncModel(registerFlow),
    saveAccount: asyncModel(saveAccountFlow),
  })
  .actions((store) => ({
    logout() {
      Api.Auth.logout();
      getRoot(store).viewer.setViewer(undefined);
    },
  }));

function loginFlow({ password, email }) {
  return async (flow) => {
    const res = await Api.Auth.login({ email, password });
    Api.Auth.setToken(res.data.token);
    getRoot(flow).viewer.setViewer(res.data.user);
  };
}

function registerFlow({ fullName, email, password }) {
  return async (flow) => {
    const res = await Api.Auth.register({
      fullName,
      email,
      password,
    });
    Api.Auth.setToken(res.data.token);
    getRoot(flow).viewer.setViewer(res.data.user);
  };
}
function saveAccountFlow({
  fullName,
  phone,
  location,
  avatar = null,
}) {
  return async (flow) => {
    const res = await Api.User.save({
      fullName,
      phone,
      location,
      avatar,
    });
    getRoot(flow).viewer.setViewer(res.data);
  };
}
