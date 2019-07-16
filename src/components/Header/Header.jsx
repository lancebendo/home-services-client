/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import constants from '../ReactConstants';

// const Nav = styled.nav`
// background-color: ${constants.primaryColor};
// `;

const LogoLink = styled(Link)`
@media only screen and (min-width: ${constants.mediumScreen}) {
  margin-left: 10px;
}
`;

const Icon = styled.i`
color: ${constants.iconFontColor};
`;

const HeaderRoot = document.getElementById('nav-wrapper-root');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

  componentDidMount = () => HeaderRoot.appendChild(this.element);

  componentWillUnmount = () => HeaderRoot.removeChild(this.element);

  render = () => ReactDOM.createPortal(
    (
      <React.Fragment>
        <LogoLink to="/" className="brand-logo">
        Demo
        </LogoLink>

        <a href="#" data-target="Sidenav" className="sidenav-trigger">
          <Icon className="material-icons">menu</Icon>
        </a>
      </React.Fragment>
    ),
    this.element,
  );
}

export default Header;
