import { types } from 'mobx-state-tree';
import { ProductModel } from './Products/ProductModel';

function createCollection(ofModel) {
  const collection = types
    .model('CollectionModel', {
      collection: types.map(ofModel),
    })
    .actions((store) => ({
      add(key, value) {
        store.collection.set(String(key), value);
      },
    }));

  return types.optional(collection, {});
}

const ProductsCollection = createCollection(ProductModel);

export const EntitiesStore = types.model('EntitiesStore', {
  products: ProductsCollection,
});
