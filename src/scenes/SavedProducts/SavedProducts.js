import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'src/stores/createStore';
import Products from 'src/components/Products/Products';
import useTitle from 'src/hooks/useTitle';
import Loader from 'src/components/Loader/Loader';
import s from './SavedProducts.module.scss';

function SavedProducts() {
  const { viewer } = useStore();
  const { savedProducts } = viewer;
  const isLoading = viewer.isLoading || savedProducts.fetch.isLoading;

  useTitle('Saved products');

  return (
    <>
      <Loader show={isLoading}>
        <div className={s.container}>
          <h1>
            Saved items <span>({savedProducts.count})</span>
          </h1>
          {savedProducts.count > 0 ? (
            <Products
              items={savedProducts.items}
              isLoading={isLoading}
              placeholderNum={savedProducts.count}
            />
          ) : (
            <p>No products has been saved</p>
          )}
        </div>
      </Loader>
    </>
  );
}

export default observer(SavedProducts);
