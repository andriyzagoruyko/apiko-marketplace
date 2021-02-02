import React from 'react';
import s from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as IconHeart } from '../../assets/img/icons/heart.svg';

function Header() {
  return (
    <header className={`${s.header} `}>
      <div className={`container ${s.container}`}>
        <Logo />
        <div className={s.content}>
          <div className={s.actions}>
            <button className={`${s.loginButton}`}>sell</button>
            <button className={s.button}>login</button>
            <button className={s.button}>
              <IconHeart />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
