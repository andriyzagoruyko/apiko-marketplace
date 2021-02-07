import React from 'react';
import { observer } from 'mobx-react';
import { Link as RouterLink } from 'react-router-dom';
import { useStore } from '../../../../stores/createStore';
import s from './UserPanel.module.scss';
import { ReactComponent as IconHeart } from '../../../../assets/img/icons/heart.svg';
import { routes } from '../../../../scenes/routes';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

function UserPanel() {
  const store = useStore();

  return (
    <>
      <ul className={s.actions}>
        <li>
          <RouterLink
            to={routes.addProduct}
            className={`${s.loginButton}`}
          >
            sell
          </RouterLink>
        </li>

        <li>
          {!store.auth.isLoggedIn ? (
            <RouterLink to={routes.login} className={s.button}>
              login
            </RouterLink>
          ) : (
            <ProfileMenu />
          )}
        </li>

        <li>
          <RouterLink to={routes.home} className={s.button}>
            <IconHeart />
          </RouterLink>
        </li>
      </ul>
    </>
  );
}

export default observer(UserPanel);
