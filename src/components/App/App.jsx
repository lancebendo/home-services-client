import React from 'react';
import { BrowserRouter, Route, Switch/* , Link */ } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

// load components
import Header from '../Header';
import Nav from '../Nav';
import Dashboard from '../Dashboard';
import Management from '../Management';
// import Profile from '../Profile';

// management components
import Services from '../Management/Services';
import Customers, { Profile } from '../Management/Customers';
// import Promos from '../Management/Promos';

// import TestComponent from '../TestComponent';
import { PathNotFound } from '../ErrorHandler';

import GlobalStyle from './GlobalStyle';
import { getUser, getAddresses, getReservations } from '../../redux/actions';

const sidenavPaths = [
  {
    name: 'Dashboard', path: '/', icon: 'home', component: Dashboard,
  },
  {
    name: 'Management', path: '/management/', icon: 'supervisor_account', component: Management,
  },
  // {
  //   name: 'My Profile', path: '/profile/', icon: 'person', component: Profiles,
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

            <Route path="/management/service/" exact component={Services} />
            <Route path="/management/customer/" exact component={Customers} />
            <Route path="/management/customer/:id" exact component={Profile} />
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
