/* eslint-disable no-empty */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import s from './UpdateAvatar.module.scss';
import Avatar from '../../../../components/Avatar/Avatar';

function UpdateAvatar({ hasAvatar, name, ...props }) {
  const [image, setImage] = useState(null);
  const { avatar } = props;
  const { setFieldValue } = useFormikContext();

  function handleChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      try {
        setImage(reader.result);
        setFieldValue(name, reader.result);
      } catch (err) {}
    };

    reader.readAsDataURL(file);
  }

  const isImage = hasAvatar || image !== null;

  return (
    <label className={s.container}>
      <Avatar isImage={isImage} avatar={image || avatar} />
      <input name={name} type="file" onChange={handleChange} />
      <span role="button" className={s.button}>
        Upgrade Photo
      </span>
    </label>
  );
}

export default UpdateAvatar;
