import React, { Component } from 'react';
import { Route } from 'react-router';
import Recipes from './components/Pie'
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Info from './components/Info'
import customers from './components/Customers'
import { FetchData } from './components/FetchData';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/pies' component={Recipes} />
        <Route exact path='/info/:id' component={Info} />
        <Route exact path='/customers' component={customers} />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
