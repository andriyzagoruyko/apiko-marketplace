import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router';
import { useStore } from 'src/stores/createStore';
import Products from 'src/components/Products/Products';
import Filter from 'src/components/Products/Filter/Filter';
import useTitle from 'src/hooks/useTitle';
import Loader from 'src/components/Loader/Loader';

const queryString = require('query-string');

function LatestProducts() {
  const store = useStore();
  const location = useLocation();
  const { items } = store.searchProducts;
  const { isLoading } = store.searchProducts.fetch;

  useTitle('Search');
  useEffect(() => {
    const params = queryString.parse(location.search);
    store.searchProducts.fetch.run(params);
  }, [location]);

  return (
    <Loader show={isLoading}>
      <Filter />
      <Products
        items={items}
        isLoading={isLoading}
        placeholderNum={4}
      />
    </Loader>
  );
}

export default observer(LatestProducts);
