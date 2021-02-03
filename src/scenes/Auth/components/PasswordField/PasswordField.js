import React, { useState } from 'react';
import FormField from '../../../../components/common/Form/Field/Field';
import { ReactComponent as IconEye } from '../../../../assets/img/icons/eye.svg';
import s from './PasswordField.module.scss';

function PasswordField(props) {
  const [visible, setVisible] = useState(false);

  const eyeButton = (
    <button
      className={`${s.button} ${visible ? s.active : ''}`}
      type="button"
      onClick={() => setVisible(!visible)}
    >
      <IconEye />
    </button>
  );

  return (
    <FormField
      type={visible ? 'text' : 'password'}
      button={eyeButton}
      {...props}
    />
  );
}

export default PasswordField;