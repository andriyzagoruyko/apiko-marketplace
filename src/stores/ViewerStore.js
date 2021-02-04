import { types } from 'mobx-state-tree';
import { UserModel } from './UserModel';
import Api from '../api';

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(UserModel),
    isLoading: false,
  })
  .actions((store) => ({
    async getViewer(token) {
      Api.Auth.setToken(token);
      try {
        store.setLoading(true);
        const res = await Api.User.getAccount();
        store.setViewer(res.data);
      } catch (e) {
        Api.Auth.setToken(null);
      } finally {
        store.setLoading(false);
      }
    },
    setViewer(user) {
      store.user = user;
    },
    setLoading(bool) {
      store.isLoading = bool;
    },
  }));
