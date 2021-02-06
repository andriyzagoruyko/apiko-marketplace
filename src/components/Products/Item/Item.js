import React from 'react';
import { generatePath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import s from './Item.module.scss';
import { ReactComponent as IconHeart } from '../../../assets/img/icons/heart-filled.svg';
import placeholder from '../../../assets/img/placeholder.jpg';
import { routes } from '../../../scenes/routes';

function Item({ item }) {
  return (
    <div key={item.id} className={s.item}>
      <div className={s.image}>
        <RouterLink
          to={generatePath(routes.product, { id: item.id })}
        >
          <img
            src={item.photos ? item.photos[0] : placeholder}
            alt={item.title}
          />
        </RouterLink>
      </div>
      <div className={s.body}>
        <button
          className={`${s.button} ${item.saved ? s.active : ''}`}
        >
          <IconHeart />
        </button>
        <span className={s.title}>{item.title}</span>
        <span className={s.price}>${item.price}</span>
      </div>
    </div>
  );
}

export default Item;
