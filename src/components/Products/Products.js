import React from 'react';
import { observer } from 'mobx-react';
import Item from './Item/Item';
import s from './Products.module.scss';

function Products({
  isLoading = false,
  placeholderNum = 12,
  items = [],
}) {
  return (
    <div className={s.container}>
      <div className={s.items}>
        {(!items.length && isLoading
          ? Array.from(Array(placeholderNum), (v, i) => ({ id: i }))
          : items
        ).map((item) => (
          <Item key={item.id} item={item} ready={!isLoading} />
        ))}
      </div>
    </div>
  );
}

export default observer(Products);
