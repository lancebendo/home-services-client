import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch/* , Link */ } from 'react-router-dom';

// load components
import Header from '../Header';
import Nav from '../Nav';

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
    <Switch style={routeStyle}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/history" exact component={History} />
      <Route>
        <h1>No Match</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default TestComponent;
