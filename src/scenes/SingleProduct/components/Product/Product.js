import React from 'react';
import { ReactComponent as IconLocation } from '../../../../assets/img/icons/location.svg';
import s from './Product.module.scss';
import Image from '../../../../components/Image/Image';

function Product({ product }) {
  return (
    <article className={s.product}>
      <div className={s.image}>
        <Image
          src={product.photos ? product.photos[0] : null}
          alt={product.title}
          paddingTop="50%"
        />
        <span className={s.price}>${product.price}</span>
      </div>
      <div className={s.meta}>
        <div className={s.title}>
          <h1>{product.title}&nbsp;</h1>
          <time>
            {new Date(product.updatedAt).toLocaleString('uk-UA')}
          </time>
        </div>
        <div className={s.location}>
          <IconLocation />
          {product.location}
        </div>
      </div>
      <div className={s.description}>{product.description}</div>
    </article>
  );
}

export default Product;
