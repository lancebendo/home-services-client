import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter, Route/* , Switch, Link */ } from 'react-router-dom';

// load components
import Header from './components/ui/Header';
import Nav from './components/containers/Nav';

const Dashboard = () => (<h1>Dashboard</h1>);
const Profile = () => (<h1>Profile</h1>);
const History = () => (<h1>History</h1>);

const routeStyle = {
  textAlign: 'center',
};

const TestComponent = () => (
  <BrowserRouter>
    <Header />
    <Nav />

    <div style={routeStyle}>
      <Route exact path="/" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/history" component={History} />
    </div>
  </BrowserRouter>
);

export default TestComponent;
