import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter /* Route, Switch, Link */ } from 'react-router-dom';

// load components
import Header from './components/ui-components/Header';
import Sidenav from './components/ui-components/Sidenav';

export default () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Sidenav />
    </div>
  </BrowserRouter>
);
