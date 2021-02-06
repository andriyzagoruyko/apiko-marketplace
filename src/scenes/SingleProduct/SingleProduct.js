import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../stores/createStore';
import s from './SingleProduct.module.scss';
import Product from './components/Product/Product';
import Sidebar from './components/Sidebar/Sidebar';

function SingleProduct() {
  const params = useParams();
  const store = useStore();
  const product = store.entities.products.collection.get(params.id);

  useEffect(() => {
    if (!product) {
      store.entities.products.getSingle.run(params.id);
    }
  }, []);

  const seller = {
    fullName: 'Test Seller',
    location: 'Jakarta, Indonesia',
  };

  if (!product) {
    return null;
  }

  return (
    <div className={s.container}>
      <Product product={product} />
      <Sidebar seller={seller} />
    </div>
  );
}

export default observer(SingleProduct);
