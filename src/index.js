import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './pages/HomePage';

const app = (
  // <Router basename='/The-F2E'>
  <Router>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </Router>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
