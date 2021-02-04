import React from 'react';
import s from './Loader.module.scss';

function Loader({ show = true, withScreenLock = true }) {
  if (!show) {
    return null;
  }

  return (
    <>
      {withScreenLock && <div className={s.screenLock} />}
      <div className={s.loading}>
        <div className={s.loadingWrapper}>
          <div className={s.loadingLine}>
            <div
              className={`${s.loadingLineInner} ${s.loadingLineInner1}`}
            />
            <div
              className={`${s.loadingLineInner} ${s.loadingLineInner2}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
