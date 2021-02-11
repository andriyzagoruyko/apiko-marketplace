import { types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';
import Api from '../../api';
import { Product } from '../schemas';

export const SearchProductsStore = types
  .model('SearchProductsStore', {
    items: types.array(types.reference(ProductModel)),
    fetch: asyncModel(fetchLatest),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
  }));

function fetchLatest({ keyword, location }) {
  return async (flow, store) => {
    const res = await Api.Products.getSearch({ keyword, location });
    const result = flow.merge(res.data, [Product]);

    store.setItems(result);
  };
}
