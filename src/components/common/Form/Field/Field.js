import React from 'react';
import s from './Field.module.scss';

function Field(props) {
  const { label, id, helper, button, rows } = props;

  return (
    <label className={s.label} htmlFor={id}>
      <span className={s.title}>{label}</span>
      <div className={s.container}>
        {!rows ? (
          <input className={s.input} {...props} />
        ) : (
          <textarea
            className={`${s.input} ${s.textarea}`}
            rows={rows}
            {...props}
          />
        )}
        {Boolean(button) && (
          <span className={s.button}>{button}</span>
        )}
      </div>
      {Boolean(helper) && <span className={s.helper}>{helper}</span>}
    </label>
  );
}

export default Field;
