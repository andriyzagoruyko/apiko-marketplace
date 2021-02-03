import React from 'react';
import Item from './Item/Item';
import s from './Products.module.scss';

function Products({ items = [], children }) {
  return (
    <div className={s.container}>
      {children}
      <div className={s.items}>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
