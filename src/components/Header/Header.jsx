/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';
import constants from '../constants';

const Nav = styled.nav`
height: 80px;
background-color: ${constants.primaryColor};
`;

const LogoLink = styled(Link)`
@media only screen and (min-width: ${constants.mediumScreen}) {
  margin-left: 10px;
}
`;

const Icon = styled.i`
color: ${constants.iconFontColor};
`;

const Header = ({ location, paths }) => {
  const currentPath = location.pathname;

  return (
    <header className="navbar-fixed">
      <Nav className="nav-extended">
        <div className="nav-wrapper">

          <LogoLink to="/" className="brand-logo">
        Demo
          </LogoLink>
          <a href="#" data-target="Sidenav" className="sidenav-trigger">
            <Icon className="material-icons">menu</Icon>
          </a>
        </div>

        <div className="nav-content" id="extended-header-content">
          {
            paths.map((path) => {
              if (path.path === currentPath && path.extendedHeaderComponent) {
                return (<path.extendedHeaderComponent />);
              } return null;
            })
        }
        </div>
      </Nav>
    </header>
  );
};

Header.propTypes = {
  location: propTypes.objectOf(propTypes.string).isRequired,
  paths: propTypes.arrayOf(propTypes.object).isRequired,
};

export default withRouter(Header);
