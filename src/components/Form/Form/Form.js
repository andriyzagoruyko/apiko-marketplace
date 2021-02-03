import React from 'react';
import { Formik, Form as FForm } from 'formik';
import s from './Form.module.scss';

function Form({ children, fullWidth, horizontal, ...restProps }) {
  return (
    <Formik {...restProps}>
      <FForm
        className={`${s.form} ${fullWidth ? 'fullWidth' : ''} ${
          horizontal ? s.row : ''
        }`}
      >
        {children}
      </FForm>
    </Formik>
  );
}

export default Form;
