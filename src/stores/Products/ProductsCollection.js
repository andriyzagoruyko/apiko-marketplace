import Api from '../../api';
import { ProductModel } from '../Products/ProductModel';
import { asyncModel, createCollection } from '../utils';

export const ProductsCollection = createCollection(ProductModel, {
  getSingle: asyncModel(getProduct),
  addProduct: asyncModel(addProduct),
});

function getProduct(id) {
  return async (flow, store) => {
    const res = await Api.Products.getSingle(id);
    store.add(res.data.id, res.data);
  };
}

function addProduct({ title, description, photos, location, price }) {
  return async (flow, store) => {
    const res = await Api.Products.add({
      title,
      description,
      photos,
      location,
      price,
    });
    store.add(res.data.id, res.data);
    return res.data;
  };
}
