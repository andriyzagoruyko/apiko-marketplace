import React from 'react';
import s from './Avatar.module.scss';

function Avatar({ isImage = true, avatar = '' }) {
  return (
    <span className={`avatar ${s.avatar}`}>
      {isImage ? (
        <img src={avatar} alt="avatar" />
      ) : (
        <span>{avatar.split(' ').map((l) => l[0])}</span>
      )}
    </span>
  );
}

export default Avatar;
