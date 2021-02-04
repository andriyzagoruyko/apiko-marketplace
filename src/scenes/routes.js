import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Home from './Home/Home';
import Auth from './Auth/Auth';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  restore: '/auth/restore',
  account: '/account',
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute
          shouldBeAuthorized={false}
          path={routes.auth}
          component={Auth}
        />
        <Route path={routes.home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
