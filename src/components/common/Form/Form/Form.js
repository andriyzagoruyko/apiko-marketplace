import React from 'react';
import s from './Form.module.scss';

function Form({ children, fullWidth, horizontal, ...restProps }) {
  return (
    <form
      className={`${s.form} ${fullWidth ? 'fullWidth' : ''} ${
        horizontal ? s.row : ''
      }`}
      {...restProps}
    >
      {children}
    </form>
  );
}

export default Form;
