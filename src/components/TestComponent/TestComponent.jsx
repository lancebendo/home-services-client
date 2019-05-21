import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch/* , Link */ } from 'react-router-dom';

import constants from '../constants';

// load components
import Header from '../Header';
import Nav from '../Nav';
import Modal from '../Shared/Modal';
import FlatCard, { FlatCardContent, FlatCardSection } from '../Shared/FlatCard';
import TileList, { Tile, TileLink } from '../Shared/TileList';

const customModalStyles = {
  content: {
    top: '20%',
    left: '20%',
    right: '20%',
    bottom: '20%',
  },
};

const Address = [
  { city: 'Manila', street: 'Mendiola' },
  { city: 'Buena Park', street: 'Valley View' },
  { city: 'Bailen', street: 'Rizal' },
  { city: 'Bailen', street: 'Rizal' },
];

const Dashboard = () => {
  const x = false;
  return (
    <main>
      <MainRoute>
        <Modal isOpen={x} style={customModalStyles} title="Login">
          <span>haha</span>
          <br />
          <span>hehe</span>
          <br />
          <span>hehe</span>
        </Modal>
      </MainRoute>
    </main>
  );
};
const Profile = () => (
  <main>
    <FlatCard>
      <FlatCardContent>
        <span>haha</span>
        <br />
        <span>hehe</span>
        <br />
        <span>hehe</span>
      </FlatCardContent>
      <FlatCardSection isLink>
        <span>hehe</span>
      </FlatCardSection>
      <FlatCardSection isLink>
        <span>hehe</span>
      </FlatCardSection>
      <FlatCardSection>
        <TileList>
          <TileLink label="+ Add new Address" />
          {Address.map(ad => (
            <Tile key={Address.indexOf(ad)}>
              <span>{ad.city}</span>
              <br />
              <span>{ad.street}</span>
            </Tile>
          ))}
        </TileList>
      </FlatCardSection>
    </FlatCard>
  </main>
);
// const History = () => (<h1>History</h1>);

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
  {
    name: 'Dashboard', path: '/', icon: 'home', component: Dashboard,
  },
  {
    name: 'Profile', path: '/profile', icon: 'person', component: Profile,
  },
  // { name: 'History', path: '/history', icon: 'history', component: History, },
];


const TestComponent = () => (
  <BrowserRouter>
    <Header />

    <Nav availablePaths={availablePaths} />
    {/* <NavMain />  NavMain is for Main content of nav currentPath. */}
    {/* <Main />  Main is for paths that is not in Nav. eg invoice/receipt page */}

    <Switch style={routeStyle}>
      {/* <Route path="/" exact component={Dashboard} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/history" exact component={History} /> */}

      {availablePaths.map(path => (
        <Route
          key={availablePaths.indexOf(path)}
          path={path.path}
          exact
          component={path.component}
        />
      ))}

      <Route>
        <h1>No Match</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default TestComponent;
