import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SideNav from './SideNav.dumb';
import NavButton from './NavButton.dumb';
import NavLink from './NavLink.dumb';
import ReservationFormModal from '../Reservation';

import constants from '../constants';
import { strUtils } from '../../utilities';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    this.state = {
      currentPath: location.pathname,
    };

    this.isSelected = this.isSelected.bind(this);
    this.onNavChange = this.onNavChange.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }


  isSelected = (path) => {
    const { location } = this.props;
    let { pathname: currentPath } = location;
    const hrefParts = currentPath.split('/');
    currentPath = hrefParts.length > 1 && hrefParts[1] !== '' ? `/${hrefParts[1]}/` : `${hrefParts[0]}/`;

    return currentPath === path;
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

  checkPath() {
    const { location } = this.props;
    const { pathname: path } = location;
    const { availablePaths } = this.props;
    const paths = strUtils.objectPropToArray(availablePaths, 'path');
    const hrefParts = path.split('/');
    const currentPathFirstPart = hrefParts.length > 1 && hrefParts[0] !== '' ? `/${hrefParts[1]}/` : `${hrefParts[0]}/`;
    return strUtils.strArrayContains(paths, currentPathFirstPart);
  }

  render() {
    // di ko lang inaalis pero useless na tong currentpath state
    const { currentPath } = this.state;
    const { isTest, availablePaths } = this.props;

    if (!this.checkPath(currentPath) && !isTest) return null;
    return (
      <React.Fragment>

        <ReservationFormModal data={constants.newReservation()} />
        <SideNav collapsible>

          <NavButton
            label="Book now"
            icon="event"
            className="modal-trigger"
            data-target="RESERVATION_FORM_0"
          />
          {/* have to move this to dashboard component
        <ReservationFormModal data={constants.newReservation()} /> */}

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
          {/*
        <div className="divider" />
        <NavLink path={currentPath}
        label="Log-out"
        onClick={this.onLogout}
        icon="exit_to_app" /> */}
        </SideNav>
      </React.Fragment>
    );
  }
}

Nav.defaultProps = {
  isTest: false,
};

Nav.propTypes = {
  location: propTypes.objectOf(propTypes.string).isRequired,
  availablePaths: propTypes.arrayOf(propTypes.object).isRequired,
  isTest: propTypes.bool,
};

export default withRouter(Nav);
