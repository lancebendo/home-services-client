/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
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

const Header = () => (
  <header className="navbar-fixed">
    <Nav className="valign-wrapper">
      <LogoLink to="/" className="brand-logo">
        Home Services
      </LogoLink>

      <a href="#" data-target="Sidenav" className="sidenav-trigger">
        <Icon className="material-icons">menu</Icon>
      </a>
    </Nav>
  </header>
);

export default Header;
