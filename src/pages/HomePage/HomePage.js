import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StyledHomePage } from './styledHomePage';
import Nav from '../../components/Nav';
import Product from '../Product';
import week1 from '../Week1';
import week2 from '../Week2';
import week3 from '../Week3';

const HomePage = () => {
  return (
    <StyledHomePage>
      <Nav />
      <Switch>
        <Route path='/product' component={Product} />
        <Route path='/week1' component={week1} />
        <Route path='/week2' component={week2} />
        <Route path='/week3' component={week3} />
        <Route path='/' component={Product} />
      </Switch>
    </StyledHomePage>
  );
};

export default HomePage;
