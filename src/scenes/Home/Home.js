import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes, ProtectedRoute } from '../routes';
import Header from '../../components/Header/Header';
import LatestProducts from '../LatestProducts/LatestProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import EditProfile from '../EditProfile/EditProfile';

function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <Switch>
          <Route
            path={routes.home}
            component={LatestProducts}
            exact
          />
          <Route
            path={routes.product}
            component={SingleProduct}
            exact
          />
          <ProtectedRoute
            path={routes.account}
            redirectTo={routes.login}
            component={EditProfile}
          />
        </Switch>
      </main>
    </>
  );
}

export default Home;
