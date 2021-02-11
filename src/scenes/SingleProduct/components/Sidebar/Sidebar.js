import React from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as IconHeart } from '../../../../assets/img/icons/heart-filled.svg';
import UserInfo from '../../../../components/User/Info/Info';
import s from './Sidebar.module.scss';
import { useStore } from '../../../../stores/createStore';

function Sidebar({ seller, product }) {
  const { viewer } = useStore();

  return (
    <aside className={s.sidebar}>
      <div className={s.seller}>
        <UserInfo user={seller} withLink />
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
            onClick={() => viewer.savedProducts.toggleItem(product)}
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
