import { types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';
import Api from '../../api';

export const LatestProductsStore = types
  .model('LatestProductsStore', {
    items: types.array(types.reference(ProductModel)),
    fetch: asyncModel(fetchLatest),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchLatest() {
  return async (flow, store, root) => {
    const res = await Api.Products.getLatest();

    res.data.forEach((item) => {
      root.entities.products.add(item.id, item);
    });

    store.setItems(res.data.map((item) => item.id));
  };
}
