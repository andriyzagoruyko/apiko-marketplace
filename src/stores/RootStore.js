import { types } from 'mobx-state-tree';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './ViewerStore';
import { LatestProductsStore } from './Products/LatestProductsStore';
import { EntitiesStore } from './EntitiesStore';

export const RootStore = types
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    entities: types.optional(EntitiesStore, {}),
  })
  .actions((store) => ({
    async bootstrap() {
      const token = window.localStorage.getItem('___token');

      if (token) {
        store.viewer.getViewer(token);
      } else {
        store.auth.logout();
      }
    },
  }));
