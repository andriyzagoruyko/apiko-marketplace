import React from 'react';
import s from './UpdateAvatar.module.scss';
import Avatar from '../../../../components/Avatar/Avatar';
import FormUpload from '../../../../components/Form/Upload/Upload';

function UpdateAvatar({ hasAvatar, name, ...props }) {
  const { avatar, fullName } = props;

  const renderPreview = (images) => (
    <>
      <Avatar
        avatar={images.length ? images[0] : avatar}
        fullName={fullName}
      />
      <span role="button" className={s.button}>
        Upgrade Photo
      </span>
    </>
  );

  return (
    <div className={s.container}>
      <FormUpload
        accept="image/*"
        maxFiles={1}
        name={name}
        renderPreview={renderPreview}
      />
    </div>
  );
}

export default UpdateAvatar;
