import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import s from './Auth.module.scss';
import Login from '../Login/Login';
import Restore from '../Restore/Restore';
import Register from '../Register/Register';
import Header from '../../components/Header/Header';

function Auth() {
  return (
    <>
      <Header dark={false} />
      <main className={s.content}>
        <Switch>
          <Route path={routes.login} component={Login} exact />
          <Route path={routes.restore} component={Restore} exact />
          <Route path={routes.register} component={Register} exact />
        </Switch>
      </main>
    </>
  );
}

export default Auth;
