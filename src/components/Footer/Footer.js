import React from 'react';
import s from './Footer.module.scss';

function Footer() {
  return (
    <footer className={`${s.footer} `}>
      <div className="container">Copyright 2020. Privacy Policy.</div>
    </footer>
  );
}

export default Footer;
