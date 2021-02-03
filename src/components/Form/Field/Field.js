import React from 'react';
import { useField } from 'formik';
import s from './Field.module.scss';

function Field({
  label,
  icon,
  iconStart = false,
  helper = true,
  dense = false,
  margin = true,
  width = 0,
  ...props
}) {
  const { name, rows } = props;
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <label
      className={`field ${s.label} ${margin ? s.margin : ''}`}
      htmlFor={name}
    >
      {Boolean(label) && <span className={s.title}>{label}</span>}
      <div
        className={`${s.container} ${hasError ? s.errored : ''} ${
          dense ? s.dense : ''
        }`}
      >
        {!rows ? (
          <input
            style={width ? { width } : null}
            className={s.input}
            id={name}
            {...field}
            {...props}
          />
        ) : (
          <textarea
            style={width ? { width } : null}
            className={`${s.input} ${s.textarea}`}
            id={name}
            {...field}
            {...props}
          />
        )}
        {Boolean(icon) && (
          <span
            className={s.icon}
            style={iconStart ? { order: -1 } : null}
          >
            {icon}
          </span>
        )}
      </div>
      {(hasError || Boolean(helper)) && (
        <div className={s.helpers}>
          {hasError ? (
            <div className={s.error}>{meta.error}</div>
          ) : null}
          {Boolean(helper) && (
            <span className={s.helper}>{helper}</span>
          )}
        </div>
      )}
    </label>
  );
}

export default Field;
