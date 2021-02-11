import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useProductsCollection } from '../../stores/Products/ProductsCollection';
import { useUsersCollection } from '../../stores/Users/UsersCollection';
import s from './SingleProduct.module.scss';
import Product from './components/Product/Product';
import Sidebar from './components/Sidebar/Sidebar';
import Loader from '../../components/Loader/Loader';

function SingleProduct() {
  const params = useParams();
  const products = useProductsCollection();
  const users = useUsersCollection();

  const product = products.get(params.id);
  const owner = product && users.get(product.ownerId);

  useEffect(() => {
    if (!product || !owner) {
      products.getSingle.run(params.id);
    }
  }, []);

  return (
    <div className={s.container}>
      <Loader show={products.getSingle.isLoading}>
        <Product product={product} />
        <Sidebar seller={owner} product={product} />
      </Loader>
    </div>
  );
}

export default observer(SingleProduct);
