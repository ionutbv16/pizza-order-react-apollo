import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import MakeOrders from './containers/MakeOrders';
import Orders from './containers/Orders';

const AppRouter: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/makeorders" exact component={MakeOrders} />
    <Route path="/orders" exact component={Orders} />
  </Switch>
);

export default AppRouter;
