import React from 'react';
import { observer } from 'mobx-react';
import { Switch, Route } from 'react-router-dom';
import { routes, ProtectedRoute } from '../routes';
import Header from '../../components/Header/Header';
import LatestProducts from '../LatestProducts/LatestProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import EditProfile from '../EditProfile/EditProfile';
import AddProduct from '../AddProduct/AddProduct';
import UserProfile from '../UserProfile/UserProfile';
import SavedProducts from '../SavedProducts/SavedProducts';

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
          <Route
            path={routes.profile}
            component={UserProfile}
            exact
          />
          <Route
            path={routes.saved}
            component={SavedProducts}
            exact
          />
          <ProtectedRoute
            path={routes.account}
            redirectTo={routes.login}
            component={EditProfile}
          />
          <ProtectedRoute
            path={routes.addProduct}
            redirectTo={routes.login}
            component={AddProduct}
          />
        </Switch>
      </main>
    </>
  );
}

export default observer(Home);
