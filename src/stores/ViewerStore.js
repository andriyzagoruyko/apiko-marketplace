import { types, getRoot } from 'mobx-state-tree';
import { UserModel } from './Users/UserModel';
import Api from '../api';
import { safeReference } from './utils';

const ViewerModel = UserModel.named('ViewerModel');

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(safeReference(ViewerModel)),
    userModel: types.maybe(ViewerModel),
    isLoading: false,
  })

  .actions((store) => ({
    async getViewer(token) {
      const Root = getRoot(store);

      try {
        Api.Auth.setToken(token);
        store.setLoading(true);

        const res = await Api.User.getAccount();
        store.setViewer(res.data);

        Root.entities.users.add(res.data.id, res.data);
        Root.auth.setIsLoggedIn(true);
      } catch (e) {
        Root.auth.logout();
      }

      store.setLoading(false);
    },
    setViewer(user) {
      store.user = user?.id;
      store.userModel = user;
    },
    setLoading(bool) {
      store.isLoading = bool;
    },
  }));
