'use strict';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Layouts: Route-invariant site layout views:
import MainLayout from './components/MainLayout';

// Pages: Route-specific views:
import Home from './components/pages/Home';
import About from './components/pages/About';
import Focus from './components/pages/Focus';
import Contact from './components/pages/Contact';
import Error404 from './components/pages/Error404';


const Routes = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={ MainLayout }>
      <IndexRoute component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/focus' component={ Focus } />
      <Route path='/contact' component={ Contact } />
      <Route path='*' component={ Error404 } />
    </Route>
  </Router>
);

export default Routes;
