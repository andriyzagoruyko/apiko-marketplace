import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../stores/createStore';
import s from './SingleProduct.module.scss';
import Product from './components/Product/Product';
import Sidebar from './components/Sidebar/Sidebar';

function SingleProduct() {
  const params = useParams();
  const product = useStore((store) =>
    store.entities.products.collection.get(params.id),
  );

  const seller = {
    fullName: 'Test Seller',
    location: 'Jakarta, Indonesia',
  };

  if (!product) {
    return <div>Not found</div>;
  }

  return (
    <div className={s.container}>
      <Product product={product} />
      <Sidebar seller={seller} />
    </div>
  );
}

export default SingleProduct;
