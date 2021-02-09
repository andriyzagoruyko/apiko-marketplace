import { getRoot, types } from 'mobx-state-tree';
import Api from '../../api';
import { asyncModel } from '../utils';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(loginFlow),
    register: asyncModel(registerFlow),
    saveAccount: asyncModel(saveAccountFlow),
    isLoggedIn: false,
  })
  .actions((store) => ({
    setIsLoggedIn(value = true) {
      store.isLoggedIn = value;
    },
    logout() {
      Api.Auth.logout();
      store.setIsLoggedIn(false);
      getRoot(store).viewer.setViewer();
    },
  }));

function loginFlow({ password, email }) {
  return async (flow) => {
    const res = await Api.Auth.login({ email, password });
    const store = getRoot(flow);

    store.viewer.setViewer(res.data.user);
    store.auth.setIsLoggedIn();
    Api.Auth.setToken(res.data.token);
  };
}

function registerFlow({ fullName, email, password }) {
  return async (flow) => {
    const res = await Api.Auth.register({
      fullName,
      email,
      password,
    });
    const store = getRoot(flow);

    store.viewer.setViewer(res.data.user);
    store.auth.setIsLoggedIn();
    Api.Auth.setToken(res.data.token);
  };
}

function saveAccountFlow({
  fullName,
  phone,
  location,
  avatar = null,
}) {
  return async (flow, store, Root) => {
    const res = await Api.User.save({
      fullName,
      phone,
      location,
      avatar,
    });

    Root.viewer.setViewer(res.data);
    Root.entities.users.add(res.data.id, res.data);
  };
}
