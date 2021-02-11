import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router';
import { useStore } from '../../stores/createStore';
import Products from '../../components/Products/Products';
import Filter from '../../components/Products/Filter/Filter';
import useTitle from '../../hooks/useTitle';
import Loader from '../../components/Loader/Loader';

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
