import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './shared/Layout/Layout';
import Product from './Products';
import Home from './Home';
import Provider from './Providers';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/products">
        <Layout>
          <Product />
        </Layout>
      </Route>
      <Route path="/providers">
        <Layout>
          <Provider />
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
