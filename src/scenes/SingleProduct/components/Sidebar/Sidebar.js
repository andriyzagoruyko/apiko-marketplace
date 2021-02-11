import React from 'react';
import { observer } from 'mobx-react';
import { Link as RouterLink } from 'react-router-dom';
import { generatePath } from 'react-router';
import ReactPlaceholder from 'react-placeholder';
import {
  RoundShape,
  TextRow,
} from 'react-placeholder/lib/placeholders';
import { ReactComponent as IconHeart } from '../../../../assets/img/icons/heart-filled.svg';
import Avatar from '../../../../components/Avatar/Avatar';
import s from './Sidebar.module.scss';
import { routes } from '../../../routes';
import { useStore } from '../../../../stores/createStore';

function Sidebar({ seller, product }) {
  const { viewer } = useStore();

  const placeholder = (
    <>
      <RoundShape color="#E0E0E0" style={{ width: 72, height: 72 }} />
      <div className={s.info}>
        <TextRow
          color="#E0E0E0"
          style={{ margin: 0, width: '100%', height: 17 }}
        />
        <TextRow
          color="#E0E0E0"
          style={{ margin: '4px 0 0 0', width: '100%', height: 17 }}
        />
      </div>
    </>
  );

  function handleClickSave() {
    viewer.savedProducts.toggleItem(product);
  }

  return (
    <aside className={s.sidebar}>
      <div className={s.seller}>
        <ReactPlaceholder
          showLoadingAnimation
          customPlaceholder={placeholder}
          ready={!!seller}
        >
          {seller && (
            <>
              <RouterLink
                to={generatePath(routes.profile, { id: seller.id })}
              >
                <Avatar {...seller} />
                <div className={s.info}>
                  <span className={s.name}>{seller.fullName}</span>
                  <span className={s.location}>
                    {seller.location}
                  </span>
                </div>
              </RouterLink>
            </>
          )}
        </ReactPlaceholder>
      </div>

      {product && viewer?.user?.id !== product.ownerId && (
        <div className={s.actions}>
          <button disabled={!seller} className={s.buttonChat}>
            chat with seller
          </button>
          <button
            disabled={!seller || viewer.savedProducts.isLoading}
            className={`${s.buttonSave} ${
              product.saved ? s.active : ''
            }`}
            onClick={handleClickSave}
          >
            <IconHeart />{' '}
            {!product.saved
              ? 'add to favorite'
              : 'remove from favorite'}
          </button>
        </div>
      )}
    </aside>
  );
}

export default observer(Sidebar);
