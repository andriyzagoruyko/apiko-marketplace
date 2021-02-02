import React from 'react';
import s from './Container.module.scss';

function Container({ children, width = 430 }) {
  return (
    <div className={s.container} style={width ? { width } : null}>
      {children}
    </div>
  );
}

export default Container;
