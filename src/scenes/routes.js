import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Auth from './Auth/Auth';

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  refresh: '/auth/refresh',
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.home} component={Home} exact />
        <Route path={routes.auth} component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
