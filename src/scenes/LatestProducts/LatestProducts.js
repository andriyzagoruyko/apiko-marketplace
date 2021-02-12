import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'src/stores/createStore';
import Products from 'src/components/Products/Products';
import Filter from 'src/components/Products/Filter/Filter';
import useTitle from 'src/hooks/useTitle';
import Loader from 'src/components/Loader/Loader';

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
      <Products items={items} />
    </Loader>
  );
}

export default observer(LatestProducts);
