import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../stores/createStore';

function SingleProduct() {
  const params = useParams();
  const product = useStore((store) =>
    store.entities.products.collection.get(params.productId),
  );

  if (product) {
    return <div>{product.title}</div>;
  }

  return <div>Not found</div>;
}

export default SingleProduct;
