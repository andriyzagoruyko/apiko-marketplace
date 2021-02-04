import React from 'react';
import { observer } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from '../../stores/createStore';

function ProtectedRoute({
  shouldBeAuthorized = true,
  redirectTo = '/',
  component: Component,
  ...rest
}) {
  const store = useStore();
  const shouldRedirect = !!store.viewer.user;

  return (
    <Route
      {...rest}
      render={(props) =>
        shouldRedirect === shouldBeAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
}

export default observer(ProtectedRoute);
