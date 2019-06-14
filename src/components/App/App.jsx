import React from 'react';
import { BrowserRouter, Route, Switch/* , Link */ } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

// load components
import Header from '../Header';
import Nav from '../Nav';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import History from '../History';
// import TestComponent from '../TestComponent';
import { PathNotFound } from '../ErrorHandler';

import GlobalStyle from './GlobalStyle';
import { getUser, getAddresses, getReservations } from '../../redux/actions';

const sidenavPaths = [
  {
    name: 'Dashboard', path: '/', icon: 'home', component: Dashboard,
  },
  {
    name: 'Profile', path: '/profile', icon: 'person', component: Profile,
  },
  // {
  //   name: 'Test', path: '/test', icon: 'person', component: TestComponent,
  // },
  {
    name: 'History', path: '/history', icon: 'history', component: History,
  },
  // {
  //   name: 'Job Applicants', path: '/history', icon: 'person', component: History,
  // },
];

class App extends React.Component {
  componentWillMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />

        <BrowserRouter>
          <Header />

          <Nav availablePaths={sidenavPaths} />

          <Switch>
            {sidenavPaths.map(path => (
              <Route
                key={path.name}
                path={path.path}
                exact
                component={path.component}
              />
            ))}

            <Route component={PathNotFound} />
          </Switch>

        </BrowserRouter>

      </React.Fragment>
    );
  }
}

App.propTypes = {
  loadData: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(getUser(''));
    dispatch(getAddresses(''));
    dispatch(getReservations(''));
  },
});

export default connect(null, mapDispatchToProps)(App);
