import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import useTitle from '../../hooks/useTitle';
import Header from '../../components/Header/Header';
import Products from '../Products/Products';

function Home() {
  useTitle('Latest products');

  return (
    <>
      <Header />
      <main className="container">
        <Switch>
          <Route path={routes.home} component={Products} exact />
        </Switch>
      </main>
    </>
  );
}

export default Home;
