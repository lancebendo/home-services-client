import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter /* Route, Switch, Link */ } from 'react-router-dom';

// load components
import Header from './components/ui-components/Header/Header';

export default () => (
  <BrowserRouter>
    <div className="App">
      <Header />
    </div>
  </BrowserRouter>
);
