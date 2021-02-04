import React from 'react';
import s from './Submit.module.scss';

function Submit({ text, uppercase, dark = false }) {
  return (
    <button
      type="submit"
      className={`submit ${s.submit}  ${
        uppercase ? s.uppercase : s.regular
      } ${dark ? s.dark : ''}`}
    >
      {text}
    </button>
  );
}

export default Submit;
