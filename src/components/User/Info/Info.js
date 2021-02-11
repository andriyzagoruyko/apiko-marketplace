import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import {
  RoundShape,
  TextRow,
} from 'react-placeholder/lib/placeholders';
import { Link as RouterLink } from 'react-router-dom';
import { generatePath } from 'react-router';
import { routes } from '../../../scenes/routes';
import Avatar from '../Avatar/Avatar';
import './Info.scss';

function Info({ user }) {
  const placeholder = (
    <>
      <div className="avatar">
        <RoundShape color="#E0E0E0" />
      </div>

      <div className="user-info__content">
        <TextRow color="#E0E0E0" style={{ margin: 0, height: 17 }} />
        <TextRow
          color="#E0E0E0"
          style={{ margin: '4px 0 0 0', height: 17 }}
        />
      </div>
    </>
  );

  return (
    <div className="user-info">
      <ReactPlaceholder
        showLoadingAnimation
        customPlaceholder={placeholder}
        ready={!!user}
      >
        {user && (
          <>
            <Avatar avatar={user.avatar} fullName={user.fullName} />
            <div className="user-info__content">
              <span className="user-info__name">{user.fullName}</span>
              <span className="user-info__location">
                {user.location}
              </span>
            </div>
          </>
        )}
      </ReactPlaceholder>
    </div>
  );
}

function WithLink({ withLink = false, user, ...props }) {
  return withLink && user ? (
    <RouterLink to={generatePath(routes.profile, { id: user.id })}>
      <Info user={user} {...props} />
    </RouterLink>
  ) : (
    <Info user={user} {...props} />
  );
}

export default WithLink;
