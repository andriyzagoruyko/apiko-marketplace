import React, { useState } from 'react';
import s from './Image.module.scss';
import { ReactComponent as Placeholder } from '../../assets/img/placeholder.svg';

function Image({ src, paddingTop, ...props }) {
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={`image ${s.container} ${
        paddingTop ? s.absolute : ''
      }`}
      style={paddingTop ? { paddingTop } : null}
    >
      {src && !isError ? (
        <img
          alt=""
          src={src}
          {...props}
          onError={() => setIsError(true)}
        />
      ) : (
        <Placeholder />
      )}
    </div>
  );
}

export default Image;
