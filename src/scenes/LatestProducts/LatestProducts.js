import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/createStore';
import Products from '../../components/Products/Products';
import Filter from './components/Filter/Filter';
import useTitle from '../../hooks/useTitle';

function LatestProducts() {
  const store = useStore();

  useTitle('Latest products');
  useEffect(() => {
    store.latestProducts.fetch.run();
  }, []);

  return (
    <>
      <Filter />
      <Products items={store.latestProducts.items} />
    </>
  );
}

export default observer(LatestProducts);
