import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import s from './Auth.module.scss';
import Login from './Login/Login';
import RefreshPassword from './RefreshPassword/RefreshPassword';
import Register from './Register/Register';

function Auth() {
  return (
    <div className={s.content}>
      <BrowserRouter>
        <Switch>
          <Route path={routes.login} component={Login} />
          <Route path={routes.refresh} component={RefreshPassword} />
          <Route path={routes.register} component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Auth;
