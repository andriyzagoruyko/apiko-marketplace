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
  const isImage = hasAvatar || image !== null;

  function handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const data = new FormData();
        data.append('image', file);
        setFieldValue(name, data);
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <label className={s.container}>
      <Avatar isImage={isImage} avatar={image || avatar} />
      <input
        name={name}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <span role="button" className={s.button}>
        Upgrade Photo
      </span>
    </label>
  );
}

export default UpdateAvatar;
