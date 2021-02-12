import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { ReactComponent as IconHeart } from 'src/assets/img/icons/heart-filled.svg';
import UserInfo from 'src/components/User/Info/Info';
import { useStore } from 'src/stores/createStore';
import s from './Sidebar.module.scss';
import Modal from '../Modal/Modal';

function Sidebar({ seller, product }) {
  const { viewer } = useStore();
  const disableButtons =
    !product || viewer?.user?.id === product.ownerId;

  const [isOpen, setIsOpen] = useState(false);

  function handleClickModal() {
    setIsOpen(!isOpen);
  }

  return (
    <aside className={s.sidebar}>
      <Modal
        user={seller}
        subject={product?.title}
        isOpen={isOpen}
        onClose={handleClickModal}
      />
      <div className={s.seller}>
        <UserInfo user={seller} withLink />
      </div>

      <div className={s.actions}>
        <button
          disabled={disableButtons}
          className={s.buttonChat}
          onClick={handleClickModal}
        >
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
