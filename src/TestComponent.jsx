import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter /* Route, Switch, Link */ } from 'react-router-dom';

// load components
import Header from './components/ui/Header';
import SideNav from './components/ui/SideNav';
import NavLink from './components/ui/NavLink';
import NavButton from './components/ui/NavButton';

const TestComponent = () => (
  <BrowserRouter>
    <div className="App">
      <Header />

      <SideNav collapsible="true">
        <NavButton label="Book now" icon="event" />
        <div className="divider" />
        <NavLink path="/haha" label="Dashboard" icon="home" isSelected="true" />
        <NavLink path="/hehe" label="Settings" icon="person" />
        <NavLink path="/hehe" label="Settings" icon="history" />
        <div className="divider" />
        <NavLink path="/hehe" label="Settings" icon="exit_to_app" />
      </SideNav>
    </div>
  </BrowserRouter>
);

export default TestComponent;
