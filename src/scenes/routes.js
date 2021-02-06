import React from 'react';
import { observer } from 'mobx-react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useStore } from '../stores/createStore';
import Home from './Home/Home';
import Auth from './Auth/Auth';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  restore: '/auth/restore',
  account: '/account',
  product: '/product/:id',
};

const ProtectedRoute = observer(
  ({
    redirectTo = '/',
    forAuthorized = true,
    component: Component,
    ...rest
  }) => {
    const store = useStore();

    return (
      <Route
        {...rest}
        render={(props) =>
          store.auth.isLoggedIn === forAuthorized ? (
            <Component {...props} />
          ) : (
            <Redirect to={redirectTo} />
          )
        }
      />
    );
  },
);

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          forAuthorized={false}
          path={routes.auth}
          component={Auth}
        />
        <Route path={routes.home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
export { ProtectedRoute };
