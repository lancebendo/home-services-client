import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SideNav from './SideNav.dumb';
import NavButton from './NavButton.dumb';
import NavLink from './NavLink.dumb';

import { strUtils } from '../../utilities';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    this.state = {
      currentPath: location.pathname,
      availablePaths: [
        { name: 'Dashboard', path: '/', icon: 'home' },
        { name: 'Profile', path: '/profile', icon: 'person' },
        { name: 'History', path: '/history', icon: 'history' },
      ],
    };

    this.isSelected = this.isSelected.bind(this);
    this.onBook = this.onBook.bind(this);
    this.onNavChange = this.onNavChange.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }


  isSelected = (path) => {
    const { currentPath } = this.state;
    return currentPath === path;
  }


  onBook = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('Book!');

    // create an action to create a modal or portal
  }


  onNavChange = (e, sender) => this.setState({ currentPath: sender.path });


  onChatUs = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('Chat with us!');

    // I'm pretty sure this is where you will create logout action
  }


  onLogout = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('logout!');

    // I'm pretty sure this is where you will create logout action
  }


  render() {
    const { currentPath, availablePaths } = this.state;

    const paths = strUtils.objectPropToArray(availablePaths, 'path');
    if (!strUtils.strArrayContains(paths, currentPath)) return null;
    return (
      <SideNav collapsible>
        <NavButton label="Book now" onClick={this.onBook} icon="event" />
        <div className="divider" />


        {
          availablePaths.map(availablePath => (
            <NavLink
              key={availablePaths.indexOf(availablePath)}
              path={availablePath.path}
              label={availablePath.name}
              onClick={this.onNavChange}
              icon={availablePath.icon}
              isSelected={this.isSelected(availablePath.path)}
            />
          ))
        }

        <div className="divider" />
        <NavLink path={currentPath} label="Log-out" onClick={this.onLogout} icon="exit_to_app" />
      </SideNav>
    );
  }
}


Nav.propTypes = {
  location: propTypes.objectOf(propTypes.string).isRequired,
};

export default withRouter(Nav);
