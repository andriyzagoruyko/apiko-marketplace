import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { routes, DisableOnRoutes } from '../../scenes/routes';
import UserPanel from './components/UserPanel/UserPanel';
import SearchFrom from './components/SearchForm/SearchForm';

function Header({ dark = true }) {
  return (
    <header className={`${s.header} ${dark ? s.headerDark : ''}`}>
      <div className={`${s.container}`}>
        <div className={s.content}>
          <RouterLink className={s.logo} to={routes.home}>
            <Logo />
          </RouterLink>
          <UserPanel />
        </div>
        <DisableOnRoutes
          paths={[routes.auth, routes.account, routes.addProduct]}
        >
          <SearchFrom />
        </DisableOnRoutes>
      </div>
    </header>
  );
}

export default Header;
