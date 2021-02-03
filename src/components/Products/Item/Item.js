import React from 'react';
import s from './Item.module.scss';
import { ReactComponent as IconHeart } from '../../../assets/img/icons/heart-filled.svg';

function Item({ item }) {
  return (
    <div key={item.id} className={s.item}>
      <div className={s.image}>
        <img src={item.photos[0]} alt="" />
      </div>
      <div className={s.body}>
        <button className={`${s.button} ${s.active}`}>
          <IconHeart />
        </button>
        <span className={s.title}>{item.title}</span>
        <span className={s.price}>${item.price}</span>
      </div>
    </div>
  );
}

export default Item;
