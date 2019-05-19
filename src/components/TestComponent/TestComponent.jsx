import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch/* , Link */ } from 'react-router-dom';

import constants from '../constants';

// load components
import Header from '../Header';
import Nav from '../Nav';
import Modal from '../Shared/Modal';


const customModalStyles = {
  content: {
    top: '20%',
    left: '20%',
    right: '20%',
    bottom: '20%',
  },
};

const Dashboard = () => (
  <MainRoute>
    <Modal style={customModalStyles} title="Login">
      <h1>haha</h1>
      <h2>hehe</h2>
      <h2>hehe</h2>
    </Modal>
  </MainRoute>
);
const Profile = () => (<h1>Profile</h1>);
const History = () => (<h1>History</h1>);

const routeStyle = {
  textAlign: 'center',
};

const MainRoute = styled.div`
  @media (max-width: ${constants.largeScreen}) {
    padding-left: 310px;
    padding-top: 50px;
  }
`;


const availablePaths = [
  { name: 'Dashboard', path: '/', icon: 'home' },
  { name: 'Profile', path: '/profile', icon: 'person' },
  { name: 'History', path: '/history', icon: 'history' },
];
const TestComponent = () => (
  <BrowserRouter>
    <Header />

    <Nav availablePaths={availablePaths} />
    {/* <NavMain />  NavMain is for Main content of nav currentPath. */}
    {/* <Main />  Main is for paths that is not in Nav. eg invoice/receipt page */}

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
