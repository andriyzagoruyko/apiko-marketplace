import { types, getRoot } from 'mobx-state-tree';
import { UserModel } from './UserModel';
import Api from '../api';

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(UserModel),
    isLoading: false,
  })
  .actions((store) => ({
    async getViewer(token) {
      try {
        Api.Auth.setToken(token);
        store.setLoading(true);
        const res = await Api.User.getAccount();
        store.setViewer(res.data);
      } catch (e) {
        getRoot(store).auth.logout(undefined);
      }

      store.setLoading(false);
    },
    setViewer(user) {
      store.user = user;
    },
    setLoading(bool) {
      store.isLoading = bool;
    },
  }));
