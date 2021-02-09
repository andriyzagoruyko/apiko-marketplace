import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/createStore';
import Products from '../../components/Products/Products';
import Filter from './components/Filter/Filter';
import useTitle from '../../hooks/useTitle';
import Loader from '../../components/Loader/Loader';

function LatestProducts() {
  const store = useStore();
  const { items } = store.latestProducts;
  const { isLoading } = store.latestProducts.fetch;

  useTitle('Latest products');
  useEffect(() => {
    store.latestProducts.fetch.run();
  }, []);

  return (
    <Loader show={isLoading}>
      <Filter />
      <Products items={items} isLoading={isLoading} />
    </Loader>
  );
}

export default observer(LatestProducts);
