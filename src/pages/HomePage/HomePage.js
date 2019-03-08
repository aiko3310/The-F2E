import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StyledHomePage } from './styledHomePage';
import Nav from '../../components/Nav';
import Product from '../Product';
import week1 from '../Week1';
const HomePage = () => {
  return (
    <StyledHomePage>
      <Nav />
      <Switch>
        <Route path='/product' component={Product} />
        <Route path='/week1' component={week1} />
        <Route path='/' component={Product} />
      </Switch>
    </StyledHomePage>
  );
};

export default HomePage;
