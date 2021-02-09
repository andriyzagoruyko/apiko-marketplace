import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { generatePath } from 'react-router';
import ReactPlaceholder from 'react-placeholder';
import {
  RoundShape,
  TextRow,
} from 'react-placeholder/lib/placeholders';
import { ReactComponent as IconHeart } from '../../../../assets/img/icons/heart.svg';
import Avatar from '../../../../components/Avatar/Avatar';
import s from './Sidebar.module.scss';
import { routes } from '../../../routes';

function Sidebar({ seller }) {
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
      <div className={s.actions}>
        <button disabled={!seller} className={s.buttonChat}>
          chat with seller
        </button>
        <button disabled={!seller} className={s.buttonSave}>
          <IconHeart /> add to favorite
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
