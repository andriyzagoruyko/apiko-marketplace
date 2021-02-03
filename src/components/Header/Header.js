import React from 'react';
import {
  Link as RouterLink,
  useLocation,
  matchPath,
} from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { routes } from '../../scenes/routes';
import UserPanel from './components/UserPanel/UserPanel';
import SearchFrom from './components/SearchForm/SearchForm';

function Header({ dark = true }) {
  const location = useLocation();

  return (
    <header className={`${s.header} ${dark ? s.headerDark : ''}`}>
      <div className={`container ${s.container}`}>
        <div className={s.content}>
          <RouterLink className={s.logo} to={routes.home}>
            <Logo />
          </RouterLink>
          <UserPanel />
        </div>
        {!matchPath(location.pathname, {
          path: routes.auth,
        }) && <SearchFrom />}
      </div>
    </header>
  );
}

export default Header;
