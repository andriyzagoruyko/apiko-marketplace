import React from 'react';
import { observer } from 'mobx-react';
import Item from './Item/Item';
import s from './Products.module.scss';

function Products({ isLoading, placeholderNum = 12, items = [] }) {
  return (
    <div className={s.container}>
      <div className={s.items}>
        {!items.length && isLoading
          ? Array.from(Array(placeholderNum)).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Item key={index} />
            ))
          : items.map((item) => (
              <Item key={item.id} item={item} ready />
            ))}
      </div>
    </div>
  );
}

export default observer(Products);
