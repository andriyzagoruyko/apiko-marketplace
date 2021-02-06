import React from 'react';
import placeholder from '../../../../assets/img/placeholder.jpg';
import { ReactComponent as IconHeart } from '../../../../assets/img/icons/heart.svg';
import s from './Sidebar.module.scss';
import Avatar from '../../../../components/Avatar/Avatar';

function Sidebar({ seller }) {
  return (
    <aside className={s.sidebar}>
      <div className={s.seller}>
        <Avatar isImage avatar={placeholder} />
        <div className={s.info}>
          <span className={s.name}>{seller.fullName}</span>
          <span className={s.location}>{seller.location}</span>
        </div>
      </div>
      <div className={s.acitons}>
        <button className={s.buttonChat}>chat with seller</button>
        <button className={s.buttonSave}>
          <IconHeart /> add to favourite
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
