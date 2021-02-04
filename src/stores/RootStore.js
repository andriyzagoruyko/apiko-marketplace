import { types } from 'mobx-state-tree';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './ViewerStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      // eslint-disable-next-line no-undef
      const token = window.localStorage.getItem('___token');

      if (token) {
        store.viewer.getViewer(token);
      }
    },
  }));
