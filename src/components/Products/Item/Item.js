import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import {
  TextBlock,
  RectShape,
} from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';
import { generatePath } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../../scenes/routes';
import s from './Item.module.scss';
import { ReactComponent as IconHeart } from '../../../assets/img/icons/heart-filled.svg';
import Image from '../../Image/Image';

function Item({ item, ready = false }) {
  const itemPlaceholder = (
    <div style={{ paddingBottom: '8px' }}>
      <RectShape
        color="#E0E0E0"
        style={{ width: '100%', height: 140 }}
      />
      <TextBlock rows={2} color="#E0E0E0" />
    </div>
  );

  return (
    <div className={s.item}>
      <ReactPlaceholder
        rows={2}
        showLoadingAnimation
        firstLaunchOnly
        ready={ready}
        customPlaceholder={itemPlaceholder}
      >
        <RouterLink
          to={generatePath(routes.product, { id: item.id })}
        >
          <Image
            src={
              item.photos && item.photos.length > 0
                ? item.photos[0]
                : null
            }
            alt={item.title}
            paddingTop="73%"
          />
        </RouterLink>
        <div className={s.body}>
          <button
            className={`${s.button} ${item.saved ? s.active : ''}`}
          >
            <IconHeart />
          </button>
          <span className={s.title}>{item.title}</span>
          <span className={s.price}>${item.price}</span>
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default Item;
