import React from 'react';
import { observer } from 'mobx-react';
import Products from '../../components/Products/Products';
import useTitle from '../../hooks/useTitle';
import Loader from '../../components/Loader/Loader';
import s from './SavedProducts.module.scss';
import { useStore } from '../../stores/createStore';

function SavedProducts() {
  const { viewer } = useStore();
  const { savedProducts } = viewer;

  useTitle('Saved products');

  const isLoading = viewer.isLoading || savedProducts.fetch.isLoading;
  const { items } = savedProducts;

  return (
    <>
      <Loader show={isLoading}>
        <div className={s.container}>
          <h1>
            Saved items <span>({savedProducts.count})</span>
          </h1>
          {savedProducts.count > 0 ? (
            <Products
              items={items}
              isLoading={isLoading}
              placeholderNum={savedProducts.count}
            />
          ) : (
            <p>No products has been saved.</p>
          )}
        </div>
      </Loader>
    </>
  );
}

export default observer(SavedProducts);
