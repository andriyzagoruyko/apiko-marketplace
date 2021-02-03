import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import s from './UserPanel.module.scss';
import { ReactComponent as IconHeart } from '../../../../assets/img/icons/heart.svg';
import { routes } from '../../../../scenes/routes';

function UserPanel() {
  return (
    <div className={s.actions}>
      <RouterLink to={routes.login} className={`${s.loginButton}`}>
        sell
      </RouterLink>
      <RouterLink to={routes.login} className={s.button}>
        login
      </RouterLink>
      <RouterLink to={routes.home} className={s.button}>
        <IconHeart />
      </RouterLink>
    </div>
  );
}

export default UserPanel;
