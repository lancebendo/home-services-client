import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter /* Route, Switch, Link */ } from 'react-router-dom';

// load components
import Header from './components/ui/Header';
import SideNav from './components/ui/SideNav';
import NavLink from './components/ui/NavLink';

export default () => (
  <BrowserRouter>
    <div className="App">
      <Header />

      <SideNav>
        <NavLink path="/haha" label="Dashboard" icon="home" isSelected="true" />
        <NavLink path="/hehe" label="Settings" icon="exit" />
      </SideNav>
    </div>
  </BrowserRouter>
);
