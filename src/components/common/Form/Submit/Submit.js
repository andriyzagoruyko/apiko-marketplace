import React from 'react';
import s from './Submit.module.scss';

function Submit({ text, uppercase }) {
  return (
    <button
      type="submit"
      className={`${s.submit}  ${
        uppercase ? s.uppercase : s.regular
      }`}
    >
      {text}
    </button>
  );
}

export default Submit;
