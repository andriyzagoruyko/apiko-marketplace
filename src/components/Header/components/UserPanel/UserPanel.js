import React from 'react';
import { observer } from 'mobx-react';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../../../../stores/createStore';
import s from './UserPanel.module.scss';
import { ReactComponent as IconHeart } from '../../../../assets/img/icons/heart-filled.svg';
import { routes } from '../../../../scenes/routes';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

function UserPanel() {
  const { auth, viewer } = useStore();

  return (
    <>
      <ul className={s.actions}>
        <li>
          <RouterLink
            to={routes.addProduct}
            className={`${s.buttonLogin}`}
          >
            sell
          </RouterLink>
        </li>

        <li>
          {!auth.isLoggedIn ? (
            <RouterLink to={routes.login} className={s.button}>
              login
            </RouterLink>
          ) : (
            <ProfileMenu />
          )}
        </li>

        <li>
          <RouterLink
            to={routes.saved}
            className={`${s.button} ${s.buttonSaved} ${
              viewer.savedProducts.count ? s.active : ''
            }`}
          >
            <IconHeart />
          </RouterLink>
        </li>
      </ul>
    </>
  );
}

export default observer(UserPanel);
