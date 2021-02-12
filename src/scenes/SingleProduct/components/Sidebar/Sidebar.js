import React from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as IconHeart } from 'src/assets/img/icons/heart-filled.svg';
import UserInfo from 'src/components/User/Info/Info';
import { useStore } from 'src/stores/createStore';
import s from './Sidebar.module.scss';

function Sidebar({ seller, product }) {
  const { viewer } = useStore();
  const disableButtons =
    !product || viewer?.user?.id === product.ownerId;

  return (
    <aside className={s.sidebar}>
      <div className={s.seller}>
        <UserInfo user={seller} withLink />
      </div>

      <div className={s.actions}>
        <button disabled={disableButtons} className={s.buttonChat}>
          chat with seller
        </button>
        <button
          disabled={disableButtons || viewer.savedProducts.isLoading}
          className={`${s.buttonSave} ${
            product?.saved ? s.active : ''
          }`}
          onClick={() => viewer.savedProducts.toggleItem(product)}
        >
          <IconHeart />{' '}
          {!product?.saved
            ? 'add to favorite'
            : 'remove from favorite'}
        </button>
      </div>
    </aside>
  );
}

export default observer(Sidebar);
