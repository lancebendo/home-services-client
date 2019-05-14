/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './header_logo.png';
import constants from '../../shared/constants';

const Nav = styled.nav`
height: 80px;
background-color: ${constants.mainColor};
`;

const Img = styled.img`
height: 64px;
margin-left: 20px;
`;

const Icon = styled.i`
color: ${constants.iconFontColor};
`;

const Header = () => (
  <header className="navbar-fixed">
    <Nav className="valign-wrapper">
      <Link to="/" className="brand-logo">
        <Img className="valign-wrapper" alt="home" src={logo} />
      </Link>

      <a href="#" data-target="Sidenav" className="sidenav-trigger">
        <Icon className="material-icons">menu</Icon>
      </a>
    </Nav>
  </header>
);

export default Header;
