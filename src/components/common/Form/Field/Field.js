import React from 'react';
import { useField } from 'formik';
import s from './Field.module.scss';

function Field({ label, helper, button, ...props }) {
  const { id, rows } = props;
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <label className={s.label} htmlFor={id}>
      <span className={s.title}>{label}</span>
      <div className={`${s.container} ${hasError ? s.errored : ''}`}>
        {!rows ? (
          <input className={s.input} {...field} {...props} />
        ) : (
          <textarea
            className={`${s.input} ${s.textarea}`}
            {...field}
            {...props}
          />
        )}
        {Boolean(button) && (
          <span className={s.button}>{button}</span>
        )}
      </div>
      <div className={s.helpers}>
        {hasError ? (
          <div className={s.error}>{meta.error}</div>
        ) : null}
        {Boolean(helper) && (
          <span className={s.helper}>{helper}</span>
        )}
      </div>
    </label>
  );
}

export default Field;
