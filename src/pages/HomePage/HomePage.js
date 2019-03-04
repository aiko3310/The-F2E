import React from 'react';
import { Switch, Route } from 'react-router';
import Nav from '../../container/Nav';
import Product from '../Product';
import week0 from '../Week0';
import week1 from '../Week1';
const HomePage = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/product' component={Product} />
        <Route path='/week0' component={week0} />
        <Route path='/week1' component={week1} />
        <Route path='/' component={Product} />
      </Switch>
    </div>
  );
};

export default HomePage;
