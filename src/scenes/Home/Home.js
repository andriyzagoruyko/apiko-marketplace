import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { routes } from '../routes';
import useTitle from '../../hooks/useTitle';
import Header from '../../components/Header/Header';
import Products from '../Products/Products';
import EditProfile from '../EditProfile/EditProfile';

function Home() {
  useTitle('Latest products');

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path={routes.home} component={Products} exact />
          <ProtectedRoute
            path={routes.account}
            component={EditProfile}
          />
        </Switch>
      </div>
    </>
  );
}

export default Home;
