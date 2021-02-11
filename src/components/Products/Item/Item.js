import React from 'react';
import { observer } from 'mobx-react';
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
import { useStore } from '../../../stores/createStore';

function Item({ item, ready = false }) {
  const { viewer } = useStore();

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
        showLoadingAnimation
        ready={ready}
        customPlaceholder={itemPlaceholder}
      >
        {item && (
          <>
            <RouterLink
              to={generatePath(routes.product, { id: item.id })}
            >
              <Image
                src={
                  item.photos && item.photos.length
                    ? item.photos[0]
                    : null
                }
                alt={item.title}
                paddingTop="73%"
              />
            </RouterLink>
            <div className={s.body}>
              {viewer?.user?.id !== item.ownerId && (
                <button
                  className={`${s.button} ${
                    item.saved ? s.active : ''
                  }`}
                  onClick={() =>
                    viewer.savedProducts.toggleItem(item)
                  }
                  disabled={viewer.savedProducts.isLoading}
                >
                  <IconHeart />
                </button>
              )}
              <span className={s.title}>{item.title}</span>
              <span className={s.price}>${item.price}</span>
            </div>
          </>
        )}
      </ReactPlaceholder>
    </div>
  );
}

export default observer(Item);
