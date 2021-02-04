import React, { useState } from 'react';
import FormField from '../Field/Field';
import { ReactComponent as IconEye } from '../../../assets/img/icons/eye.svg';
import s from './PasswordField.module.scss';

function PasswordField(props) {
  const [isVisible, setIsVisible] = useState(false);

  const eyeButton = (
    <button
      className={`${s.button} ${isVisible ? s.active : ''}`}
      type="button"
      onClick={() => setIsVisible(!isVisible)}
    >
      <IconEye />
    </button>
  );

  return (
    <FormField
      type={isVisible ? 'text' : 'password'}
      icon={eyeButton}
      {...props}
    />
  );
}

export default PasswordField;
