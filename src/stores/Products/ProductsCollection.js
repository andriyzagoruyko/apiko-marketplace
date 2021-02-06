import Api from '../../api';
import { ProductModel } from '../Products/ProductModel';
import { asyncModel, createCollection } from '../utils';

export const ProductsCollection = createCollection(ProductModel, {
  getSingle: asyncModel(getProduct),
});

function getProduct(id) {
  return async (flow, store) => {
    const res = await Api.Products.getSingle(id);
    store.add(res.data.id, res.data);
  };
}
