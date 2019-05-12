/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logo from './header_logo.png';
import constants from '../../constants';

class Header extends Component {
  
  Nav = styled.nav`
    height: 80px;
    background-color: ${constants.mainColor};
  `;

  Img = styled.img`
    height: 64px;
    margin-left: 20px;
  `;

  render() {
    return (
      <header className="navbar-fixed">
        <this.Nav className="valign-wrapper">
          <Link to="/" className="brand-logo">
            <this.Img className="valign-wrapper" alt="home" src={logo} />
          </Link>

          <a href="#" data-target="Sidenav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </this.Nav>
      </header>
    );
  }
}

export default Header;