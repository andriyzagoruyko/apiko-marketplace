import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import Login from '../Login/Login';
import Restore from '../Restore/Restore';
import Register from '../Register/Register';
import Header from '../../components/Header/Header';

function Auth() {
  return (
    <>
      <Header dark={false} />
      <div className="small-form">
        <Switch>
          <Route path={routes.login} component={Login} exact />
          <Route path={routes.restore} component={Restore} exact />
          <Route path={routes.register} component={Register} exact />
        </Switch>
      </div>
    </>
  );
}

export default Auth;
